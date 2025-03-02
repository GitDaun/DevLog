const CLOUDINARY_URL = 'https://res.cloudinary.com/dm4xbk7hh/image/upload'

// Hero
export const heroData = {
  imgPath: `${CLOUDINARY_URL}/v1740925955/person1_z497cv.webp`
}
// End of Hero

// About Me
export const aboutText = {
  introduction: "안녕하세요. 누구보다 책임감 있게 업무를 대하는 3년차 프론트엔드 개발자 정다운 입니다.",
  experience: "SI 프로젝트 현장 경험을 통해 협업 능력과 이슈 처리 능력을 키웠습니다.",
  learning: "이전 경력에서 접하기 어려웠던 React, Next.js, TypeScript 등의 기술 스택을 학습하고 적용하기 위해 개인 프로젝트를 진행하고 있습니다.",
  blog: "또한, Medium, ByteByteGo, daily.dev 등 기술 블로그 번역을 통해 꾸준히 새로운 개발 트렌드를 학습하고 있습니다.",
  conclusion: "자영업 경험을 통해 얻은 고객 중심 사고방식과 거시적인 문제 해결 능력을 바탕으로 사용자 경험 개선에 기여하고자 합니다.",
  myPhoto: `${CLOUDINARY_URL}/v1740925958/myPhoto_wqts4w.webp`,
  
}
// End of About Me

