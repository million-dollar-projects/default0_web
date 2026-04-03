import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/site-chrome";
import { absoluteUrl, buildAvailableLanguageAlternates, buildBreadcrumbList } from "@/lib/seo";
import { Locale, getSiteContent, isLocale, locales } from "@/lib/site-content";
import versionData from "@/public/version.json";

type PageProps = {
  params: { locale: string };
};

type PageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  keywords: string[];
  badge: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  problemTitle: string;
  problemBody: string;
  problemLinkLead: string;
  problemLinkLabel: string;
  problemLinkTail: string;
  clarificationTitle: string;
  clarificationBody: string;
  triggersTitle: string;
  triggerCta: string;
  comparisonTitle: string;
  comparisonPoints: string[];
  faqTitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaSecondary: string;
  breadcrumbLabel: string;
  faqItems: Array<{ question: string; answer: string }>;
  triggerCards: Array<{ title: string; body: string; slug: string }>;
};

type NextStepCopy = {
  title: string;
  description: string;
  cards: Array<{ title: string; body: string; slug: string }>;
  cta: string;
};

const latestVersion = String(versionData.latest.version).replace(/^v/, "");
const DOWNLOAD_URL = `https://github.com/million-dollar-projects/default0_web/releases/download/v${latestVersion}/default0-v${latestVersion}.dmg`;
const supportedLocales = ["en", "zh-CN", "ko", "ja", "de", "es"] as const;

