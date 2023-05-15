import styled from "styled-components";
import everytimeLogo from "../../assets/images/everytime.png";
import noImage from "../../assets/images/no_image.png";
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

    form{

        label{
            display: block;
            width: 75px;
            height: 32px;
            margin: 0 auto;
            line-height: 32px;
            font-family: 'mainFont';
            font-size: 19px;
            text-align: center;
            letter-spacing: -0.05em;
            background-color: #B5B5B5;
            color: #fff;
            margin-bottom: 21px;
        }

        #uploadFile{
            display:none;
        }

        span{
            display: block;
            height: 25px;
            width: 174px;
            margin: 0 auto;
            text-align: center;
            line-height: 25px;
            color: #FF0404;
            font-family: 'mainFont';
        }

        button{
            display: block;
            margin: 0 auto;
            margin-bottom: 16px;
            margin-top: 50px;
            width: 155px;
            height: 45px;
            border: none;
            border-radius: 25px;
            background-color: #FF9836;
            color: #fff;
            font-size: 20px;
            font-family: 'subFont';
        }
    }

    // pop-up

    #noticeBtn {
        display: block;
        margin: 0 auto;
        width: 55%;
        font-family: 'mainFont';
        line-height: 2;
        text-decoration: underline;
        color: #FF0404;
        text-align: center;
        font-size: 18px;
        margin-bottom: 21px;
        margin-top: 10px;
    }

    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .popup {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        text-align: center;
    }

    .popup h4{
        color:#FF0404;
        font-family: 'mainFont';
        font-weight: 400;
        font-size: 17px;
        line-height: 25px;
        margin: 0;
        margin-top: 45px;
    }

    .popup p{
        color:#000;
        font-family: 'mainFont';
        margin: 0;
        line-height: 25px;
        font-size: 20px;
        font-weight: 100;
        margin-bottom: 20px;
        transform: translateY(-3px);
    }

    .popup p span{
        font-weight: 900;
    }

    .popup p span::before{
        content: "";
        display: inline-block;
        width: 35px;
        height: 35px;
        background-image: url(${everytimeLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateY(8px);
    }

    .popup img {
        max-width: 70%;
        max-height: 80vh;
    }

    .popup div:nth-child(5){
        width: 75px;
        height: 32px;
        background-color: #B5B5B5;
        color: #fff;
        margin: 0 auto;
        line-height: 32px;
        font-family: 'mainFont';
        cursor: pointer;
        margin-top: 25px;
        margin-bottom: 55px;
    }
`
export const Topper = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 17px;
    div {
        width:10px;
        height:10px;
        border-radius: 50%;
    }
    div:nth-child(2){
        background-color: #FF9836;
    }
    div:nth-child(1){
        border: 1px solid #FF9836;
        box-sizing: border-box;
    }
`
export const Intro = styled.p`
    display:block;
    width:250px;
    height:50px;
    margin: 0 auto;
    text-align: center;
    line-height: 25px;
    font-size: 20px;
    font-family: 'mainFont';
    
    b::before{
        content: "";
        display: inline-block;
        width:25px;
        height:25px;
        background-image: url(${everytimeLogo});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transform: translateY(4px);
    }
`
export const ShowBox = styled.div`
    
    width: 190px;
    height: 260px;
    margin: 0 auto;
    border: 1px solid #B5B5B5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px;
    
    div{
        width:60px;
        height:60px;
        background-image: url(${noImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    
`