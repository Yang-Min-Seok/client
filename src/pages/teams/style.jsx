import styled from "styled-components";

export const BodyDiv = styled.div`
    form{

    }

    // pw input
    form input:nth-child(3){
        display:block;
        width: 25%;
        height: 30px;
        margin: 0 auto;
        margin-bottom: 30px;
    }

    // next btn
    form button:nth-child(4){
        display: block;
        width:30%;
        height:30px;
        margin: 0 auto;
        border-radius: 20px;
        color:#fff;
        background-color: gray;
        border: none;
    }
`
export const Progress = styled.div`
    
    display: flex;
    width:10%;
    margin: 0 auto;
    justify-content: space-around;
    
    div:nth-child(1){
        width:10px;
        height:10px;
        background-color: orange;
        border-radius: 5px;
    }
    div:nth-child(2){
        width:10px;
        height:10px;
        background-color: #fff;
        border: 1px solid orange;
        box-sizing: border-box;
        border-radius: 5px;
    }
`
export const PplCntBox = styled.div`
    width:50%;
    margin: 0 auto;
    font-size: 20px;
    text-align: center;
    
    input{
        height:30px;
        width:40%;
    }
`

export const PplIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height:100px;
`

export const PwIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height:80px;
`