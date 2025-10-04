"use client"

import { useState, useEffect } from 'react'
import { useUser, useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Chrome, Shield, Loader2, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'

export default function AdminLoginPage() {
  const { user, isSignedIn, isLoaded } = useUser()
  const { signIn } = useSignIn()
  const router = useRouter()
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [isCheckingAccess, setIsCheckingAccess] = useState(false)
  const [accessDenied, setAccessDenied] = useState(false)

  // Check if user is admin after authentication
  useEffect(() => {
    const checkAdminAccess = async () => {
      if (isLoaded && isSignedIn && user) {
        setIsCheckingAccess(true)
        try {
          const response = await fetch('/api/admin/check-access')
          if (response.ok) {
            // User is admin, redirect to admin dashboard
            router.push('/admin/testimonials')
          } else {
            // User is not admin
            setAccessDenied(true)
          }
        } catch (error) {
          console.error('Error checking admin access:', error)
          setAccessDenied(true)
        } finally {
          setIsCheckingAccess(false)
        }
      }
    }

    checkAdminAccess()
  }, [isLoaded, isSignedIn, user, router])

  const handleGoogleSignIn = async () => {
    try {
      setIsAuthenticating(true)
      await signIn?.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/admin/login',
      })
    } catch (error: any) {
      toast.error('Failed to sign in with Google')
      console.error('Google sign-in error:', error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (isCheckingAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="py-8 text-center">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Checking Admin Access</h2>
            <p className="text-gray-600">Verifying your admin privileges...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (accessDenied) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="py-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-4">
              You don't have admin privileges to access this page.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setAccessDenied(false)
                router.push('/')
              }}
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>
            Sign in with your admin Google account to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Only authorized administrators can access this panel. Your Google account must be registered as an admin.
            </AlertDescription>
          </Alert>

          <Button 
            onClick={handleGoogleSignIn}
            disabled={isAuthenticating}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            {isAuthenticating ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Chrome className="w-5 h-5 mr-2" />
            )}
            Continue with Google
          </Button>

          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => router.push('/')}
              className="text-sm"
            >
              ← Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
