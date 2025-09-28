import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ortam AI - בינה מלאכותית מתקדמת',
  description: 'פתרונות בינה מלאכותית מתקדמים לעסקים ויחידים - Ortam AI',
  keywords: ['בינה מלאכותית', 'AI', 'אוטומציה', 'פתרונות דיגיטליים'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
