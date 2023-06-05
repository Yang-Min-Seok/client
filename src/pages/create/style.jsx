import styled from "styled-components";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf";
export const BodyDiv = styled.div`
    margin-top: 74px;
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

    form {

    }

    form #duplicateBox{
        display:block;
        width:299px;
        margin : 0 auto;
        input{
            margin-top: 27px;
            height: 25px;
            width: 25px;
            border: 1px dotted #B5B5B5;
        }

        #duplicateLabel{
            display: inline-block;
            font-weight: 400;
            font-size: 110%;
            line-height: 25px;
            line-height: 1.3;
            transform: translateY(-7px) translateX(5px);
            font-family: "mainFont";
        }
    }

    form button:nth-child(5){
        display: block;
        margin: 0 auto;
        margin-top: 60px;
        border: none;
        background-color: #FF9836;
        color: #fff;
        border-radius: 25px;
        width: 170px;
        height: 45px;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.05em;
        cursor: pointer;
        font-family: "subFont";
    }

    #getBack {
        display: block;
        width: 170px;
        height: 45px;
        text-decoration: none;
        color: #fff;
        background-color: #B5B5B5;
        border-radius: 25px;
        margin: 0 auto;
        margin-top: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.05em;
        cursor: pointer;
        font-family: "subFont";
    }
`
export const Intro = styled.div`
    width:299px;
    margin: 0 auto;
    p{
        margin: 0;
        font-weight: 400;
        font-size: 110%;
        line-height: 1.3;
        letter-spacing: -0.05em;
    }
`
export const SampleBox = styled.div`
    width: 299px;
    height: 300px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 23px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    overflow: scroll;
    
    p{
        margin: 0;
        display: block;
        background-color: #F2F2F2;
        margin-bottom: 3%;
        
        span:nth-child(1){
            display: inline-block;
            font-size: 105%;
            line-height: 2;
            width: 85%;
            padding-left: 4%;
            font-family: "mainFont";
            color: #A6A6A6;
        }

        span:nth-child(2){
            display: inline-block;
            width: 17px;
            height: 17px;
            background-color: #D9D9D9;
            border-radius: 50%;
        }
    }
    
`
export const OptionBox = styled.div`
    width: 299px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    input {
        display: none;
    }

    label{
        width: 88px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-radius: 25px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
        font-size: 115%;
    }

`