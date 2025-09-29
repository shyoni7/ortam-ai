"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("navbar");
  return (
    <nav className="w-full py-4 flex gap-6 justify-center bg-neutral-900 text-neutral-100">
      <Link href="/">{t("home")}</Link>
      <Link href="/incubator">{t("incubator")}</Link>
      <Link href="/academy">{t("academy")}</Link>
      <Link href="/placement">{t("placement")}</Link>
      <Link href="/about">{t("about")}</Link>
      <Link href="/case-studies">{t("caseStudies")}</Link>
      <Link href="/blog">{t("blog")}</Link>
      <Link href="/partners">{t("partners")}</Link>
      <Link href="/contact">{t("contact")}</Link>
    </nav>
  );
}
