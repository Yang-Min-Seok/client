import { BodyDiv, Topper, Intro, ShowBox } from "./style";
import { useState, useCallback } from "react";
import { putImg, getTeamId } from "../../apis/Apis";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
function Body() {
    
    const [currFile, setCurrFile] = useState('default');
    // useParams -> url의 마지막 부분
    const teamName = useParams();
    // teamId
    const teamId = getTeamId(teamName.teamName);

    // url 가져오기 -> 변경 필요
    const location = useLocation();
    const url = location.state.url;

    const navigate = useNavigate();
    const onChangeImage = (e) => {
        // 올렸으면,
        if (e.target.files[0] !== undefined) {
            // 선택된 이미지
            const selectedFile = e.target.files[0];
            // 선택된 이미지를 URL화
            const imgUrl = URL.createObjectURL(selectedFile);
            // useState이용
            setCurrFile(imgUrl);
            
            // imgBox에 올린 이미지 보여주기
            const target_box = document.getElementById("imgBox");
            target_box.style.backgroundImage = `url(${imgUrl})`;
            target_box.style.width = '100%';
            target_box.style.height = '100%';

            // no img sign 숨기기
            const target_sign = document.getElementById("noImg");
            target_sign.style.display="none";
        }
    };
    
    // 입력완료 버튼을 눌렀을 때 발생할 함수
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            // currFile이 비어있지 않으면,
            if (currFile !== 'default'){
                // img 파일을 담을 fromData 형성
                const formData = new FormData();
                // formData에 img파일 담기
                formData.append('ImgFile', currFile);
                // putImg 호출
                putImg(navigate, url, formData, teamId, teamName);
            }
            // currFile이 비어있으면,
            else{
                // 경고메세지
                alert('이미지를 첨부해주세요.');
            }   
    },
    )
    
    return (
        <BodyDiv>

            <Topper>
                <div></div>
                <div></div>
            </Topper>
            
            <form onSubmit={onSubmit}>

                <Intro>
                    <b>에브리타임</b> 시간표<br />
                    이미지를 업로드 해주세요
                </Intro>

                <label htmlFor="uploadFile">업로드</label>
                
                <input 
                type="file" 
                accept="image/jpg" 
                name="timetable" 
                onChange={onChangeImage}
                placeholder="업로드"
                id="uploadFile"
                />     

                <ShowBox>
                    <div id="imgBox"></div>
                </ShowBox>

                <span id="noImg">업로드한 이미지가 없어요.</span>
                <button type="submit">입력완료</button>
            </form>
            <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;