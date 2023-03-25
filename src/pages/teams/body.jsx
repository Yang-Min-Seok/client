import { BodyDiv, Topper, CntIntro, CntBox, PwIntro, PwBox } from "./style";
import { teams } from "../../apis/teamsApi";
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import useInput from "../../hooks/useInput";

function Body () {
    const [ numberOfTeam, onChangeNumberOfTeam, setNumberOfTeam ] = useInput(0);
    const [ authCode, onChangeAuthCode, setAuthCode ] = useInput('0');
    
    const navigate = useNavigate();
    const onSubmit = useCallback(
        (e) => {
          e.preventDefault();
          teams(navigate, Number(numberOfTeam), authCode)
        },
      );

    return (
        <BodyDiv>
            <Topper>
                <div></div>
                <div></div>
            </Topper>
            
            <form onSubmit={onSubmit}>
                
                <CntIntro>
                    총 몇 명의<br />
                    시간표를<br />
                    입력하실 건가요?
                </CntIntro>
                
                <CntBox>
                    <input type="number" name="cnt" onChange={onChangeNumberOfTeam}/>명
                </CntBox>

                <PwIntro>
                    관리자 비밀번호 <br />
                    4자리를 입려해주세요
                </PwIntro>

                <hr></hr>

                <PwBox>
                    <input type="password" name="PW" onChange={onChangeAuthCode}/>
                </PwBox>

                    <button 
                    type="submit"
                    >다음</button>

            </form>
        </BodyDiv>
    )
}

export default Body;