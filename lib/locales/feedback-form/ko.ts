import type { FeedbackFormCopy } from "@/lib/locales/feedback-form/types";

export const feedbackFormKo: FeedbackFormCopy = {
  typeLabel: "유형",
  titleLabel: "제목",
  detailsLabel: "버그 내용 / 기능 제안",
  stepsLabel: "재현 단계 (선택)",
  contactLabel: "연락 이메일 (선택)",
  privacyNotice: "제출 시 피드백 내용과 연락처가 GitHub 이슈 생성에 사용되며 공개될 수 있습니다.",
  submit: "제출",
  submitSending: "제출 중...",
  bugLabel: "버그 제보",
  featureLabel: "기능 제안",
  titlePlaceholder: "예: 이어폰 전환 후 외부 출력 발생",
  detailsPlaceholder: "사용 상황과 기대 결과를 작성해 주세요.",
  stepsPlaceholder: "1. ... 2. ... 3. ...",
  contactPlaceholder: "이메일 또는 연락처",
  success: "이슈가 생성되었습니다. 홈으로 이동합니다.",
  errorFallback: "제출에 실패했습니다. 잠시 후 다시 시도해 주세요.",
  errorValidation: "필수 항목을 확인한 뒤 다시 시도해 주세요.",
  errorServer: "서비스에 일시적인 문제가 있습니다. 잠시 후 다시 시도해 주세요."
};
