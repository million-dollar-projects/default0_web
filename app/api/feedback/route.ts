import { NextResponse } from "next/server";

type FeedbackPayload = {
  locale: string;
  type: "bug" | "feature";
  typeLabel: string;
  title: string;
  details: string;
  steps?: string;
  contact?: string;
};

function badRequest(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

function getRuntimeEnv() {
  return process.env.APP_ENV === "production" ? "production" : "local";
}

export async function POST(request: Request) {
  let payload: FeedbackPayload;

  try {
    payload = (await request.json()) as FeedbackPayload;
  } catch {
    return badRequest("Invalid JSON body");
  }

  if (!payload?.title || !payload?.details || !payload?.type) {
    return badRequest("Missing required fields: type, title, details");
  }

  const runtimeEnv = getRuntimeEnv();
  const isProduction = runtimeEnv === "production";

  const token =
    (isProduction ? process.env.GITHUB_TOKEN_PROD : process.env.GITHUB_TOKEN_DEV) ||
    process.env.GITHUB_TOKEN;
  const repoOwner =
    (isProduction ? process.env.GITHUB_REPO_OWNER_PROD : process.env.GITHUB_REPO_OWNER_DEV) ||
    process.env.GITHUB_REPO_OWNER ||
    "million-dollar-projects";
  const repoName =
    (isProduction ? process.env.GITHUB_REPO_NAME_PROD : process.env.GITHUB_REPO_NAME_DEV) ||
    process.env.GITHUB_REPO_NAME ||
    "default0_web";

  if (!token) {
    return badRequest("Server missing GITHUB_TOKEN", 500);
  }

  const envTag = isProduction ? "PROD" : "LOCAL";
  const issueTitle = `[${envTag}][${payload.typeLabel}] ${payload.title.trim()}`;
  const body = [
    `## Environment\n${runtimeEnv}`,
    `## Type\n${payload.typeLabel}`,
    `## Locale\n${payload.locale || "unknown"}`,
    `## Description\n${payload.details.trim()}`,
    `## Steps to Reproduce\n${payload.steps?.trim() || "N/A"}`,
    `## Contact\n${payload.contact?.trim() || "N/A"}`
  ].join("\n\n");

  const labels = [payload.type === "bug" ? "bug" : "enhancement"];

  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28"
    },
    body: JSON.stringify({
      title: issueTitle,
      body,
      labels
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return badRequest(`GitHub API error (${response.status}): ${errorBody}`, 502);
  }

  const result = (await response.json()) as { html_url?: string; number?: number };
  return NextResponse.json({ ok: true, issueUrl: result.html_url, issueNumber: result.number });
}