// Experience
export const experienceData = [
  {
    year: '22.12',
    title: '하나 캐피탈 리빌딩 프로젝트 (1년 1개월)',
    works: [
      'JSP에서 Vue3로 대고객 서비스 화면 마이그레이션 및 신규 요건 개발',
      '기여도 : 렌트/리스/핫딜 프론트 80%'
    ],
    achievements: [
      '메인 페이지 화면의 초기 렌더링 속도 91% 개선 ( 7 초 -> 0.6 초)',
      '하나캐피탈 코어 서비스인 차량 렌트/리스/핫딜 서비스 화면 개발',
      
    ],
    skills:[`${CLOUDINARY_URL}/v1740925960/Vue_trrivg.svg`, `${CLOUDINARY_URL}/v1740925956/Pinia_xnf3na.svg`, `${CLOUDINARY_URL}/v1740925957/JavaScript_lsbtip.svg`, `${CLOUDINARY_URL}/v1740925956/GitHub_qxcyym.svg`],
    swaper: true
  },
  {
    year: '24.02',
    title: '지에스 리테일 수퍼 통합 프로젝트(4개월)',
    works:[
      'Vue3 환경에서 AG-Grid를 활용하여 GS THE FRESH 전사 수주 관련 어플리케이션의 행사/발주 파트 화면을 개발하고, 데이터 바인딩 구현',
      'Atomic 디자인 방법론 기반의 컴포넌트 시스템을 활용하여 UI를 구현하고, 별도 퍼블리싱 팀과의 협업을 통해 사용자 인터페이스 완성도를 높였습니다',
      '기여도: 행사/발주 파트 개발 기여도 25%'
    ],
    achievements: [
      
      '공통 컴포넌트 지원 작업 병행으로 Atomic 디자인 참여',
    ],
    skills:[`${CLOUDINARY_URL}/v1740925960/Vue_trrivg.svg`, `${CLOUDINARY_URL}/v1740925956/Pinia_xnf3na.svg`, `${CLOUDINARY_URL}/v1740925957/JavaScript_lsbtip.svg`, `${CLOUDINARY_URL}/v1740925954/AgGrid_piv5g2.png`,
     `${CLOUDINARY_URL}/v1740925956/Jira_qei6zs.svg`,
      `${CLOUDINARY_URL}/v1740925954/Confluence_zfix4a.svg`, 
      `${CLOUDINARY_URL}/v1740925954/BitBucket_qqywqa.svg`,
       `${CLOUDINARY_URL}/v1740925959/StoryBook_eze4qq.svg`],
    swaper: false
  },
  {
    year: '24.06',
    title: '컨텐츠 브릿지 CRM 신규 개발 (4개월)',
    works: [
      '사내 전자 결재 프로세스 관련 화면 개발',
      '해당 도메인 FE부터 BE, DB 설계 풀스택 개발',
      '공통 컴포넌트 및 함수 모듈화 작업 수행',
      '기여도 : 전자 결재 100%'
    ],
    achievements: [
      '팀 개발자들이 사용할 공통 함수, 컴포넌트, 프로시져, 스케쥴러 작성',
      'AG-Grid 엑셀 다운로드, 그리드 필터링 관련 및 타 개발팀의 MySQL 연동 프로시져, 이벤트 스케쥴러 작성',
    ],
    skills:[
      `${CLOUDINARY_URL}/v1740925960/Vue_trrivg.svg`,
      `${CLOUDINARY_URL}/v1740925960/TypeScript_qigrtt.svg`, 
      `${CLOUDINARY_URL}/v1740925956/Pinia_xnf3na.svg`,
      `${CLOUDINARY_URL}/v1740925956/GitHub_qxcyym.svg`, 
      `${CLOUDINARY_URL}/v1740925959/TailWind_pxzf60.svg`, 
      `${CLOUDINARY_URL}/v1740925954/AgGrid_piv5g2.png`,
      `${CLOUDINARY_URL}/v1740925956/Java_pzpggs.svg`, 
      `${CLOUDINARY_URL}/v1740925959/SpringBoot_jqjql1.svg`, 
      `${CLOUDINARY_URL}/v1740925954/MySQL_rkqcfz.svg`
      ],
    swaper: false
  },
  {
    year: '25.02',
    title: '개인 소개 페이지 개발',
    works: [
      '기여도 :  100%'
    ],
    achievements: [
      'CLS(Cumulative Layout Shift) 최적화: 0.377 -> 0.002 로 99.47% 개선 했습니다',
      '핵심 로직 및 컴포넌트에 대한 단위 테스트를 통해 코드 커버리지 90.76%를 달성했습니다.',
      '다양한 해상도 및 화면 크기에서 테스트를 진행하여 반응형 디자인의 일관성을 확보했습니다. ( 테스크탑  6종,  테블릿 2종,  모바일 3종)',
      '하나 캐피탈 프로젝트에서 얻은 경험을 바탕으로 이미지 포맷을 png에서 webp로 전환하여 이미지 리소스 크기를 71.45% (1.66MB -> 474KB) 압축했습니다. 초기 로딩 속도 개선, 사용자 경험 향상, 트래픽 비용 절감 효과를 기대했습니다.',
      '테일윈드 4버전 도입하여 빌드 파일 크기 감소, 빠른 빌드 속도, 트리 쉐이킹 등 성능 최적화를 통해 개발 효율성을 높였습니다.',
    ],
    skills:[`${CLOUDINARY_URL}/v1740925954/NextJS_jixktq.webp`, `${CLOUDINARY_URL}/v1740925960/TypeScript_qigrtt.svg`, `${CLOUDINARY_URL}/v1740925956/GitHub_qxcyym.svg`, `${CLOUDINARY_URL}/v1740925959/TailWind_pxzf60.svg`, `${CLOUDINARY_URL}/v1740925956/FramerMotion_xputuu.webp`],
    swaper: false
  },
]
// End of Experience

