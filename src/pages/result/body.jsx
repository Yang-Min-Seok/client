import { BodyDiv, ResultBox, CurrBox } from "./style";
import { Link } from "react-router-dom";
function Body() {
    
    return (
        <BodyDiv>
            
            <ResultBox>
                
                <p>
                    투표완료!<br />
                    새로고침 하면 실시간<br />
                    투표 결과를 알 수<br />
                    있어요
                </p>

                <CurrBox>

                </CurrBox>

                <Link to="/vote">다시 투표하기</Link>
                <Link to="/result">결과 새로고침</Link>

                <p>*** 팀 링크는 하루 지나면 없어져요!</p>
            </ResultBox>

            <Link to="/">처음부터 시작하기</Link>
            <Link to="/create">투표 폼 새로 만들기</Link>

        </BodyDiv>
    )
}

export default Body;