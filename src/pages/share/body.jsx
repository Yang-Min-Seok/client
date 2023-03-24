import { BodyDiv, Topper, ShareBox, LinkKakao } from "./style";

function Body() {
    
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

            <button type="submit">다음</button>
        </BodyDiv>
    )
}

export default Body;