const pageCopyByLocale: Record<(typeof supportedLocales)[number], PageCopy> = {
  en: {
    metadataTitle: "Mac Auto Mute for Default0: Automatic Mute for Mac to Prevent Speaker Playback",
    metadataDescription:
      "Mac auto mute for Default0 helps you mute automatically on unlock, output changes, Bluetooth disconnects, Wi-Fi changes, and app launches so your Mac does not play unexpectedly through speakers.",
    keywords: ["mac auto mute", "automatic mute for mac", "mac auto mute app", "prevent accidental speaker playback on mac"],
    badge: "Mac auto mute guide for speaker-output protection",
    heroTitle: "Mac Auto Mute for safer meetings, shared spaces, and sudden device changes",
    heroDescription:
      "Mac auto mute means your Mac mutes itself before speaker playback can surprise you. Default0 is a Mac auto mute app that helps prevent accidental speaker output on unlock, output changes, Bluetooth disconnects, Wi-Fi changes, and meeting-app launches. If your goal is automatic mute for Mac during real work transitions, this page shows the trigger set that matters.",
    primaryCta: "Download Default0",
    secondaryCta: "Read supporting guides",
    problemTitle: "What problem Mac auto mute actually solves",
    problemBody:
      "Most accidental speaker playback on macOS happens between tasks, not during calm moments. You unlock your Mac, change headphones, reconnect a dock, move between networks, or open a meeting app while the old volume state is still active. Default0 moves the mute action to those trigger points so you do not need to rely on last-second memory.",
    problemLinkLead: "If you want a practical setup sequence, start with the ",
    problemLinkLabel: "three-rule meeting workflow",
    problemLinkTail: " and then expand to the triggers that match your device setup.",
    clarificationTitle: "Not a microphone mute tool",
    clarificationBody:
      "Some searches for “auto mute on Mac” are really about microphone privacy or mic mute. Default0 is different. It protects your speaker and output-volume state, so sound does not suddenly play through your Mac speakers in offices, meeting rooms, libraries, or late-night home setups.",
    triggersTitle: "The trigger set behind automatic mute for Mac",
    triggerCta: "Read the guide",
    comparisonTitle: "Why Default0 works better than manual mute checks",
    comparisonPoints: [
      "Manual mute depends on memory and timing. Mac auto mute depends on rules.",
      "Manual checks happen after you remember. Default0 acts at the trigger point first.",
      "Automatic mute for Mac is most useful when unlocks, device changes, and meetings happen back to back."
    ],
    faqTitle: "FAQ",
    ctaTitle: "Set up Mac auto mute around your real risk moments",
    ctaDescription:
      "Download Default0 if you want a Mac auto mute utility that covers unlocks, device changes, headphone dropouts, network switches, and meeting-app launches without constant manual checking.",
    ctaSecondary: "Start with the 3-rule setup",
    breadcrumbLabel: "Mac Auto Mute",
    faqItems: [
      {
        question: "What does Mac auto mute mean in Default0?",
        answer:
          "It means Default0 automatically sets your Mac system volume to zero at selected trigger points such as unlock, output-device changes, Bluetooth disconnects, Wi-Fi changes, and meeting-app launches."
      },
      {
        question: "Is this about speaker/output mute or microphone mute?",
        answer: "Default0 is built for speaker and output-volume protection on macOS. It is not a microphone mute or mic privacy tool."
      },
      {
        question: "Can I choose only one Mac auto mute trigger?",
        answer: "Yes. Each rule can be enabled separately, so you can start with a single trigger such as unlock or output change and add more coverage later."
      },
      {
        question: "Which triggers matter most for meetings?",
        answer: "Most meeting-heavy Mac users start with unlock, output change, and app-open triggers because those moments are where accidental speaker playback usually happens."
      }
    ],
    triggerCards: [
      {
        title: "Mute on Unlock",
        body: "If you unlock your Mac and immediately resume work, Default0 mutes first so old audio does not jump through speakers before you react.",
        slug: "mac-mute-on-unlock"
      },
      {
        title: "Mute on Output Change",
        body: "When headphones, docks, or monitors change the default output device, Default0 applies automatic mute for Mac before sound leaks.",
        slug: "mac-mute-on-output-change"
      },
      {
        title: "Mute on Bluetooth Disconnect",
        body: "If Bluetooth headphones drop or run out of battery, Default0 mutes before audio falls back to your Mac speaker.",
        slug: "mac-mute-on-bluetooth-disconnect"
      },
      {
        title: "Mute on Wi-Fi Change",
        body: "Network changes often happen right before meetings or in shared spaces. Default0 can mute first during those transitions.",
        slug: "mac-mute-on-wifi-change"
      },
      {
        title: "Mute When App Opens",
        body: "For high-risk apps such as Zoom or Teams, Default0 Pro can mute at app launch so you do not forget volume in the moment.",
        slug: "mac-mute-when-app-opens"
      }
    ]
  },
  "zh-CN": {
    metadataTitle: "Mac 自动静音：Default0 防止意外外放的自动静音方案",
    metadataDescription:
      "Default0 可在解锁、输出切换、蓝牙断开、Wi-Fi 变化和应用启动时自动将 Mac 静音，减少会议、办公室和公共空间里的意外外放。",
    keywords: ["Mac 自动静音", "Mac 自动静音 工具", "防止 Mac 意外外放", "Mac 外放 防止"],
    badge: "面向外放风险的 Mac 自动静音指南",
    heroTitle: "Mac 自动静音：把容易翻车的瞬间先静音下来",
    heroDescription:
      "Mac 自动静音的核心不是事后补救，而是在外放风险出现前先把声音降到 0。Default0 可以在解锁、输出切换、蓝牙断开、Wi-Fi 变化和会议应用启动时自动静音，帮助你在会议、办公室、图书馆和深夜环境里减少意外外放。",
    primaryCta: "下载 Default0",
    secondaryCta: "阅读配套指南",
    problemTitle: "Mac 自动静音真正解决的是什么问题",
    problemBody:
      "macOS 上很多意外外放都发生在动作切换之间，而不是在你专心操作的时候。你刚解锁 Mac、刚换耳机、刚插上扩展坞、刚切换网络，或者刚打开会议应用，旧的音量状态就可能先一步把声音放出来。Default0 的作用，就是把静音动作提前到这些触发点。",
    problemLinkLead: "如果你想先看一个可直接照着做的组合方案，可以先读 ",
    problemLinkLabel: "会前最值得先开的 3 条自动静音规则",
    problemLinkTail: "，再逐步补齐更适合自己场景的触发器。",
    clarificationTitle: "它不是麦克风静音工具",
    clarificationBody:
      "有些人搜索“Mac 自动静音”其实是在找麦克风隐私工具。Default0 不是这一类产品。它保护的是扬声器和系统输出音量，目标是防止声音突然从 Mac 扬声器里外放出来。",
    triggersTitle: "一套更稳的 Mac 自动静音触发规则",
    triggerCta: "查看指南",
    comparisonTitle: "为什么它比手动盯音量更可靠",
    comparisonPoints: [
      "手动静音依赖记忆和反应速度，自动静音依赖规则。",
      "手动检查往往发生在你想起来之后，Default0 在触发点先行动。",
      "解锁、设备切换和会前准备连续发生时，自动静音比记忆更稳定。"
    ],
    faqTitle: "常见问题",
    ctaTitle: "把 Mac 自动静音放在真正高风险的瞬间",
    ctaDescription: "如果你想减少解锁、设备切换、耳机掉线、网络变化和会议应用启动时的意外外放，现在就可以用 Default0 先搭好规则。",
    ctaSecondary: "先看 3 条入门规则",
    breadcrumbLabel: "Mac 自动静音",
    faqItems: [
      {
        question: "Default0 里的 Mac 自动静音是什么意思？",
        answer: "它的意思是：在解锁、输出设备变化、蓝牙断开、Wi-Fi 变化和应用启动等触发点，Default0 会先把系统音量调到 0。"
      },
      {
        question: "它管的是扬声器静音，还是麦克风静音？",
        answer: "Default0 管的是扬声器和系统输出音量，不是麦克风静音工具。"
      },
      {
        question: "我可以只开一条自动静音规则吗？",
        answer: "可以。每条规则都可以单独开启，你可以先从解锁或输出切换开始，再逐步补充。"
      },
      {
        question: "会议场景最值得先开哪几条？",
        answer: "大多数高频会议用户会先开解锁静音、输出切换静音，以及应用启动时静音。"
      }
    ],
    triggerCards: [
      { title: "解锁时静音", body: "回到工位刚解锁时，先静音再继续操作，避免旧内容突然外放。", slug: "mac-mute-on-unlock" },
      { title: "输出切换时静音", body: "耳机、扩展坞或显示器改变默认输出设备时，Default0 先静音再让你接管。", slug: "mac-mute-on-output-change" },
      { title: "蓝牙断开时静音", body: "蓝牙耳机没电或断连时，声音回切到扬声器之前先静音。", slug: "mac-mute-on-bluetooth-disconnect" },
      { title: "Wi-Fi 变化时静音", body: "家庭、办公室、热点之间切换时，先把环境变化带来的外放风险压下去。", slug: "mac-mute-on-wifi-change" },
      { title: "应用启动时静音", body: "Zoom、Teams 等高风险应用打开时，Pro 可以先静音，避免开会前的那一瞬间翻车。", slug: "mac-mute-when-app-opens" }
    ]
  },
  ko: {
    metadataTitle: "Mac 자동 음소거: Default0로 갑작스러운 스피커 재생 방지",
    metadataDescription:
      "Default0는 잠금 해제, 출력 변경, Bluetooth 연결 해제, Wi-Fi 변경, 앱 실행 시 Mac을 자동으로 음소거해 회의와 공용 공간에서의 갑작스러운 스피커 재생을 줄여줍니다.",
    keywords: ["Mac 자동 음소거", "Mac 자동 음소거 앱", "맥 스피커 재생 방지", "맥 외부 재생 방지"],
    badge: "스피커 출력 사고를 줄이기 위한 Mac 자동 음소거 가이드",
    heroTitle: "Mac 자동 음소거로 회의 전과 기기 전환 순간을 먼저 안전하게",
    heroDescription:
      "Mac 자동 음소거는 실수 후에 볼륨을 내리는 것이 아니라, 위험한 순간이 오기 전에 먼저 소리를 0으로 만드는 방식입니다. Default0는 잠금 해제, 출력 변경, Bluetooth 연결 해제, Wi-Fi 변경, 회의 앱 실행 시 자동으로 음소거해 예기치 않은 스피커 재생을 줄여줍니다.",
    primaryCta: "Default0 다운로드",
    secondaryCta: "관련 가이드 읽기",
    problemTitle: "Mac 자동 음소거가 실제로 해결하는 문제",
    problemBody:
      "macOS에서 갑작스러운 스피커 재생은 보통 한가한 순간보다 전환 순간에 발생합니다. Mac을 잠금 해제하거나, 헤드폰을 바꾸거나, 독을 다시 연결하거나, 네트워크를 바꾸거나, 회의 앱을 여는 사이에 이전 볼륨 상태가 그대로 남아 있는 경우가 많기 때문입니다. Default0는 음소거를 그 트리거 시점으로 당겨옵니다.",
    problemLinkLead: "실전 설정 순서를 먼저 보고 싶다면 ",
    problemLinkLabel: "원격 회의를 위한 3가지 자동 음소거 규칙",
    problemLinkTail: "부터 시작해도 됩니다.",
    clarificationTitle: "이 페이지는 마이크 음소거 도구 설명이 아닙니다",
    clarificationBody:
      "일부 사용자는 “Mac auto mute”를 마이크 프라이버시 도구로 이해하지만, Default0는 다릅니다. 이 제품은 스피커와 시스템 출력 볼륨을 보호해 갑작스럽게 소리가 외부로 재생되는 일을 줄입니다.",
    triggersTitle: "자동 음소거를 안정적으로 만드는 핵심 트리거",
    triggerCta: "가이드 보기",
    comparisonTitle: "왜 수동 확인보다 규칙 기반 음소거가 더 안정적인가",
    comparisonPoints: [
      "수동 음소거는 기억과 반응 속도에 의존하지만, 자동 음소거는 규칙에 의존합니다.",
      "수동 확인은 생각난 뒤에 일어나고, Default0는 트리거 순간에 먼저 동작합니다.",
      "잠금 해제, 기기 변경, 회의 준비가 연속될수록 자동 음소거의 차이가 커집니다."
    ],
    faqTitle: "FAQ",
    ctaTitle: "실수하기 쉬운 순간부터 Mac 자동 음소거를 적용하세요",
    ctaDescription: "잠금 해제, 기기 변경, 헤드폰 연결 해제, 네트워크 전환, 회의 앱 실행 같은 순간을 먼저 안전하게 만들고 싶다면 Default0를 시작점으로 쓰면 됩니다.",
    ctaSecondary: "3개 규칙부터 시작",
    breadcrumbLabel: "Mac 자동 음소거",
    faqItems: [
      {
        question: "Default0에서 Mac 자동 음소거란 무엇인가요?",
        answer: "잠금 해제, 출력 장치 변경, Bluetooth 연결 해제, Wi-Fi 변경, 앱 실행 같은 트리거가 발생할 때 Default0가 먼저 시스템 볼륨을 0으로 만드는 것을 뜻합니다."
      },
      {
        question: "이건 스피커 음소거인가요, 마이크 음소거인가요?",
        answer: "Default0는 스피커와 시스템 출력 볼륨을 보호하는 도구이며, 마이크 음소거 도구는 아닙니다."
      },
      {
        question: "한 가지 트리거만 먼저 켤 수 있나요?",
        answer: "네. 각 규칙은 개별적으로 켤 수 있으므로 잠금 해제나 출력 변경부터 시작해도 됩니다."
      },
      {
        question: "회의가 많은 사용자는 어떤 규칙을 먼저 써야 하나요?",
        answer: "보통 잠금 해제, 출력 변경, 앱 실행 시 음소거부터 시작하는 것이 가장 효과적입니다."
      }
    ],
    triggerCards: [
      { title: "잠금 해제 시 음소거", body: "자리에 돌아와 Mac을 열자마자 이전 오디오가 스피커로 나가는 일을 막습니다.", slug: "mac-mute-on-unlock" },
      { title: "출력 변경 시 음소거", body: "헤드폰, 독, 모니터 때문에 기본 출력이 바뀌는 순간 먼저 음소거합니다.", slug: "mac-mute-on-output-change" },
      { title: "Bluetooth 해제 시 음소거", body: "무선 헤드폰이 끊기거나 배터리가 다했을 때 스피커로 떨어지기 전에 막아줍니다.", slug: "mac-mute-on-bluetooth-disconnect" },
      { title: "Wi-Fi 변경 시 음소거", body: "집, 사무실, 핫스팟 간 이동 중 생기는 환경 전환 리스크를 줄입니다.", slug: "mac-mute-on-wifi-change" },
      { title: "앱 실행 시 음소거", body: "Zoom, Teams 같은 앱을 열 때 Pro가 먼저 음소거해 회의 직전 실수를 줄여줍니다.", slug: "mac-mute-when-app-opens" }
    ]
  },
  ja: {
    metadataTitle: "Mac自動ミュート: Default0で突然の外部再生を防ぐ設定ガイド",
    metadataDescription:
      "Default0 は、ロック解除、出力切替、Bluetooth 切断、Wi‑Fi 変化、アプリ起動の瞬間に Mac を自動ミュートし、会議前や公共空間での突然の外部再生を減らします。",
    keywords: ["Mac 自動ミュート", "Mac 自動ミュート アプリ", "Mac 外部再生 防止", "Default0 自動ミュート"],
    badge: "外部再生リスクを減らすための Mac 自動ミュートガイド",
    heroTitle: "Mac自動ミュートで、会議前や切替直後の気まずい瞬間を先に防ぐ",
    heroDescription:
      "Mac 自動ミュートは、音が出てから慌てて止めるのではなく、危ない瞬間の前に先に音量を 0 にする考え方です。Default0 は、ロック解除、出力切替、Bluetooth 切断、Wi‑Fi 変化、会議アプリ起動時に自動ミュートし、オフィスや公共空間、自宅での突然の外部再生を減らします。",
    primaryCta: "Default0 をダウンロード",
    secondaryCta: "関連ガイドを読む",
    problemTitle: "Mac自動ミュートが実際に解決する問題",
    problemBody:
      "macOS の外部再生事故は、落ち着いた操作中よりも、動作が切り替わる瞬間に起きやすいです。Mac をロック解除し、イヤホンを付け替え、ドックをつなぎ直し、ネットワークを変え、会議アプリを開く。その短い間にも前の音量状態が残っていることがあります。Default0 は、その危険なトリガーに先回りしてミュートを入れます。",
    problemLinkLead: "実際の使い方を先にまとめて見たいなら、まずは ",
    problemLinkLabel: "会議が多い人向けの 3 ルール",
    problemLinkTail: " から始めると全体像がつかみやすいです。",
    clarificationTitle: "マイクミュート用のツールではありません",
    clarificationBody:
      "「Mac auto mute」をマイクのプライバシー対策として探す人もいますが、Default0 は別のカテゴリです。守るのはマイクではなく、スピーカーとシステム出力音量です。つまり、音が急に外へ出ることを防ぐためのツールです。",
    triggersTitle: "Mac自動ミュートを安定させる主要トリガー",
    triggerCta: "ガイドを見る",
    comparisonTitle: "なぜ手動確認よりルールの方が安定するのか",
    comparisonPoints: [
      "手動ミュートは記憶と反応速度に依存し、自動ミュートはルールに依存します。",
      "手動確認は思い出した後に行われますが、Default0 はトリガーの瞬間に先に動きます。",
      "ロック解除、機器切替、会議準備が続くほど、自動ミュートの効果は大きくなります。"
    ],
    faqTitle: "FAQ",
    ctaTitle: "失敗しやすい瞬間から Mac 自動ミュートを入れておく",
    ctaDescription:
      "ロック解除、機器切替、イヤホン断線、ネットワーク変化、会議アプリ起動のような場面で先に安全側へ倒したいなら、Default0 から始めるのが分かりやすい方法です。",
    ctaSecondary: "まずは 3 ルールを見る",
    breadcrumbLabel: "Mac 自動ミュート",
    faqItems: [
      {
        question: "Default0 における Mac 自動ミュートとは何ですか？",
        answer: "ロック解除、出力デバイス変更、Bluetooth 切断、Wi‑Fi 変化、アプリ起動などの瞬間に、Default0 が先にシステム音量を 0 にすることです。"
      },
      {
        question: "これはスピーカー用ですか？ それともマイク用ですか？",
        answer: "Default0 はスピーカーとシステム出力音量を守るツールで、マイクミュート用ではありません。"
      },
      {
        question: "まず 1 つのルールだけ有効にしてもいいですか？",
        answer: "はい。各ルールは個別に有効化できるので、まずはロック解除や出力切替から始められます。"
      },
      {
        question: "会議が多い人はどのルールから始めるべきですか？",
        answer: "多くの場合、`ロック解除時にミュート`、`出力切替時にミュート`、`アプリ起動時にミュート` の順で考えると分かりやすいです。"
      }
    ],
    triggerCards: [
      { title: "ロック解除時にミュート", body: "席に戻ってすぐの一瞬に、前の音がスピーカーへ出るのを先に防ぎます。", slug: "mac-mute-on-unlock" },
      { title: "出力切替時にミュート", body: "イヤホン、ドック、モニターなどで出力先が変わる瞬間に、先にミュートを入れます。", slug: "mac-mute-on-output-change" },
      { title: "Bluetooth 切断時にミュート", body: "ワイヤレスイヤホンが切れたり電池切れになったりした時、スピーカーへ戻る前に止めます。", slug: "mac-mute-on-bluetooth-disconnect" },
      { title: "Wi‑Fi 変化時にミュート", body: "自宅、オフィス、テザリングなど場所が変わる瞬間の外部再生リスクを減らします。", slug: "mac-mute-on-wifi-change" },
      { title: "アプリ起動時にミュート", body: "Zoom や Teams を開いた瞬間に Pro が先にミュートし、会議前の失敗を減らします。", slug: "mac-mute-when-app-opens" }
    ]
  },
  de: {
    metadataTitle: "Mac Automatisch Stummschalten: Default0 gegen unerwartete Lautsprecherwiedergabe",
    metadataDescription:
      "Default0 schaltet deinen Mac bei Entsperren, Ausgabegeräte-Wechsel, Bluetooth-Abbruch, WLAN-Wechsel und App-Start automatisch stumm, damit Ton nicht plötzlich über Lautsprecher abgespielt wird.",
    keywords: ["Mac automatisch stummschalten", "Mac Auto-Mute App", "Mac Lautsprecherwiedergabe verhindern", "automatische Stummschaltung Mac"],
    badge: "Leitfaden für automatische Stummschaltung auf dem Mac",
    heroTitle: "Mac automatisch stummschalten, bevor Meetings und Gerätewechsel laut werden",
    heroDescription:
      "Mac Auto-Mute bedeutet, dass dein Mac an riskanten Momenten zuerst stumm geschaltet wird. Default0 hilft dir dabei beim Entsperren, beim Wechsel des Ausgabegeräts, bei Bluetooth-Abbrüchen, bei WLAN-Wechseln und beim Start von Meeting-Apps. So wird unerwartete Lautsprecherwiedergabe auf dem Mac deutlich seltener.",
    primaryCta: "Default0 herunterladen",
    secondaryCta: "Passende Guides lesen",
    problemTitle: "Welches Problem Mac Auto-Mute tatsächlich löst",
    problemBody:
      "Unerwartete Lautsprecherwiedergabe auf macOS passiert meist nicht in ruhigen Momenten, sondern zwischen Aktionen. Du entsperrst deinen Mac, wechselst Kopfhörer, verbindest ein Dock neu, wechselst das Netzwerk oder öffnest eine Meeting-App, während der alte Lautstärkezustand noch aktiv ist. Default0 verschiebt die Stummschaltung direkt an diese Triggerpunkte.",
    problemLinkLead: "Wenn du mit einer praxistauglichen Reihenfolge starten willst, beginne mit dem ",
    problemLinkLabel: "3-Regeln-Setup für Meeting-Nutzer",
    problemLinkTail: " und ergänze danach die Trigger, die zu deinem Geräte-Setup passen.",
    clarificationTitle: "Kein Mikrofon-Mute-Tool",
    clarificationBody:
      "Manche Suchanfragen nach „auto mute auf dem Mac“ meinen eigentlich ein Mikrofon- oder Privacy-Tool. Default0 ist anders: Es schützt Lautsprecher und Systemausgabe, damit Ton nicht plötzlich über deinen Mac-Lautsprecher nach außen geht.",
    triggersTitle: "Die wichtigsten Trigger für automatische Stummschaltung auf dem Mac",
    triggerCta: "Guide öffnen",
    comparisonTitle: "Warum Default0 verlässlicher ist als manuelle Lautstärkechecks",
    comparisonPoints: [
      "Manuelles Stummschalten hängt von Erinnerung und Timing ab. Auto-Mute hängt von Regeln ab.",
      "Manuelle Kontrolle passiert erst, wenn du daran denkst. Default0 reagiert am Triggerpunkt.",
      "Je näher Entsperren, Gerätewechsel und Meetings beieinander liegen, desto mehr bringt automatische Stummschaltung."
    ],
    faqTitle: "FAQ",
    ctaTitle: "Richte Mac Auto-Mute dort ein, wo Fehler am häufigsten passieren",
    ctaDescription:
      "Wenn du Entsperren, Gerätewechsel, Kopfhörerabbrüche, Netzwerkwechsel und App-Starts besser absichern willst, richte Default0 zuerst an diesen risikoreichen Momenten ein.",
    ctaSecondary: "Mit den 3 Regeln starten",
    breadcrumbLabel: "Mac Auto-Mute",
    faqItems: [
      {
        question: "Was bedeutet Mac Auto-Mute bei Default0?",
        answer: "Default0 setzt die Systemlautstärke automatisch auf 0, wenn Trigger wie Entsperren, Ausgabegeräte-Wechsel, Bluetooth-Abbruch, WLAN-Wechsel oder App-Start auftreten."
      },
      {
        question: "Geht es hier um Lautsprecher-Stummschaltung oder Mikrofon-Stummschaltung?",
        answer: "Default0 schützt Lautsprecher und Systemausgabe, nicht das Mikrofon."
      },
      {
        question: "Kann ich nur einen Trigger aktivieren?",
        answer: "Ja. Jede Regel lässt sich einzeln aktivieren, sodass du mit einer einzigen Absicherung starten kannst."
      },
      {
        question: "Welche Trigger sind für Meetings am wichtigsten?",
        answer: "Für die meisten Meeting-Nutzer sind Entsperren, Ausgabegeräte-Wechsel und App-Start die sinnvollsten ersten Regeln."
      }
    ],
    triggerCards: [
      { title: "Stumm beim Entsperren", body: "Direkt nach dem Entsperren wird zuerst stumm geschaltet, damit alter Ton nicht sofort über Lautsprecher läuft.", slug: "mac-mute-on-unlock" },
      { title: "Stumm bei Ausgabewechsel", body: "Wenn Kopfhörer, Dock oder Monitor das Standard-Ausgabegerät ändern, greift Default0 zuerst ein.", slug: "mac-mute-on-output-change" },
      { title: "Stumm bei Bluetooth-Abbruch", body: "Wenn Bluetooth-Kopfhörer ausfallen oder die Verbindung verlieren, wird vor dem Lautsprecher-Fallback stumm geschaltet.", slug: "mac-mute-on-bluetooth-disconnect" },
      { title: "Stumm bei WLAN-Wechsel", body: "Beim Wechsel zwischen Zuhause, Büro und Hotspot hilft Auto-Mute, Übergangsmomente leiser zu machen.", slug: "mac-mute-on-wifi-change" },
      { title: "Stumm beim App-Start", body: "Mit Pro kannst du Meeting-Apps wie Zoom oder Teams direkt beim Öffnen zuerst stumm schalten.", slug: "mac-mute-when-app-opens" }
    ]
  },
  es: {
    metadataTitle: "Silencio Automático en Mac: Default0 para evitar audio inesperado por altavoz",
    metadataDescription:
      "Default0 silencia tu Mac automáticamente al desbloquear, cambiar la salida, perder Bluetooth, cambiar de Wi‑Fi y abrir apps, para reducir reproducciones inesperadas por altavoz.",
    keywords: ["silencio automático Mac", "auto mute Mac", "app silencio automático Mac", "evitar audio por altavoz Mac"],
    badge: "Guía de silencio automático en Mac para evitar audio por altavoz",
    heroTitle: "Silencio automático en Mac para reuniones, espacios compartidos y cambios de dispositivo",
    heroDescription:
      "El silencio automático en Mac no consiste en reaccionar tarde, sino en dejar tu volumen en 0 antes de que empiece el riesgo. Default0 puede silenciar tu Mac al desbloquear, cambiar la salida, perder Bluetooth, cambiar de Wi‑Fi y abrir apps de reunión, para reducir el audio inesperado por altavoz.",
    primaryCta: "Descargar Default0",
    secondaryCta: "Leer guías relacionadas",
    problemTitle: "Qué problema resuelve realmente el silencio automático en Mac",
    problemBody:
      "En macOS, muchas reproducciones inesperadas no ocurren cuando estás tranquilo, sino entre una acción y otra. Desbloqueas el Mac, cambias de auriculares, vuelves a conectar un dock, cambias de red o abres una app de reunión mientras el volumen anterior sigue activo. Default0 mueve el silencio justo a esos puntos de riesgo.",
    problemLinkLead: "Si quieres un orden práctico para empezar, revisa primero la ",
    problemLinkLabel: "configuración de 3 reglas para reuniones",
    problemLinkTail: " y después amplía los disparadores según tu flujo.",
    clarificationTitle: "No es una herramienta para silenciar el micrófono",
    clarificationBody:
      "Algunas búsquedas de “auto mute en Mac” en realidad buscan privacidad del micrófono. Default0 no va por ahí: protege el altavoz y el volumen de salida del sistema para que el sonido no salga de repente por el Mac.",
    triggersTitle: "Los disparadores clave detrás del silencio automático en Mac",
    triggerCta: "Ver guía",
    comparisonTitle: "Por qué Default0 funciona mejor que revisar el volumen a mano",
    comparisonPoints: [
      "Silenciar manualmente depende de memoria y reflejos; el silencio automático depende de reglas.",
      "La revisión manual ocurre después de que te acuerdas; Default0 actúa en el disparador.",
      "Cuanto más seguidos están desbloqueos, cambios de dispositivo y reuniones, más útil es la automatización."
    ],
    faqTitle: "Preguntas frecuentes",
    ctaTitle: "Activa el silencio automático en Mac justo donde más errores ocurren",
    ctaDescription:
      "Si quieres cubrir desbloqueos, cambios de dispositivo, cortes de auriculares, cambios de red y aperturas de apps sin depender de recordar el volumen, empieza con Default0.",
    ctaSecondary: "Empezar con las 3 reglas",
    breadcrumbLabel: "Silencio Automático en Mac",
    faqItems: [
      {
        question: "¿Qué significa auto mute en Mac dentro de Default0?",
        answer: "Significa que Default0 pone el volumen del sistema en 0 cuando ocurren disparadores como desbloqueo, cambio de salida, desconexión Bluetooth, cambio de Wi‑Fi o apertura de apps."
      },
      {
        question: "¿Esto silencia el altavoz o el micrófono?",
        answer: "Default0 protege el altavoz y la salida de audio del sistema. No es una herramienta para silenciar el micrófono."
      },
      {
        question: "¿Puedo activar solo un disparador?",
        answer: "Sí. Cada regla puede activarse por separado, así que puedes empezar por desbloqueo o cambio de salida."
      },
      {
        question: "¿Qué reglas son más importantes para reuniones?",
        answer: "Para la mayoría de personas que trabajan con reuniones frecuentes, lo mejor es empezar por desbloqueo, cambio de salida y apertura de apps."
      }
    ],
    triggerCards: [
      { title: "Silencio al desbloquear", body: "Cuando vuelves al Mac y lo desbloqueas, Default0 silencia primero para evitar que el audio anterior salga por altavoz.", slug: "mac-mute-on-unlock" },
      { title: "Silencio al cambiar la salida", body: "Si auriculares, dock o monitor cambian la salida predeterminada, Default0 actúa antes de que se escape el sonido.", slug: "mac-mute-on-output-change" },
      { title: "Silencio al desconectar Bluetooth", body: "Si los auriculares Bluetooth se quedan sin batería o se desconectan, el sistema se silencia antes de volver al altavoz.", slug: "mac-mute-on-bluetooth-disconnect" },
      { title: "Silencio al cambiar de Wi‑Fi", body: "Los cambios entre casa, oficina y hotspot suelen coincidir con momentos de distracción; por eso conviene silenciar primero.", slug: "mac-mute-on-wifi-change" },
      { title: "Silencio al abrir apps", body: "Con Pro, apps como Zoom o Teams pueden silenciarse en el momento de abrirse para evitar errores antes de la reunión.", slug: "mac-mute-when-app-opens" }
    ]
  }
};

