import styled from "styled-components";
import download from "../../assets/images/download.png";
export const BodyDiv = styled.div`
    margin-top: 72px;

    /* link */
    a {
        display: block;
        width: 155px;
        height: 45px;
        text-decoration: none;
        color: #fff;
        background-color: #888888;
        border-radius: 25px;
        text-align: center;
        margin: 0 auto;
        margin-top: 46px;
        font-weight: 400;
        font-size: 20px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.05em;
        margin-bottom: 25px;
    }
`
export const DownloadBox = styled.div`

`
export const DownloadIntro = styled.div`
    
    p {
        margin: 0;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.05em;
    }

    p::after{
        content:"";
        display:inline-block;
        width:35px;
        height:35px;
        background-image: url(${download});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateY(9px) translateX(3px);
        cursor: pointer;
    }
`
export const TableImg = styled.div`
    margin: 0 auto;
    margin-top: 23px;
    height: 350px;
    width: 232px;
    box-sizing: border-box;
    border: 1px solid #B5B5B5;
`