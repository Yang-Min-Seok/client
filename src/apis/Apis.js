import axios from 'axios';

// middle server api
const serverApi = axios.create({
    // api 기본 사이트
    // baseURL: process.env.REACT_APP_SERVER_URL, // 보안 상 env파일에
    headers: {
    'Content-Type': 'application/json',
    },
});

// flask server api
const s3Api = axios.create({
    // api 기본 사이트
    // baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      'Content-Type': 'image.type',
    },
});

// 팀 인원을 담은 팀 생성 요청 (서비스 흐름도 - 1)
export const makeTeams = async (navigate, numberOfTeam, authCode) => {
    
    // .then 전까지가 쏘는 구간
    // response부터가 응답 값을 받아오는 것1
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
        const teamPresignedUrl = response.data.data.preSignedUrl;
        // teamId와 teamName을 들고 /share로
        navigate(`/share`, { state: {teamId: teamId, teamName: teamName, teamPresignedUrl: teamPresignedUrl}
        });
      };
    });
};

// 멤버 생성하기
export const createMember = async (navigate, nickName, teamId, teamName, teamPresignedUrl) => {
  await serverApi.post(`https://api.mogong.site/teams/${teamId}/members`, {'nickName' : nickName} ).then((response) => {
      // 멤버 성공에 성공했다면
      if (response.data.code === 'M-S001'){
        // imageUrl이 개별 preSignedUrl이 되는 것!
        const imageUrl = response.data.data.imageUrl;
        const memberId = response.data.data.memberId;
        const nickName = response.data.data.nickName;
        navigate(`/upload/${teamName}/${memberId}`, {state: { preSignedUrl:imageUrl, memberId:memberId, nickName:nickName, teamPresignedUrl: teamPresignedUrl}});
      }
      // 실패했다면
      else{
        alert('다시 시도해주세요');
      }
  });
};

// 받은 url에 이미지 첨부 요청
export const putImg = async (navigate, preSignedUrl, imgFile, teamId, teamName, memberId, teamPresignedUrl) => {
  // s3에 put 요청
  await s3Api.put(preSignedUrl, { imgFile }).then((response) => {
    console.log(response);
    console.log(teamId, memberId);
    // uploadImg 호출
    uploadImg(navigate, teamId, teamName, memberId);
  });
};

// 이미지 업로드하기
export const uploadImg = async (navigate, teamId, teamName, memberId) => {
  await serverApi.put(`https://api.mogong.site/teams/${teamId}/members/${memberId}/images/v2`).then((response) => {
    console.log(teamId, memberId);
    console.log(response);
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
          
      }

      // 팀 결과 생성에 성공했을 경우 (인원 미충족시)
      else if (response.data.code === "T-F002") {

      }
    });
  
  return [nowCnt, numberOfTeam]
};

// 외부 접근 시 teamId를 가져오는 api
export const getTeamId = async (teamName) => {
  
  let teamId = ''
  
  await serverApi.get(`https://api.mogong.site/teams/names/${teamName}`).then((response) => {
      // 조회 성공 시
      if (response.data.code === 'T-S005'){
        // teamI를 update
        teamId = response.data.data.teamId;
      }
  });
  // 반환
  return teamId
};

// 외부 접근 시 teamId를 가져오는 api
export const getTeamResult1 = async (teamId) => {
  await serverApi.get(`https://api.mogong.site/teams/1/v2`).then((response) => {
      console.log(response);
  });
};