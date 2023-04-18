import { BodyDiv, StepOneBox, LinkKakao, StepTwoBox, VoteBox } from "./style";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
function Body() {
    
    return (
        <BodyDiv>
            
            <StepOneBox>
                <p>
                    <span>STEP1.</span><br />
                    대표자가 투표폼을 공유해주세요
                </p>
                <p>shareLink</p>
                <LinkKakao>
                    <div></div>
                    <div></div>
                </LinkKakao>
            </StepOneBox>

            <form>
                <StepTwoBox>
                    <p>
                        <span>STEP2.</span><br />
                        선호 시간대를 투표해주세요
                    </p>
                    <VoteBox>
                        
                    </VoteBox>
                    <button type="submit">투표하기</button>
                </StepTwoBox>
            </form>
        <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;