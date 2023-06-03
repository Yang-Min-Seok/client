import { BodyDiv, GatheringBox, Refresh } from "./style";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getFormInfo } from "../../apis/Apis";
import { useCallback, useState, useEffect } from "react";
import FooterLogoColor from "../../styles/global/footerLogoColor";

function Body() {
    
    const location = useLocation();
    const teamId = location.state.teamId;
    const teamName = location.state.teamName;
    const resultImageUrl = location.state.resultImageUrl;
    const isLeader = location.state.isLeader;
    const timeResponses = location.state.timeResponses;

    // toFirst
    const navigate = useNavigate();
    const handleToFirst = () => {
        const result = window.confirm('처음으로 돌아가면 투표를 할 수 없어요 그래도 진행하시겠어요?');
        if (result) {
            navigate(`/`);
        }
    }

    // refresh event
    const refreshEventOver = () => {
        const refreshBtn = document.getElementById("refreshBtn");
        if(refreshBtn){
            refreshBtn.style.transform = 'rotate(0deg)';
        }
    }

    const refreshEvent = () => {
        const refreshBtn = document.getElementById("refreshBtn");
        refreshBtn.style.transition = 'all 0.3s';
        refreshBtn.style.transform = 'rotate(90deg)';
        setTimeout(refreshEventOver, 300);
    }

    const onClick = useCallback(async () => {
        // 90도 회전 효과
        refreshEvent();
        getFormInfo(navigate, teamId, teamName, timeResponses);
    });
    useEffect(() => {
        // 첫 렌더링 때 무조건 실행됨
        onClick()
    }, []);

    return (
        <BodyDiv>
            
            <GatheringBox>
                <p>두근두근</p>
                <p>
                    팀장이 투표폼을<br /> 
                    만들고 있어요
                </p>

                <Refresh onClick={() => onClick()} id="refreshBtn"></Refresh>
                <p>새로고침</p>
                <p>
                    잠시만 기다려주세요!
                </p>
                <p>
                    새로고침을 누르면<br />
                    투표 폼 생성 여부를 확인할 수 있어요!
                </p>
            </GatheringBox>
            <div>
                <Link to={`/show/${teamName}`} state={{resultImageUrl:resultImageUrl, teamId:teamId, isLeader:isLeader, timeResponses:timeResponses}}>뒤로가기</Link>
                <p id="toFirst" onClick={handleToFirst}>처음으로</p>
            </div>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;