import axios from 'axios';
const serverApi = axios.create({
    // api 기본 사이트
    baseURL: process.env.REACT_APP_SERVER_URL, // 보안 상 env파일에
    headers: {
    'Content-Type': 'application/json',
    },
});

const s3Api = axios.create({
    // api 기본 사이트
    baseURL: process.env.REACT_APP_SERVER_URL, // 보안 상 env파일에
    headers: {
      'Content-Type': 'multipart/form-data',
    },
});

// 팀 인원을 담은 팀 생성 요청 (서비스 흐름도 - 1)
export const teams = async (navigate, numberOfTeam, authCode) => {
    
    // .then 전까지가 쏘는 구간
    // response부터가 응답 값을 받아오는 것
    await serverApi.post('https://api.mogong.site/teams', { numberOfTeam, authCode }).then((response) => {
      // 팀 생성이 완료되었으면
      if (response.data.code === 'T-S001') {
        const teamId = response.data.data.teamId;
        const teamName = response.data.data.teamName;
        // 이미지를 올릴 url presigned-url 요청
        getImgUrl(navigate, teamId, teamName);
      };
    });
};

// 이미지를 올릴 URL(presigned-url) 요청하기 (서비스 흐름도 - 3)
export const getImgUrl = async (navigate, teamId, teamName) => {
    await serverApi.post('https://api.mogong.site/images', { extension : ".jpg" } ).then((response) => {
      if (response.data.code === 'I-S001') {
        // teamId와 preSignedUrl을 들고 /share로
        navigate(`/share`, { state: {url:response.data.data.preSignedUrl, teamId: teamId, teamName: teamName}
        });
      };
    });
};

// 받은 url에 이미지 첨부 요청
export const putImg = async (navigate, currUrl, currFile, teamId, teamName ) => {
  // s3에 put 요청 이 때에는 전체 url을 보내야 함 !
  await s3Api.put(currUrl, { currFile } ).then((response) => {
    // imgUrl 형성
    const imgUrl = currUrl.split('?')[0];
    // uploadImg 호출
    uploadImg(navigate, imgUrl, teamId, teamName);
  });
};

// 이미지 업로드하기
export const uploadImg = async (navigate, imgUrl, teamId, teamName) => {
  await serverApi.post(`https://api.mogong.site/teams/${teamId}`, {'imageUrl' : imgUrl} ).then((response) => {
      // imgUrl을 갖고 gather로
      navigate(`/gather/${teamName.teamName}`, { state: {url: imgUrl, teamId:teamId} })
  });
};

// gather 에서 새로고침할 때 불러올 api
export const getTeamInfo = async (teamId) => {
  let numberOfTeam
  let nowCnt

  await serverApi.get(`https://api.mogong.site/teams/${teamId}/results`).then((response) => {
      // update
      numberOfTeam = response.data.data.numberOfTeam;
      nowCnt = response.data.data.submit;

      // 팀 결과 생성에 성공했을 경우
      if (response.data.code === "T-S004") {
        console.log('팀 결과 생성 성공')
      }

      // 팀 결과 생성에 성공했을 경우 (인원 미충족시)
      else if (response.data.code === "T-F002") {
        console.log('팀 인원 미충족')
      }
    });
  
  return [nowCnt, numberOfTeam]
};