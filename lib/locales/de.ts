import type { SiteContent } from "@/lib/locales/types";
export const de: SiteContent = {
  brand: "Default0",
  nav: { features: "Funktionen", scenarios: "Szenarien", faq: "FAQ" },
  labels: {
    testimonials: "Stimmen",
    faq: "FAQ",
    language: "Sprache",
    blog: "Blog",
    blogEmpty: "Noch keine veröffentlichten Artikel.",
    backToBlog: "Zurück zum Blog"
  },
  hero: {
    badge: "Automatische Stummschaltung für die macOS-Menüleiste",
    title: "Automatische Stummschaltung, damit dich plötzliche Lautsprecher-Ausgabe nicht mehr in peinliche Situationen bringt.",
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
    { quote: "Ich muss das Lautstärke-Icon nicht mehr ständig kontrollieren. Es fühlt sich wie ein stilles Sicherheitsnetz an.", name: "Mara Klein", role: "Frontend Engineer" },
    { quote: "Zwischen Meetings und Schnitt-Tools zu wechseln war kritisch. Jetzt bleibt es einfach ruhig.", name: "Jonas Reiter", role: "Content Creator" },
    { quote: "Früher habe ich nach jedem Entsperren erst die Lautstärke geprüft. Das fällt jetzt weg.", name: "Lea Hofmann", role: "Operations Managerin" }
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
    links: ["Funktionen", "Feedback", "Changelog", "FAQ", "Datenschutz", "Kontakt"],
    copyright: "© 2026 Default0. All rights reserved."
  }
};

