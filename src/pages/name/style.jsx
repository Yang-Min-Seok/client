import styled from "styled-components";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf"

export const Topper = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 85px;
    margin-bottom: 10px;
    div {
        width:10px;
        height:10px;
        border-radius: 50%;
    }
    div:nth-child(1){
        border: 1px solid #FF9836;
        box-sizing: border-box;
    }
    div:nth-child(2){
        background-color: #FF9836;
    }
`

export const BodyDiv = styled.div`
    // animation
    @keyframes wrongEffect {
        from {
            transform: translateY(-10px);
        }
    }

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

    p {
        font-weight: 400;
        font-size: 110%;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.05em;
        margin: 0;
        margin-bottom: 19px;
        font-family: 'mainFont';
    }

    form {
        
        input{
            display: block;
            margin: 0 auto;
            width: 120px;
            height: 30px;
            margin-bottom: 75px;
            text-align: center;
            font-size: 100%;
            background-color: #FFFFFF;
            border: 1px solid #B5B5B5;
            border-radius: 3px;
            box-sizing: border-box;
        }

        button{
            display: block;
            margin: 0 auto;
            width: 155px;
            height: 45px;
            margin-bottom: 282px;
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            text-align: center;
            letter-spacing: -0.05em;
            color: #fff;
            background-color: #B8B8B8;
            border: none;
            border-radius: 25px;
            font-family: 'subFont';
            cursor: pointer;
            transition: background-color 0.5s;
        }
    }
`