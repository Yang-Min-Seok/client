import { BodyDiv, Topper } from "./style";
import FooterLogoColor from "../../styles/global/footerLogoColor";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import useInput from "../../hooks/useInput";
import { useCallback } from 'react';
import { createMember } from "../../apis/Apis";

function Body() {
    // useInput 사용
    const [ nickName, onChangeNickName, setNickName ] = useInput('');
    
    // teamId, url
    const location = useLocation();
    const teamId = location.state.teamId;

    // teamName
    const teamName = useParams().teamName;
    
    const navigate = useNavigate();
    // 이름 제출을 눌렀을 때,
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (nickName === ''){
                alert('이름을 입력해주세요!')
            }
            else{
                // 멤버 생성 요청
            createMember(navigate, nickName, teamId, teamName);
            }
        },
    );
    return (
        <BodyDiv>
            <Topper>
                <div></div>
                <div></div>
            </Topper>
            <p>이름을 입력해주세요</p>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={onChangeNickName}/>
                <button type="submit">다음</button>
            </form>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
        
    )
}

export default Body;