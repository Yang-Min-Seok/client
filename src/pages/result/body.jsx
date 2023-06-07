import { BodyDiv, Intro } from "./style";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import FooterLogoColor from "../../styles/global/footerLogoColor";
import { useEffect, useState, useCallback } from "react";
import { getTeamVoteInfo } from "../../apis/Apis";
function Body() {
    const location = useLocation();
    // teamId, memberId, memberVote, teamVote, divisorMinutes, timeResponses, numberOfMember
    const teamId = location.state.teamId;
    const memberId = location.state.memberId;
    const memberVote = location.state.memberVote;
    const teamVote = location.state.teamVote;
    const divisorMinutes = location.state.divisorMinutes;
    const timeResponses = location.state.timeResponses;
    const numberOfMember = location.state.numberOfMember;

    // resultBox 만들기
    // timeTable
    const timeTable = [];
    for (let i=0; i <= 6; i++){
        timeTable.push(timeResponses.times[i].time);
    }

    // resultBox 만들기
    const makeResult = (divisorMinutes, nowTeamVote) => {
        
        // days
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        
        // resultBox
        const resultBox = document.getElementById('resultBox');

        // 30분 기준
        if (divisorMinutes===30){
            
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
                        const exisitingHTML = resultBox.innerHTML;
                        // resultBox 추가
                        resultBox.innerHTML = `${exisitingHTML}<p><span>${days[i]} ${times[j]}</span><span id="${i},${j}">(0/${numberOfMember})</span></p>`;
                    }
                }
            }
        }

        // 60분 기준
        else if (divisorMinutes===60) {

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
                        const exisitingHTML = resultBox.innerHTML;
                        // resultBox 추가
                        resultBox.innerHTML = `${exisitingHTML}<p><span>${days[i]} ${times[j]}</span><span id="${i},${j}">(0/${numberOfMember})</span></p>`;
                    }
                }
            };
        }

        // 90분 기준
        else if (divisorMinutes===90) {
            
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
                        const exisitingHTML = resultBox.innerHTML;
                        // resultBox 추가
                        resultBox.innerHTML = `${exisitingHTML}<p><span>${days[i]} ${times[j]}</span><span id="${i},${j}">(0/${numberOfMember})</span></p>`;
                    }
                }
            };
        }

        // 현황 표기하기
        const timeByDay = [];
        for (let i=0; i<=6; i++){
            timeByDay.push(nowTeamVote[i].time);
        }
        
        for (let i=0; i<=6; i++){
            for (let j=0; j<=29; j++){
                try{
                    const target = document.getElementById(`${i},${j}`);
                    if(target){
                        target.innerText = `(${timeByDay[i][j]}/${numberOfMember})`;
                        // 70% 이상이 투표했으면
                        if (timeByDay[i][j] / numberOfMember >= 0.7){
                            target.style.color = '#FF0404';
                        }
                        else if (timeByDay[i][j] / numberOfMember >= 0.5){
                            target.style.color = '#FF9836';
                        }
                    }
                }
                catch (err){

                }
            }
        }
    }

    // 처음부터 시작하기
    const navigate = useNavigate();
    const handleToStart = () => {
        const result = window.confirm('확인을 누르면 현재까지의 결과는 모두 사라져요 처음으로 돌아가시겠어요?');
        if (result) {
            navigate(`/`);
        }
    }

    // 다시 투표하기
    const handleVoteAgain = (e) => {
        e.preventDefault();
        console.log(e);
    }

    // 결과 새로고침
    const [ nowTeamVote, setNowTeamVote ] = useState(teamVote);
    const getNewTeamVote = useCallback(async() => {
        await getTeamVoteInfo(teamId).then((response) => {
            setNowTeamVote(response);
        })
    })
    const handleRefresh = () => {
        // resultBox 비우고
        resultBox.innerHTML='';
        // 새로운 teamVote 가져오고
        getNewTeamVote();
        // result 만들기
        makeResult(divisorMinutes, nowTeamVote);
    };

    // resultBox 가져오기
    const [ resultBox, setResultBox ] = useState('');
    const getResultBox = () => {
        setResultBox(document.getElementById('resultBox'));
    }
    useEffect(() => {
        getResultBox();
    }, []);

    // resultBox 확보했으면 (중복생성 방지)
    if(resultBox && !resultBox.innerHTML){
        // 결과 폼 만들기
        makeResult(divisorMinutes, nowTeamVote);
    }
    return (
        <BodyDiv>
            
            <Intro>투표 완료! 새로고침하면<br />
            실시간 투표결과를 볼 수 있어요!</Intro>
            
            <div id="resultBox">

            </div>
            
            <div id="btnBox">
                {/* <p id="voteAgain" onClick={handleVoteAgain}>다시 투표하기</p> */}
                <p id="refresh" onClick={handleRefresh}>결과 새로고침</p>
            </div>
            
            <p id="toStart" onClick={handleToStart}>처음부터 시작하기</p>

            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;