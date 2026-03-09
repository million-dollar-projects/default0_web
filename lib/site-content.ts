export const locales = ["en", "zh-CN", "ko", "ja", "de", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
  ko: "한국어",
  ja: "日本語",
  de: "Deutsch",
  es: "Español"
};

export type Feature = {
  title: string;
  description: string;
};

export type Scenario = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SiteContent = {
  brand: string;
  nav: {
    features: string;
    scenarios: string;
    faq: string;
  };
  labels: {
    testimonials: string;
    faq: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    helper: string;
    primaryCta: string;
    secondaryCta: string;
  };
  values: {
    title: string;
    items: { title: string; description: string }[];
  };
  featureTitle: string;
  features: Feature[];
  scenariosTitle: string;
  scenarios: Scenario[];
  comparison: {
    title: string;
    items: string[];
    conclusion: string;
  };
  testimonials: Testimonial[];
  faqs: FAQ[];
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
    helper: string;
  };
  footer: {
    tagline: string;
    links: string[];
    copyright: string;
  };
};

const zhCN: SiteContent = {
  brand: "Default0",
  nav: { features: "功能", scenarios: "场景", faq: "FAQ" },
  labels: { testimonials: "用户评价", faq: "FAQ", language: "语言" },
  hero: {
    badge: "macOS 菜单栏自动静音工具",
    title: "在声音出事前，先把尴尬静音。",
    description:
      "Default0 会在最容易外放翻车的瞬间先一步把系统音量拉到 0，帮你在会议、工位、图书馆和深夜环境里，稳住每一次开声风险。",
    helper: "轻量常驻菜单栏｜开机自启｜本地运行",
    primaryCta: "免费下载（macOS）",
    secondaryCta: "查看触发规则"
  },
  values: {
    title: "不是手动补救，而是自动预防",
    items: [
      { title: "关键时刻自动静音", description: "解锁、输出设备变化、蓝牙断连、首次登录、应用激活时自动执行静音。" },
      { title: "把失误窗口压缩到 0", description: "还没来得及反应，Default0 已先完成静音，减少突发外放的空窗期。" },
      { title: "低打扰守护体验", description: "菜单栏一键管理，支持暂停守护。需要时开启，日常几乎无感。" }
    ]
  },
  featureTitle: "围绕避免突发外放设计的每一条规则",
  features: [
    { title: "解锁静音", description: "屏幕重新解锁后自动静音，防止回到电脑第一秒就意外外放。" },
    { title: "输出切换静音", description: "默认输出设备变化时立即静音，避免耳机与扬声器切换造成泄露。" },
    { title: "蓝牙断开静音", description: "蓝牙音频设备断开时先静音，避免声音回切到外放。" },
    { title: "首次登录静音", description: "系统启动后首次登录阶段自动静音，降低开机误触风险。" },
    { title: "打开应用静音", description: "可设定会议、视频、社交、娱乐等高风险应用激活即静音。" },
    { title: "快速手动控制", description: "支持立即静音与取消静音，临时场景一键接管。" },
    { title: "个性化设置", description: "支持开机启动、主题切换、Dock 图标控制和多语言界面。" }
  ],
  scenariosTitle: "这些时刻，最需要 Default0",
  scenarios: [
    { title: "会议前后切换", description: "刚结束通话马上进下一场会议，避免平台或网页自动外放。" },
    { title: "工位与公共空间", description: "开放办公室和图书馆里，一次外放就足够尴尬。" },
    { title: "耳机不稳定连接", description: "蓝牙耳机偶发断连时，在回切扬声器前先静音。" },
    { title: "高频多任务人群", description: "频繁切 App、切设备、锁屏和解锁，更需要自动规则兜底。" }
  ],
  comparison: {
    title: "为什么不是记得手动调小音量就够了？",
    items: ["手动方案依赖记忆，自动方案依赖规则。", "手动总是滞后，自动可以前置。", "手动每次都要操作，自动一次设置长期受益。"],
    conclusion: "Default0 不是替你控制声音，而是替你守住最容易失误的瞬间。"
  },
  testimonials: [
    { quote: "以前切设备最怕声音突然外放。现在交给 Default0，开会前心里更踏实。", name: "陈宁", role: "产品经理" },
    { quote: "我在共享办公区工作，误触一次就社死。这个工具基本帮我把风险清空。", name: "李岚", role: "独立设计师" },
    { quote: "不用盯着菜单栏音量了。规则开好后，它像一个很安静的安全网。", name: "赵铭", role: "前端工程师" }
  ],
  faqs: [
    { question: "Default0 会一直占用很多资源吗？", answer: "不会。它是为菜单栏常驻设计的轻量工具，日常低打扰。" },
    { question: "我可以只开部分规则吗？", answer: "可以。每条自动静音规则都支持独立开启或关闭。" },
    { question: "我能指定某些应用触发静音吗？", answer: "可以。你可以选择一个或多个应用，在其激活时自动静音。" },
    { question: "支持开机后自动启动吗？", answer: "支持，可在设置中启用开机启动。" },
    { question: "不想一直生效怎么办？", answer: "支持一键暂停守护，随时恢复。" },
    { question: "支持多语言吗？", answer: "支持简体中文、英文、日文、韩文、德文、西班牙文等。" }
  ],
  cta: {
    title: "别等外放发生，再去补救。",
    description: "从现在开始，把忘记静音的风险交给 Default0。",
    primary: "立即下载 Default0",
    secondary: "查看使用说明",
    helper: "适用于 macOS｜菜单栏应用｜开箱即用"
  },
  footer: {
    tagline: "Default0，自动静音守护。",
    links: ["功能", "更新日志", "常见问题", "隐私说明", "联系我们"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

const en: SiteContent = {
  brand: "Default0",
  nav: { features: "Features", scenarios: "Scenarios", faq: "FAQ" },
  labels: { testimonials: "Testimonials", faq: "FAQ", language: "Language" },
  hero: {
    badge: "macOS menu bar auto-mute utility",
    title: "Mute the awkward moment before it happens.",
    description:
      "Default0 automatically sets your system volume to zero in high-risk moments, so meetings, offices, libraries, and late nights stay interruption-free.",
    helper: "Lightweight menu bar app | Auto launch | Local runtime",
    primaryCta: "Free Download (macOS)",
    secondaryCta: "View Trigger Rules"
  },
  values: {
    title: "Not manual recovery, but automatic prevention",
    items: [
      {
        title: "Auto-mute at critical moments",
        description: "Unlock, output changes, Bluetooth disconnect, first login, and app activation can all trigger mute."
      },
      {
        title: "Shrink the risk window to zero",
        description: "Before you can react, Default0 acts first to prevent accidental speaker playback."
      },
      {
        title: "Low-noise protection",
        description: "Simple menu bar controls with one-tap pause. Turn it on when needed and keep daily usage unobtrusive."
      }
    ]
  },
  featureTitle: "Every rule is designed to prevent unexpected speaker output",
  features: [
    {
      title: "Mute on unlock",
      description: "Automatically mutes after your screen is unlocked so your first click does not become an accidental out-loud moment."
    },
    {
      title: "Mute on output switch",
      description: "When the default audio output changes, Default0 mutes immediately to avoid leaks during speaker-headphone transitions."
    },
    {
      title: "Mute on Bluetooth disconnect",
      description: "If a Bluetooth audio device disconnects, audio is muted before it falls back to speaker output."
    },
    {
      title: "Mute on first login",
      description: "During the first login phase after startup, mute is applied to reduce accidental playback risk."
    },
    {
      title: "Mute on app open",
      description: "Set high-risk apps such as meeting, video, social, or entertainment apps to auto-mute when they become active."
    },
    {
      title: "Quick manual control",
      description: "Supports instant mute and unmute so you can take over quickly in temporary scenarios."
    },
    {
      title: "Personalized settings",
      description: "Configure launch at startup, theme switching, Dock icon visibility, and multilingual interface options."
    }
  ],
  scenariosTitle: "When Default0 matters most",
  scenarios: [
    {
      title: "Back-to-back meetings",
      description: "Moving from one call to another? Avoid sudden speaker playback from meeting apps or browser tabs."
    },
    {
      title: "Open offices and public spaces",
      description: "In coworking spaces and libraries, a single accidental playback can be immediately noticeable."
    },
    {
      title: "Unstable headphone connections",
      description: "When Bluetooth headphones randomly disconnect, Default0 mutes before audio jumps to speakers."
    },
    {
      title: "Heavy multitasking",
      description: "If you constantly switch apps, devices, and lock-unlock states, automation prevents missed mute states."
    }
  ],
  comparison: {
    title: "Why not just remember to lower volume manually?",
    items: [
      "Manual behavior depends on memory; automation depends on rules.",
      "Manual action is delayed; automation is proactive.",
      "Manual control repeats every time; automation pays off after setup."
    ],
    conclusion: "Default0 does not replace your control. It protects your most error-prone moments."
  },
  testimonials: [
    {
      quote: "Device switching used to be my biggest risk. With Default0, I no longer worry before meetings.",
      name: "Nora Chen",
      role: "Product Manager"
    },
    {
      quote: "I work in shared offices. This tool basically removed the chance of accidental loud playback.",
      name: "Liam Lee",
      role: "Independent Designer"
    },
    {
      quote: "I no longer stare at the volume icon. Once rules are set, it feels like a quiet safety net.",
      name: "Ming Zhao",
      role: "Frontend Engineer"
    }
  ],
  faqs: [
    {
      question: "Will Default0 consume a lot of system resources?",
      answer: "No. It is built as a lightweight menu bar utility focused on low daily overhead."
    },
    {
      question: "Can I enable only selected rules?",
      answer: "Yes. Every auto-mute rule can be enabled or disabled independently."
    },
    {
      question: "Can I set specific apps to trigger mute?",
      answer: "Yes. You can select one or more apps and mute automatically when they become active."
    },
    {
      question: "Can it launch at startup?",
      answer: "Yes. You can enable launch at startup in settings."
    },
    {
      question: "What if I do not want it active all the time?",
      answer: "You can pause protection with one click and resume anytime."
    },
    {
      question: "Does it support multiple languages?",
      answer: "Yes. It supports Simplified Chinese, English, Japanese, Korean, German, Spanish, and more."
    }
  ],
  cta: {
    title: "Don’t wait for accidental playback.",
    description: "Hand over mute-risk moments to Default0 from now on.",
    primary: "Download Default0",
    secondary: "Read Documentation",
    helper: "For macOS | Menu bar app | Ready out of the box"
  },
  footer: {
    tagline: "Default0, automatic mute protection.",
    links: ["Features", "Changelog", "FAQ", "Privacy", "Contact"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

const ko: SiteContent = {
  brand: "Default0",
  nav: { features: "기능", scenarios: "사용 사례", faq: "FAQ" },
  labels: { testimonials: "사용자 후기", faq: "FAQ", language: "언어" },
  hero: {
    badge: "macOS 메뉴 막대 자동 음소거 도구",
    title: "사고 나기 전에 먼저 음소거하세요.",
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
    { quote: "이제 볼륨 아이콘을 계속 확인하지 않아도 됩니다. 조용한 안전망 같아요.", name: "서윤", role: "프런트엔드 엔지니어" }
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
    links: ["기능", "업데이트 내역", "FAQ", "개인정보", "문의"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

const ja: SiteContent = {
  brand: "Default0",
  nav: { features: "機能", scenarios: "利用シーン", faq: "FAQ" },
  labels: { testimonials: "ユーザーの声", faq: "FAQ", language: "言語" },
  hero: {
    badge: "macOS メニューバー自動ミュートツール",
    title: "音が漏れる前に、先にミュート。",
    description:
      "Default0 はリスクが高い瞬間にシステム音量を自動で 0 にし、会議中、オフィス、図書館、深夜環境での突然の外部再生を防ぎます。",
    helper: "軽量メニューバー常駐 | 自動起動 | ローカル実行",
    primaryCta: "無料ダウンロード (macOS)",
    secondaryCta: "トリガールールを見る"
  },
  values: {
    title: "手動リカバリーではなく、自動予防",
    items: [
      {
        title: "重要な瞬間に自動ミュート",
        description: "画面ロック解除、出力変更、Bluetooth 切断、初回ログイン、アプリ起動時に自動ミュートします。"
      },
      {
        title: "ミスの空白時間をほぼゼロに",
        description: "反応する前に Default0 が先に動作し、意図しないスピーカー再生を抑えます。"
      },
      {
        title: "低干渉の保護体験",
        description: "メニューバーでシンプルに操作でき、ワンクリックで一時停止も可能です。"
      }
    ]
  },
  featureTitle: "突然の外部再生を防ぐために設計されたすべてのルール",
  features: [
    { title: "ロック解除時にミュート", description: "画面ロック解除直後に自動ミュートし、復帰直後の誤再生を防ぎます。" },
    { title: "出力切替時にミュート", description: "既定の音声出力が変わると即時ミュートし、イヤホンとスピーカー切替時の漏れを防ぎます。" },
    { title: "Bluetooth 切断時にミュート", description: "Bluetooth 音声機器が切断された際、スピーカーへ戻る前にミュートします。" },
    { title: "初回ログイン時にミュート", description: "起動後の初回ログイン段階で自動ミュートし、起動直後の誤操作リスクを減らします。" },
    { title: "アプリ起動時にミュート", description: "会議、動画、SNS、エンタメなど高リスクアプリを起動時に自動ミュートできます。" },
    { title: "素早い手動操作", description: "即時ミュートと解除に対応し、一時的な場面でもすばやく制御できます。" },
    { title: "パーソナライズ設定", description: "自動起動、テーマ切替、Dock アイコン表示、多言語 UI を設定できます。" }
  ],
  scenariosTitle: "Default0 が特に役立つ場面",
  scenarios: [
    { title: "連続ミーティングの切替", description: "通話終了後すぐ次の会議に入るとき、アプリやブラウザの自動再生を防ぎます。" },
    { title: "オフィスや公共空間", description: "オープンオフィスや図書館では、1回の外部再生でもすぐ目立ちます。" },
    { title: "不安定なヘッドホン接続", description: "Bluetooth ヘッドホンが切れた瞬間、スピーカーへ切替わる前にミュートします。" },
    { title: "高頻度マルチタスク", description: "アプリ、デバイス、ロック状態を頻繁に切り替える人ほど自動ルールの恩恵が大きいです。" }
  ],
  comparison: {
    title: "なぜ手動で音量を下げるだけでは不十分なのか？",
    items: ["手動は記憶に依存し、自動はルールに依存します。", "手動は遅れがちで、自動は先回りできます。", "手動は毎回操作が必要で、自動は一度の設定で継続的に効果があります。"],
    conclusion: "Default0 はあなたの操作を奪うのではなく、ミスしやすい瞬間を守ります。"
  },
  testimonials: [
    { quote: "デバイス切替時の不安がほぼなくなりました。会議前でも安心感があります。", name: "高橋 直子", role: "プロダクトマネージャー" },
    { quote: "コワーキングで働いていますが、うっかり外部再生のリスクがかなり減りました。", name: "伊藤 亮", role: "デザイナー" },
    { quote: "音量アイコンを監視しなくてよくなりました。静かなセーフティネットです。", name: "佐藤 美咲", role: "フロントエンドエンジニア" }
  ],
  faqs: [
    { question: "Default0 はリソースを多く使いますか？", answer: "いいえ。メニューバー常駐向けに最適化された軽量ツールです。" },
    { question: "一部のルールだけ有効にできますか？", answer: "はい。各自動ミュートルールを個別にオン・オフできます。" },
    { question: "特定アプリだけトリガーにできますか？", answer: "はい。1つ以上のアプリを指定し、アクティブ時に自動ミュートできます。" },
    { question: "起動時に自動開始できますか？", answer: "はい。設定で自動起動を有効にできます。" },
    { question: "常時有効にしたくない場合は？", answer: "ワンクリックで保護を一時停止し、いつでも再開できます。" },
    { question: "多言語に対応していますか？", answer: "はい。日本語、英語、中国語、韓国語、ドイツ語、スペイン語などに対応しています。" }
  ],
  cta: {
    title: "外部再生が起きてから対処しない。",
    description: "これからはミュート忘れのリスクを Default0 に任せましょう。",
    primary: "Default0 をダウンロード",
    secondary: "使い方を見る",
    helper: "macOS 対応 | メニューバーアプリ | すぐ使える"
  },
  footer: {
    tagline: "Default0、自動ミュート保護。",
    links: ["機能", "更新履歴", "FAQ", "プライバシー", "お問い合わせ"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

const de: SiteContent = {
  brand: "Default0",
  nav: { features: "Funktionen", scenarios: "Szenarien", faq: "FAQ" },
  labels: { testimonials: "Stimmen", faq: "FAQ", language: "Sprache" },
  hero: {
    badge: "Automatische Stummschaltung für die macOS-Menüleiste",
    title: "Stumm, bevor es unangenehm wird.",
    description:
      "Default0 setzt die Systemlautstärke in heiklen Momenten automatisch auf 0 und verhindert so ungewollte Lautsprecher-Wiedergabe im Meeting, im Büro, in der Bibliothek oder spät abends.",
    helper: "Leichtgewichtig in der Menüleiste | Autostart | Läuft lokal",
    primaryCta: "Kostenlos laden (macOS)",
    secondaryCta: "Automatik-Regeln ansehen"
  },
  values: {
    title: "Nicht nachbessern, sondern vorbeugen",
    items: [
      {
        title: "Automatisch stumm in kritischen Momenten",
        description: "Beim Entsperren, beim Wechsel des Ausgabegeräts, bei Bluetooth-Abbruch, beim ersten Login und bei App-Aktivierung wird automatisch stumm geschaltet."
      },
      {
        title: "Das Fehlerfenster auf null verkleinern",
        description: "Bevor du reagieren kannst, greift Default0 bereits ein und verhindert spontane Wiedergabe über Lautsprecher."
      },
      {
        title: "Schutz ohne zusätzlichen Stress",
        description: "Klare Steuerung über die Menüleiste, inklusive Ein-Klick-Pause, wenn du sie brauchst."
      }
    ]
  },
  featureTitle: "Jede Regel ist darauf ausgelegt, peinliche Lautsprecher-Momente zu vermeiden",
  features: [
    { title: "Stumm beim Entsperren", description: "Nach dem Entsperren wird automatisch stumm geschaltet, damit der erste Klick nicht direkt hörbar ist." },
    { title: "Stumm bei Ausgabewechsel", description: "Wenn sich das Standard-Ausgabegerät ändert, wird sofort stumm geschaltet, um Leaks beim Wechsel zu vermeiden." },
    { title: "Stumm bei Bluetooth-Trennung", description: "Wenn ein Bluetooth-Audiogerät getrennt wird, schaltet Default0 stumm, bevor der Ton auf Lautsprecher zurückfällt." },
    { title: "Stumm beim ersten Login", description: "Direkt nach dem Systemstart wird beim ersten Login automatisch stumm geschaltet, um frühe Fehlwiedergaben zu reduzieren." },
    { title: "Stumm beim App-Start", description: "Lege sensible Apps wie Meetings, Video, Social Media oder Entertainment fest und lasse sie bei Aktivierung automatisch stummschalten." },
    { title: "Schnelle manuelle Kontrolle", description: "Sofort stummschalten oder Ton wieder freigeben, wenn du kurzfristig selbst übernehmen möchtest." },
    { title: "Persönliche Einstellungen", description: "Autostart, Theme-Wechsel, Dock-Icon-Sichtbarkeit und mehrsprachige Oberfläche lassen sich flexibel konfigurieren." }
  ],
  scenariosTitle: "In diesen Situationen zeigt Default0 seinen größten Mehrwert",
  scenarios: [
    { title: "Zwischen Meetings wechseln", description: "Du gehst direkt vom einen in den nächsten Call? Verhindere spontane Wiedergabe aus Apps oder Browser-Tabs." },
    { title: "Büro und öffentliche Räume", description: "In Open Spaces und Bibliotheken fällt schon eine einzige Fehlwiedergabe sofort auf." },
    { title: "Instabile Kopfhörer-Verbindung", description: "Wenn Bluetooth-Kopfhörer kurz abbrechen, wird vor dem Rückfall auf Lautsprecher sofort stumm geschaltet." },
    { title: "Intensives Multitasking", description: "Wer oft Apps, Geräte und Sperrzustände wechselt, profitiert besonders von klaren Automatik-Regeln." }
  ],
  comparison: {
    title: "Warum reicht es nicht, einfach manuell leiser zu stellen?",
    items: ["Manuell hängt vom Erinnern ab, automatisch von verlässlichen Regeln.", "Manuell reagiert zu spät, automatisch greift vorher ein.", "Manuell kostet jedes Mal Aufmerksamkeit, automatisch wirkt nach einmaligem Setup dauerhaft."],
    conclusion: "Default0 nimmt dir die Kontrolle nicht ab, sondern schützt genau die Momente, in denen Fehler am ehesten passieren."
  },
  testimonials: [
    { quote: "Gerätewechsel war früher mein größtes Risiko. Mit Default0 starte ich deutlich entspannter in Meetings.", name: "Nina Weber", role: "Produktmanagerin" },
    { quote: "Im Coworking reicht ein einziger Fehler. Mit Default0 ist dieses Risiko praktisch verschwunden.", name: "Lukas Brandt", role: "Designer" },
    { quote: "Ich muss das Lautstärke-Icon nicht mehr ständig kontrollieren. Es fühlt sich wie ein stilles Sicherheitsnetz an.", name: "Mara Klein", role: "Frontend Engineer" }
  ],
  faqs: [
    { question: "Verbraucht Default0 viele Ressourcen?", answer: "Nein. Es ist als schlankes Menüleisten-Tool mit geringem Laufzeitaufwand ausgelegt." },
    { question: "Kann ich nur bestimmte Regeln aktivieren?", answer: "Ja. Jede Automatik-Regel kann einzeln aktiviert oder deaktiviert werden." },
    { question: "Kann ich bestimmte Apps als Trigger festlegen?", answer: "Ja. Du kannst eine oder mehrere Apps auswählen, die bei Aktivierung automatisch stummschalten." },
    { question: "Unterstützt es Autostart?", answer: "Ja. In den Einstellungen kannst du Start beim Anmelden aktivieren." },
    { question: "Was, wenn ich es nicht ständig aktiv haben möchte?", answer: "Du kannst den Schutz mit einem Klick pausieren und jederzeit fortsetzen." },
    { question: "Gibt es Mehrsprachen-Unterstützung?", answer: "Ja. Unter anderem Deutsch, Englisch, Chinesisch, Japanisch, Koreanisch und Spanisch werden unterstützt." }
  ],
  cta: {
    title: "Warte nicht auf den peinlichen Moment.",
    description: "Überlass das Risiko vergessener Stummschaltung ab jetzt einfach Default0.",
    primary: "Default0 herunterladen",
    secondary: "Kurzanleitung ansehen",
    helper: "Für macOS | Menüleisten-App | Sofort einsatzbereit"
  },
  footer: {
    tagline: "Default0, automatischer Stummschutz.",
    links: ["Funktionen", "Changelog", "FAQ", "Datenschutz", "Kontakt"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

const es: SiteContent = {
  brand: "Default0",
  nav: { features: "Funciones", scenarios: "Escenarios", faq: "FAQ" },
  labels: { testimonials: "Testimonios", faq: "FAQ", language: "Idioma" },
  hero: {
    badge: "Auto-silencio inteligente para la barra de menús de macOS",
    title: "Silencio antes de pasar vergüenza.",
    description:
      "Default0 baja el volumen del sistema a 0 justo en los momentos de mayor riesgo y evita salidas inesperadas por altavoz en reuniones, oficina, biblioteca o de noche.",
    helper: "Ligero en barra de menús | Inicio automático | Funciona en local",
    primaryCta: "Descarga gratis (macOS)",
    secondaryCta: "Ver reglas automáticas"
  },
  values: {
    title: "No es reaccionar tarde, es prevenir a tiempo",
    items: [
      {
        title: "Silencio automático en momentos críticos",
        description: "Al desbloquear, cambiar la salida de audio, desconectar Bluetooth, iniciar sesión por primera vez o activar apps, se aplica silencio automático."
      },
      {
        title: "Reducir la ventana de error a cero",
        description: "Antes de que puedas reaccionar, Default0 ya actúa para evitar que el sonido salga por altavoz por accidente."
      },
      {
        title: "Protección sin fricción",
        description: "Control claro desde la barra de menús con pausa en un clic cuando lo necesites."
      }
    ]
  },
  featureTitle: "Cada regla está pensada para evitar esos audios inesperados que te exponen",
  features: [
    { title: "Silencio al desbloquear", description: "Tras desbloquear la pantalla, se aplica silencio automático para evitar reproducciones accidentales al volver al equipo." },
    { title: "Silencio al cambiar salida", description: "Cuando cambia la salida de audio predeterminada, se silencia al instante para evitar fugas entre auriculares y altavoz." },
    { title: "Silencio al desconectar Bluetooth", description: "Si un dispositivo Bluetooth se desconecta, se silencia antes de que el audio vuelva al altavoz." },
    { title: "Silencio en primer inicio", description: "Durante la primera fase de inicio de sesión tras arrancar el sistema, se aplica silencio para reducir riesgos tempranos." },
    { title: "Silencio al abrir app", description: "Puedes definir apps de alto riesgo como reuniones, video, redes sociales o entretenimiento para silenciar al activarse." },
    { title: "Control manual rápido", description: "Silenciar y quitar silencio al instante para retomar el control en situaciones puntuales." },
    { title: "Configuración personalizada", description: "Incluye inicio automático, cambio de tema, visibilidad de icono en Dock e interfaz multilingüe." }
  ],
  scenariosTitle: "Momentos en los que más necesitas a Default0",
  scenarios: [
    { title: "Cambio entre reuniones", description: "Cuando sales de una llamada y entras en otra, evita reproducciones automáticas de plataformas o pestañas del navegador." },
    { title: "Oficina y espacios públicos", description: "En oficinas abiertas y bibliotecas, una sola reproducción accidental se nota de inmediato." },
    { title: "Conexión inestable de auriculares", description: "Si los auriculares Bluetooth se desconectan, se silencia antes del retorno al altavoz." },
    { title: "Usuarios de multitarea intensa", description: "Si cambias constantemente de apps, dispositivos y bloqueo, las reglas automáticas evitan olvidos." }
  ],
  comparison: {
    title: "¿Por qué no basta con “acordarte” de bajar el volumen?",
    items: ["Lo manual depende de tu memoria; lo automático depende de reglas.", "Lo manual llega tarde; lo automático se adelanta.", "Lo manual exige atención cada vez; lo automático te protege tras una sola configuración."],
    conclusion: "Default0 no te quita el control: te cubre justo en los momentos en los que más fácil es fallar."
  },
  testimonials: [
    { quote: "Cambiar de dispositivo era mi mayor dolor de cabeza. Ahora entro a reuniones con mucha más tranquilidad.", name: "Carla Moreno", role: "Product Manager" },
    { quote: "Trabajo en espacios compartidos y el riesgo de audio accidental prácticamente desapareció.", name: "Diego León", role: "Diseñador" },
    { quote: "Ya no vivo pendiente del icono de volumen. Se siente como una red de seguridad silenciosa.", name: "Lucía Vega", role: "Ingeniera Frontend" }
  ],
  faqs: [
    { question: "¿Default0 consume muchos recursos?", answer: "No. Es una utilidad ligera para barra de menús con bajo impacto diario." },
    { question: "¿Puedo activar solo algunas reglas?", answer: "Sí. Cada regla de auto-silencio se puede activar o desactivar de forma independiente." },
    { question: "¿Puedo elegir apps específicas como disparador?", answer: "Sí. Puedes seleccionar una o varias apps para silenciar automáticamente al activarse." },
    { question: "¿Se puede iniciar automáticamente al encender?", answer: "Sí. Puedes activar el inicio automático desde ajustes." },
    { question: "¿Qué pasa si no quiero que esté activo siempre?", answer: "Puedes pausar la protección con un clic y reanudarla cuando quieras." },
    { question: "¿Soporta varios idiomas?", answer: "Sí. Incluye español, inglés, chino simplificado, japonés, coreano, alemán y más." }
  ],
  cta: {
    title: "No esperes al susto para reaccionar.",
    description: "Desde hoy, deja el riesgo de olvidar el silencio en manos de Default0.",
    primary: "Descargar Default0",
    secondary: "Ver guía rápida",
    helper: "Para macOS | App de barra de menús | Lista para usar"
  },
  footer: {
    tagline: "Default0, protección automática de silencio.",
    links: ["Funciones", "Registro de cambios", "FAQ", "Privacidad", "Contacto"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

const localeContent: Record<Locale, SiteContent> = {
  en,
  "zh-CN": zhCN,
  ko,
  ja,
  de,
  es
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: string): SiteContent {
  if (isLocale(locale)) {
    return localeContent[locale];
  }
  return zhCN;
}
