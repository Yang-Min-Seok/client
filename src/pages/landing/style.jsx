import styled from "styled-components";
import mainLogo from "../../assets/images/main_logo.png";
import landingImg from "../../assets/images/landing_img.png";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf";

export const BodyDiv = styled.div`

    // import main font
    @font-face {
        font-family: 'mainFont';
        src: url(${mainFont}) format('truetype');
        font-style: normal;
        font-weight: 400;
    }
    
    // import sub font
    @font-face {
        font-family: 'subFont';
        src: url(${subFont}) format('truetype');
        font-style: normal;
        font-weight: 400;
    }

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
        font-family: 'subFont';
    }

`
export const Logo = styled.div`
    width: 60px;
    height: 47.6px;
    background-image: url(${mainLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 35px;
    margin-left: 35px;
    margin-bottom: 15px;
`
export const Intro = styled.p`
    margin: 0;
    display: block;
    width: 253px;
    margin-left: 35px;
    font-family: 'mainFont';
    font-size: 100%;
    line-height: 1.3;
    letter-spacing: -0.05em;
`
export const Img = styled.div`
    height: 345px;
    width: 230px;
    margin: 0 auto;
    margin-top: 33px;
    margin-bottom: 34px;
    background-image: url(${landingImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: 1px solid #F5F5F5;
`