const nextStepCopyByLocale: Record<(typeof supportedLocales)[number], NextStepCopy> = {
  en: {
    title: "Next Reading",
    description: "Start with the trigger that matches your risk first, then come back to this page when you want to combine several rules into one setup.",
    cta: "Read next",
    cards: [
      {
        title: "Mute on Unlock",
        body: "Best for the first second back at your desk, especially when old tabs or media may still be active.",
        slug: "mac-mute-on-unlock"
      },
      {
        title: "Mute on Output Change",
        body: "Useful if you switch between headphones, monitors, docks, and speakers throughout the day.",
        slug: "mac-mute-on-output-change"
      },
      {
        title: "3 Rules for Remote Meetings",
        body: "A practical starting bundle for meeting-heavy workflows where several risk windows happen back to back.",
        slug: "mac-3-auto-mute-rules-for-remote-meetings"
      }
    ]
  },
  "zh-CN": {
    title: "下一步阅读",
    description: "先从最符合你风险场景的一条规则读起，再回到这个专题页把几类触发器组合起来。",
    cta: "继续阅读",
    cards: [
      {
        title: "解锁后自动静音",
        body: "适合回到工位后立即开始操作、最容易在第一秒外放的场景。",
        slug: "mac-mute-on-unlock"
      },
      {
        title: "输出切换时自动静音",
        body: "适合耳机、显示器、扩展坞和扬声器切换较多的工作流。",
        slug: "mac-mute-on-output-change"
      },
      {
        title: "远程会议用户最该先开的 3 条规则",
        body: "如果你的风险点总是连续出现，这篇更适合直接照着配。",
        slug: "mac-3-auto-mute-rules-for-remote-meetings"
      }
    ]
  },
  ko: {
    title: "다음 읽을거리",
    description: "가장 자주 실수하는 트리거부터 먼저 보고, 이후 이 페이지로 돌아와 여러 규칙을 하나의 흐름으로 묶어 보세요.",
    cta: "다음 가이드 보기",
    cards: [
      {
        title: "잠금 해제 시 음소거",
        body: "자리에 돌아와 Mac을 열자마자 소리가 튀는 문제를 가장 먼저 줄여 줍니다.",
        slug: "mac-mute-on-unlock"
      },
      {
        title: "출력 변경 시 음소거",
        body: "헤드폰, 독, 모니터를 자주 바꾸는 사용자에게 특히 중요합니다.",
        slug: "mac-mute-on-output-change"
      },
      {
        title: "회의가 많은 사람을 위한 3가지 규칙",
        body: "회의 전환이 잦아 여러 위험 구간이 붙어 있을 때 가장 실용적인 출발점입니다.",
        slug: "mac-3-auto-mute-rules-for-remote-meetings"
      }
    ]
  },
  ja: {
    title: "次に読むガイド",
    description: "まずは自分に一番近いリスクから読み始めて、あとでこのページに戻って全体のルール設計にまとめるのがおすすめです。",
    cta: "続きを読む",
    cards: [
      {
        title: "ロック解除時に自動ミュート",
        body: "席に戻ってすぐの一瞬に外部再生しやすい人に向いています。",
        slug: "mac-mute-on-unlock"
      },
      {
        title: "出力切替時に自動ミュート",
        body: "イヤホン、モニター、ドックの切替が多いならここから見ると分かりやすいです。",
        slug: "mac-mute-on-output-change"
      },
      {
        title: "会議が多い人向け 3 ルール",
        body: "複数のリスクが続けて起こる働き方なら、まずこの組み合わせを確認してください。",
        slug: "mac-3-auto-mute-rules-for-remote-meetings"
      }
    ]
  },
  de: {
    title: "Als Nächstes lesen",
    description: "Starte mit dem Trigger, der bei dir am häufigsten Probleme macht, und kombiniere danach mehrere Regeln wieder von dieser Übersichtsseite aus.",
    cta: "Weiterlesen",
    cards: [
      {
        title: "Stumm beim Entsperren",
        body: "Sinnvoll, wenn direkt nach dem Entsperren alter Ton oder alte Tabs plötzlich hörbar werden.",
        slug: "mac-mute-on-unlock"
      },
      {
        title: "Stumm bei Ausgabewechsel",
        body: "Wichtig für Setups mit Kopfhörern, Docks, Monitoren und häufig wechselnden Ausgabegeräten.",
        slug: "mac-mute-on-output-change"
      },
      {
        title: "3 Regeln für viele Remote-Meetings",
        body: "Der beste Einstieg, wenn Entsperren, Gerätewechsel und Meeting-Starts oft direkt nacheinander passieren.",
        slug: "mac-3-auto-mute-rules-for-remote-meetings"
      }
    ]
  },
  es: {
    title: "Siguiente lectura",
    description: "Empieza por el disparador que más se parece a tu riesgo principal y luego vuelve a esta página para combinar varias reglas dentro del mismo flujo.",
    cta: "Leer ahora",
    cards: [
      {
        title: "Silencio al desbloquear",
        body: "Ideal si el problema aparece justo al volver al escritorio y desbloquear el Mac.",
        slug: "mac-mute-on-unlock"
      },
      {
        title: "Silencio al cambiar la salida",
        body: "Muy útil si alternas entre auriculares, monitor, dock y altavoz durante el día.",
        slug: "mac-mute-on-output-change"
      },
      {
        title: "3 reglas para reuniones remotas",
        body: "El mejor punto de partida si tus riesgos aparecen uno detrás de otro antes de cada reunión.",
        slug: "mac-3-auto-mute-rules-for-remote-meetings"
      }
    ]
  }
};

