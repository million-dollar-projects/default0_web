import type { FeedbackFormCopy } from "@/lib/locales/feedback-form/types";

export const feedbackFormDe: FeedbackFormCopy = {
  typeLabel: "Typ",
  titleLabel: "Titel",
  detailsLabel: "Fehlerdetails / Funktionswunsch",
  stepsLabel: "Schritte zur Reproduktion (optional)",
  contactLabel: "Kontakt-E-Mail (optional)",
  privacyNotice: "Beim Senden können Feedback-Inhalte und Kontaktangaben an GitHub zur Issue-Erstellung übermittelt und öffentlich sichtbar werden.",
  submit: "Senden",
  submitSending: "Wird gesendet...",
  bugLabel: "Bug melden",
  featureLabel: "Feature anfragen",
  titlePlaceholder: "z. B. Lautsprecher-Ausgabe nach Kopfhörerwechsel",
  detailsPlaceholder: "Bitte Kontext und erwartetes Verhalten beschreiben.",
  stepsPlaceholder: "1. ... 2. ... 3. ...",
  contactPlaceholder: "E-Mail oder Kontaktmöglichkeit",
  success: "Issue wurde erstellt. Zurück zur Startseite...",
  errorFallback: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
  errorValidation: "Bitte Pflichtfelder prüfen und erneut versuchen.",
  errorServer: "Der Dienst ist vorübergehend nicht verfügbar. Bitte später erneut versuchen."
};
