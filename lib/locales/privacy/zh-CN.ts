import type { PrivacyContent } from "@/lib/locales/privacy/types";

export const zhCNPrivacy: PrivacyContent = {
  title: "隐私政策",
  subtitle: "生效日期：2026年3月19日 | 应用名称：default0 | 开发者：GuoQi Yang",
  sections: [
    {
      heading: "1. 我们收集的数据",
      paragraphs: [
        "default0 重视你的隐私。本隐私政策说明我们如何处理信息。",
        "default0 的核心功能在本地设备运行。",
        "在你当前使用的版本中，核心功能不会收集、存储或出售你的个人身份信息。",
        "如果你自愿通过反馈页提交反馈，你提供的内容和联系方式可能会发送到 GitHub 创建 issue，且可能公开可见。",
        "我们不会将你的以下本地信息上传到开发者服务器用于识别你个人："
      ],
      items: [
        "你配置的静音规则",
        "你选择的应用列表（bundle id）",
        "本地设置（语言、主题、是否开机启动等）",
        "本地触发记录（如静音触发原因/时间）"
      ]
    },
    {
      heading: "2. 权限说明",
      paragraphs: ["default0 可能请求以下系统权限，仅用于对应功能："],
      ordered: true,
      items: [
        "Apple Events 权限\n用途：控制系统输出音量（执行自动静音/取消静音）。",
        "位置权限（用于 Wi-Fi 名称场景）\n用途：在 macOS 上读取当前 Wi-Fi SSID 以支持“Wi-Fi 变化时静音”等自动规则。\n说明：该权限由系统要求，不用于定位追踪。",
        "用户选择文件只读权限\n用途：当你从 Finder 手动选择 .app 文件时读取应用信息，用于“应用打开时静音”规则。\n说明：仅访问你主动选择的文件范围。",
        "网络访问权限\n用途：完成必要的网络请求（例如 App Store 相关流程、版本信息查询或网站跳转）。\n说明：default0 不会因这些请求而建立你的个人画像。"
      ]
    },
    {
      heading: "3. App Store 购买与支付",
      paragraphs: [
        "若未来版本在 App Store 提供 Pro 功能，交易将由 Apple 通过 StoreKit 处理。",
        "我们不会直接获取你的完整支付信息（如银行卡号）。"
      ]
    },
    {
      heading: "4. 数据存储与安全",
      paragraphs: [
        "default0 主要使用本地存储（如 UserDefaults/系统机制）保存设置。",
        "我们采取合理措施保护应用运行过程中的数据安全。"
      ]
    },
    {
      heading: "5. 第三方服务与链接",
      paragraphs: [
        "App 内可能包含跳转到外部网页（如反馈页、官网）的链接。",
        "第三方网站的数据处理行为受其自身隐私政策约束。",
        "当你提交反馈时，相关数据可能由 GitHub 作为第三方服务进行处理。"
      ]
    },
    {
      heading: "6. 儿童隐私",
      paragraphs: ["default0 不面向儿童提供特定内容服务，也不主动收集儿童个人信息。"]
    },
    {
      heading: "7. 你的权利",
      paragraphs: [
        "如果你对隐私政策或数据处理有疑问，可通过以下方式联系我们。",
        "你也可以随时卸载应用并清除本地数据来停止后续本地处理。"
      ]
    },
    {
      heading: "8. 政策更新",
      paragraphs: ["我们可能根据产品或法律要求更新本政策。更新后将发布在本页面，并更新“生效日期”。"]
    }
  ],
  contactTitle: "如你对本政策有任何问题，请联系",
  contactEmail: "help@default0.com",
  backHome: "返回首页"
};
