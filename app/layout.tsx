import type { Metadata } from "next"
import { Bebas_Neue, Barlow } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
<link href="https://fonts.googleapis.com/css2?family=Cal+Sans:wght@400;700&display=swap" rel="stylesheet" />
const _bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

const _barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Merlos Consultoria Empresarial | Transformamos Negócios",
  description:
    "Consultoria especializada em vendas, marketing digital, desenvolvimento de sites e estratégia empresarial. Transformamos desafios em oportunidades de crescimento.",
  keywords: [
    "consultoria empresarial",
    "vendas",
    "marketing digital",
    "desenvolvimento de sites",
    "estratégia",
    "rebranding",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
