import { BodyDiv, DownloadBox, DownloadIntro, DownloadBtn, TableImg } from "./style";
import { Link } from "react-router-dom";
function Body() {
    
    return (
        <BodyDiv>

            <DownloadBox>
                <DownloadIntro>모두의 공강 시간표가 나왔어요!</DownloadIntro>
                <DownloadBtn>
                    
                </DownloadBtn>
            </DownloadBox>

            <TableImg>
                
            </TableImg>

            <Link to="#">다음</Link>

        </BodyDiv>
    )
}

export default Body;