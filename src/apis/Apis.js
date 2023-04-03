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
      if (response.data.code === 'T-S001') {
        getImgUrl(navigate, response.data.data.teamId);
      }
    });
};

// 이미지를 올릴 URL(presigned-url) 요청하기 (서비스 흐름도 - 3)
export const getImgUrl = async (navigate, teamId) => {
    await serverApi.post('https://api.mogong.site/images', { extension : ".jpg" } ).then((response) => {
      if (response.data.code === 'I-S001') {
        // teamId와 preSignedUrl을 들고 /share로
        navigate(`/share`, { state: {url:response.data.data.preSignedUrl, teamId: teamId}
        });
      }
    });
};

// 받은 url에 이미지 첨부 요청
export const putImg = async (navigate, currUrl, currFile, teamId ) => {
  await s3Api.put(currUrl, { currFile } ).then((response) => {
      // imgUrl 형성
      const imgUrl = currUrl.split('?')[0];
      // imgUrl을 갖고 gather로
      navigate(`/gather/${teamId}`, { state: {url: imgUrl} })
  });
};

// gather 에서 새로고침할 때 불러올 api
export const getTeamInfo = async (teamId, imgUrl) => {
  await serverApi.post(`https://api.mogong.site/teams/${teamId}`, { "imageUrl" : imgUrl }).then((response) => {
    // 팀원들이 모두 이미지 업로드가 안된 상태일 때
    if (response.data.code === 'T-S002') {
      console.log(response);
    }
    // 팀원들이 모두 이미지 업로드가 된 상태일 때
    else if (response.data.code == 'T-S003'){
      console.log(response);
    }
  });
}