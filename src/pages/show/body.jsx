import { useCallback, useEffect } from 'react';
import { BodyDiv, DownloadBox, DownloadIntro, TableImg, DownloadBtn } from "./style";
import { Link } from "react-router-dom";
import FooterLogoColor from "../../styles/global/footerLogoColor";

function Body() {

    let resultImg = '';

    // 이미지 띄우기
    const getReadyForImgShow = useCallback(async () => {
        // 임시 링크
        resultImg = `https://mogong.s3.ap-northeast-2.amazonaws.com/image/sample_5.JPG`;
        
        // api 나오면 작성
        // await getResultImg().then((response) => {
          
        // });
        
        // ImgBox에 resultImg 띄우기
        const ImgBox = document.getElementById('resultImgBox');
        ImgBox.style.backgroundImage = `url(${resultImg})`;
    });
    useEffect(() => {
        // 첫 렌더링 때 무조건 실행됨
        getReadyForImgShow();
    }, []);

    const handleDownload = () => {
        // 다운로드할 이미지 URL
        const url = resultImg;
      
        // 이미지 URL을 Blob으로 변환
        fetch(url)
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

            <TableImg id="resultImgBox">
                
            </TableImg>

            <Link to="/">처음으로</Link>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;