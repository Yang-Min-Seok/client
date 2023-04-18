import { BodyDiv } from "./style";
import { Link } from "react-router-dom";
import FooterLogoColor from "../../styles/global/footerLogoColor";
function Body() {
    
    return (
        <BodyDiv>
            
            <p>투표 완료! 새로고침하면<br />
            실시간 투표결과를 볼 수 있어요!</p>
            
            <div>

            </div>
            
            <div>
                <Link to="/">다시 투표하기</Link>
                <Link to="/">결과 새로고침</Link>
            </div>
            
            <Link to="/">처음부터 시작하기</Link>
            <Link to="/">투표 폼 새로 만들기</Link>

            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;