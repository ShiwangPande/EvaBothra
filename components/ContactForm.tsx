'use client'

import { useState, useEffect } from 'react'
import { useUser, useSignIn } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare, Chrome, Loader2, User, Mail, Sparkles, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react'
import { ContactFormData } from '@/lib/types'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const { user, isSignedIn } = useUser()
  const { signIn } = useSignIn()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    if (isSignedIn && user && !formData.name) {
      setFormData(prev => ({
        ...prev,
        name: user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: user.primaryEmailAddress?.emailAddress || '',
      }))
      toast.success('Google account information loaded!')
    }
  }, [isSignedIn, user, formData.name])

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit contact message')

      setFormData({ name: '', email: '', message: '' })
      toast.success("Message sent successfully! I'll get back to you soon.")
    } catch (error) {
      toast.error('Failed to send message')
      console.error('Error submitting contact message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative  bg-gray-50/50 overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="relative inline-block mb-6 text-3xl md:text-4xl font-bold text-[#007B78] tracking-tight">
            Get in Touch
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 -bottom-1 h-[3px] bg-[#007B78] rounded-full"
            />
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto">
            Don’t hesitate to reach out with the contact information below, or send a message using the form.
          </p>

          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-8 text-gray-700"
          >
            <Mail className="w-5 h-5 text-[#007B78]" />
            <button
              onClick={() => {
                navigator.clipboard.writeText('evabothra@gmail.com')
                toast.success('Email address copied!')
              }}
              className="font-medium text-[#007B78] hover:underline focus:outline-none transition-all"
            >
              evabothra@gmail.com
            </button>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a
              href="https://www.linkedin.com/in/eva-bothra-56650325a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
              <span className="text-blue-700 font-medium group-hover:text-blue-800">LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.instagram.com/evabothra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <Instagram className="w-5 h-5 text-pink-600 group-hover:text-pink-700" />
              <span className="text-pink-700 font-medium group-hover:text-pink-800">Instagram</span>
              <ExternalLink className="w-4 h-4 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.youtube.com/@ReshapingSociety"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <Youtube className="w-5 h-5 text-red-600 group-hover:text-red-700" />
              <span className="text-red-700 font-medium group-hover:text-red-800">YouTube</span>
              <ExternalLink className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px bg-gray-200 flex-1 max-w-20"></div>
            <span className="text-sm text-gray-500 font-medium">OR</span>
            <div className="h-px bg-gray-200 flex-1 max-w-20"></div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border border-gray-200 rounded-xl shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Google Auth Section */}
                {!isSignedIn ? (
                  <div className="text-center py-6">
                    <Button
                      type="button"
                      onClick={handleGoogleSignIn}
                      disabled={isAuthenticating}
                      className="bg-[#007B78] hover:bg-[#005a57] text-white px-8 py-3 rounded-lg"
                    >
                      {isAuthenticating ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Connecting...
                        </>
                      ) : (
                        <>
                          <Chrome className="w-4 h-4 mr-2" /> Continue with Google
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-gray-600 mt-3">
                      Sign in to auto-fill your information
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-lg">
                    <img
                      src={user?.imageUrl}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {user?.fullName || `${user?.firstName || ''} ${user?.lastName || ''}`.trim()}
                      </p>
                      <p className="text-sm text-gray-600">
                        {user?.primaryEmailAddress?.emailAddress}
                      </p>
                    </div>
                  </div>
                )}

                {/* Form Fields */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      required
                      className="rounded-lg border-gray-300 focus:border-[#007B78] focus:ring-[#007B78]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                      className="rounded-lg border-gray-300 focus:border-[#007B78] focus:ring-[#007B78]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="What would you like to discuss?"
                      rows={5}
                      required
                      className="rounded-lg border-gray-300 focus:border-[#007B78] focus:ring-[#007B78] resize-none"
                      maxLength={1000}
                    />
                    <div className="text-xs text-gray-500 text-right">
                      {formData.message.length}/1000
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isSignedIn}
                    className="flex-1 py-3 rounded-lg bg-[#007B78] hover:bg-[#005a57] text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
