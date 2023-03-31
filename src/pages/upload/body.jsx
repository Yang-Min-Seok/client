import { BodyDiv, Topper, Intro, ShowBox } from "./style";
import { useState, useCallback } from "react";
import { putImg } from "../../apis/Apis";
import { useLocation, useParams, useNavigate } from "react-router-dom";
function Body() {

    
    const { teamId } = useParams(); // url의 id값을 가져옴
    const [currFile, setCurrFile] = useState('default');
    const location = useLocation();
    const url = location.state.url;
    const navigate = useNavigate();
    
    const onChangeImage = (e) => {
        setCurrFile(e.target.files[0]);
        // // 화면에 시간표 사진 표시
        // const reader = new FileReader();
        // reader.onload = () => {
        //   if (reader.readyState === 2 && reader.result !== null) {
        //     setImage(reader.result);
        //   }
        // };
        // reader.readAsDataURL(e.target.files[0]);
    };

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const formData = new FormData();
            putImg(navigate, url, formData.append('ImgFile', currFile), teamId);
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