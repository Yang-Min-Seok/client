import { BodyDiv, StepOneBox, LinkKakao, StepTwoBox, VoteBox } from "./style";
function Body() {
    
    return (
        <BodyDiv>
            
            <StepOneBox>
                <p>
                    STEP1.<br />
                    대표자가 투표폼을<br />
                    공유해주세요
                </p>
                <p>htpps:// ~</p>
                <LinkKakao>
                    <div>
                        링크복사
                    </div>
                    <div>
                        카카오톡
                    </div>
                </LinkKakao>
            </StepOneBox>

            <form>
                <StepTwoBox>
                    <p>
                        Step2.<br />
                        선호 시간대를 투표해주세요
                    </p>
                    <VoteBox>
                        <input type="checkbox" name="votedTime" />월요일 9:00 ~ 10:00
                        <input type="checkbox" name="votedTime" />
                        월요일 10:00 ~ 11:00 
                    </VoteBox>
                    <button type="submit">투표하기</button>
                </StepTwoBox>
            </form>

        </BodyDiv>
    )
}

export default Body;