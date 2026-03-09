"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/site-content";

type IssueType = "bug" | "feature";

type FormCopy = {
  typeLabel: string;
  titleLabel: string;
  detailsLabel: string;
  stepsLabel: string;
  contactLabel: string;
  submit: string;
  bugLabel: string;
  featureLabel: string;
  titlePlaceholder: string;
  detailsPlaceholder: string;
  stepsPlaceholder: string;
  contactPlaceholder: string;
};

const copyByLocale: Record<Locale, FormCopy> = {
  "zh-CN": {
    typeLabel: "反馈类型",
    titleLabel: "标题",
    detailsLabel: "问题描述 / 功能说明",
    stepsLabel: "复现步骤（可选）",
    contactLabel: "联系邮箱",
    submit: "提交",
    bugLabel: "Bug 反馈",
    featureLabel: "功能建议",
    titlePlaceholder: "例如：切换耳机后偶发外放",
    detailsPlaceholder: "请尽量描述你的使用场景与预期结果。",
    stepsPlaceholder: "1. ... 2. ... 3. ...",
    contactPlaceholder: "邮箱或其他联系方式"
  },
  en: {
    typeLabel: "Type",
    titleLabel: "Title",
    detailsLabel: "Bug details / Feature request",
    stepsLabel: "Steps to reproduce (optional)",
    contactLabel: "Contact Email",
    submit: "Submit",
    bugLabel: "Bug Report",
    featureLabel: "Feature Request",
    titlePlaceholder: "e.g. Speaker output after headphone switch",
    detailsPlaceholder: "Describe your context and expected result.",
    stepsPlaceholder: "1. ... 2. ... 3. ...",
    contactPlaceholder: "Email or contact method"
  },
  ko: {
    typeLabel: "유형",
    titleLabel: "제목",
    detailsLabel: "버그 내용 / 기능 제안",
    stepsLabel: "재현 단계 (선택)",
    contactLabel: "연락 이메일",
    submit: "제출",
    bugLabel: "버그 제보",
    featureLabel: "기능 제안",
    titlePlaceholder: "예: 이어폰 전환 후 외부 출력 발생",
    detailsPlaceholder: "사용 상황과 기대 결과를 작성해 주세요.",
    stepsPlaceholder: "1. ... 2. ... 3. ...",
    contactPlaceholder: "이메일 또는 연락처"
  },
  ja: {
    typeLabel: "種別",
    titleLabel: "タイトル",
    detailsLabel: "不具合内容 / 機能要望",
    stepsLabel: "再現手順（任意）",
    contactLabel: "連絡先メール",
    submit: "送信",
    bugLabel: "バグ報告",
    featureLabel: "機能要望",
    titlePlaceholder: "例：ヘッドホン切替後に外部再生される",
    detailsPlaceholder: "利用状況と期待結果を記載してください。",
    stepsPlaceholder: "1. ... 2. ... 3. ...",
    contactPlaceholder: "メール等の連絡先"
  },
  de: {
    typeLabel: "Typ",
    titleLabel: "Titel",
    detailsLabel: "Fehlerdetails / Funktionswunsch",
    stepsLabel: "Schritte zur Reproduktion (optional)",
    contactLabel: "Kontakt-E-Mail",
    submit: "Senden",
    bugLabel: "Bug melden",
    featureLabel: "Feature anfragen",
    titlePlaceholder: "z. B. Lautsprecher-Ausgabe nach Kopfhörerwechsel",
    detailsPlaceholder: "Bitte Kontext und erwartetes Verhalten beschreiben.",
    stepsPlaceholder: "1. ... 2. ... 3. ...",
    contactPlaceholder: "E-Mail oder Kontaktmöglichkeit"
  },
  es: {
    typeLabel: "Tipo",
    titleLabel: "Título",
    detailsLabel: "Detalle del error / Solicitud de función",
    stepsLabel: "Pasos para reproducir (opcional)",
    contactLabel: "Correo de contacto",
    submit: "Enviar",
    bugLabel: "Reportar bug",
    featureLabel: "Solicitar función",
    titlePlaceholder: "p. ej. salida por altavoz tras cambiar auriculares",
    detailsPlaceholder: "Describe el contexto y el resultado esperado.",
    stepsPlaceholder: "1. ... 2. ... 3. ...",
    contactPlaceholder: "Email o medio de contacto"
  }
};

export default function IssueFeedbackForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const copy = copyByLocale[locale];
  const [type, setType] = useState<IssueType>("bug");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [steps, setSteps] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [statusKind, setStatusKind] = useState<"idle" | "success" | "error">("idle");

  const issueTypeLabel = useMemo(() => (type === "bug" ? copy.bugLabel : copy.featureLabel), [copy, type]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusKind("idle");
    setStatusText("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          type,
          typeLabel: issueTypeLabel,
          title: title.trim(),
          details: details.trim(),
          steps: steps.trim(),
          contact: contact.trim()
        })
      });

      const data = (await response.json()) as { ok: boolean; error?: string; issueUrl?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Failed to create issue");
      }

      setStatusKind("success");
      setStatusText(
        locale === "zh-CN"
          ? "已成功创建 issue。"
          : locale === "ja"
            ? "Issue を作成しました。"
            : locale === "ko"
              ? "이슈가 생성되었습니다."
              : locale === "de"
                ? "Issue wurde erstellt."
                : locale === "es"
                  ? "El issue se creó correctamente."
                  : "Issue created successfully."
      );
      setTitle("");
      setDetails("");
      setSteps("");
      setContact("");
      router.push(`/${locale}`);
    } catch (error) {
      setStatusKind("error");
      setStatusText(
        error instanceof Error
          ? error.message
          : locale === "zh-CN"
            ? "提交失败，请稍后重试。"
            : "Submit failed, please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-xxl border border-line bg-surface p-7 sm:p-9">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-muted">{copy.typeLabel}</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as IssueType)}
            className="h-11 rounded-xl border border-line bg-bg px-3 text-sm outline-none transition focus:border-brand"
          >
            <option value="bug">{copy.bugLabel}</option>
            <option value="feature">{copy.featureLabel}</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-muted">{copy.titleLabel}</span>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={copy.titlePlaceholder}
            className="h-11 rounded-xl border border-line bg-bg px-3 text-sm outline-none transition focus:border-brand"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-muted">{copy.detailsLabel}</span>
          <textarea
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={copy.detailsPlaceholder}
            rows={6}
            className="rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none transition focus:border-brand"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-muted">{copy.stepsLabel}</span>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder={copy.stepsPlaceholder}
            rows={4}
            className="rounded-xl border border-line bg-bg px-3 py-2 text-sm outline-none transition focus:border-brand"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-muted">{copy.contactLabel}</span>
          <input
            required
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={copy.contactPlaceholder}
            className="h-11 rounded-xl border border-line bg-bg px-3 text-sm outline-none transition focus:border-brand"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-70"
        >
          {copy.submit}
        </button>

        {statusKind !== "idle" ? (
          <p className={`text-sm ${statusKind === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>{statusText}</p>
        ) : null}
      </div>
    </form>
  );
}
