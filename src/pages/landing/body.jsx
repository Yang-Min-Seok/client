import {BodyDiv, Logo, Intro, Img, FooterLogo} from "./style";
import { Link } from "react-router-dom";

function Body() {
    return (
        <BodyDiv>
            <Logo></Logo>
            <Intro>
                조모임 시간 정하기, 동아리 시간<br />
                정하기, 팀플 시간 정하기<br />
                시간표만 올리면 끝!
            </Intro>
            <Img></Img>
            <Link to="/teams">시작하기</Link>
            <FooterLogo></FooterLogo>
        </BodyDiv>
    )
}

export default Body