// Skills
export const skillsData = [
  {
    name: 'HTML',
    icon: `${CLOUDINARY_URL}/v1740925956/HTML_vdp6wv.svg`,
  },
  {
    name: 'CSS',
    icon: `${CLOUDINARY_URL}/v1740925954/CSS_i0mu6y.svg`,
    
  },
  {
    name: 'TailwindCSS',
    icon: `${CLOUDINARY_URL}/v1740925959/TailWind_pxzf60.svg`,
  },
  {
    name: 'JavaScript',
    icon: `${CLOUDINARY_URL}/v1740925957/JavaScript_lsbtip.svg`,
  },
  {
    name: 'TypeScript',
    icon: `${CLOUDINARY_URL}/v1740925960/TypeScript_qigrtt.svg`,
  },
  {
    name: 'ReactJS',
    icon: `${CLOUDINARY_URL}/v1740925958/ReactJS_pzcged.svg`,
  },
  {
    name: 'NextJS',
    icon: `${CLOUDINARY_URL}/v1740925954/NextJS_jixktq.webp`,
  },
  {
    name: 'VueJS',
    icon: `${CLOUDINARY_URL}/v1740925960/Vue_trrivg.svg`,
  },
  {
    name: 'Pinia',
    icon: `${CLOUDINARY_URL}/v1740925956/Pinia_xnf3na.svg`,
  },
  {
    name: 'Vitest',
    icon: `${CLOUDINARY_URL}/v1740925960/vitest_qu5qdl.svg`,
  },
  {
    name: 'Figma',
    icon: `${CLOUDINARY_URL}/v1740925955/figma_qzcnrz.svg`,
  },
  {
    name: 'Photoshop',
    icon: `${CLOUDINARY_URL}/v1740925956/Photoshop_vcg14s.svg`,
  },
  {
    name: 'Framer Motion',
    icon: `${CLOUDINARY_URL}/v1740925956/FramerMotion_xputuu.webp`,
  },
  {
    name: 'JAVA',
    icon: `${CLOUDINARY_URL}/v1740925956/Java_pzpggs.svg`,
  },
  {
    name: 'SpringBoot',
    icon: `${CLOUDINARY_URL}/v1740925959/SpringBoot_jqjql1.svg`,
  },
  {
    name: 'MySQL',
    icon: `${CLOUDINARY_URL}/v1740925954/MySQL_rkqcfz.svg`,
  },
  {
    name: 'PostgreSQL',
    icon: `${CLOUDINARY_URL}/v1740925958/Postgresql_batnzf.svg`,
  },
  {
    name: 'Github',
    icon: `${CLOUDINARY_URL}/v1740925956/GitHub_qxcyym.svg`,
  },
]
// End of Skills

