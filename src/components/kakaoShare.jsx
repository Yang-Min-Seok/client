import React, { useEffect } from 'react';
import Kakao from 'kakaojs';

const KakaoShareButton = () => {
  useEffect(() => {
    Kakao.init('c089c8172def97eb00c07217cae17495'); // 사용하려는 앱의 JavaScript 키 입력
  }, []);

  const shareKakaoTalk = () => {
    Kakao.Link.createDefaultButton({
      container: '#kakaotalk-sharing-btn',
      objectType: 'feed',
      content: {
        title: '딸기 치즈 케익',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com/',
          webUrl: 'https://developers.kakao.com/',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com/',
            webUrl: 'https://developers.kakao.com/',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com/',
            webUrl: 'https://developers.kakao.com/',
          },
        },
      ],
    });
  };

  return (
    <a id="kakaotalk-sharing-btn" href="javascript:;" onClick={shareKakaoTalk}>
      <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼" />
    </a>
  );
};

export default KakaoShareButton;