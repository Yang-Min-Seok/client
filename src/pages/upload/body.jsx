import { BodyDiv, Topper, Intro, ShowBox } from "./style";
import { useState, useCallback } from "react";
import { putImg } from "../../apis/Apis";
import { useLocation, useParams, useNavigate } from "react-router-dom";
function Body() {
    
    const [currFile, setCurrFile] = useState('default');
    // url 가져오기
    const location = useLocation();
    const teamId = location.state.teamId;
    const url = location.state.url;
    const navigate = useNavigate();
    // useParams -> url의 마지막 부분
    const teamName = useParams();
    
    const onChangeImage = (e) => {
        if (e.target.files[0] !== undefined) {
            setCurrFile(e.target.files[0]);
        }
        // // 화면에 시간표 사진 표시
        // const reader = new FileReader();
        // reader.onload = () => {
        //   if (reader.readyState === 2 && reader.result !== null) {
        //     setImage(reader.result);
        //   }
        // };
        // reader.readAsDataURL(e.target.files[0]);
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
                    에브리타임 시간표 <br />
                    이미지를 업로드해주세요
                </Intro>
                
                {/* filtering */}
                <input 
                type="file" 
                accept="image/jpg" 
                name="timetable" 
                onChange={onChangeImage}
                />

                <ShowBox>
                    
                </ShowBox>

                <button type="submit">입력완료</button>
            
            </form>
            
        </BodyDiv>
    )
}

export default Body;