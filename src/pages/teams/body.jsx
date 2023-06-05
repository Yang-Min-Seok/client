import { BodyDiv, Topper1, Topper2, CntIntro, CntBox, PwIntro, PwBox } from "./style";
import  FooterLogoColor from '../../styles/global/footerLogoColor';
import { makeTeams } from "../../apis/Apis";
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import useInput from "../../hooks/useInput";

function Body () {
    const [ numberOfTeam, onChangeNumberOfTeam, setNumberOfTeam ] = useInput(0);
    const [ authCode, onChangeAuthCode, setAuthCode ] = useInput('0');
    const navigate = useNavigate();

    // team 인원을 담아 생성 요청
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            // 인원수 입력 안했으면,
            if (Number(numberOfTeam) <= 0){
                const cntInput = document.getElementById('cntInput');
                cntInput.style.border = '1px solid red';
                cntInput.style.animationName = 'wrongEffect';
                cntInput.style.animationDuration = '1s';
                cntInput.style.animationIterationCount = '1s';
            }
            // authCode 입력 안했으면
            if (authCode.length !== 4){
                const pwInput = document.getElementById('pwInput');
                pwInput.style.border = '1px solid red';
                pwInput.style.animationName = 'wrongEffect';
                pwInput.style.animationDuration = '1s';
                pwInput.style.animationIterationCount = '1s';
            }
            // 모든 조건 충족되었으면 형식이 맞으면
            else{
                makeTeams(navigate, Number(numberOfTeam), authCode);
            }
        },
    );
    
    // 버튼 활성화 구현
    const [ nextBtn, setNextBtn ] = useState('');
    const getNextBtn = () => {
        setNextBtn(document.getElementById('nextBtn'));
    }
    useEffect(() => {
        getNextBtn();
    }, []);
    if (nextBtn !== '' && Number(numberOfTeam) >= 1 && authCode.length === 4){
        nextBtn.style.backgroundColor = '#FF9836';
    }
    else if (nextBtn !== '' && ((Number(numberOfTeam)) <= 0 || authCode.length !== 4)){ 
        nextBtn.style.backgroundColor = '#B8B8B8';
    }

    return (
        <BodyDiv>
            
            
            <form onSubmit={onSubmit}>
                <Topper1>
                    <div></div>
                    <div></div>
                </Topper1>
                <CntIntro>
                    총 몇 명의 시간표를<br />
                    입력하실 건가요?
                </CntIntro>

                <CntBox>
                    <input type="number" name="cnt" onChange={onChangeNumberOfTeam} id="cntInput"/> 명
                </CntBox>
                <Topper2>
                    <div></div>
                    <div></div>
                </Topper2>
                <PwIntro>
                    관리자 비밀번호 4자리를<br />
                    숫자로 설정해주세요
                </PwIntro>

                <PwBox>
                    <input type="password" name="PW" onChange={onChangeAuthCode} maxLength='4' id="pwInput"/>
                </PwBox>

                <button type="submit" id='nextBtn'>다음</button>

            </form>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;