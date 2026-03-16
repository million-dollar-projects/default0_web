import type { SiteContent } from "@/lib/locales/types";
export const ko: SiteContent = {
  brand: "Default0",
  nav: { features: "기능", scenarios: "사용 사례", faq: "FAQ" },
  labels: { testimonials: "사용자 후기", faq: "FAQ", language: "언어" },
  hero: {
    badge: "macOS 메뉴 막대 자동 음소거 도구",
    title: "자동 음소거로, 갑작스러운 외부 재생도 더 이상 당신을 난처하게 만들지 않습니다.",
    description:
      "Default0는 위험한 순간에 시스템 볼륨을 먼저 0으로 내려 회의실, 사무실, 도서관, 늦은 밤 환경에서 갑작스러운 외부 출력 실수를 막아줍니다.",
    helper: "가벼운 메뉴 막대 상주 | 자동 시작 | 로컬 실행",
    primaryCta: "무료 다운로드 (macOS)",
    secondaryCta: "트리거 규칙 보기"
  },
  values: {
    title: "수동 대처가 아니라 자동 예방",
    items: [
      {
        title: "중요한 순간 자동 음소거",
        description: "잠금 해제, 출력 장치 변경, 블루투스 해제, 첫 로그인, 앱 활성화 시 자동으로 음소거됩니다."
      },
      {
        title: "실수 구간을 0에 가깝게",
        description: "내가 반응하기 전에 Default0가 먼저 실행되어 갑작스러운 스피커 재생을 줄입니다."
      },
      {
        title: "방해가 적은 보호 경험",
        description: "메뉴 막대에서 간단히 제어하고 원클릭 일시정지도 지원하여 필요할 때만 켤 수 있습니다."
      }
    ]
  },
  featureTitle: "예상치 못한 외부 출력을 막기 위해 설계된 모든 규칙",
  features: [
    { title: "잠금 해제 시 음소거", description: "화면 잠금 해제 직후 자동 음소거되어 복귀 직후의 실수 재생을 방지합니다." },
    { title: "출력 전환 시 음소거", description: "기본 오디오 출력이 바뀌면 즉시 음소거되어 이어폰-스피커 전환 누출을 막습니다." },
    { title: "블루투스 해제 시 음소거", description: "블루투스 오디오 장치가 끊기면 스피커로 전환되기 전에 먼저 음소거합니다." },
    { title: "첫 로그인 시 음소거", description: "부팅 후 첫 로그인 단계에서 자동 음소거되어 초기 오작동 위험을 줄입니다." },
    { title: "앱 실행 시 음소거", description: "회의, 영상, 소셜, 엔터테인먼트 등 고위험 앱 활성화 시 자동 음소거를 설정할 수 있습니다." },
    { title: "빠른 수동 제어", description: "즉시 음소거 또는 해제를 지원하여 임시 상황에서도 빠르게 제어할 수 있습니다." },
    { title: "개인화 설정", description: "자동 시작, 테마 전환, Dock 아이콘 표시, 다국어 인터페이스를 설정할 수 있습니다." }
  ],
  scenariosTitle: "이런 순간에 Default0가 특히 필요합니다",
  scenarios: [
    { title: "연속 회의 전환", description: "한 통화를 끝내고 바로 다음 회의로 이동할 때 앱이나 웹페이지의 돌발 재생을 막습니다." },
    { title: "사무실과 공용 공간", description: "오픈 오피스나 도서관에서는 한 번의 실수 재생도 크게 눈에 띕니다." },
    { title: "불안정한 이어폰 연결", description: "블루투스 이어폰이 끊기는 순간 스피커로 넘어가기 전에 자동 음소거합니다." },
    { title: "고빈도 멀티태스킹", description: "앱, 장치, 잠금 상태를 자주 바꾸는 사용자일수록 자동 규칙의 효과가 큽니다." }
  ],
  comparison: {
    title: "왜 수동으로 볼륨을 줄이는 것만으로는 부족할까요?",
    items: ["수동 방식은 기억에 의존하고, 자동 방식은 규칙에 의존합니다.", "수동 조작은 항상 늦고, 자동은 선제적으로 동작합니다.", "수동은 매번 반복되지만, 자동은 한 번 설정으로 계속 이득을 줍니다."],
    conclusion: "Default0는 당신의 제어를 대신하지 않습니다. 가장 실수하기 쉬운 순간을 지켜줍니다."
  },
  testimonials: [
    { quote: "장치 전환 때 갑자기 소리가 나올까 늘 불안했는데, 이제는 회의 전에 훨씬 안심됩니다.", name: "민서", role: "프로덕트 매니저" },
    { quote: "공유 오피스에서 일하는데 실수 재생 위험이 거의 사라졌어요.", name: "지훈", role: "디자이너" },
    { quote: "이제 볼륨 아이콘을 계속 확인하지 않아도 됩니다. 조용한 안전망 같아요.", name: "서윤", role: "프런트엔드 엔지니어" },
    { quote: "회의 앱과 편집 앱을 자주 오가는데, 실수 재생에 대한 불안이 거의 없어졌습니다.", name: "가람", role: "콘텐츠 크리에이터" },
    { quote: "잠금 해제할 때마다 볼륨부터 확인하던 습관이 사라졌어요.", name: "하린", role: "마케팅 매니저" }
  ],
  faqs: [
    { question: "Default0는 리소스를 많이 사용하나요?", answer: "아니요. 메뉴 막대 상주를 전제로 만든 경량 도구라 일상 사용 부담이 작습니다." },
    { question: "일부 규칙만 켤 수 있나요?", answer: "네. 모든 자동 음소거 규칙을 각각 켜고 끌 수 있습니다." },
    { question: "특정 앱만 음소거 트리거로 지정할 수 있나요?", answer: "네. 하나 이상의 앱을 지정해 활성화 시 자동 음소거할 수 있습니다." },
    { question: "부팅 시 자동 실행을 지원하나요?", answer: "지원합니다. 설정에서 자동 시작을 켤 수 있습니다." },
    { question: "항상 동작하지 않게 할 수 있나요?", answer: "원클릭 일시정지를 지원하며 언제든 다시 활성화할 수 있습니다." },
    { question: "다국어를 지원하나요?", answer: "네. 한국어, 영어, 중국어, 일본어, 독일어, 스페인어 등을 지원합니다." }
  ],
  cta: {
    title: "실수 재생 후에 대응하지 마세요.",
    description: "지금부터 음소거 리스크를 Default0에 맡기세요.",
    primary: "Default0 다운로드",
    secondary: "사용 가이드 보기",
    helper: "macOS 전용 | 메뉴 막대 앱 | 바로 사용 가능"
  },
  footer: {
    tagline: "Default0, 자동 음소거 보호.",
    links: ["기능", "피드백", "업데이트 내역", "FAQ", "개인정보", "문의"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

