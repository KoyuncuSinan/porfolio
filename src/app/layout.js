import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Sinan Koyuncu',
  description: 'The porfolio page of a Full-stack Developer Sinan Koyuncu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
