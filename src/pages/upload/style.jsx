import styled from "styled-components";
import everytimeLogo from "../../assets/images/everytime.png";
import noImage from "../../assets/images/no_image.png";
import mainFont from "../../styles/fonts/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf";
import subFont from "../../styles/fonts/ONE_Mobile_Title_OTF.otf";

export const BodyDiv = styled.div`
    
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

    form{

        label{
            display: block;
            width: 75px;
            height: 32px;
            margin: 0 auto;
            line-height: 32px;
            font-family: 'mainFont';
            font-size: 19px;
            text-align: center;
            letter-spacing: -0.05em;
            background-color: #B5B5B5;
            color: #fff;
            margin-bottom: 21px;
        }

        #uploadFile{
            display:none;
        }

        span{
            display: block;
            height: 25px;
            width: 174px;
            margin: 0 auto;
            text-align: center;
            line-height: 25px;
            color: #FF0404;
            font-family: 'mainFont';
        }

        button{
            display: block;
            margin: 0 auto;
            margin-bottom: 16px;
            margin-top: 50px;
            width: 155px;
            height: 45px;
            border: none;
            border-radius: 25px;
            background-color: #FF9836;
            color: #fff;
            font-size: 20px;
            font-family: 'subFont';
            cursor: pointer;
        }
    }

    // pop-up
    #noticeBtn {
        display: block;
        margin: 0 auto;
        width: 80%;
        font-family: 'mainFont';
        line-height: 2;
        text-decoration: underline;
        color: #FF0404;
        text-align: center;
        font-size: 18px;
        margin-bottom: 21px;
        margin-top: 10px;
    }

    #popUpOverlay{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
    }

    #popUp{
        z-index: 2;
        margin: 0 auto;
        width: 70%;
        height: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 10%;
        background-color: #fff;
        border-radius: 10px;
    }

    #popUp h4{
        margin: 0 auto;
        font-family: 'mainFont';
        color: #FF0404;
        font-weight: 100;
        font-size: 100%;
        text-align: center;
        margin-top: 10%;
    }

    #popUp p:nth-child(2){
        margin: 0 auto;
        text-align: center;
        font-family: 'mainFont';
        font-size: 100%;
        line-height: 1.7;
    }

    #popUp p:nth-child(2)::before{
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url(${everytimeLogo});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transform: translateY(8px);
    }

    #popUp p:nth-child(2) span{
        font-weight: 900;
    }

    #popUp div{
        margin: 0 auto;
        width: 70%;
        height: 65%;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px solid #eee;
        box-sizing: border-box;
        margin-top: 3%;
    }

    #popUp p:nth-child(4){
        margin: 0 auto;
        text-align: center;
        display:block;
        width: 60px;
        font-size: 90%;
        line-height: 1.7;
        background-color: #B5B5B5;
        color: #fff;
        margin-top: 5%;
    }

    // pc
    @media only screen and (min-width: 768px){
        #popUpOverlay{
            
        }

        #popUp{
            width:40%;
        }

        #popUp h4{
            font-size: 150%;
        }

        #popUp p:nth-child(2){
            font-size: 130%;
        }

        #popUp div{
            margin-top: 1%;
        }

        #popUp p:nth-child(4){
            width: 100px;
            font-size: 120%;
        }
    }
`
export const Topper = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 17px;
    div {
        width:10px;
        height:10px;
        border-radius: 50%;
    }
    div:nth-child(2){
        background-color: #FF9836;
    }
    div:nth-child(1){
        border: 1px solid #FF9836;
        box-sizing: border-box;
    }
`
export const Intro = styled.p`
    display:block;
    width:250px;
    height:50px;
    margin: 0 auto;
    text-align: center;
    line-height: 25px;
    font-size: 20px;
    font-family: 'mainFont';
    
    b::before{
        content: "";
        display: inline-block;
        width:25px;
        height:25px;
        background-image: url(${everytimeLogo});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transform: translateY(4px);
    }
`
export const ShowBox = styled.div`
    
    width: 190px;
    height: 260px;
    margin: 0 auto;
    border: 1px solid #B5B5B5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px;
    
    div{
        width:60px;
        height:60px;
        background-image: url(${noImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    
`