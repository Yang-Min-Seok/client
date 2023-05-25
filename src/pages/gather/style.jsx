import styled from "styled-components";
import refresh from "../../assets/images/refresh.png";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf";
import mainFont2 from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf";

export const BodyDiv = styled.div`

    // import main font
    @font-face {
        font-family: 'mainFont';
        src: url(${mainFont}) format('truetype');
    }
    
    // import sub font
    @font-face {
        font-family: 'subFont';
        src: url(${subFont}) format('truetype');
    }

    // import sub font
    @font-face {
        font-family: 'mainFont2';
        src: url(${mainFont2}) format('truetype');
    }

    /* 관리자 권한으로 종료 */
    button {
        display: block;
        text-decoration: none;
        color:#fff;
        width: 220px;
        height: 45px;
        background-color: #FF9836;
        border: none;
        border-radius: 25px;
        line-height: 45px;
        text-align: center;
        margin: 0 auto;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.05em;
        margin-bottom: 153px;
        font-family: 'subFont';
        cursor: pointer;
    }
`

export const GatheringBox = styled.div`
    font-family: 'mainFont';
    margin-top: 50px;
    p:nth-child(1){
        display: block;
        height: 25px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 4px;
        font-size: 110%;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #828181;
    }

    p:nth-child(2){
        display: block;
        margin: 0 auto;
        height: 50px;
        width: 100%;
        font-size: 110%;
        line-height: 1.3;
        text-align: center;
        letter-spacing: -0.05em;
        margin-bottom: 15px;
        font-family: 'mainFont';
    }
    
    p:nth-child(4){
        margin: 0;
        margin-top: 18px;
        text-align: center;
        font-size: 115%;
        font-family: "mainFont2";
        span{
            color: #FF0404;
        }
    }

    p:nth-child(5){
        font-style: normal;
        font-weight: 400;
        font-size: 105%;
        line-height: 1.3;
        text-align: center;
        letter-spacing: -0.05em;
        color: #828181;
        margin-bottom: 55px;
    }
`
export const Refresh = styled.div`
    width: 70px;
    height: 90px;
    margin: 0 auto;
    background-image: url(${refresh});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`