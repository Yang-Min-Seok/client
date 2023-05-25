import styled from "styled-components";
import copyLink from "../../assets/images/link_copy.png";
import kakao from "../../assets/images/kakaotalk.png";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf";

export const BodyDiv = styled.div`
    margin-top: 85px;
    
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

    /* link */
    #next{
        display: block;
        width: 155px;
        height: 45px;
        text-decoration: none;
        border-radius: 25px;
        color: #fff;
        background-color: #B8B8B8;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.05em;
        margin: 0 auto;
        margin-bottom: 172px;
        font-family: "subFont";
        font-size: 20px;
        transition: background-color 0.5s;
    }
    #next:hover{
        background-color: #FF9836;
    }
`

export const ShareBox = styled.div`
    /* intro */
    p{  
        margin: 0 auto;
        display: block;
        width: 230px;
        height: 50px;
        font-weight: 400;
        font-size: 110%;
        line-height: 1.3;
        text-align: center;
        letter-spacing: -0.05em;
        margin-bottom: 10px;
        font-family: 'mainFont';
    }
    /* share link */
    a{  
        display: block;
        width: 90%;
        margin: 0 auto;
        text-align: center;
        text-decoration: none;
        color: #FF9836;
        font-style: normal;
        font-weight: 400;
        font-size: 110%;
        line-height: 1.3;
        letter-spacing: -0.05em;
        margin-bottom: 15px;
        font-family: 'mainFont';
    }
`

export const LinkKakao = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin-bottom: 75px;

    // 링크복사, 카카오톡
    div{
        cursor: pointer;
        width: 45px;
        height: 60px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    /* 링크복사 */
    div:nth-child(1){
        background-image: url(${copyLink});
    }

    /* 카카오톡 */
    div:nth-child(2){
        background-image: url(${kakao});
    }
`