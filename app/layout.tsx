import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = "he";
  const messages = require(`../messages/${locale}.json`);

  return (
    <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="container mx-auto min-h-[60vh] py-10">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
