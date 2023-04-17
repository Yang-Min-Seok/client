import { BodyDiv, DownloadBox, DownloadIntro, TableImg } from "./style";
import { Link } from "react-router-dom";
import FooterLogoColor from "../../styles/global/footerLogoColor";

function Body() {
    
    return (
        <BodyDiv>

            <DownloadBox>
                
                <DownloadIntro>
                    <p>모두의 공강 시간표가 나왔어요!</p>
                </DownloadIntro>

            </DownloadBox>

            <TableImg>
                
            </TableImg>

            <Link to="/create">다음</Link>
            <FooterLogoColor></FooterLogoColor>
        </BodyDiv>
    )
}

export default Body;