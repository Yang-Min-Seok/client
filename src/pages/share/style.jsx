import styled from "styled-components";
import shareIcon from "../../assets/images/link_copy.png"
import kakaoIcon from "../../assets/images/kakaotalk.png"
export const BodyDiv = styled.div`
    margin-top: 170px;
    
    /* link */
    #next{
        display: block;
        width: 155px;
        height: 45px;
        text-decoration: none;
        border-radius: 25px;
        color: #fff;
        background-color: #B8B8B8;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.05em;
        margin: 0 auto;
        margin-bottom: 36px;
    }
`

export const ShareBox = styled.div`
    /* intro */
    p{  
        margin: 0 auto;
        display: block;
        width: 223px;
        height: 50px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.05em;
        margin-bottom: 19px;
    }
    /* share link */
    a{  
        display: block;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        text-decoration: none;
        color: #FF9836;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.05em;
        margin-bottom: 31px;
    }
`

export const LinkKakao = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 115px;
    div{
        cursor: pointer;
        width: 50px;
        height: 67.42px;
    }

    div:nth-child(1){
        background-image: url(${shareIcon});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    div:nth-child(2){
        background-image: url(${kakaoIcon});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`