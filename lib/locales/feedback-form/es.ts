import type { FeedbackFormCopy } from "@/lib/locales/feedback-form/types";

export const feedbackFormEs: FeedbackFormCopy = {
  typeLabel: "Tipo",
  titleLabel: "Título",
  detailsLabel: "Detalle del error / Solicitud de función",
  stepsLabel: "Pasos para reproducir (opcional)",
  contactLabel: "Correo de contacto (opcional)",
  privacyNotice: "Al enviar, tu feedback y datos de contacto pueden enviarse a GitHub para crear un issue y podrían ser visibles públicamente.",
  submit: "Enviar",
  submitSending: "Enviando...",
  bugLabel: "Reportar bug",
  featureLabel: "Solicitar función",
  titlePlaceholder: "p. ej. salida por altavoz tras cambiar auriculares",
  detailsPlaceholder: "Describe el contexto y el resultado esperado.",
  stepsPlaceholder: "1. ... 2. ... 3. ...",
  contactPlaceholder: "Email o medio de contacto",
  success: "Issue creado correctamente. Volviendo al inicio...",
  errorFallback: "Error al enviar. Inténtalo de nuevo más tarde.",
  errorValidation: "Revisa los campos obligatorios y vuelve a intentarlo.",
  errorServer: "El servicio no está disponible temporalmente. Inténtalo más tarde."
};
