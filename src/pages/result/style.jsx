import styled from "styled-components";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf";

export const BodyDiv = styled.div`
    margin-top: 40px;
    
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

    /* resultBox */
    #resultBox {
        background-color: #FFF;
        width: 299px;
        height: 360px;
        margin: 0 auto;
        overflow: scroll;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 25px;
        margin-bottom: 20px;
        
        p {
            margin: 0;
            display: block;
            background-color: #F2F2F2;
            margin-bottom: 3%;
            line-height: 2;
            font-family: "mainFont";
            font-size: 105%;
                
            span:nth-child(1){
                display: inline-block;
                width: 75%;
                padding-left: 4%;
                color: #000;
            }
            span:nth-child(2){
                display: inline-block;
                color: #7e7e7e;
            }
        }
    }

    /* 다시 투표하기, 결과 새로고침 box */
    #btnBox {
        text-align: center;
        margin-top: 27px;
        p {
            color: #fff;
            background-color: #FF9836;
            display: inline-block;
            width: 200px;
            text-align: center;
            border-radius: 25px;
            font-family: "subFont";
            font-size: 20px;
            line-height: 2.5;
            margin: 0;
            cursor: pointer;
        }
        p:nth-child(1) {

        }
        p:nth-child(2) {
            margin: 0;
        }
    }

    #toStart{
        text-decoration: none;
        color: #fff;
        background-color: #B8B8B8;
        display: block;
        line-height:2.5;
        border-radius: 25px;
        text-align: center;
        font-family: "subFont";
        font-size: 20px;
        width:200px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 25px;
        cursor: pointer;
    }
`

export const Intro = styled.p`
    display: block;
    width: 299px;
    font-weight: 400;
    line-height: 25px;
    margin: 0 auto;
    font-family: "mainFont";
    font-size: 110%;
`