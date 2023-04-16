import styled from "styled-components";
import mainLogo from "../../assets/images/main_logo.png";
import footerLogo from "../../assets/images/footer_logo_black.png";
export const BodyDiv = styled.div`
    
    // Link to teams
    a {
        display: block;
        width: 155px;
        height: 45px; 
        margin: 0 auto;
        text-decoration: none;
        font-size: 20px;
        border-radius: 25px;
        background-color: #FF9836;
        color: #fff;
        line-height:45px;
        text-align: center;
        margin-bottom: 25px;
    }

`
export const Logo = styled.div`
    width: 70px;
    height: 47.6px;
    background-image: url(${mainLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 45px;
    margin-left: 45px;
    margin-bottom: 29.4px;
`
export const Intro = styled.p`
    margin: 0;
    display: block;
    height: 75px;
    width: 253px;
    margin-left: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.05em;
`
export const Img = styled.div`
    height: 381px;
`
export const FooterLogo = styled.div`
    width: 300px;
    height: 196.22px;
    background-image: url(${footerLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`