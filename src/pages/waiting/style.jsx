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
    div:nth-child(2){
        display: flex;
        width:35%;
        margin: 0 auto;
        column-gap: 3%;
        
        /* 뒤로가기 버튼 */
        a {
            display: block;
            text-decoration: none;
            color:#fff;
            background-color: #FF9836;
            border: none;
            border-radius: 10px;
            line-height: 2;
            text-align: center;
            margin: 0 auto;
            font-size: 100%;
            letter-spacing: -0.05em;
            font-family: 'subFont';
            cursor: pointer;
            width: 100%;
        }

        /* 처음으로 버튼 */
        p {
            display: block;
            text-decoration: none;
            color:#fff;
            background-color: #FF9836;
            border: none;
            border-radius: 10px;
            line-height: 2;
            text-align: center;
            margin: 0 auto;
            font-size: 100%;
            letter-spacing: -0.05em;
            font-family: 'subFont';
            cursor: pointer;
            width: 100%;
        }
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
        text-align: center;
        margin: 0;
        font-family: 'mainFont';
        font-size: 105%;
    }
    p:nth-child(5){
        margin: 0;
        margin-top: 18px;
        text-align: center;
        font-size: 115%;
        font-family: "mainFont2";
        span{
            color: #FF0404;
        }
    }

    p:nth-child(6){
        font-style: normal;
        font-weight: 400;
        font-size: 105%;
        line-height: 1.3;
        text-align: center;
        letter-spacing: -0.05em;
        color: #828181;
        margin-bottom: 20px;
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