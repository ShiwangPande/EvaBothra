"use client"

import { useState, useEffect } from 'react'
import { useSignIn, useSignUp, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Chrome } from 'lucide-react'
import { Loader2 } from 'lucide-react'

interface CustomAuthFormProps {
  mode: 'signin' | 'signup'
  onToggleMode: () => void
}

export function CustomAuthForm({ mode, onToggleMode }: CustomAuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { signIn, setActive } = useSignIn()
  const { signUp, setActive: setActiveSignUp } = useSignUp()
  const { user } = useUser()

  // Auto-fill form when user is authenticated via Google
  useEffect(() => {
    if (user && (email === '' || firstName === '' || lastName === '')) {
      setEmail(user.primaryEmailAddress?.emailAddress || '')
      setFirstName(user.firstName || '')
      setLastName(user.lastName || '')
    }
  }, [user, email, firstName, lastName])

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError('')
      
      if (mode === 'signin') {
        await signIn?.authenticateWithRedirect({
          strategy: 'oauth_google',
          redirectUrl: '/sso-callback',
          redirectUrlComplete: '/',
        })
      } else {
        await signUp?.authenticateWithRedirect({
          strategy: 'oauth_google',
          redirectUrl: '/sso-callback',
          redirectUrlComplete: '/',
        })
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Failed to sign in with Google')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!signIn) return

    try {
      setIsLoading(true)
      setError('')
      
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
      } else {
        // Handle additional steps if needed
        console.log('Additional sign-in steps required')
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Failed to sign in')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!signUp) return

    try {
      setIsLoading(true)
      setError('')
      
      const result = await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
      })

      if (result.status === 'complete') {
        await setActiveSignUp({ session: result.createdSessionId })
      } else {
        // Handle email verification if needed
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
        // You might want to show a verification step here
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Failed to create account')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
          {mode === 'signin' ? 'Welcome back' : 'Create an account'}
        </CardTitle>
        <CardDescription className="text-center">
          {mode === 'signin' 
            ? 'Enter your email and password to sign in' 
            : 'Enter your details to create a new account'
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Google Sign In Button */}
        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Chrome className="mr-2 h-4 w-4 text-blue-600" />
          )}
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={mode === 'signin' ? handleEmailSignIn : handleEmailSignUp} className="space-y-4">
          {mode === 'signup' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required={mode === 'signup'}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required={mode === 'signup'}
                  disabled={isLoading}
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              mode === 'signin' ? 'Sign In' : 'Create Account'
            )}
          </Button>
        </form>

        <div className="text-center text-sm">
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onToggleMode}
                className="text-primary hover:underline"
                disabled={isLoading}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={onToggleMode}
                className="text-primary hover:underline"
                disabled={isLoading}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
