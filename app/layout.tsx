import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Eva Bothra - Portfolio',
  description: 'A dynamic portfolio showcasing Eva Bothra\'s academic achievements, leadership roles, and professional experiences.',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans bg-white text-black`}>
   
        {children}
      </body>
    </html>
  )
}