// Swiper
export const swiperData = [
  {
    imgPath: `${CLOUDINARY_URL}/v1740928394/1.1.%EC%A0%9C%EC%A1%B0%EC%82%AC%EC%84%A0%ED%83%9D_qr80ex.webp`,
    title: '제조사 선택',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928394/1.2.%EA%B2%80%EC%83%89%EC%B0%BD%EC%82%AC%EC%9A%A9_vcxpni.webp`,
    title: '검색창 사용',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928394/1.3.%EA%B2%80%EC%83%89%EC%B0%A8%EB%9F%89%EB%A6%AC%EC%8A%A4%ED%8A%B8_sd84lh.webp`,
    title: '검색 차량 리스트',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928394/1.4.%EC%84%B8%EB%B6%80%EB%AA%A8%EB%8D%B8%EC%84%A0%ED%83%9D%EC%9C%BC%EB%A1%9C%EC%9D%B4%EB%8F%99_bnpbgj.webp`,
    title: '세부 모델 선택으로 이동',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928395/2.%EC%B0%A8%EC%A2%85_titml9.webp`,
    title: '차종',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928395/3.0.%EB%AF%B8%EC%B7%A8%EA%B8%89%EC%B0%A8%EB%9F%89%EC%95%88%EB%82%B4%ED%8C%9D%EC%97%85_paq0eg.webp`,
    title: '미취급 차량 안내 팝업',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928396/3.1.%EC%84%B8%EB%B6%80%EB%AA%A8%EB%8D%B8%EC%84%A0%ED%83%9D%EC%A0%84_r0yhdb.webp`,
    title: '세부 모델 선택 전',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928396/3.2.%EC%84%B8%EB%B6%80%EB%AA%A8%EB%8D%B8_vmx0ez.webp`,
    title: '세부 모델',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928397/3.3.%EC%84%B8%EB%B6%80%EB%AA%A8%EB%8D%B8%EC%84%A0%ED%83%9D%ED%9B%84_zrc3wb.webp`,
    title: '세부 모델 선택 후',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928398/4.0.%EC%98%B5%EC%85%98_oxgois.webp`,
    title: '옵션',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928398/4.1.%EC%98%B5%EC%85%98_%EB%B2%A0%ED%83%80%EC%A0%81%EC%98%B5%EC%85%98%EC%A0%81%EC%9A%A9_mfcaul.webp`,
    title: '옵션 - 베타옵션 적용',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928399/4.2.1%EC%98%B5%EC%85%98_%EC%97%B0%EA%B3%84%EC%98%B5%EC%85%98_%ED%91%9C%EC%8B%9C%EC%A0%84_lypbja.webp`,
    title: '옵션 - 연계 옵션 표시 전',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928400/4.2.2.%EC%98%B5%EC%85%98_%EC%97%B0%EA%B3%84%EC%98%B5%EC%85%98_%EC%95%8C%EB%A6%BC%ED%8C%9D%EC%97%85_dykqkg.webp`,
    title: '옵션 - 연계 옵션 알림 팝업',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928400/4.2.3.%EC%98%B5%EC%85%98_%EC%97%B0%EA%B3%84%ED%95%84%EC%88%98%EC%98%B5%EC%85%98_%EC%84%A0%ED%83%9D%EC%8B%9C_%EC%84%A0%ED%83%9D%EA%B0%80%EB%8A%A5_i8zxmu.webp`,
    title: '옵션 - 연계 필수 옵션 선택시 선택 가능',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928401/4.2.4.%EC%98%B5%EC%85%98_%EC%97%B0%EA%B3%84%ED%95%84%EC%88%98%EC%98%B5%EC%85%98_%EC%84%A0%ED%83%9D_xriec9.webp`,
    title: '옵션 - 연계 필수 옵션 선택',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928402/5.1.%EC%83%89%EC%83%81_%EB%82%B4%EC%99%B8%EC%9E%A5%EC%83%89%EC%84%A0%ED%83%9D_domycd.webp`,
    title: '색상 - 내외장 색상 선택',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928402/5.2.%EB%82%B4%EC%9E%A5%EC%83%89_%EC%84%A0%ED%83%9D%EC%8B%9C_%EC%A0%9C%ED%95%9C%EC%82%AC%ED%95%AD_%EC%95%8C%EB%A6%BC%ED%8C%9D%EC%97%85_qdycsj.webp`,
    title: '내장색 선택시 제한사항 알림팝업',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928405/6.1.%EC%A4%91%EA%B0%84%ED%99%95%EC%9D%B8_brwwtt.webp`,
    title: '중간 확인',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928404/6.1.1.%EC%9D%B8%ED%84%B0%EB%84%B7%ED%8C%90%EB%A7%A4%EB%B6%88%EA%B0%80%EC%B0%A8%EB%9F%89%EC%95%88%EB%82%B4%ED%8C%9D%EC%97%85_eati0r.webp`,
    title: '인터넷 판매 불가 차량 안내 팝업',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928405/6.2.%EA%B3%A0%EA%B0%9D%EB%B6%84%EB%A5%98_%EB%B6%84%EA%B8%B0%ED%8C%9D%EC%97%85_hedq8p.webp`,
    title: '고객 분류 분기 팝업',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928405/7.1.%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%9E%85%EB%A0%A5_h8xxft.webp`,
    title: '개인정보 입력',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928408/7.2.%EA%B0%9C%EC%9D%B8%EC%82%AC%EC%97%85%EC%9E%90%EB%B0%8F%EB%B2%95%EC%9D%B8%EA%B3%A0%EA%B0%9D_nct8zg.webp`,
    title: '개인사업자 및 법인 고객',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928408/7.2.1.%EC%82%AC%EC%97%85%EC%9E%90%EC%9C%A0%ED%9A%A8%EC%84%B1%EA%B2%80%EC%82%AC_r2uheg.webp`,
    title: '사업자 유효성 검사',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928409/8.1.1.%EC%9A%B4%EC%9A%A9%EB%A6%AC%EC%8A%A4_%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%EC%84%A0%ED%83%9D1_mnqtrq.webp`,
    title: '운용리스 - 견적 조건 선택 1',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928409/8.1.2.%EC%9A%B4%EC%9A%A9%EB%A6%AC%EC%8A%A4_%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%EC%84%A0%ED%83%9D2_qbkbd5.webp`,
    title: '운용리스 - 견적 조건 선택 2',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928412/8.1.3.%EC%9A%B4%EC%9A%A9%EB%A6%AC%EC%8A%A4_%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%EC%84%A0%ED%83%9D3_pedkxi.webp`,
    title: '운용리스 - 견적 조건 선택 3',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928412/8.2.1.%EA%B8%88%EC%9C%B5%EB%A6%AC%EC%8A%A4_%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%EC%84%A0%ED%83%9D1_mcvgll.webp`,
    title: '금융리스 - 견적 조건 선택 1',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928412/8.2.2.%EA%B8%88%EC%9C%B5%EB%A6%AC%EC%8A%A4_%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%EC%84%A0%ED%83%9D2_nsislb.webp`,
    title: '금융리스 - 견적 조건 선택 2',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928496/1.%ED%95%AB%EB%94%9C%EB%A9%94%EC%9D%B8_oeweuy.webp`,
    title: '핫딜 메인',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928496/2.1.%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%ED%99%95%EC%9D%B81_f0ru0i.webp`,
    title: '견적 조건 확인 1',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928497/2.2.%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%ED%99%95%EC%9D%B82_wegxgw.webp`,
    title: '견적 조건 확인 2',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928498/2.3.1.%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%ED%99%95%EC%9D%B83_dbwg1b.webp`,
    title: '견적 조건 확인 3',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928500/2.3.2.%EB%B3%B4%ED%97%98%EB%82%B4%EC%9A%A9%EB%B3%80%EA%B2%BD_urjcps.webp`,
    title: '보험 내용 변경 3',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928500/2.3.3.%EC%9E%94%EC%A1%B4%EA%B0%80%EC%B9%98%EB%B9%84%EC%9C%A8%EB%B3%80%EA%B2%BD_elu3sp.webp`,
    title: '잔존 가치 비율 변경',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928502/2.4.2.%ED%83%81%EC%86%A1%EC%A7%80%EC%84%A0%ED%83%9D_gq6sln.webp`,
    title: '탁송지 선택',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928502/2.4.%EA%B2%AC%EC%A0%81%EC%A1%B0%EA%B1%B4%ED%99%95%EC%9D%B84_fdly4l.webp`,
    title: '견적 조건 확인 4',
  },
  {
    imgPath: `${CLOUDINARY_URL}/v1740928504/2.5.%EA%B2%AC%EC%A0%81%EC%84%9C%EC%A1%B0%ED%9A%8C%EB%B0%8F%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_jfwrlk.webp`,
    title: '견적서 조회 및 다운로드',
  },

]
// End of Swiper

// Loading
export const loadingData = {
  imgPath: `${CLOUDINARY_URL}/v1740925960/waiting_h6oc9p.webp`
}
// End of Loading


// Navbar
export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: 'ri-home-2-line',
  },
  {
    id: 'about',
    name: 'About',
    icon: 'ri-question-line',
  },
  {
    id: 'experience',
    name: 'MyExp',
    icon: 'ri-history-line',
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: 'ri-briefcase-line',
  }

]

