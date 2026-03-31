import type { Metadata } from "next";
import { RootDocument, baseMetadata } from "@/app/shared-root-layout";
import "@/app/globals.css";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
