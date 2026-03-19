import type { PrivacyContent } from "@/lib/locales/privacy/types";

export const enPrivacy: PrivacyContent = {
  title: "Privacy Policy",
  subtitle: "Effective Date: March 19, 2026 | App Name: default0 | Developer: GuoQi Yang",
  sections: [
    {
      heading: "1. Data We Collect",
      paragraphs: [
        "default0 values your privacy. This Privacy Policy explains how we handle information.",
        "The core features of default0 run on your local device.",
        "In your current version, we do not collect, store, or sell your personally identifiable information.",
        "We do not upload the following local information to developer servers to identify you:"
      ],
      items: [
        "Your configured mute rules",
        "Your selected app list (bundle IDs)",
        "Local settings (language, theme, launch at startup, etc.)",
        "Local trigger records (such as mute trigger reason/time)"
      ]
    },
    {
      heading: "2. Permissions",
      paragraphs: ["default0 may request the following system permissions, only for their corresponding features:"],
      ordered: true,
      items: [
        "Apple Events permission\nPurpose: Control system output volume (automatic mute/unmute).",
        "Location permission (for Wi-Fi name scenarios)\nPurpose: Read the current Wi-Fi SSID on macOS to support rules such as muting when Wi-Fi changes.\nNote: This permission is required by the system and is not used for location tracking.",
        "User-selected file read-only permission\nPurpose: When you manually choose a .app file from Finder, read app information for rules such as muting when an app opens.\nNote: Access is limited to files you explicitly select.",
        "Network access permission\nPurpose: Complete required network requests (for example, App Store related flows, version checks, or website redirects).\nNote: default0 does not build a personal profile of you from these requests."
      ]
    },
    {
      heading: "3. App Store Purchases and Payments",
      paragraphs: [
        "If you purchase Pro features in the App Store version, the transaction is processed by Apple via StoreKit.",
        "We do not directly obtain your full payment information (such as bank card numbers)."
      ]
    },
    {
      heading: "4. Data Storage and Security",
      paragraphs: [
        "default0 mainly uses local storage (such as UserDefaults/system mechanisms) to save settings.",
        "We take reasonable measures to protect data security during app operation."
      ]
    },
    {
      heading: "5. Third-Party Services and Links",
      paragraphs: [
        "The app may include links to external webpages (such as feedback pages or the official website).",
        "Data handling by third-party websites is governed by their own privacy policies."
      ]
    },
    {
      heading: "6. Children's Privacy",
      paragraphs: ["default0 does not provide child-targeted content services and does not proactively collect children's personal information."]
    },
    {
      heading: "7. Your Rights",
      paragraphs: [
        "If you have any questions about this Privacy Policy or data handling, you can contact us using the method below.",
        "You may also uninstall the app and clear local data at any time to stop further local processing."
      ]
    },
    {
      heading: "8. Policy Updates",
      paragraphs: ["We may update this policy based on product changes or legal requirements. Updates will be published on this page, and the Effective Date will be updated."]
    }
  ],
  contactTitle: "If you have any questions about this policy, contact",
  contactEmail: "help@default0.com",
  backHome: "Back to Home"
};
