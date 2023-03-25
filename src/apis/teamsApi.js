import axios from 'axios';
const serverApi = axios.create({
    // api 기본 사이트
    baseURL: process.env.REACT_APP_SERVER_URL, // 보안 상 env파일에
    headers: {
    'Content-Type': 'application/json',
    },
});

export const teams = async (navigate, numberOfTeam, authCode) => {
    await serverApi.post('https://api.mogong.site/teams', { numberOfTeam, authCode }).then((response) => {
      if (response.data.code === 'T-S001') {
        const userInfo = JSON.stringify(response.data.result);
        navigate('/', {

        });
      }
    });
};