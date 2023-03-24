import { BodyDiv, Topper, CntIntro, CntBox, PwIntro, PwBox } from "./style";
function Body () {
    
    return (
        <BodyDiv>
            <Topper>
                <div></div>
                <div></div>
            </Topper>
            
            <form>
                
                <CntIntro>
                    총 몇 명의<br />
                    시간표를<br />
                    입력하실 건가요?
                </CntIntro>
                
                <CntBox>
                    <input type="number" name="cnt"/>명
                </CntBox>

                <PwIntro>
                    관리자 비밀번호 <br />
                    4자리를 입려해주세요
                </PwIntro>

                <hr></hr>

                <PwBox>
                    <input type="password" name="PW" />
                </PwBox>

                    <button type="submit">다음</button>

            </form>
        </BodyDiv>
    )
}

export default Body;