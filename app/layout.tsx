import type { Metadata } from 'next'
import './globals.css'
import Tabbar from '@/components/Tabbar'
import ScrollToTop from '@/components/ScrollToTop'
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from '@/components/ui/sonner'
// import { ThemeProvider } from 'next-themes'
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
          <meta name="apple-mobile-web-app-title" content="Eva Bothra" />
          <meta name="theme-color" content="#007B78" />
          <meta name="color-scheme" content="light"/>

          {/* <script
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
          /> */}
        </head>
        <body className={`font-sans bg-white text-black`}>
        {/* <ThemeProvider forcedTheme="light" attribute="class"> */}

          <Tabbar/>
          {children}
          <ScrollToTop />
          <Toaster />
          {/* </ThemeProvider> */}

        </body>
      </html>
    </ClerkProvider>
  )
}
