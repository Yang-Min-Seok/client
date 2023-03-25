import { BodyDiv, Intro, TimeBox, OptionBox } from "./style";
import { Link } from "react-router-dom";
function Body() {
    
    return (
        <BodyDiv>
            
            <form>
                <Intro>
                    시간 단위를 설정하면, <br />
                    투표 폼을 만들 수 <br />
                    있어요! <br />
                    만드시겠어요?
                </Intro>
                
                <TimeBox>
                    <input type="checkbox" name="selectedTime" />월요일 9:00 ~ 10:00
                </TimeBox>

                <OptionBox>
                    <input type="radio" name="timeUnit" />30분
                    <input type="radio" name="timeUnit" />60분
                    <input type="radio" name="timeUnit" />90분
                </OptionBox>

                <input type="checkbox" name="duplicate" />복수 선택 허용

                <button type="submit">투표 폼 만들기</button>

            </form>

            <Link to="/">그냥 끝내기</Link>

        </BodyDiv>
    )
}

export default Body;