// About Me
export const aboutText = {
  introduction: "안녕하세요. Vue.js, JavaScript 기반의 프로젝트를 진행해 온 3년차 프론트엔드 개발자 정다운 입니다.",
  experience: "SI 프로젝트 현장 경험을 통해 협업 능력과 이슈 처리 능력을 키웠습니다.",
  learning: "이전 경력에서 접하기 어려웠던 React, Next.js, TypeScript 등의 기술 스택을 학습하고 적용하기 위해 개인 프로젝트를 진행하고 있습니다.",
  blog: "또한, Medium, ByteByteGo, daily.dev 등 기술 블로그 번역을 통해 꾸준히 새로운 개발 트렌드를 학습하고 있습니다.",
  conclusion: "자영업 경험을 통해 얻은 고객 중심 사고방식과 거시적인 문제 해결 능력을 바탕으로 사용자 경험 개선에 기여하고자 합니다."
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
    skills:['/Vue.svg', '/Pinia.svg','/JavaScript.svg', '/GitHub.svg'],
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
    skills:['/Vue.svg', '/Pinia.svg','/JavaScript.svg', '/AgGrid.png', '/Jira.svg', '/Confluence.svg', '/BitBucket.svg', '/StoryBook.svg'],
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
    skills:['/Vue.svg', '/TypeScript.svg', '/Pinia.svg','/GitHub.svg', '/TailWind.svg', '/AgGrid.png' ,'/Java.svg', '/SpringBoot.svg', '/MySQL.svg'],
    swaper: false
  },
  {
    year: '25.02',
    title: '개인 소개 페이지 개발',
    works: [
      '기여도 :  100%'
    ],
    achievements: [
      'NextJS, TypeScript, TailwindCSS, Framer Motion, Vitest 기술 스택 학습 및 적용',
      '개인 소개 페이지 개발',
    ],
    skills:['/NextJS.webp', '/TypeScript.svg', '/GitHub.svg', '/TailWind.svg', '/FramerMotion.webp', '/Vitest.svg'],
    swaper: false
  },
]
// End of Experience

// Skills
export const skillsData = [

  {
    name: 'HTML',
    icon: '/HTML.svg',
  },
  {
    name: 'CSS',
    icon: '/CSS.svg',
  },
  {
    name: 'TailwindCSS',
    icon: '/TailWind.svg',
  },
  {
    name: 'JavaScript',
    icon: '/JavaScript.svg',
  },
  {
    name: 'TypeScript',
    icon: '/TypeScript.svg',
  },
  {
    name: 'ReactJS',
    icon: '/ReactJS.svg',
  },
  {
    name: 'NextJS',
    icon: '/NextJS.webp',
  },
  {
    name: 'VueJS',
    icon: '/Vue.svg',
  },
  {
    name: 'Vitest',
    icon: '/Vitest.svg',
  },
    {
    name: 'Figma',
    icon: '/Figma.svg',
  },
  {
    name: 'Photoshop',
    icon: '/Photoshop.svg',
  },
  {
    name: 'Framer Motion',
    icon: '/FramerMotion.webp',
  },
  {
    name: 'JAVA',
    icon: '/Java.svg',
  },
  {
    name: 'SpringBoot',
    icon: '/SpringBoot.svg',
  },
  {
    name: 'MySQL',
    icon: '/MySQL.svg',
  },
  {
    name: 'PostgreSQL',
    icon: '/PostgreSQL.svg',
  },
  {
    name: 'Github',
    icon: '/GitHub.svg',
  },
]
// End of Skills

