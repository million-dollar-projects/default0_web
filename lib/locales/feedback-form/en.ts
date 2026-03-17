import type { FeedbackFormCopy } from "@/lib/locales/feedback-form/types";

export const feedbackFormEn: FeedbackFormCopy = {
  typeLabel: "Type",
  titleLabel: "Title",
  detailsLabel: "Bug details / Feature request",
  stepsLabel: "Steps to reproduce (optional)",
  contactLabel: "Contact Email",
  submit: "Submit",
  submitSending: "Submitting...",
  bugLabel: "Bug Report",
  featureLabel: "Feature Request",
  titlePlaceholder: "e.g. Speaker output after headphone switch",
  detailsPlaceholder: "Describe your context and expected result.",
  stepsPlaceholder: "1. ... 2. ... 3. ...",
  contactPlaceholder: "Email or contact method",
  success: "Issue created successfully. Redirecting to home...",
  errorFallback: "Submit failed, please try again.",
  errorValidation: "Please check required fields and try again.",
  errorServer: "Service is temporarily unavailable. Please try again later."
};
