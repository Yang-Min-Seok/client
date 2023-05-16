import { BodyDiv, Topper, Intro, ShowBox } from "./style";
import { useState, useCallback, useEffect } from "react";
import { getTeamId, uploadImg } from "../../apis/Apis";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import FooterLogoBlack from "../../styles/global/footerLogoBlack";

function Body() {

    // useParams -> url의 마지막 부분
    const teamName = useParams().teamName;

    // preSignedUrl, memberId 가져오기
    const location = useLocation();
    const memberId = location.state.memberId;
    const preSignedUrl = location.state.preSignedUrl;

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
    
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    // 이미지 첨부 시
    function handleFileInput(event) {
        // 이미지를 첨부했는지 확인
        if (event.target.files[0] !== null){
            // currFile
            const currFile = event.target.files[0];
            
            // useState이용
            setSelectedFile(currFile);

            // 선택된 이미지를 URL화
            const imgUrl = URL.createObjectURL(currFile);

            // imgBox에 올린 이미지 보여주기
            const target_box = document.getElementById("imgBox");
            target_box.style.backgroundImage = `url(${imgUrl})`;
            target_box.style.width = '100%';
            target_box.style.height = '100%';

            // no img sign 숨기기
            const target_sign = document.getElementById("noImg");
            target_sign.style.display="none";            
        }
    }

    // 이미지 업로드 시
    async function handleUpload(e) {
        e.preventDefault();
        // 이미지가 비어있지 않으면
        if (selectedFile !== null){
            try {
                // put 요청 후
                const response = await fetch(preSignedUrl, {
                    method: 'PUT',
                    headers: {
                    'Content-Type': selectedFile.type
                    },
                    body: selectedFile
                });
                // uploadImg 함수 호출
                uploadImg(navigate, teamId, teamName, memberId);
                }
                // 에러 처리 
                catch (err) {
                    alert('유의사항을 확인해주세요!');
                    console.error('Error uploading image:', err);
                }
        }
        // 이미지가 비어있으면
        else{
            // 경고문구
            alert('파일을 첨부해주세요!')
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
                <p id="noticeBtn">화면 캡쳐본은 안돼요!! (클릭)</p>
                <label 
                htmlFor="uploadFile"
                >업로드</label>
                
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