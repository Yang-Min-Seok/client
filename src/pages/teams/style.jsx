import styled from "styled-components";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf"

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

    /* submit btn */
    button{
        display: block;
        width: 155px;
        height: 45px;
        border:none;
        border-radius: 25px;
        background-color:#B8B8B8;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.05em;
        color:#fff;
        margin: 0 auto;
        font-family: 'subFont';
        cursor: pointer;
        transition: background-color 0.5s;
    }
    button:hover{
        background-color: #FF9536;
    }
    /* form */
    form{
        margin-bottom: 25px;
    }
`
export const Topper1 = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 89px;
    margin-bottom: 15px;
    
    div {
        width:10px;
        height:10px;
        border-radius: 50%;
    }
    
    div:nth-child(1){
        background-color: #FF9836;
    }
    
    div:nth-child(2){
        border: 1px solid #FF9836;
        box-sizing: border-box;
    }
`

export const Topper2 = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 75px;
    margin-bottom: 12px;
    
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
export const CntIntro = styled.p`
    display: block;
    width: 151px;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 19px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.05em;
    font-family: 'mainFont';
`
export const CntBox = styled.div`
    font-size: 24px;
    text-align: center;
    
    input{
        height:40px;
        width:52px;
        font-size: 24px;
        text-align: center;
        border: 1px solid #B5B5B5;
        border-radius: 3px;
    }
`
export const PwIntro = styled.p`
    display:block;
    width: 180px;
    height: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.05em;
    margin: 0 auto;
    margin-bottom: 12px;
    font-family: 'mainFont';
`
export const PwBox = styled.div`
    font-size: 24px;
    text-align: center;
    margin-bottom: 79px;
    
    input{
        height:40px;
        width:150px;
        font-size: 24px;
        text-align: center;
        border: 1px solid #B5B5B5;
        border-radius: 3px;
    }
`