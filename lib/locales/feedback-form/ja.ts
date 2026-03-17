import type { FeedbackFormCopy } from "@/lib/locales/feedback-form/types";

export const feedbackFormJa: FeedbackFormCopy = {
  typeLabel: "種別",
  titleLabel: "タイトル",
  detailsLabel: "不具合内容 / 機能要望",
  stepsLabel: "再現手順（任意）",
  contactLabel: "連絡先メール",
  submit: "送信",
  submitSending: "送信中...",
  bugLabel: "バグ報告",
  featureLabel: "機能要望",
  titlePlaceholder: "例：ヘッドホン切替後に外部再生される",
  detailsPlaceholder: "利用状況と期待結果を記載してください。",
  stepsPlaceholder: "1. ... 2. ... 3. ...",
  contactPlaceholder: "メール等の連絡先",
  success: "Issue を作成しました。ホームへ戻ります。",
  errorFallback: "送信に失敗しました。しばらくしてから再試行してください。",
  errorValidation: "必須項目を確認して再試行してください。",
  errorServer: "サービスが一時的に利用できません。しばらくしてから再試行してください。"
};
