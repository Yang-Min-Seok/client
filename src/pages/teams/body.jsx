import { BodyDiv, Progress, PplCntBox, PplIntro, PwIntro } from "./style";

function Body () {
    const handleSubmit = (event) => {
        
    }

    const onChange = (event) => {
        
    }
    
    return (
        <BodyDiv>
            
            <Progress>
                <div></div>
                <div></div>
            </Progress>
            
            <PplIntro>
                총 몇 명의<br />
                시간표를<br />
                입력하실 건가요?
            </PplIntro>
            
            <form onSubmit={handleSubmit}>
                
                <PplCntBox>
                    <input 
                        type="number"
                        name="pplcnt"
                        onChange={onChange}
                    >
                    </input>명
                </PplCntBox>
                
                <PwIntro>
                    관리자 비밀번호<br />
                    4자리를 입력해주세요.
                </PwIntro>
                

                <input
                type="password"
                name="pw"
                onChange={onChange}
                ></input>

                
                <button 
                type="submit"
                onSubmit={handleSubmit}
                >다음</button>
            
            </form>

        </BodyDiv>
    )
}

export default Body;