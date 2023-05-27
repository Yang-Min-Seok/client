import { BodyDiv, StepOneBox, LinkKakao, StepTwoBox, VoteBox } from "./style";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import clipboardCopy from 'clipboard-copy';

function Body() {
    
    // teamName, voteList, min, isDuplicated 가져오기
    const teamName = useParams().teamName;
    const location = useLocation();
    const voteList = location.state.voteList;
    const min = location.state.min;
    const isDuplicated = location.state. isDuplicated;
    
    // 투표 폼 만들기
    const createVoteBox = () => {
        
        // voteBox
        const voteBox = document.getElementById('voteBox');
        // lenOfVoteList
        const lenOfVoteList = voteList.length;

        // 중복을 허락할 경우
        if (isDuplicated) {
            for (let i=0; i<lenOfVoteList; i++){
                const exisitingHTML = voteBox.innerHTML;
                voteBox.innerHTML = `${exisitingHTML}<input type='checkbox' name='timeVote'> ${voteList[i]}<br />`;
            };
        }
        // 중복을 허락하지 않을 경우
        else {
            for (let i=0; i<lenOfVoteList; i++){
                const exisitingHTML = voteBox.innerHTML;
                voteBox.innerHTML = `${exisitingHTML}<input type='radio' name='timeVote'> ${voteList[i]}<br />`;
            };
        }
    };

    // voteBox 가져오기
    const [ voteBox, setVoteBox ] = useState('');
    const getVoteBox = () => {
        setVoteBox(document.getElementById('voteBox'));
    }
    useEffect(() => {
        getVoteBox();
    }, []);
    if (voteBox) {
        createVoteBox();
    }

    // 투표하기 버튼을 눌렀을 때
    const getVoteResult = (e) => {
        e.preventDefault();
        console.log(e);
    }

    // 클립보드에 복사기능
    const copyToClipboard = ()  => {
        const link = `https://www.mogong.app/vote/${teamName}`;
        clipboardCopy(link);
        alert('링크가 복사되었습니다 !');
    }

    // 카카오톡 공유기능
    useEffect(() => {
        // 카카오톡 sdk 추가
        const script = document.createElement("script");
        script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const kakaoButton = () => {
        // kakao sdk script 부른 후 window.Kakao로 접근
        if (window.Kakao) {
            const Kakao = window.Kakao;

            // 중복 initialization 방지
            // 카카오에서 제공하는 javascript key를 이용하여 initialize
            if (!Kakao.isInitialized()) {
            Kakao.init("3fc3967abd41ae57cfb4dd4784ca1a64");
            }

            // 링크생성
            const link = `https://www.mogong.app/vote/${teamName}`;
            
            Kakao.Share.createDefaultButton({
                container: '#kakaotalk-sharing-btn',
                objectType: 'feed',
                content: {
                  title: '모두의 공강',
                  description: '모두의 공강시간이 나왔어요! 가장 선호하는 시간대를 투표해주세요.',
                  imageUrl:
                    `https://github.com/Yang-Min-Seok/Yang-Min-Seok/assets/83502596/de14a5ec-ac80-4c2e-9c51-e8a8be66fac6`,
                  link: {
                    // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                    mobileWebUrl: 'http://www.mogong.app/',
                    webUrl: 'http://www.mogong.app/',
                  },
                },
                buttons: [
                  {
                    title: '선호시간대 투표하러 가기',
                    link: {
                      mobileWebUrl: link,
                      webUrl: link,
                    },
                  },
                ],
              });
            }
    };

    return (
        <BodyDiv>
            
            <StepOneBox>
                <p>
                    <span>STEP1.</span><br />
                    대표자가 투표폼을 공유해주세요
                </p>
                <Link to={`/vote/${teamName}`}>
                {`https://www.mogong.app/vote/${teamName}`}
                </Link>
                <LinkKakao>
                    <div onClick={copyToClipboard}></div>
                    <div onClick={kakaoButton} id='kakaotalk-sharing-btn'></div>
                </LinkKakao>
            </StepOneBox>

            <form onSubmit={getVoteResult}>
                <StepTwoBox>
                    <p>
                        <span>STEP2.</span><br />
                        선호 시간대를 투표해주세요
                    </p>
                    <VoteBox id="voteBox">
                        
                    </VoteBox>
                    <button type="submit">투표하기</button>
                </StepTwoBox>
            </form>
        <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;