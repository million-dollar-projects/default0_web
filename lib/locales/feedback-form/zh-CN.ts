import type { FeedbackFormCopy } from "@/lib/locales/feedback-form/types";

export const feedbackFormZhCN: FeedbackFormCopy = {
  typeLabel: "反馈类型",
  titleLabel: "标题",
  detailsLabel: "问题描述 / 功能说明",
  stepsLabel: "复现步骤（可选）",
  contactLabel: "联系邮箱（可选）",
  privacyNotice: "提交后，你的反馈内容和联系方式会发送到 GitHub 创建 issue，且可能公开可见。",
  submit: "提交",
  submitSending: "正在提交...",
  bugLabel: "Bug 反馈",
  featureLabel: "功能建议",
  titlePlaceholder: "例如：切换耳机后偶发外放",
  detailsPlaceholder: "请尽量描述你的使用场景与预期结果。",
  stepsPlaceholder: "1. ... 2. ... 3. ...",
  contactPlaceholder: "邮箱或其他联系方式",
  success: "已成功创建 issue，正在返回首页。",
  errorFallback: "提交失败，请稍后重试。",
  errorValidation: "请检查必填项后重试。",
  errorServer: "服务暂时不可用，请稍后再试。"
};
