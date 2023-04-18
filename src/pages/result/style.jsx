import styled from "styled-components";

export const BodyDiv = styled.div`
    margin-top: 74px;

    /* 투표 완료! ~ */
    p:nth-child(1) {
        display: block;
        width: 299px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.05em;
        margin: 0 auto;
        margin-bottom: 29px;
    }

    /* result box */
    div:nth-child(2) {
        background-color: #D9D9D9;
        width: 299px;
        height: 175px;
        margin: 0 auto;
        margin-bottom: 27px;
    }

    /* 다시 투표하기, 결과 새로고침 box */
    div:nth-child(3) {
        text-align: center;

        a {
            text-decoration: none;
            color: #000;
            background-color: #D9D9D9;
            display: inline-block;
            width: 145px;
            height: 45px;
            text-align: center;
            line-height: 45px;
            border-radius: 5px;
            font-weight: 400;
            font-size: 20px;
            letter-spacing: -0.05em;
        }
        a:nth-child(1) {
            margin-right: 10px;
        }
        a:nth-child(2) {

        }
    }

    a:nth-child(4), a:nth-child(5) {
        text-decoration: none;
        display: block;
        color: #fff;
        width: 226px;
        height: 45px;
        background-color: #888888;
        margin: 0 auto;
        line-height: 45px;
        text-align: center;
        border-radius: 25px;
        font-size: 20px;
        letter-spacing: -0.05em;
    }
    
    a:nth-child(4) {
        margin-top:96px;
    }

    a:nth-child(5) {
        margin-top: 16px;
    }

`