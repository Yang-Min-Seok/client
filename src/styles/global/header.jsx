import styled from "styled-components";
import mainLogo from "../../assets/images/main_logo.png";
const Header = styled.div`
    height: 34px;
    width: 50px;
    background-image: url(${mainLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 auto;
    margin-top: 28px;
`
export default Header;