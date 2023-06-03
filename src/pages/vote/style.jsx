import styled from "styled-components";
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

    form {
        margin-top: 53px;
        #title{
            font-size: 110%;
            line-height: 25px;
            display: block;
            width: 299px;
            margin: 0 auto;
            margin-bottom: 20px;
            font-family: "mainFont";
        }

        /* 투표하기 */
        button{
            border:none;
            display: block;
            margin: 0 auto;
            width: 155px;
            height: 45px;
            line-height: 45px;
            background-color: #FF9836;
            color: #fff;
            border-radius: 25px;
            margin-top: 19px;
            font-size: 20px;
            text-align: center;
            font-family: "subFont";
        }
    }
`

export const VoteBox = styled.div`
    width: 299px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #B5B5B5;
    margin: 0 auto;
    overflow: scroll;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    line-height: 2.5;
    p{  
        display: flex;
        font-size: 105%;
        margin: 0;
        border: 1px solid #B5B5B5;
        box-sizing: border-box;
        margin-top: 20px;
        padding-left: 20px;

        label{
            width:80%;
        }

        input{
            width:20px;
        }
    }
`