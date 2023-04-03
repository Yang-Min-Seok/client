import { BodyDiv, Topper, ShareBox, LinkKakao } from "./style";
import { Link, useLocation } from "react-router-dom";
function Body() {
    
    const location = useLocation();
    // teams에서 가져온 url, teamId
    const url = location.state.url;
    const teamId = location.state.teamId;

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
                <p>sharelink</p>
                
                <LinkKakao>
                    <div>
                        링크복사
                    </div>
                    <div>
                        카카오톡
                    </div>
                </LinkKakao>
            </ShareBox>
            
            <Link to={`/upload/${teamId}`} state={{url:url}}>다음</Link>
        </BodyDiv>
    )
}

export default Body;