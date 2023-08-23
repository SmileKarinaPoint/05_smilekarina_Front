import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
