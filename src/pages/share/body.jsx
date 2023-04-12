import { BodyDiv, Topper, ShareBox, LinkKakao } from "./style";
import { Link, useLocation } from "react-router-dom";
function Body() {
    
    const location = useLocation();
    
    // teams에서 가져온 url, teamId
    const url = location.state.url;
    const teamId = location.state.teamId;
    const teamName = location.state.teamName;

    return (
        <BodyDiv>

            <Topper>
                <div></div>
                <div></div>
            </Topper>
            
            <ShareBox>
                <p>
                    아래의 링크를 공유하여 <br />
                    모두의 시간표를 <br />
                    모아주세요 !
                </p>
                <Link to={`/upload/${teamName}`} state={{url:url, teamId:teamId}}>{`http://localhost:3000/upload/${teamName}`}</Link>
                
                <LinkKakao>
                    <div>
                        링크복사
                    </div>
                    <div>
                        카카오톡
                    </div>
                </LinkKakao>
            </ShareBox>
            
            <Link to={`/upload/${teamName}`} state={{url:url, teamId:teamId}}>다음</Link>
        </BodyDiv>
    )
}

export default Body;