import { BodyDiv, Intro, TimeBox, OptionBox } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
import { useEffect } from "react";
import { createForm } from "../../apis/Apis";

function Body() {

    // teamName, timeResponses, teamId, resultImageUrl 가져오기
    const location = useLocation();
    const teamName = location.state.teamName;
    const timeResponses = location.state.timeResponses;
    const teamId = location.state.teamId;
    const resultImageUrl = location.state.resultImageUrl;
    
    // 시간표 만들기
    const timeTable = [];
    for (let i=0; i <= 6; i++){
        timeTable.push(timeResponses.times[i].time);
    }

    // 예시 폼 만들기
    const makeSample = (min) => {
        // days
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        
        // sampleBox
        const sampleBox = document.getElementById('sampleBox');

        // 30분 기준
        if (min===30){
            
            // times
            const times = [];
            let hour = 9;
            for (let i=0; i<=29; i++){
                // 홀수면
                if (i%2){
                    times.push(`${hour-1}:30 ~ ${hour}:00`);
                }
                // 짝수면
                else{
                    times.push(`${hour}:00 ~ ${hour}:30`);
                    hour ++;
                }
            };

            // 시간표를 돌면서
            for (let i=0; i<=6; i++){
                for (let j=0; j<=29; j++){
                    // 공강 시간이면
                    if (!timeTable[i][j]){
                        const exisitingHTML = sampleBox.innerHTML;
                        // sampleBox에 추가
                        sampleBox.innerHTML = `${exisitingHTML}<p>${days[i]} ${times[j]}</p>`;
                    }
                }
            }
        }

        // 60분 기준
        else if (min===60) {

            // times
            const times = [];
            let hour = 9;
            for (let i=0; i<=28; i++){
                // 홀수면
                if (i%2){
                    times.push(`${hour}:30 ~ ${hour+1}:30`);
                    hour ++;
                }
                // 짝수면
                else{
                    times.push(`${hour}:00 ~ ${hour+1}:00`);
                }
            };

            // 시간표를 돌면서
            for (let i=0; i<=6; i++){
                for (let j=0; j<=28; j++){
                    // 공강 시간이면
                    if (!timeTable[i][j] && !timeTable[i][j+1]){
                        const exisitingHTML = sampleBox.innerHTML;
                        // sampleBox에 추가
                        sampleBox.innerHTML = `${exisitingHTML}<p>${days[i]} ${times[j]}</p>`;
                    }
                }
            };
        }

        // 90분 기준
        else if (min===90) {
            
            // times
            const times = [];
            let hour = 9;
            for (let i=0; i<=27; i++){
                // 홀수면
                if(i%2){
                    times.push(`${hour}:30 ~ ${hour+2}:00`);
                    hour ++;
                }
                // 짝수면
                else{
                    times.push(`${hour}:00 ~ ${hour+1}:30`);
                }
            };

            // 시간표를 돌면서
            for (let i=0; i<=6; i++){
                for (let j=0; j<=27; j++){
                    // 공강 시간이면
                    if (!timeTable[i][j] && !timeTable[i][j+1] && !timeTable[i][j+2]){
                        const exisitingHTML = sampleBox.innerHTML;
                        // sampleBox에 추가
                        sampleBox.innerHTML = `${exisitingHTML}<p>${days[i]} ${times[j]}</p>`;
                    }
                }
            };
        }
    }

    // 30분 버튼 눌렀을 때
    function handleOnClick30min() {
        // sampleBox 초기화
        const sampleBox = document.getElementById('sampleBox');
        sampleBox.innerText = '';

        // 색 바꾸기
        const target = document.getElementById("30minLabel");
        target.style.backgroundColor = "#FF9836";
        target.style.color = "#fff";

        const except1 = document.getElementById("60minLabel");
        except1.style.backgroundColor = "#fff";
        except1.style.color = "#000";

        const except2 = document.getElementById("90minLabel");
        except2.style.backgroundColor = "#fff";
        except2.style.color = "#000";
        
        // makeSample 호출
        makeSample(30);
    };


    // 60분 버튼 눌렀을 때
    function handleOnClick60min() {
        // sampleBox 초기화
        const sampleBox = document.getElementById('sampleBox');
        sampleBox.innerText = '';

        // 색 바꾸기
        const target = document.getElementById("60minLabel");
        target.style.backgroundColor = "#FF9836";
        target.style.color = "#fff";

        const except1 = document.getElementById("30minLabel");
        except1.style.backgroundColor = "#fff";
        except1.style.color = "#000";

        const except2 = document.getElementById("90minLabel");
        except2.style.backgroundColor = "#fff";
        except2.style.color = "#000";
        
        // makeSample 호출
        makeSample(60);
    };


    // 90분 버튼 눌렀을 때
    function handleOnClick90min() {
        // sampleBox 초기화
        const sampleBox = document.getElementById('sampleBox');
        sampleBox.innerText = '';

        // 색 바꾸기
        const target = document.getElementById("90minLabel");
        target.style.backgroundColor = "#FF9836";
        target.style.color = "#fff";

        const except1 = document.getElementById("30minLabel");
        except1.style.backgroundColor = "#fff";
        except1.style.color = "#000";

        const except2 = document.getElementById("60minLabel");
        except2.style.backgroundColor = "#fff";
        except2.style.color = "#000";

        // makeSample 호출
        makeSample(90);
    };

    const navigate = useNavigate();
    // 투표 폼 만들기 눌렀을 때
    const makeForm = (e) => {
        e.preventDefault();
        const result = window.confirm('한 번 투표폼을 만들면 다시 돌아올 수 없어요 그래도 진행하시겠어요?');
        if (result) {
            // sampleBox
            const sampleBox = document.getElementById('sampleBox');
            
            // 필요한 정보들
            const is30min = e.target[0].checked;
            const is60min = e.target[1].checked;
            const is90min = e.target[2].checked;

            // 투표에 보낼 정보들
            let divisorMinutes = 30;
            const rawVoteList = sampleBox.innerText.split('\n');
            const voteList = []
            const lenOfVoteList = rawVoteList.length;
            for (let i=0; i<lenOfVoteList; i++){
                if (rawVoteList[i]){
                    voteList.push(rawVoteList[i]);
                };
            }

            if(is30min){
                divisorMinutes = 30;
            }
            else if(is60min){
                divisorMinutes = 60;
            }
            else if(is90min){
                divisorMinutes = 90;
            }
            const duplicate = e.target[3].checked;
            
            // createForm 요청
            createForm(navigate, teamId, divisorMinutes, duplicate, teamName, timeResponses);
        }
    };
    
    // /show로 돌아가기
    const getBack = () => {
        navigate(`/show/${teamName}`, {state: {teamId:teamId, timeResponses:timeResponses, isLeader:true, resultImageUrl:resultImageUrl}})
    }

    // default 설정 -> 30분 선택
    useEffect(() => {
        handleOnClick30min();
    }, []);

    return (
        <BodyDiv>
            
            <form onSubmit={makeForm}>
                <Intro>
                    <p>
                        시간 단위를 설정하면,<br />
                        투표 폼을 만들 수 있어요! &nbsp;만드시겠어요?
                    </p>
                </Intro>
                
                <TimeBox id="sampleBox">
                    
                </TimeBox>

                <OptionBox>
                    <label htmlFor="30min" id="30minLabel" onClick={handleOnClick30min}>30분</label>
                    <input type="radio" name="timeUnit" id="30min"/>
                    
                    <label htmlFor="60min" id="60minLabel" onClick={handleOnClick60min}>60분</label>
                    <input type="radio" name="timeUnit" id="60min"/>
                    
                    <label htmlFor="90min" id="90minLabel" onClick={handleOnClick90min}>90분</label>
                    <input type="radio" name="timeUnit" id="90min"/>
                </OptionBox>
                <p>
                    <input type="checkbox" name="duplicate" id="duplicate"/><label htmlFor="duplicate" id="duplicateLabel">복수 선택 허용</label>
                </p>


                <button type="submit">투표 폼 만들기</button>

            </form>

            <p id="getBack" onClick={getBack}>이전으로</p>
            
            <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;