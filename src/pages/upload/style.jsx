import styled from "styled-components";
import everytimeLogo from "../../assets/images/everytime.png";
import noImage from "../../assets/images/no_image.png";
export const BodyDiv = styled.div`
    form{

        label{
            display: block;
            width: 75px;
            height: 32px;
            margin: 0 auto;
            line-height: 32px;
            font-style: normal;
            font-weight: 400;
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
        }

        button{
            display: block;
            margin: 0 auto;
            margin-bottom: 16px;
            margin-top: 45px;
            width: 155px;
            height: 45px;
            border: none;
            border-radius: 25px;
            background-color: #FF9836;
            color: #fff;
            font-size: 20px;
        }
    }
`
export const Topper = styled.div`
    display: flex;
    justify-content: space-between;
    width:10%;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 67px;
    div {
        width:10px;
        height:10px;
        border-radius: 50%;
    }
    div:nth-child(1){
        background-color: #FF9836;
    }
    div:nth-child(2){
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
    margin-bottom: 22px;
    
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
    
    width: 160px;
    height: 228px;
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