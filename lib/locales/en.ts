import type { SiteContent } from "@/lib/locales/types";
export const en: SiteContent = {
  brand: "Default0",
  nav: { features: "Features", scenarios: "Scenarios", faq: "FAQ", download: "Download" },
  labels: {
    testimonials: "Testimonials",
    faq: "FAQ",
    language: "Language",
    blog: "Blog",
    blogEmpty: "No articles published yet.",
    backToBlog: "Back to Blog"
  },
  hero: {
    badge: "macOS menu bar app for Mac auto mute",
    title: "Default0 is the Mac auto mute app for preventing accidental speaker playback.",
    description:
      "Default0 automatically sets your Mac volume to zero during unlocks, output changes, Bluetooth disconnects, Wi-Fi changes, and meeting app launches, so sound does not suddenly play through speakers in meetings, offices, libraries, or shared spaces.",
    helper: "Lightweight macOS menu bar app | Auto launch | Local runtime",
    primaryCta: "Free Download (macOS)",
    secondaryCta: "View Trigger Rules"
  },
  values: {
    title: "Not manual recovery, but automatic prevention",
    items: [
      {
        title: "Auto-mute at critical moments",
        description: "Unlock, output changes, Bluetooth disconnect, Wi-Fi connect/disconnect/network changes, first login, and app activation can all trigger mute."
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
      title: "Mute on Wi-Fi change",
      description: "When Wi-Fi connects, disconnects, or switches networks, Default0 can trigger mute to prevent connectivity-driven speaker surprises."
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
    },
    {
      quote: "I switch between calls and editing tools all day. Default0 removed that accidental speaker anxiety.",
      name: "Ethan Wu",
      role: "Content Creator"
    },
    {
      quote: "I used to check volume every unlock. Now I just get back to work.",
      name: "Ava Lin",
      role: "Operations Lead"
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
    links: ["Features", "Feedback", "FAQ", "Privacy", "Terms", "Contact"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};
