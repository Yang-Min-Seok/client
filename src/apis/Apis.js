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
        navigate(`/share`, { state: {teamId: teamId, teamName: teamName}});
      };
    });
};

// 멤버 생성하기
export const createMember = async (navigate, nickName, teamId, teamName) => {
  await serverApi.post(`https://api.mogong.site/teams/${teamId}/members`, {'nickName' : nickName} ).then((response) => {
      // 멤버 성공에 성공했다면
      if (response.data.code === 'M-S001'){
        // imageUrl이 개별 preSignedUrl이 되는 것!
        const imageUrl = response.data.data.imageUrl;
        const memberId = response.data.data.memberId;
        const nickName = response.data.data.nickName;
        navigate(`/upload/${teamName}/${memberId}`, {state: { preSignedUrl:imageUrl, memberId:memberId, nickName:nickName}});
      }
      // 실패했다면
      else{
        alert('다시 시도해주세요');
      }
  });
};

// 이미지 업로드하기
export const uploadImg = async (navigate, teamId, teamName, memberId) => {
  
  // api에서 정상 반응이 오면(파일 형식이 맞으면)
  try{
    await serverApi.put(`https://api.mogong.site/teams/${teamId}/members/${memberId}/images/v2`).then((response) => {
      // 이미지 업로드에 성공했으면
      if (response.data.code === 'M-S003'){
          navigate(`/gather/${teamName}`, {state: {teamId:teamId, teamName: teamName}})
      }
    });
  }
  // api에서 에러가 나오면(파일 형식이 안맞으면)
  catch (err) {
    alert('유의사항을 확인해주세요!')
  }

};

// 팀 결과 조회 (without authCode)
export const getTeamInfo = async (navigate, teamId, teamName) => {
  
  // 팀원수와 멤버수
  let numberOfMember;
  let numberOfSubmit;

  await serverApi.get(`https://api.mogong.site/teams/${teamId}/v2`).then((response) => {
      
      // 현재 등록된 이미지 수가 지정된 멤버 수보다 적으면 
      if (response.data.code === 'T-F002'){
        // update
        numberOfMember = response.data.data.numberOfTeam;
        numberOfSubmit = response.data.data.submit;
      }

      // 인원수가 다 채워졌으면
      else if (response.data.code === 'T-S006'){
          // update
        numberOfMember = response.data.data.numberOfTeam;
        numberOfSubmit = response.data.data.submit;
          // resultImageUrl 도출
          const resultImageUrl = response.data.data.resultImageUrl;
          // resultImageUrl 가지고 show로
          navigate(`/show/${teamName}`, {state: {resultImageUrl:resultImageUrl,teamId:teamId, teamName:teamName}})
      }   
    });
  
  return [numberOfSubmit, numberOfMember];
};

// 외부 접근 시 teamId를 가져오는 api
export const getTeamId = async (teamName) => {
  
  let teamId = ''
  
  await serverApi.get(`https://api.mogong.site/teams/names/${teamName}`).then((response) => {
      // 조회 성공 시
      if (response.data.code === 'T-S005'){
        // teamId update
        teamId = response.data.data.teamId;
      }
  });
  // 반환
  return teamId
};

// 팀 결과 조회 (with authCode)
export const getTeamResult = async (navigate, teamId, authCode, teamName) => {
  await serverApi.get(`https://api.mogong.site/teams/${teamId}/v2?auth_code=${authCode}`).then((response) => {
      // authCode 일치 시
      if (response.data.code === 'T-S006'){
        const resultImageUrl = response.data.data.resultImageUrl;
        navigate(`/show/${teamName}`, {state: {resultImageUrl:resultImageUrl, teamId:teamId, teamName:teamName}});
      }
      // authCode 비일치시
      else if (response.data.code === 'T-F002'){
        alert('옳지 않은 authCode 입니다.')
      }
  });
};

// 투표폼 만들기용 teamResult를 가져오는 api
export const getTeamResult1 = async (teamId) => {
  await serverApi.get(`https://api.mogong.site/teams/1/v2`).then((response) => {
      console.log(response);
  });
};