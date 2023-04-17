import styled from "styled-components";

export const BodyDiv = styled.div`
    margin-top: 74px;
    
    form {

    }
    
    form input:nth-child(4){
        margin-top: 25px;
        margin-left: 45px;
        height: 30px;
        width: 30px;
    }

    form #duplicateLabel{
        display: inline-block;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.05em;
        transform: translateY(-7px) translateX(5px);
    }

    form button:nth-child(6){
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
    }

    a {
        display: block;
        width: 170px;
        height: 45px;
        text-decoration: none;
        color: #fff;
        background-color: #888888;
        border-radius: 25px;
        margin: 0 auto;
        margin-top: 16px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.05em;
    }
`
export const Intro = styled.div`
    padding-left: 45px;
    
    p{
        margin: 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.05em;
    }
`
export const TimeBox = styled.div`
    width: 299px;
    height: 175px;
    margin: 0 auto;
    background-color: #D9D9D9;
    margin-top: 23px;
    margin-bottom: 20px;
    padding: 40px;
    box-sizing: border-box;
    overflow: scroll;
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
    }

`