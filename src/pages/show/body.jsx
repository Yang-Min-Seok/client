import { useEffect } from 'react';
import { BodyDiv, DownloadBox, DownloadIntro, TableImg, DownloadBtn, Notice } from "./style";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import FooterLogoColor from "../../styles/global/footerLogoColor";
import { getFormInfo } from "../../apis/Apis";

function Body() {

    // teamName
    const teamName = useParams().teamName;

    // resultImage, teamId, timeResponses, isLeader 가져오기
    const location = useLocation();
    const resultImageUrl = location.state.resultImageUrl;
    const teamId = location.state.teamId;
    const timeResponses = location.state.timeResponses;
    const isLeader = location.state.isLeader;

    // 이미지를 보여주기 구현
    const showImage = () => {
        // imgBox에 올린 이미지 보여주기
        const resultImageBox = document.getElementById("resultImageBox");
        resultImageBox.style.backgroundImage = `url(${resultImageUrl})`;
    }
    useEffect(() => {
        // 첫 렌더링 때 무조건 실행됨
        showImage();
    }, []);

    // 다운로드 구현
    const handleDownload = () => {
      
        // 이미지 URL을 Blob으로 변환
        fetch(resultImageUrl)
          .then(response => response.blob())
          .then(blob => {
            // Blob으로부터 URL 객체 생성
            const blobUrl = URL.createObjectURL(blob);
            // <a> 엘리먼트 생성
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = 'mogong.jpg';
      
            // DOM 트리에 <a> 엘리먼트 추가 및 클릭
            document.body.appendChild(a);
            a.click();
      
            // DOM 트리에서 <a> 엘리먼트 제거
            document.body.removeChild(a);
      
            // URL 객체 해제
            URL.revokeObjectURL(blobUrl);
          });
    };

    const navigate = useNavigate();
    
    // 카톡 인앱 브라우저로 접근 시 이미지 url 제공
    const handleKakaoAccess = () => {
        window.open(resultImageUrl, '_blank');
    }

    // 투표하기 구현
    const toVote = (async() => {
        // 팀장이면
        if (isLeader) {
            navigate(`/create/${teamName}`, {state: {teamId:teamId, teamName:teamName, timeResponses:timeResponses, resultImageUrl:resultImageUrl}});
        }
        // 팀원이면
        else {
            getFormInfo(navigate, teamId, teamName, timeResponses);
        }
    });

    // 그냥 끝내기 구현
    const justExit = () => {
        const result = window.confirm('다시 투표폼을 만들 수 없어요 그래도 진행하시겠어요?');
        if (result){
            navigate(`/`);
        }
    }

    return (
        <BodyDiv>

            <DownloadBox>
                
                <DownloadIntro>
                    모두의 공강 시간표가 나왔어요!
                </DownloadIntro>
                <DownloadBtn onClick={handleDownload}></DownloadBtn>

            </DownloadBox>

            <TableImg id="resultImageBox">
                
            </TableImg>
            <Notice onClick={handleKakaoAccess}>카카오톡 브라우저에서 접속 시 (클릭)</Notice>
            <Link to="/">처음으로</Link>
            {/* <p id="toVote" onClick={toVote}>투표하기</p>
            <p id="exit" onClick={justExit}>그냥 끝내기</p> */}
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;