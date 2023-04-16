import styled from "styled-components";

export const BodyDiv = styled.div`
    /* orange line */
    hr{
        width: 105px;
        border: 1px solid #FF9836;
        margin:0 auto;
        margin-top: 19px;
        margin-bottom: 19px;
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
    }
    /* form */
    form{
        margin-bottom: 25px;
    }
`
export const Topper = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 79px;
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
export const CntIntro = styled.p`
    display: block;
    width: 151px;
    height: 50px;
    margin: 0 auto;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.05em;
`
export const CntBox = styled.div`
    font-size: 24px;
    text-align: center;
    
    input{
        height:43px;
        width:114px;
        font-size: 24px;
    }
`
export const PwIntro = styled.p`
    display:block;
    width: 162px;
    height: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.05em;
    margin: 0 auto;
    margin-top: 69px;
`
export const PwBox = styled.div`
    font-size: 24px;
    text-align: center;
    margin-bottom: 79px;
    
    input{
        height:43px;
        width:114px;
        font-size: 24px;
    }
`