import type { PrivacyContent } from "@/lib/locales/privacy/types";

export const dePrivacy: PrivacyContent = {
  title: "Datenschutzerklärung",
  subtitle: "Inkrafttreten: 19. März 2026 | App-Name: default0 | Entwickler: GuoQi Yang",
  sections: [
    {
      heading: "1. Welche Daten wir erheben",
      paragraphs: [
        "default0 nimmt deine Privatsphäre ernst. Diese Datenschutzerklärung erläutert, wie wir Informationen verarbeiten.",
        "Die Kernfunktionen von default0 laufen auf deinem lokalen Gerät.",
        "In der aktuell von dir verwendeten Version erheben, speichern oder verkaufen wir keine personenbezogenen Daten.",
        "Wir laden die folgenden lokalen Informationen nicht auf Entwickler-Server hoch, um dich zu identifizieren:"
      ],
      items: [
        "Deine konfigurierten Stummschaltungsregeln",
        "Deine ausgewählte App-Liste (Bundle-IDs)",
        "Lokale Einstellungen (Sprache, Theme, Autostart usw.)",
        "Lokale Auslöseprotokolle (z. B. Grund/Zeit der Stummschaltung)"
      ]
    },
    {
      heading: "2. Berechtigungen",
      paragraphs: ["default0 kann folgende Systemberechtigungen anfordern, ausschließlich für die jeweilige Funktion:"],
      ordered: true,
      items: [
        "Apple-Events-Berechtigung\nZweck: Steuerung der Systemausgabelautstärke (automatisch stummschalten/entsperren).",
        "Standortberechtigung (für Wi-Fi-Namensszenarien)\nZweck: Auf macOS die aktuelle Wi-Fi-SSID lesen, um Regeln wie \"Bei Wi-Fi-Wechsel stummschalten\" zu unterstützen.\nHinweis: Diese Berechtigung ist systembedingt erforderlich und wird nicht für Standort-Tracking verwendet.",
        "Schreibgeschützte Berechtigung für vom Nutzer gewählte Dateien\nZweck: Wenn du manuell eine .app-Datei im Finder auswählst, werden App-Informationen gelesen, um Regeln wie \"Beim Öffnen der App stummschalten\" zu unterstützen.\nHinweis: Zugriff nur auf den von dir aktiv ausgewählten Dateibereich.",
        "Netzwerkzugriff\nZweck: Erforderliche Netzwerkanfragen ausführen (z. B. App-Store-bezogene Abläufe, Versionsabfrage oder Website-Weiterleitung).\nHinweis: default0 erstellt aus diesen Anfragen kein persönliches Profil."
      ]
    },
    {
      heading: "3. App-Store-Käufe und Zahlungen",
      paragraphs: [
        "Wenn du in der App-Store-Version Pro-Funktionen kaufst, wird die Transaktion von Apple über StoreKit verarbeitet.",
        "Wir erhalten nicht direkt deine vollständigen Zahlungsinformationen (z. B. Kartennummern)."
      ]
    },
    {
      heading: "4. Datenspeicherung und Sicherheit",
      paragraphs: [
        "default0 nutzt hauptsächlich lokale Speicherung (z. B. UserDefaults/Systemmechanismen), um Einstellungen zu sichern.",
        "Wir treffen angemessene Maßnahmen, um die Datensicherheit während des App-Betriebs zu schützen."
      ]
    },
    {
      heading: "5. Dienste und Links Dritter",
      paragraphs: [
        "Die App kann Links zu externen Webseiten enthalten (z. B. Feedback-Seite oder offizielle Website).",
        "Die Datenverarbeitung auf Drittseiten unterliegt deren eigenen Datenschutzrichtlinien."
      ]
    },
    {
      heading: "6. Datenschutz von Kindern",
      paragraphs: ["default0 bietet keine speziell auf Kinder ausgerichteten Inhalte an und erhebt nicht aktiv personenbezogene Daten von Kindern."]
    },
    {
      heading: "7. Deine Rechte",
      paragraphs: [
        "Wenn du Fragen zu dieser Datenschutzerklärung oder zur Datenverarbeitung hast, kannst du uns über die unten stehende Kontaktmethode erreichen.",
        "Du kannst die App jederzeit deinstallieren und lokale Daten löschen, um die weitere lokale Verarbeitung zu beenden."
      ]
    },
    {
      heading: "8. Aktualisierungen dieser Richtlinie",
      paragraphs: ["Wir können diese Richtlinie aufgrund von Produktänderungen oder gesetzlichen Anforderungen aktualisieren. Nach einer Aktualisierung wird sie auf dieser Seite veröffentlicht und das Inkrafttretedatum angepasst."]
    }
  ],
  contactTitle: "Bei Fragen zu dieser Richtlinie kontaktiere uns unter",
  contactEmail: "help@default0.com",
  backHome: "Zur Startseite"
};
