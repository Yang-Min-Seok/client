import styled from "styled-components";
import refresh from "../../assets/images/refresh.png";

export const BodyDiv = styled.div`
    /* link to exit */
    a {
        display: block;
        text-decoration: none;
        color:#fff;
        width: 220px;
        height: 45px;
        background-color: #B8B8B8;
        border-radius: 25px;
        line-height: 45px;
        text-align: center;
        margin: 0 auto;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.05em;
        margin-bottom: 25px;
    }
`
export const Topper = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 72px;
    
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
export const GatheringBox = styled.div`
    
    p:nth-child(1){
        display: block;
        height: 25px;
        width: 70px;
        margin: 0 auto;
        margin-bottom: 4px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #828181;
    }

    h4{
        display: block;
        margin: 0 auto;
        height: 50px;
        width:127px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.05em;
        margin-bottom: 32px;
    }
    
    p:nth-child(4){
        margin: 0;
        margin-top: 32px;
        text-align: center;
        font-weight: 700;
        span{
            color: #FF0404;
        }
    }

    p:nth-child(5){
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.05em;
        color: #828181;
        margin-bottom: 87px;
    }
`
export const Refresh = styled.div`
    width: 90px;
    height: 109px;
    margin: 0 auto;
    background-image: url(${refresh});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`