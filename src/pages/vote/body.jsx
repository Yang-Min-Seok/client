import { BodyDiv, StepOneBox, LinkKakao, StepTwoBox, VoteBox } from "./style";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Body() {
    
    // teamName 가져오기
    const teamName = useParams().teamName;
    // timeResponses 가져오기
    const location = useLocation();
    const timeResponses = location.state.timeResponses;
    console.log(timeResponses);

    // // 투표 폼 만들기
    // const createVoteBox = () => {
        
    //     // voteBox
    //     const voteBox = document.getElementById('voteBox');
    //     // lenOfVoteList
    //     const lenOfVoteList = voteList.length;

    //     // 중복을 허락할 경우
    //     if (duplicate) {
    //         for (let i=0; i<lenOfVoteList; i++){
    //             const exisitingHTML = voteBox.innerHTML;
    //             voteBox.innerHTML = `${exisitingHTML}<input type='checkbox' name='timeVote'> ${voteList[i]}<br />`;
    //         };
    //     }
    //     // 중복을 허락하지 않을 경우
    //     else {
    //         for (let i=0; i<lenOfVoteList; i++){
    //             const exisitingHTML = voteBox.innerHTML;
    //             voteBox.innerHTML = `${exisitingHTML}<input type='radio' name='timeVote'> ${voteList[i]}<br />`;
    //         };
    //     }
    // };

    // voteBox 가져오기
    const [ voteBox, setVoteBox ] = useState('');
    const getVoteBox = () => {
        setVoteBox(document.getElementById('voteBox'));
    }
    useEffect(() => {
        getVoteBox();
    }, []);

    // 투표하기 버튼을 눌렀을 때
    const getVoteResult = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <BodyDiv>
            <form onSubmit={getVoteResult}>
                <StepTwoBox>
                    <p>
                        선호 시간대를 투표해주세요
                    </p>
                    <VoteBox id="voteBox">
                        
                    </VoteBox>
                    <button type="submit">투표하기</button>
                </StepTwoBox>
            </form>
        <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;