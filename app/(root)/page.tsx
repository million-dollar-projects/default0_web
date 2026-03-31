import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { detectLocaleFromHeader } from "@/lib/locale-detect";

export default function Home() {
  const locale = detectLocaleFromHeader(headers().get("accept-language"));
  redirect(`/${locale}`);
}
