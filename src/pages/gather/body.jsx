import { BodyDiv, GatheringBox, Refresh } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { getTeamInfo, getTeamResult } from "../../apis/Apis";
import { useCallback, useState, useEffect } from "react";
import FooterLogoColor from "../../styles/global/footerLogoColor";

function Body() {
    
    const location = useLocation();
    const teamId = location.state.teamId;
    const teamName = location.state.teamName;
    const isLeader = location.state.isLeader;
    const memberId = location.state.memberId;

    const [ numberOfSubmit, setNumberOfSubmit ] = useState(0);
    const [ numberOfMember, setNumberOfMember ] = useState(0);

    const refreshEventOver = () => {
        const refreshBtn = document.getElementById("refreshBtn");
        refreshBtn.style.transform = 'rotate(0deg)';
    }

    const refreshEvent = () => {
        const refreshBtn = document.getElementById("refreshBtn");
        refreshBtn.style.transition = 'all 0.3s';
        refreshBtn.style.transform = 'rotate(90deg)';
        setTimeout(refreshEventOver, 300);
    }

    const navigate = useNavigate();
    const onClick = useCallback(async () => {
        refreshEvent();
        await getTeamInfo(navigate, teamId, teamName, isLeader, memberId).then((response) => {
            setNumberOfSubmit(response[0])
            setNumberOfMember(response[1])
        });
    });
    
    useEffect(() => {
        // 첫 렌더링 때 무조건 실행됨
        onClick()
    }, []);

    // 관리자 권한으로 종료
    const handleExit = () => {
        // 입력 받기
        const authCode = prompt('관리자 비밀번호 4자리를 입력해주세요.');

        // 형식이 올바르지 않으면
        if (authCode === null || authCode.length !== 4){
            alert('올바른 비밀번호를 입력해주세요!')
        }
        // 올바르면
        else{
             // 팀 결과 조회
            getTeamResult(navigate, teamId, authCode, teamName, isLeader, memberId);
        }
    }

    return (
        <BodyDiv>
            
            <GatheringBox>
                <p>두근두근</p>
                <p>
                    모두의 시간표를<br />
                    기다리고 있어요
                </p>

                <Refresh onClick={() => onClick()} id="refreshBtn"></Refresh>
                <p>새로고침</p>
                <p>
                    지금까지
                    <span> ({numberOfSubmit}/{numberOfMember})</span>
                    명이 완료했어요!
                </p>
                <p>
                    새로고침을 누르면<br />
                    진행상황이 업데이트 돼요!
                </p>
            </GatheringBox>
            
            <button onClick={handleExit}>관리자 권한으로 종료</button>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;