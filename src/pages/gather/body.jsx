import { BodyDiv, Topper, GatheringBox, Refresh } from "./style";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { getTeamInfo } from "../../apis/Apis";
import { useCallback, useState, useEffect } from "react";

function Body() {
    
    const { teamId } = useParams();
    const location = useLocation();
    const url = location.state.url;
    const navigate = useNavigate();
    const [ nowCnt, setNowCnt ] = useState(0);
    const [ numberOfTeam, setNumberOfTeam ] = useState(0);

    const onClick = useCallback(async () => {
        await getTeamInfo(navigate, teamId, url).then((response) => {
          setNowCnt(response[0])
          setNumberOfTeam(response[1])
        });
      });

    return (
        <BodyDiv>

            <Topper>
                <div></div>
                <div></div>
            </Topper>
            
            <GatheringBox>
                <p>두근구든</p>
                <h4>
                    모두의 시간표를<br />
                    기다리고 있어요
                </h4>
                <Refresh onClick={() => onClick()}>
                    새로고침
                </Refresh>
                <p>
                    지금까지 ({nowCnt} / {numberOfTeam})명이<br />
                    완료했어요!
                </p>
                <p>
                    새로고침을 누르면<br />
                    진행상황이 업데이트 돼요!
                </p>
            </GatheringBox>
            
            <Link to="/">관리자 권한으로 종료</Link>

        </BodyDiv>
    )
}

export default Body;