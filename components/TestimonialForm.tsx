"use client"

import { useState, useEffect, useRef } from 'react'
import { useUser, useSignIn, useClerk } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus, User, Briefcase, MessageSquare, Chrome, Loader2, Upload, X, LogOut } from 'lucide-react'
import { TestimonialFormData } from '@/lib/types'
import { UploadDropzone } from '@/lib/uploadthing'
import { toast } from 'sonner'

interface TestimonialFormProps {
  onTestimonialSubmit: (data: TestimonialFormData) => Promise<void>
}

export default function TestimonialForm({ onTestimonialSubmit }: TestimonialFormProps) {
  const { user, isSignedIn, isLoaded } = useUser()
  const { signIn } = useSignIn()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [formData, setFormData] = useState<TestimonialFormData>({
    author: '',
    role: '',
    content: '',
    imageSrc: '',
    email: '',
    status: 'PENDING'
  })
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (field: keyof TestimonialFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Auto-fill form when user is authenticated via Google
  useEffect(() => {
    if (isSignedIn && user && !formData.author) {
      setFormData(prev => ({
        ...prev,
        author: user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: user.primaryEmailAddress?.emailAddress || '',
        imageSrc: user.imageUrl || ''
      }))
      toast.success('Google account information loaded!')
    }
  }, [isSignedIn, user, formData.author])

  // Reopen form after OAuth redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('testimonial') === 'true' && isSignedIn) {
      setIsOpen(true)
      // Clean up URL parameter
      const newUrl = window.location.pathname
      window.history.replaceState({}, '', newUrl)
    }
  }, [isSignedIn])

  // Reset form when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          author: '',
          role: '',
          content: '',
          imageSrc: '',
          email: '',
          status: 'PENDING'
        })
        if (formRef.current) formRef.current.reset()
      }, 200)
    }
  }, [isOpen])

  const handleGoogleSignIn = async () => {
    try {
      setIsAuthenticating(true)
      await signIn?.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: `${window.location.pathname}?testimonial=true`,
      })
    } catch (error: any) {
      toast.error('Failed to sign in with Google')
      console.error('Google sign-in error:', error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  const { signOut } = useClerk()

  const handleSwitchAccount = async () => {
    try {
      await signOut()
      setTimeout(() => {
        handleGoogleSignIn()
      }, 300)
    } catch (error) {
      toast.error('Failed to switch account')
      console.error('Switch account error:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.author || !formData.role || !formData.content) {
      toast.error('Please fill in all required fields')
      return
    }
    setIsSubmitting(true)
    try {
      await onTestimonialSubmit(formData)
      setFormData({ author: '', role: '', content: '', imageSrc: '', email: '', status: 'PENDING' })
      setIsOpen(false)
      toast.success('Testimonial submitted for admin review!')
    } catch (error) {
      toast.error('Failed to submit testimonial')
      console.error('Error submitting testimonial:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 transition"
          size="lg"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl p-0 rounded-2xl shadow-2xl border-0"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-center">Share Your Experience</DialogTitle>
          <DialogDescription className="text-center text-base text-muted-foreground">
            Help others learn about working with Eva by sharing your testimonial.
          </DialogDescription>
        </DialogHeader>
        <Card className="shadow-none border-0 bg-transparent">
          <CardContent className="pt-0 px-6 pb-6">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              autoComplete="off"
            >
              {/* Google Authentication Section */}
              {!isSignedIn ? (
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-full bg-blue-50 p-6 rounded-xl border-2 border-dashed border-blue-200 flex flex-col items-center">
                    <Chrome className="w-12 h-12 text-blue-600 mb-3" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Sign in with Google</h3>
                    <p className="text-gray-600 mb-4 text-center max-w-xs">
                      Sign in to auto-fill your information and submit your testimonial.
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
                <div className="w-full bg-green-50 p-4 rounded-xl border border-green-200 flex items-center gap-3 mb-2 justify-between">
                  <div className="flex items-center gap-3">
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
                  <div className="flex flex-col items-end gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleSwitchAccount}
                      className="flex items-center gap-1 text-red-600 hover:bg-red-50"
                      title="Switch Google Account"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="hidden sm:inline">Switch Account</span>
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="author" className="flex items-center gap-2 font-medium">
                    <User className="w-4 h-4" />
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="rounded-lg"
                    autoComplete="off"
                  />
                </div>

                {/* Role Field */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="flex items-center gap-2 font-medium">
                    <Briefcase className="w-4 h-4" />
                    Your Role/Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    placeholder="e.g., Professor, Mentor, Colleague"
                    required
                    className="rounded-lg"
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="space-y-2">
                <Label htmlFor="content" className="flex items-center gap-2 font-medium">
                  <MessageSquare className="w-4 h-4" />
                  Your Testimonial <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  placeholder="Share your experience working with Eva..."
                  rows={5}
                  required
                  className="rounded-lg resize-none"
                  maxLength={600}
                />
                <div className="text-xs text-muted-foreground text-right">
                  {formData.content.length}/600
                </div>
              </div>

              {/* Profile Image Upload */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 font-medium">
                  <Upload className="w-4 h-4" />
                  Profile Image <span className="text-muted-foreground font-normal">(Optional)</span>
                </Label>
                {formData.imageSrc ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={formData.imageSrc}
                      alt="Preview"
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setFormData(prev => ({ ...prev, imageSrc: '' }))}
                      className="flex items-center gap-1"
                    >
                      <X className="w-4 h-4" />
                      Remove
                    </Button>
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res?.[0]?.url) {
                        setFormData(prev => ({ ...prev, imageSrc: res[0].url }))
                        toast.success('Image uploaded successfully!')
                      }
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(`Upload failed: ${error.message}`)
                    }}
                    appearance={{
                      container: "border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white",
                      uploadIcon: "text-gray-400",
                      label: "text-gray-600",
                      allowedContent: "text-gray-500 text-sm",
                    }}
                  />
                )}
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
                      Submitting...
                    </span>
                  ) : (
                    'Submit for Review'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
