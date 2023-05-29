import { useEffect } from 'react';
import { BodyDiv, DownloadBox, DownloadIntro, TableImg, DownloadBtn } from "./style";
import { Link, useLocation, useParams } from "react-router-dom";
import FooterLogoColor from "../../styles/global/footerLogoColor";

function Body() {

    // teamName
    const teamName = useParams().teamName;

    // resultImage, teamId, timeResponses 가져오기
    const location = useLocation();
    const resultImageUrl = location.state.resultImageUrl;
    const teamId = location.state.teamId;
    const timeResponses = location.state.timeResponses;

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

            {/* <Link to={`/create/${teamName}`} state={{teamId:teamId, teamName: teamName, timeResponses: timeResponses}}>다음</Link> */}
            <Link to="/">처음으로</Link>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;