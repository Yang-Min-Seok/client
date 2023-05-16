import { BodyDiv, Topper } from "./style";
import FooterLogoColor from "../../styles/global/footerLogoColor";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import useInput from "../../hooks/useInput";
import { useCallback, useState, useEffect } from 'react';
import { createMember, getTeamId } from "../../apis/Apis";

function Body() {
    
    // teamName
    const teamName = useParams().teamName;
    // teamId
    const [ teamId, setTeamId ] = useState('');
    const findTeamID = useCallback(async () => {
        await getTeamId(teamName).then((response) => {
            setTeamId(Number(response));
        });
    });
    useEffect(() => {
        // 첫 렌더링 때 무조건 실행됨
        findTeamID()
    }, []);


    // useInput 사용
    const [ nickName, onChangeNickName, setNickName ] = useInput('');
    
    const navigate = useNavigate();
    // 이름 제출을 눌렀을 때,
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (nickName === ''){
                const nickNameInput = document.getElementById('nickNameInput');
                nickNameInput.style.border = '1px solid red';
                nickNameInput.style.animationName = 'wrongEffect';
                nickNameInput.style.animationDuration = '1s';
                nickNameInput.style.animationIterationCount = '1s';
            }
            else{
                // 멤버 생성 요청
                createMember(navigate, nickName, teamId, teamName);
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

    if (nextBtn !== '' && nickName.length >= 1){
        nextBtn.style.backgroundColor = '#FF9836';
    }
    else if(nextBtn !== '' && nickName.length === 0){
        nextBtn.style.backgroundColor = '#B8B8B8';
    }

    return (
        <BodyDiv>
            <Topper>
                <div></div>
                <div></div>
            </Topper>
            <p>이름을 입력해주세요</p>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={onChangeNickName} id="nickNameInput"/>
                <button type="submit" id="nextBtn">다음</button>
            </form>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
        
    )
}

export default Body;