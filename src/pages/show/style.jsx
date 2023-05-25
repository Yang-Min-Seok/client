import styled from "styled-components";
import download from "../../assets/images/download.png";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf";

export const BodyDiv = styled.div`
    margin-top: 55px;
    
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

    /* link */
    a {
        display: block;
        width: 155px;
        height: 45px;
        text-decoration: none;
        color: #fff;
        background-color: #B5B5B5;
        border-radius: 25px;
        text-align: center;
        margin: 0 auto;
        margin-top: 46px;
        font-weight: 400;
        font-size: 18px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.05em;
        margin-bottom: 40px;
        font-family: 'subFont';
    }
`
export const DownloadBox = styled.div`
    display: flex;
    justify-content: center;
`

export const DownloadIntro = styled.p`
    margin: 0;
    text-align: center;
    font-weight: 400;
    font-size: 110%;
    line-height: 25px;
    letter-spacing: -0.05em;
    font-family: 'mainFont';

`
export const DownloadBtn = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${download});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 10px;
    cursor: pointer;
    transform: translateY(-2px);
`

export const TableImg = styled.div`
    margin: 0 auto;
    margin-top: 13px;
    height: 350px;
    width: 232px;
    box-sizing: border-box;
    border: 1px solid #B5B5B5;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
`