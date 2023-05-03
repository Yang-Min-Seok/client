import styled from "styled-components";
import copyLink from "../../assets/images/link_copy.png";
import kakao from "../../assets/images/kakaotalk.png";
export const BodyDiv = styled.div`
    form {
        margin-top: 53px;
    }
`
export const StepOneBox = styled.div`
    margin-top: 74px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.05em;
    
    /* step 1 ~ */
    p:nth-child(1){
        padding-left: 45px;

        span{
            font-weight: 900;
        }
    }
    /* share link */
    p:nth-child(2){
        text-align: center;
        color: #FF9836;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.05em;
    }
`
export const LinkKakao = styled.div`
    
    display: flex;
    justify-content: center;
    column-gap: 20px;
    cursor: pointer;

    /* 링크복사 */
    div:nth-child(1){
        width: 50px;
        height: 67.42px;
        background-image: url(${copyLink});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    /* 카카오톡 */
    div:nth-child(2){
        width: 50px;
        height: 67.42px;
        background-image: url(${kakao});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`
export const StepTwoBox = styled.div`
    /* step 2 ~ */
    p:nth-child(1){
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: -0.05em;
        padding-left: 45px;
        span{
            font-weight: 900;
        }
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
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        letter-spacing: -0.05em;
    }
`
export const VoteBox = styled.div`
    width: 299px;
    height: 175px;
    background-color: #D9D9D9;
    margin-left: 45px;
`