function isSupportedLocale(locale: Locale): locale is (typeof supportedLocales)[number] {
  return (supportedLocales as readonly Locale[]).includes(locale);
}

function pagePath(locale: (typeof supportedLocales)[number]) {
  return `/${locale}/mac-auto-mute`;
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale) || !isSupportedLocale(params.locale)) {
    return {};
  }

  const copy = pageCopyByLocale[params.locale];
  const canonical = pagePath(params.locale);

  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    keywords: copy.keywords,
    alternates: {
      canonical,
      languages: buildAvailableLanguageAlternates(supportedLocales, (locale) => pagePath(locale as (typeof supportedLocales)[number]))
    },
    openGraph: {
      type: "website",
      title: copy.metadataTitle,
      description: copy.metadataDescription,
      url: canonical,
      images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: copy.heroTitle }]
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadataTitle,
      description: copy.metadataDescription,
      images: ["/og-default0.svg"]
    }
  };
}

export default function MacAutoMutePage({ params }: PageProps) {
  if (!isLocale(params.locale) || !isSupportedLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const content = getSiteContent(locale);
  const copy = pageCopyByLocale[locale];
  const nextStepCopy = nextStepCopyByLocale[locale];
  const canonical = pagePath(locale);
  const languageHrefMap = Object.fromEntries(
    locales.map((targetLocale) => [
      targetLocale,
      isSupportedLocale(targetLocale) ? pagePath(targetLocale) : `/${targetLocale}`
    ])
  ) as Partial<Record<Locale, string>>;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Default0",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS",
      inLanguage: locale,
      description: copy.metadataDescription,
      url: absoluteUrl(canonical),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: copy.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    buildBreadcrumbList([
      { name: "Default0", path: `/${locale}` },
      { name: copy.breadcrumbLabel, path: canonical }
    ])
  ];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix={`/${locale}`} languageHrefMap={languageHrefMap} minimal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto w-container py-16 sm:py-20">
        <section className="border border-[#1d1d18]/16 bg-[#f4f1e8] p-8 sm:p-12">
          <p className="inline-flex border border-[#1d1d18]/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#56564f]">{copy.badge}</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,4.8vw,4.3rem)] font-semibold tracking-[-0.03em] text-[#13130f]">{copy.heroTitle}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4b4b45]">{copy.heroDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={DOWNLOAD_URL}
              className="inline-flex min-h-12 items-center justify-center border border-[#141410] bg-[#141410] px-6 py-3 text-sm font-semibold text-[#f8f6ee] transition hover:bg-black"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex min-h-12 items-center justify-center border border-[#1d1d18]/26 bg-white px-6 py-3 text-sm font-semibold text-[#161612] transition hover:border-[#1d1d18]/48"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="border border-[#1d1d18]/16 bg-white p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#141410]">{copy.problemTitle}</h2>
              <p className="mt-4 leading-relaxed text-[#4d4d47]">{copy.problemBody}</p>
              <p className="mt-4 leading-relaxed text-[#4d4d47]">
                {copy.problemLinkLead}
                <Link href={`/${locale}/blog/mac-3-auto-mute-rules-for-remote-meetings`} className="text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                  {copy.problemLinkLabel}
                </Link>
                {copy.problemLinkTail}
              </p>
            </article>

            <aside className="border border-[#1d1d18]/16 bg-[#ece7dc] p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#141410]">{copy.clarificationTitle}</h2>
              <p className="mt-4 leading-relaxed text-[#4d4d47]">{copy.clarificationBody}</p>
            </aside>
          </div>
        </section>

        <section className="py-4">
          <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-semibold tracking-[-0.025em] text-[#13130f]">{copy.triggersTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {copy.triggerCards.map((card) => (
              <article key={card.title} className="border border-[#1d1d18]/16 bg-white p-6">
                <h3 className="text-xl font-semibold text-[#161612]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">{card.body}</p>
                <Link href={`/${locale}/blog/${card.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                  {copy.triggerCta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="border border-[#1d1d18]/16 bg-white p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-[#141410]">{copy.comparisonTitle}</h2>
            <ul className="mt-6 space-y-4">
              {copy.comparisonPoints.map((point) => (
                <li key={point} className="flex gap-3 text-base leading-relaxed text-[#1a1a16]">
                  <span className="mt-2 inline-block size-2 shrink-0 bg-[#171713]" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-4">
          <div className="border border-[#1d1d18]/16 bg-white p-8 sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#141410]">{nextStepCopy.title}</h2>
              <p className="mt-4 text-[#4d4d47]">{nextStepCopy.description}</p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {nextStepCopy.cards.map((card) => (
                <article key={card.slug} className="border border-[#1d1d18]/16 bg-[#f2eee3] p-6">
                  <h3 className="text-xl font-semibold text-[#161612]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">{card.body}</p>
                  <Link href={`/${locale}/blog/${card.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                    {nextStepCopy.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4">
          <div className="border border-[#1d1d18]/16 bg-white p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-[#141410]">{copy.faqTitle}</h2>
            <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
              {copy.faqItems.map((item) => (
                <details key={item.question} className="border border-[#1d1d18]/16 bg-[#f2eee3] p-5 open:border-[#1d1d18]/38">
                  <summary className="cursor-pointer list-none font-semibold text-[#161612]">{item.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="border border-[#141410]/18 bg-[#121210] p-9 text-[#f8f5ed] sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-[#d1cdbf]">{copy.ctaDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={DOWNLOAD_URL}
                className="inline-flex min-h-12 items-center justify-center border border-[#f1eee4] bg-[#f1eee4] px-6 py-3 text-sm font-semibold text-[#11110f] transition hover:bg-white"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href={`/${locale}/blog/mac-3-auto-mute-rules-for-remote-meetings`}
                className="inline-flex min-h-12 items-center justify-center border border-[#f1eee4]/35 px-6 py-3 text-sm font-semibold text-[#f5f2ea] transition hover:border-[#f1eee4]/65"
              >
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
