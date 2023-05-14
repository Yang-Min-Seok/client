import { BodyDiv, Intro, TimeBox, OptionBox } from "./style";
import { Link } from "react-router-dom";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
import { getTeamResult1 } from "../../apis/Apis";
import { useCallback, useState, useEffect } from 'react';

function Body() {
    
    // 팀 결과 가져오기
    // teamResult
    const [ teamResult, setTeamResult ] = useState('');
    const getTeamResult = useCallback(async () => {
        await getTeamResult1(1).then((response) => {
            
        });
    });
    useEffect(() => {
        // 첫 렌더링 때 무조건 실행됨
        getTeamResult()
    }, []);

    // 30분 버튼 눌렀을 때
    function handleOnClick30min() {
        const target = document.getElementById("30minLabel");
        target.style.backgroundColor = "#FF9836";
        target.style.color = "#fff";

        const except1 = document.getElementById("60minLabel");
        except1.style.backgroundColor = "#fff";
        except1.style.color = "#000";

        const except2 = document.getElementById("90minLabel");
        except2.style.backgroundColor = "#fff";
        except2.style.color = "#000";
    }


    // 60분 버튼 눌렀을 때
    function handleOnClick60min() {
        const target = document.getElementById("60minLabel");
        target.style.backgroundColor = "#FF9836";
        target.style.color = "#fff";

        const except1 = document.getElementById("30minLabel");
        except1.style.backgroundColor = "#fff";
        except1.style.color = "#000";

        const except2 = document.getElementById("90minLabel");
        except2.style.backgroundColor = "#fff";
        except2.style.color = "#000";
    }


    // 90분 버튼 눌렀을 때
    function handleOnClick90min() {
        const target = document.getElementById("90minLabel");
        target.style.backgroundColor = "#FF9836";
        target.style.color = "#fff";

        const except1 = document.getElementById("30minLabel");
        except1.style.backgroundColor = "#fff";
        except1.style.color = "#000";

        const except2 = document.getElementById("60minLabel");
        except2.style.backgroundColor = "#fff";
        except2.style.color = "#000";
    }

    function handleOnSubmit() {
        // 투표 폼 만들기 눌렀을 때

    }
    
    return (
        <BodyDiv>
            
            <form onSubmit={handleOnSubmit}>
                <Intro>
                    <p>
                        시간 단위를 설정하면,<br />
                        투표 폼을 만들 수 있어요!<br />
                        만드시겠어요?
                    </p>
                </Intro>
                
                <TimeBox>
                    
                </TimeBox>

                <OptionBox>
                    <label htmlFor="30min" id="30minLabel" onClick={handleOnClick30min}>30분</label>
                    <input type="radio" name="timeUnit" id="30min"/>
                    
                    <label htmlFor="60min" id="60minLabel" onClick={handleOnClick60min}>60분</label>
                    <input type="radio" name="timeUnit" id="60min"/>
                    
                    <label htmlFor="90min" id="90minLabel" onClick={handleOnClick90min}>90분</label>
                    <input type="radio" name="timeUnit" id="90min"/>
                </OptionBox>

                <input type="checkbox" name="duplicate" id="duplicate"/>
                <label htmlFor="duplicate" id="duplicateLabel">복수 선택 허용</label>

                <button type="submit">투표 폼 만들기</button>

            </form>

            <Link to="/">그냥 끝내기</Link>
            
            <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;