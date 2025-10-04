"use client"

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { TestimonialAdmin } from '@/components/admin/TestimonialAdmin'
import { ContactAdmin } from '@/components/admin/ContactAdmin'
import { Testimonial, ContactMessage } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Shield, AlertCircle, LogOut, ArrowLeft, MessageSquare, Star } from 'lucide-react'

export default function AdminTestimonialsPage() {
  const { user, isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [accessDenied, setAccessDenied] = useState(false)

  useEffect(() => {
    const checkAccessAndFetch = async () => {
      if (isLoaded && isSignedIn) {
        try {
          const response = await fetch('/api/admin/check-access')
          if (response.ok) {
            await Promise.all([fetchTestimonials(), fetchContactMessages()])
          } else {
            setAccessDenied(true)
          }
        } catch (error) {
          console.error('Error checking admin access:', error)
          setAccessDenied(true)
        }
      } else if (isLoaded && !isSignedIn) {
        router.push('/admin/login')
      }
    }

    checkAccessAndFetch()
  }, [isSignedIn, isLoaded, router])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials/admin')
      if (response.ok) {
        const data = await response.json()
        setTestimonials(data)
      } else if (response.status === 403) {
        console.error('Access denied - not an admin')
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    }
  }

  const fetchContactMessages = async () => {
    try {
      const response = await fetch('/api/contact/admin')
      if (response.ok) {
        const data = await response.json()
        setContactMessages(data)
      } else if (response.status === 403) {
        console.error('Access denied - not an admin')
      }
    } catch (error) {
      console.error('Error fetching contact messages:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleApprove = async (id: string) => {
    try {
      const response = await fetch('/api/testimonials/admin', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, action: 'approve' }),
      })

      if (response.ok) {
        await fetchTestimonials() // Refresh the list
      }
    } catch (error) {
      console.error('Error approving testimonial:', error)
    }
  }

  const handleReject = async (id: string) => {
    try {
      const response = await fetch('/api/testimonials/admin', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, action: 'reject' }),
      })

      if (response.ok) {
        await fetchTestimonials() // Refresh the list
      }
    } catch (error) {
      console.error('Error rejecting testimonial:', error)
    }
  }

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch('/api/contact/admin', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: 'READ' }),
      })

      if (response.ok) {
        await fetchContactMessages() // Refresh the list
      }
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  const handleMarkAsReplied = async (id: string) => {
    try {
      const response = await fetch('/api/contact/admin', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: 'REPLIED' }),
      })

      if (response.ok) {
        await fetchContactMessages() // Refresh the list
      }
    } catch (error) {
      console.error('Error marking message as replied:', error)
    }
  }

  if (accessDenied) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="py-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-4">
              You don't have admin privileges to access this page.
            </p>
            <div className="flex gap-2 justify-center">
              <Button 
                variant="outline" 
                onClick={() => router.push('/admin/login')}
              >
                Try Different Account
              </Button>
              <Button 
                variant="outline" 
                onClick={() => router.push('/')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="py-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
            <p className="text-gray-600">Loading...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <p className="text-gray-600">Manage testimonials and contact messages</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">
              Welcome, {user?.fullName || user?.firstName || 'Admin'}
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/admin/login')}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Switch Account
            </Button>
          </div>
        </div>

        {isLoading ? (
          <Card>
            <CardContent className="py-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-2">Loading...</p>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="testimonials" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="testimonials" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Testimonials ({testimonials.length})
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact Messages ({contactMessages.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="testimonials">
              <TestimonialAdmin 
                testimonials={testimonials}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            </TabsContent>
            <TabsContent value="contact">
              <ContactAdmin 
                contactMessages={contactMessages}
                onMarkAsRead={handleMarkAsRead}
                onMarkAsReplied={handleMarkAsReplied}
              />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
