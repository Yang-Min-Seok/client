import { BodyDiv, ShareBox, LinkKakao } from "./style";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FooterLogoColor from "../../styles/global/footerLogoColor";
import clipboardCopy from 'clipboard-copy';

function Body() {
    
    const location = useLocation();
    
    // teams에서 가져온 teamId, teamName, authCode
    const teamId = location.state.teamId;
    const teamName = location.state.teamName;

    // 클립보드에 복사기능
    function copyToClipboard() {
        const link = `http://client-mogong.vercel.app/name/${teamName}`;
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
            const link = `http://client-mogong.vercel.app/name/${teamName}`;
            
            Kakao.Share.createDefaultButton({
                container: '#kakaotalk-sharing-btn',
                objectType: 'feed',
                content: {
                  title: '모두의 공강',
                  description: '시간표 이미지를 넣어 모두의 공강을 확인하세요!',
                  imageUrl:
                    `https://github.com/Yang-Min-Seok/Yang-Min-Seok/assets/83502596/de14a5ec-ac80-4c2e-9c51-e8a8be66fac6`,
                  link: {
                    // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                    mobileWebUrl: 'client-mogong.vercel.app',
                    webUrl: 'client-mogong.vercel.app',
                  },
                },
                buttons: [
                  {
                    title: '시간표 추가하러 가기',
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
            <ShareBox>
                <p>
                    아래의 링크를 공유하여 <br />
                    모두의 시간표를 모아주세요 !
                </p>
                <Link to={`/name/${teamName}`} state={{teamId:teamId}}>
                {`http://client-mogong.vercel.app/name/${teamName}`}
                </Link>
                
                <LinkKakao>
                    <div onClick={copyToClipboard}>
                    </div>
                    <div onClick={kakaoButton} id='kakaotalk-sharing-btn'>
                    </div>
                </LinkKakao>
            </ShareBox>
            
            <Link to={`/name/${teamName}`} state={{teamId:teamId}} id="next">다음</Link>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;