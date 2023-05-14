import { BodyDiv, Topper, Intro, ShowBox } from "./style";
import { useState, useCallback, useEffect } from "react";
import { putImg, getTeamId, uploadImg } from "../../apis/Apis";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";
import AWS from 'aws-sdk';

function Body() {

    // useState -> currFile(시간표이미지)
    const [currFile, setCurrFile] = useState('default');
    // useParams -> url의 마지막 부분
    const teamName = useParams().teamName;

    // preSignedUrl, memberId 가져오기
    const location = useLocation();
    const memberId = location.state.memberId;
    const preSignedUrl = location.state.preSignedUrl;
    const teamPresignedUrl = location.state.teamPresignedUrl;

    // teamId 가져오기
    const [ teamId, setTeamId ] = useState('');
    const findTeamID = useCallback(async () => {
        await getTeamId(teamName).then((response) => {
            setTeamId(Number(response));
        });
    });
    useEffect(() => {
        // 첫 렌더링 때 무조건 실행됨
        findTeamID()
    }, []);

    // const onChangeImage = (e) => {
    //     // 올렸으면,
    //     if (e.target.files[0] !== undefined) {
    //         // 선택된 이미지
    //         const selectedFile = e.target.files[0];
    //         // useState 이용
    //         setCurrFile(selectedFile);

    //         // 선택된 이미지를 URL화
    //         const imgUrl = URL.createObjectURL(selectedFile);
    //         // imgBox에 올린 이미지 보여주기
    //         const target_box = document.getElementById("imgBox");
    //         target_box.style.backgroundImage = `url(${imgUrl})`;
    //         target_box.style.width = '100%';
    //         target_box.style.height = '100%';

    //         // no img sign 숨기기
    //         const target_sign = document.getElementById("noImg");
    //         target_sign.style.display="none";
    //     }
    // };
    
    // const navigate = useNavigate();
    // // 입력완료 버튼을 눌렀을 때 발생할 함수
    // const onSubmit = useCallback(
    //     (e) => {
    //         e.preventDefault();
    //         // currFile이 비어있지 않으면,
    //         if (currFile !== 'default'){
    //             // img 파일을 담을 fromData 형성
    //             const formData = new FormData();
    //             // formData에 img파일 담기
    //             formData.append('timeTableImg', currFile);
    //             // putImg 호출
    //             putImg(navigate, preSignedUrl, formData, teamId, teamName, memberId, teamPresignedUrl);
    //         }
    //         // currFile이 비어있으면,
    //         else{
    //             // 경고메세지
    //             alert('이미지를 첨부해주세요.');
    //         }   
    //     },
    // )
    
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);

    function handleFileInput(event) {
        setSelectedFile(event.target.files[0]);
    }

    async function handleUpload(e) {
        e.preventDefault();
        try {
        const response = await fetch(preSignedUrl, {
            method: 'PUT',
            headers: {
            'Content-Type': selectedFile.type
            },
            body: selectedFile
        });
        console.log('Image uploaded successfully.');
        uploadImg(navigate, teamId, teamName, memberId);
        } catch (err) {
        console.error('Error uploading image:', err);
        }
    }

    return (
        <BodyDiv>

            <Topper>
                <div></div>
                <div></div>
            </Topper>
            
            <form onSubmit={handleUpload}>

                <Intro>
                    <b>에브리타임</b> 시간표<br />
                    이미지를 업로드 해주세요
                </Intro>

                <label htmlFor="uploadFile">업로드</label>
                
                <input 
                    type="file" 
                    accept="image/jpg" 
                    name="timetable" 
                    onChange={handleFileInput}
                    placeholder="업로드"
                    id="uploadFile"
                />     

                <ShowBox>
                    <div id="imgBox"></div>
                </ShowBox>

                <span id="noImg">업로드한 이미지가 없어요.</span>
                <button type="submit">입력완료</button>
            </form>
            <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;