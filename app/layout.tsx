import type { Metadata } from 'next'
import './globals.css'
import Tabbar from '@/components/Tabbar'
import ScrollToTop from '@/components/ScrollToTop'
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from '@/components/ui/sonner'

// Add favicon/icon
export const metadata: Metadata = {
  title: 'Eva Bothra - Portfolio',
  description: 'Enter into the journey of my impact — academics, leadership, community, skills, awards, YouTube, and reflections.',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
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
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#007B78" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js')
                      .then(function(registration) {
                        console.log('SW registered: ', registration);
                      })
                      .catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                      });
                  });
                }
              `,
            }}
          />
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
