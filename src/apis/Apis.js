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

export const teams = async (navigate, numberOfTeam, authCode) => {
    // .then 전까지가 쏘는 구간
    // response부터가 응답 값을 받아오는 것
    await serverApi.post('https://api.mogong.site/teams', { numberOfTeam, authCode }).then((response) => {
      if (response.data.code === 'T-S001') {
        getImgUrl(navigate, response.data.data.teamId)
      }
    });
};

export const getImgUrl = async (navigate, teamId) => {
    // .then 전까지가 쏘는 구간
    // response부터가 응답 값을 받아오는 것
    await serverApi.post('https://api.mogong.site/images', { extension : ".jpg" } ).then((response) => {
      if (response.data.code === 'I-S001') {
        // console.log(response.data);
        // console.log(response.data.data.preSignedUrl);
        navigate(`/share`, { state: {url:response.data.data.preSignedUrl, teamId: teamId}
        });
      }
    });
};

export const putImg = async (navigate, currUrl, currFile, teamId ) => {
  // .then 전까지가 쏘는 구간
  // response부터가 응답 값을 받아오는 것
  console.log(currUrl)
  await s3Api.put(currUrl, { currFile } ).then((response) => {
      navigate(`/gather/${teamId}`, { state: {currUrl: currUrl}})
  });
};

export const getTeamInfo = async (teamId, currUrl) => {
  // .then 전까지가 쏘는 구간
  // response부터가 응답 값을 받아오는 것
  await serverApi.post(`https://api.mogong.site/teams/${teamId}`, { currUrl }).then((response) => {
    if (response.data.code === 'T-S002') {
      console.log(response)
    }
  });
};