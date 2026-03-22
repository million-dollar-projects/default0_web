import type { SiteContent } from "@/lib/locales/types";
export const zhCN: SiteContent = {
  brand: "Default0",
  nav: { features: "功能", scenarios: "场景", faq: "FAQ", download: "下载" },
  labels: {
    testimonials: "用户评价",
    faq: "FAQ",
    language: "语言",
    blog: "博客",
    blogEmpty: "暂时还没有已发布文章。",
    backToBlog: "返回博客"
  },
  hero: {
    badge: "macOS 菜单栏自动静音工具",
    title: "自动静音，让突发外放不再让你尴尬。",
    description:
      "Default0 会在最容易外放翻车的瞬间先一步把系统音量拉到 0，帮你在会议、工位、图书馆和深夜环境里，稳住每一次开声风险。",
    helper: "轻量常驻菜单栏｜开机自启｜本地运行",
    primaryCta: "免费下载（macOS）",
    secondaryCta: "查看触发规则"
  },
  values: {
    title: "不是手动补救，而是自动预防",
    items: [
      { title: "关键时刻自动静音", description: "解锁、输出设备变化、蓝牙断连、WiFi 变化（连接、断开、切换）、首次登录、应用激活时自动执行静音。" },
      { title: "把失误窗口压缩到 0", description: "还没来得及反应，Default0 已先完成静音，减少突发外放的空窗期。" },
      { title: "低打扰守护体验", description: "菜单栏一键管理，支持暂停守护。需要时开启，日常几乎无感。" }
    ]
  },
  featureTitle: "围绕避免突发外放设计的每一条规则",
  features: [
    { title: "解锁静音", description: "屏幕重新解锁后自动静音，防止回到电脑第一秒就意外外放。" },
    { title: "输出切换静音", description: "默认输出设备变化时立即静音，避免耳机与扬声器切换造成泄露。" },
    { title: "蓝牙断开静音", description: "蓝牙音频设备断开时先静音，避免声音回切到外放。" },
    { title: "WiFi 变化静音", description: "WiFi 连接、断开或网络切换时触发静音，降低网络变化引发的突发外放风险。" },
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
    { quote: "不用盯着菜单栏音量了。规则开好后，它像一个很安静的安全网。", name: "赵铭", role: "前端工程师" },
    { quote: "我经常在会议和剪辑软件之间切换，Default0 让我几乎不再担心误外放。", name: "周珂", role: "视频创作者" },
    { quote: "以前每次解锁都要先看音量，现在可以直接进入工作状态。", name: "袁柏", role: "运营负责人" }
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
    links: ["功能", "提交反馈", "常见问题", "隐私说明", "服务条款", "联系我们"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};
