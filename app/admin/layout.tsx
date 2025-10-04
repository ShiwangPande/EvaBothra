import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from '@/components/ui/sonner'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-50">
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
