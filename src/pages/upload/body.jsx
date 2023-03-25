import { BodyDiv, Topper, Intro, ShowBox } from "./style";
import { useState } from "react";

function Body() {
    
    const [currFile, setCurrFile] = useState('default');

    const onChangeImage = (e) => {
        setCurrFile(e.target.files[0]);
        console.log(currFile);
        // // 화면에 시간표 사진 표시
        // const reader = new FileReader();
        // reader.onload = () => {
        //   if (reader.readyState === 2 && reader.result !== null) {
        //     setImage(reader.result);
        //   }
        // };
        // reader.readAsDataURL(e.target.files[0]);
      };
    
    return (
        <BodyDiv>

            <Topper>
                <div></div>
                <div></div>
            </Topper>
            
            <form>

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