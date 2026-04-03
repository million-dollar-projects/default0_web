"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/site-content";
import { feedbackFormCopyByLocale } from "@/lib/locales/feedback-form";

type IssueType = "bug" | "feature";

export default function IssueFeedbackForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const copy = feedbackFormCopyByLocale[locale];
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
        if (response.status >= 500) {
          throw new Error(copy.errorServer);
        }
        if (response.status >= 400 && response.status < 500) {
          throw new Error(copy.errorValidation);
        }
        throw new Error(copy.errorFallback);
      }

      setStatusKind("success");
      setStatusText(copy.success);
      setTitle("");
      setDetails("");
      setSteps("");
      setContact("");
      window.setTimeout(() => {
        router.push(`/${locale}`);
      }, 720);
    } catch (error) {
      setStatusKind("error");
      setStatusText(error instanceof Error ? error.message : copy.errorFallback);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="border border-[#1c1c17]/16 bg-white p-7 sm:p-9">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#55554f]">{copy.typeLabel}</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as IssueType)}
            className="h-11 border border-[#1d1d18]/20 bg-[#f6f3eb] px-3 text-sm text-[#171713] outline-none transition focus:border-[#171713]"
          >
            <option value="bug">{copy.bugLabel}</option>
            <option value="feature">{copy.featureLabel}</option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#55554f]">{copy.titleLabel}</span>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={copy.titlePlaceholder}
            className="h-11 border border-[#1d1d18]/20 bg-[#f6f3eb] px-3 text-sm text-[#171713] outline-none transition focus:border-[#171713]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#55554f]">{copy.detailsLabel}</span>
          <textarea
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={copy.detailsPlaceholder}
            rows={6}
            className="border border-[#1d1d18]/20 bg-[#f6f3eb] px-3 py-2 text-sm text-[#171713] outline-none transition focus:border-[#171713]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#55554f]">{copy.stepsLabel}</span>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder={copy.stepsPlaceholder}
            rows={4}
            className="border border-[#1d1d18]/20 bg-[#f6f3eb] px-3 py-2 text-sm text-[#171713] outline-none transition focus:border-[#171713]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#55554f]">{copy.contactLabel}</span>
          <input
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={copy.contactPlaceholder}
            className="h-11 border border-[#1d1d18]/20 bg-[#f6f3eb] px-3 text-sm text-[#171713] outline-none transition focus:border-[#171713]"
          />
        </label>

        <p className="text-xs leading-relaxed text-[#5d5d56]">{copy.privacyNotice}</p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="ui-press inline-flex h-11 items-center justify-center gap-2 border border-[#141410] bg-[#141410] px-6 text-sm font-semibold text-[#f7f5ed] transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block size-4 animate-spin rounded-full border-2 border-white/35 border-t-white" aria-hidden />
              {copy.submitSending}
            </>
          ) : (
            copy.submit
          )}
        </button>

        {statusKind !== "idle" ? (
          <p className={`text-sm ${statusKind === "success" ? "success-pop text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
            {statusKind === "success" ? "✓ " : ""}
            {statusText}
          </p>
        ) : null}
      </div>
    </form>
  );
}
