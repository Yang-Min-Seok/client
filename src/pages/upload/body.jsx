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
    const isLeader = location.state.isLeader;

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
            
            // 입력완료 버튼 활성화
            const completeBtn = document.getElementById("completeBtn");
            completeBtn.style.backgroundColor = "#FF9836";
            
        }
    }

    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    // 이미지 업로드 시
    async function handleUpload(e) {
        e.preventDefault();
        // 이미지가 비어있지 않으면
        if (selectedFile !== null){
            try {
                // put 요청 후
                const response = await fetch(preSignedUrl, {
                    method: 'PUT',
                    body: selectedFile
                });
                // 정상 반응이 오면
                if (response.status===200){
                    // uploadImg 함수 호출
                    uploadImg(navigate, teamId, teamName, memberId, isLeader);
                }
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

    // 팝업 창 구현
    const [ popUp, setPopup ] = useState(false);

    const turnOnPopUp = () => {
        setPopup(true);
    }

    const turnOffPopUp = (e) => {
        const target = e.target.id;
        if ( target === 'popUpOverlay' || target === 'closeBtn'){
            setPopup(false);
        }
    }

    return (
        <BodyDiv>
            {popUp && (
                <div id="popUpOverlay" onClick={turnOffPopUp}>
                    <div id="popUp">
                        <h4>화면 캡쳐본은 안돼요!</h4>
                        <p>
                            <span>에브리타임</span>에서<br />
                            시간표를 다운해 주세요
                        </p>
                        <div></div>
                        <p id="closeBtn" onClick={turnOffPopUp}>닫기</p>
                    </div>
                </div>
            )}
            <Topper>
                <div></div>
                <div></div>
            </Topper>

            <form onSubmit={handleUpload}>

                <Intro>
                    에브리타임 시간표<br />
                    이미지를 업로드 해주세요
                </Intro>
                <p id="noticeBtn" onClick={turnOnPopUp}>화면 캡쳐본은 안돼요! (클릭)</p>
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
                <button type="submit" id="completeBtn">입력완료</button>
            </form>
            <FooterLogoBlack></FooterLogoBlack>
        </BodyDiv>
    )
}

export default Body;