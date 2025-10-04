import type { Metadata } from 'next'
import './globals.css'
import Tabbar from '@/components/Tabbar'
import ScrollToTop from '@/components/ScrollToTop'
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from '@/components/ui/sonner'

// Add favicon/icon
export const metadata: Metadata = {
  title: 'My Elevator Pitch - Why You Should Admit Me',
  description: 'Enter into the journey of my impact — academics, leadership, community, skills, awards, YouTube, and reflections.',
  icons: {
    icon: './favicon.ico', // Make sure this file exists in your public/ directory
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* If you want to add more icons or meta tags, you can do so here */}
          <link rel="icon" href="./favicon.ico" />
        </head>
        <body className={`font-sans bg-white text-black`}>
          <Tabbar/>
          {children}
          <ScrollToTop />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
