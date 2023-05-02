import styled from "styled-components";

export const Topper = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 140px;
    margin-bottom: 12px;
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
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.05em;
        margin: 0;
        margin-bottom: 19px;
    }

    form {
        
        input{
            display: block;
            margin: 0 auto;
            width: 160px;
            height: 40px;
            margin-bottom: 140px;
            text-align: center;
            font-size: 25px;
            background-color: #FFFFFF;
            border: 1px solid #B5B5B5;
            border-radius: 3px;
        }

        button{
            display: block;
            margin: 0 auto;
            width: 155px;
            height: 45px;
            margin-bottom: 155px;
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            text-align: center;
            letter-spacing: -0.05em;
            color: #fff;
            background-color: #B8B8B8;
            border: none;
            border-radius: 25px;
        }
    }
`