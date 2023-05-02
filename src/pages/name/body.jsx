import { BodyDiv, Topper } from "./style";
import FooterLogoColor from "../../styles/global/footerLogoColor";
function Body() {

    return (
        <BodyDiv>
            <Topper>
                <div></div>
                <div></div>
            </Topper>
            <p>이름을 입력해주세요</p>
            <form>
                <input type="text"/>
                <button>다음</button>
            </form>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
        
    )
}

export default Body;