// Swiper
export const swiperData = [
  {
    imgPath: '/hanaCap/1.1.제조사선택.webp',
    title: '제조사 선택',
  },
  {
    imgPath: '/hanaCap/1.2.검색창사용.webp',
    title: '검색창 사용',
  },
  {
    imgPath: '/hanaCap/1.3.검색차량리스트.webp',
    title: '검색 차량 리스트',
  },
  {
    imgPath: '/hanaCap/1.4.세부모델선택으로이동.webp',
    title: '세부 모델 선택으로 이동',
  },
  {
    imgPath: '/hanaCap/2.차종.webp',
    title: '차종',
  },
  {
    imgPath: '/hanaCap/3.0.미취급차량안내팝업.webp',
    title: '미취급 차량 안내 팝업',
  },
  {
    imgPath: '/hanaCap/3.1.세부모델선택전.webp',
    title: '세부 모델 선택 전',
  },
  {
    imgPath: '/hanaCap/3.2.세부모델.webp',
    title: '세부 모델',
  },
  {
    imgPath: '/hanaCap/3.3.세부모델선택후.webp',
    title: '세부 모델 선택 후',
  },
  {
    imgPath: '/hanaCap/4.0.옵션.webp',
    title: '옵션',
  },
  {
    imgPath: '/hanaCap/4.1.옵션_베타적옵션적용.webp',
    title: '옵션 - 베타옵션 적용',
  },
  {
    imgPath: '/hanaCap/4.2.1옵션_연계옵션_표시전.webp',
    title: '옵션 - 연계 옵션 표시 전',
  },
  {
    imgPath: '/hanaCap/4.2.2.옵션_연계옵션_알림팝업.webp',
    title: '옵션 - 연계 옵션 알림 팝업',
  },
  {
    imgPath: '/hanaCap/4.2.3.옵션_연계필수옵션_선택시_선택가능.webp',
    title: '옵션 - 연계 필수 옵션 선택시 선택 가능',
  },
  {
    imgPath: '/hanaCap/4.2.4.옵션_연계필수옵션_선택.webp',
    title: '옵션 - 연계 필수 옵션 선택',
  },
  {
    imgPath: '/hanaCap/5.1.색상_내외장색선택.webp',
    title: '색상 - 내외장 색상 선택',
  },
  {
    imgPath: '/hanaCap/5.2.내장색_선택시_제한사항_알림팝업.webp',
    title: '내장색 선택시 제한사항 알림팝업',
  },
  {
    imgPath: '/hanaCap/6.1.1.인터넷판매불가차량안내팝업.webp',
    title: '인터넷 판매 불가 차량 안내 팝업',
  },
  {
    imgPath: '/hanaCap/6.1.중간확인.webp',
    title: '중간 확인',
  },
  {
    imgPath: '/hanaCap/6.2.고객분류_분기팝업.webp',
    title: '고객 분류 분기 팝업',
  },
  {
    imgPath: '/hanaCap/7.1.개인정보입력.webp',
    title: '개인정보 입력',
  },
  {
    imgPath: '/hanaCap/7.2.1.사업자유효성검사.webp',
    title: '사업자 유효성 검사',
  },
  {
    imgPath: '/hanaCap/7.2.개인사업자및법인고객.webp',
    title: '개인사업자 및 법인 고객',
  },
  {
    imgPath: '/hanaCap/8.1.1.운용리스_견적조건선택1.webp',
    title: '운용리스 - 견적 조건 선택 1',
  },
  {
    imgPath: '/hanaCap/8.1.2.운용리스_견적조건선택2.webp',
    title: '운용리스 - 견적 조건 선택 2',
  },
  {
    imgPath: '/hanaCap/8.1.3.운용리스_견적조건선택3.webp',
    title: '운용리스 - 견적 조건 선택 3',
  },
  {
    imgPath: '/hanaCap/8.2.1.금융리스_견적조건선택1.webp',
    title: '금융리스 - 견적 조건 선택 1',
  },
  {
    imgPath: '/hanaCap/8.2.2.금융리스_견적조건선택2.webp',
    title: '금융리스 - 견적 조건 선택 2',
  },
  {
    imgPath: '/hanaCap/20.신용조회정보동의.webp',
    title: '신용조회 정보 동의',
  },
  {
    imgPath: '/hanaCap/hotdeal/1.핫딜메인.webp',
    title: '핫딜 메인',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.1.견적조건확인1.webp',
    title: '견적 조건 확인 1',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.2.견적조건확인2.webp',
    title: '견적 조건 확인 2',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.3.1.견적조건확인3.webp',
    title: '견적 조건 확인 3',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.3.2.보험내용변경.webp',
    title: '보험 내용 변경 3',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.3.3.잔존가치비율변경.webp',
    title: '잔존 가치 비율 변경',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.4.2.탁송지선택.webp',
    title: '탁송지 선택',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.4.견적조건확인4.webp',
    title: '견적 조건 확인 4',
  },
  {
    imgPath: '/hanaCap/hotdeal/2.5.견적서조회및다운로드.webp',
    title: '견적서 조회 및 다운로드',
  },

]
// End of Swiper


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

