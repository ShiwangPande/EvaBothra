import type { Metadata } from 'next'
import './globals.css'

// Add favicon/icon
export const metadata: Metadata = {
  title: 'Eva Bothra - Portfolio',
  description: 'A dynamic portfolio showcasing Eva Bothra\'s academic achievements, leadership roles, and professional experiences.',
  icons: {
    icon: '/assets/eva.jpg', // Make sure this file exists in your public/ directory
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* If you want to add more icons or meta tags, you can do so here */}
        <link rel="icon" href="/assets/eva.jpg" />
      </head>
      <body className={`font-sans bg-white text-black`}>
        {children}
      </body>
    </html>
  )
}
