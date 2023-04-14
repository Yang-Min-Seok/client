import {BodyDiv, Logo, Intro, Noti, Img, Bar} from "./style";
import { Link } from "react-router-dom";

function Body() {
    return (
        <BodyDiv>
            <Logo>모두의공강</Logo>
            <Intro>
                조모임 시간 정하기,동아리 시간 정하기,<br />
                팀플 시간 정하기 <br />
                시간표만 올리면 끝!
            </Intro>
            <Noti>*** 팀 링크는 하루 지나면 없어져요!</Noti>
            <Img>시간표 예시 올릴 위치(두개 합친 이미지로 부탁할 것)</Img>
            <Bar></Bar>
            <Link to="/teams">시작하기</Link>
        </BodyDiv>
    )
}

export default Body