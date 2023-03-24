import { BodyDiv, Topper, Intro, ShowBox } from "./style";
import { Link } from "react-router-dom";
function Body() {
    
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

                <input type="file" name="timetable" id="" />

                <ShowBox>

                </ShowBox>

                <button type="submit">입력완료</button>
            
            </form>
            
        </BodyDiv>
    )
}

export default Body;