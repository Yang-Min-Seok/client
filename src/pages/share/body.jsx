import { BodyDiv, Topper, ShareBox, LinkKakao } from "./style";
import { Link } from "react-router-dom";
function Body() {
    /* use effect 사용예정 */
    
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
                <p>https:// ~ </p>
                
                <LinkKakao>
                    <div>
                        링크복사
                    </div>
                    <div>
                        카카오톡
                    </div>
                </LinkKakao>
            </ShareBox>

            
            <Link to="/{생성된링크}">다음</Link>
        </BodyDiv>
    )
}

export default Body;