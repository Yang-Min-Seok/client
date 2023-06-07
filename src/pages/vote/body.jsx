import { BodyDiv, VoteBox } from "./style";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { memberVote } from "../../apis/Apis";
function Body() {
    
    // teamName 가져오기
    const teamName = useParams().teamName;
    // timeResponses, teamId, divisorMinutes, duplicate, memberId, numberOfMember 가져오기
    const location = useLocation();
    const timeResponses = location.state.timeResponses;
    const teamId = location.state.teamId;
    const divisorMinutes = location.state.divisorMinutes;
    const duplicate = location.state.duplicate;
    const memberId = location.state.memberId;
    const numberOfMember = location.state.numberOfMember;

    // 시간표 만들기
    const timeTable = [];
    for (let i=0; i <= 6; i++){
        timeTable.push(timeResponses.times[i].time);
    }

    // 투표 폼 만들기
    const makeForm = (divisorMinutes, duplicate) => {
        // days
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        
        // voteBox
        const voteBox = document.getElementById('voteBox');

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
                        const exisitingHTML = voteBox.innerHTML;
                        // 중복 허용이면
                        if (duplicate){
                            // voteBox 추가
                            voteBox.innerHTML = `${exisitingHTML}<p><label for="${i},${j}">${days[i]} ${times[j]}</label><input type="checkBox" name="voteOption" id="${i},${j}"></p>`;
                        }
                        // 비허용시
                        else{
                            // voteBox 추가
                            voteBox.innerHTML = `${exisitingHTML}<p><label for="${i},${j}">${days[i]} ${times[j]}</label><input type="radio" name="voteOption" id="${i},${j}"></p>`;
                        }   
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
                        const exisitingHTML = voteBox.innerHTML;
                        // 중복 허용이면
                        if (duplicate){
                            // voteBox 추가
                            voteBox.innerHTML = `${exisitingHTML}<p><label for="${i},${j}">${days[i]} ${times[j]}</label><input type="checkBox" name="voteOption" id="${i},${j}"></p>`;
                        }
                        // 비허용시
                        else{
                            // voteBox 추가
                            voteBox.innerHTML = `${exisitingHTML}<p><label for="${i},${j}">${days[i]} ${times[j]}</label><input type="radio" name="voteOption" id="${i},${j}"></p>`;
                        }   
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
                        const exisitingHTML = voteBox.innerHTML;
                        // 중복 허용이면
                        if (duplicate){
                            // voteBox 추가
                            voteBox.innerHTML = `${exisitingHTML}<p><label for="${i},${j}">${days[i]} ${times[j]}</label><input type="checkBox" name="voteOption" id="${i},${j}"></p>`;
                        }
                        // 비허용시
                        else{
                            // voteBox 추가
                            voteBox.innerHTML = `${exisitingHTML}<p><label for="${i}${j}">${days[i]}${times[j]}</label><input type="radio" name="voteOption" id="${i},${j}"></p>`;
                        }   
                    }
                }
            };
        }
    }

    // voteBox 가져오기
    const [ voteBox, setVoteBox ] = useState('');

    const getVoteBox = () => {
        setVoteBox(document.getElementById('voteBox'));
    }
    useEffect(() => {
        getVoteBox();
    }, []);

    // voteBox확보했으면 (중복생성 방지)
    if(voteBox && !voteBox.innerHTML){
        // 투표 폼 만들기
        makeForm(divisorMinutes, duplicate);
    };

    // 투표하기 버튼을 눌렀을 때
    const navigate = useNavigate();
    const getVoteResult = (e) => {
        e.preventDefault();

        // 선택된 좌표 관리 
        let checkedPos = [];

        // 체크된 인덱스 뽑아내기
        for (let i=0; i<=29*5; i++){
            // index error handling
            try{
                if(e.target[i].checked){
                    const timePos = e.target[i].id.split(',');
                    checkedPos.push([Number(timePos[0]), Number(timePos[1])]);
                };
            }
            catch(err) {
                
            }
        }

        // 요일별 관리 (0: 월요일 ~ 6:일요일)
        let timeByDay = [];
        for (let i=0; i<=6; i++){
            timeByDay.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        };

        // 체크된 좌표 표시
        for (let i=0; i<checkedPos.length; i++){
            const day = checkedPos[i][0];
            const time = checkedPos[i][1];
            timeByDay[day][time] = 1;
        }

        // timeRequests
        const timeRequests = {
                "divisorMinutes" : divisorMinutes,
                "times" : [{
                    "dayOfWeek" : "MON",
                    "time" : timeByDay[0],
                },{
                    "dayOfWeek" : "TUE",
                    "time" : timeByDay[1],
                },{
                    "dayOfWeek" : "WED",
                    "time" : timeByDay[2],                
                },{
                    "dayOfWeek" : "THU",
                    "time" : timeByDay[3],
                },{
                    "dayOfWeek" : "FRI",
                    "time" : timeByDay[4],
                },{
                    "dayOfWeek" : "SAT",
                    "time" : timeByDay[5],
                },{
                    "dayOfWeek" : "SUN",
                    "time" : timeByDay[6],
                }]
        };

        // 멤버 투표 생성 요청
        memberVote(navigate, teamName, teamId, memberId, timeRequests, divisorMinutes, timeResponses, numberOfMember);
    }

    return (
        <BodyDiv>
            <form onSubmit={getVoteResult}>
                    <p id="title">선호 시간대를 투표해주세요</p>
                    <VoteBox id="voteBox">
                        
                    </VoteBox>
                    <button type="submit">투표하기</button>
            </form>
        <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;