'use client'

import { useState, useEffect } from 'react'
import { useUser, useSignIn } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MessageSquare, Chrome, Loader2, User, Mail } from 'lucide-react'
import { ContactFormData } from '@/lib/types'
import { toast } from 'sonner'

export default function ContactForm() {
  const { user, isSignedIn } = useUser()
  const { signIn } = useSignIn()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  // Auto-fill form when user is authenticated via Google
  useEffect(() => {
    if (isSignedIn && user && !formData.name) {
      setFormData(prev => ({
        ...prev,
        name: user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: user.primaryEmailAddress?.emailAddress || ''
      }))
      toast.success('Google account information loaded!')
    }
  }, [isSignedIn, user, formData.name])

  // Reopen form after OAuth redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('contact') === 'true' && isSignedIn) {
      setIsOpen(true)
      // Clean up URL parameter
      const newUrl = window.location.pathname
      window.history.replaceState({}, '', newUrl)
    }
  }, [isSignedIn])

  const handleGoogleSignIn = async () => {
    try {
      setIsAuthenticating(true)
      await signIn?.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: `${window.location.pathname}?contact=true`,
      })
    } catch (error: any) {
      toast.error('Failed to sign in with Google')
      console.error('Google sign-in error:', error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact message')
      }

      setFormData({ name: '', email: '', message: '' })
      setIsOpen(false)
      toast.success('Message sent successfully! I\'ll get back to you soon.')
    } catch (error) {
      toast.error('Failed to send message')
      console.error('Error submitting contact message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-16 bg-transparent">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-['Ayer_Poster_Web']">Get in Touch</h2>
            <p className="text-gray-600 mt-2">
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 transition"
                size="lg"
              >
                <MessageSquare className="w-4 h-4" />
                Send Message
              </Button>
            </DialogTrigger>
            <DialogContent
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl p-0 rounded-2xl shadow-2xl border-0"
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
            >
              <DialogHeader className="px-6 pt-6 pb-2">
                <DialogTitle className="text-2xl font-bold text-center">Get in Touch</DialogTitle>
                <DialogDescription className="text-center text-base text-muted-foreground">
                  Send me a message and I'll get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <Card className="shadow-none border-0 bg-transparent">
                <CardContent className="pt-0 px-6 pb-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Google Authentication Section */}
                    {!isSignedIn ? (
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-full bg-blue-50 p-6 rounded-xl border-2 border-dashed border-blue-200 flex flex-col items-center">
                          <Chrome className="w-12 h-12 text-blue-600 mb-3" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">Sign in with Google</h3>
                          <p className="text-gray-600 mb-4 text-center max-w-xs">
                            Sign in to auto-fill your information and send your message.
                          </p>
                          <Button
                            type="button"
                            onClick={handleGoogleSignIn}
                            disabled={isAuthenticating}
                            className="bg-blue-600 hover:bg-blue-700 w-full max-w-xs"
                            size="lg"
                          >
                            {isAuthenticating ? (
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                              <Chrome className="w-4 h-4 mr-2" />
                            )}
                            Continue with Google
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full bg-green-50 p-4 rounded-xl border border-green-200 flex items-center gap-3 mb-2">
                        <img
                          src={user?.imageUrl}
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
                        />
                        <div>
                          <p className="font-medium text-green-800">
                            {user?.fullName || `${user?.firstName || ''} ${user?.lastName || ''}`.trim()}
                          </p>
                          <p className="text-sm text-green-600">{user?.primaryEmailAddress?.emailAddress}</p>
                          <p className="text-xs text-green-600">Signed in with Google ✓</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2 font-medium">
                          <User className="w-4 h-4" />
                          Your Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter your full name"
                          required
                          className="rounded-lg"
                          autoComplete="off"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2 font-medium">
                          <Mail className="w-4 h-4" />
                          Your Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter your email address"
                          required
                          className="rounded-lg"
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2 font-medium">
                        <MessageSquare className="w-4 h-4" />
                        Your Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="What would you like to discuss?"
                        rows={5}
                        required
                        className="rounded-lg resize-none"
                        maxLength={1000}
                      />
                      <div className="text-xs text-muted-foreground text-right">
                        {formData.message.length}/1000
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                        className="flex-1 py-3 rounded-lg border-gray-300"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isSignedIn}
                        className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}