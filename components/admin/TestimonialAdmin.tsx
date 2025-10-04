"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CheckCircle, XCircle, Clock, User, Mail, MessageSquare } from 'lucide-react'
import { Testimonial } from '@/lib/types'
import { toast } from 'sonner'

interface TestimonialAdminProps {
  testimonials: Testimonial[]
  onApprove: (id: string) => Promise<void>
  onReject: (id: string) => Promise<void>
}

export function TestimonialAdmin({ testimonials, onApprove, onReject }: TestimonialAdminProps) {
  const [pendingTestimonials, setPendingTestimonials] = useState<Testimonial[]>([])
  const [approvedTestimonials, setApprovedTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const pending = testimonials.filter(t => t.status === 'PENDING')
    const approved = testimonials.filter(t => t.status === 'APPROVED')
    setPendingTestimonials(pending)
    setApprovedTestimonials(approved)
  }, [testimonials])

  const handleApprove = async (id: string) => {
    setIsLoading(true)
    try {
      await onApprove(id)
      toast.success('Testimonial approved!')
    } catch (error) {
      toast.error('Failed to approve testimonial')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReject = async (id: string) => {
    setIsLoading(true)
    try {
      await onReject(id)
      toast.success('Testimonial rejected!')
    } catch (error) {
      toast.error('Failed to reject testimonial')
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>
      case 'APPROVED':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>
      case 'REJECTED':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Pending Testimonials */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-yellow-600" />
          Pending Review ({pendingTestimonials.length})
        </h2>
        {pendingTestimonials.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No testimonials pending review</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {pendingTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-yellow-200 bg-yellow-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.imageSrc} alt={testimonial.author} />
                        <AvatarFallback>
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {testimonial.role}
                          </span>
                          {testimonial.email && (
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {testimonial.email}
                            </span>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(testimonial.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 mt-1 text-gray-500" />
                      <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleApprove(testimonial.id)}
                        disabled={isLoading}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleReject(testimonial.id)}
                        disabled={isLoading}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Approved Testimonials */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Approved Testimonials ({approvedTestimonials.length})
        </h2>
        {approvedTestimonials.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No approved testimonials yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {approvedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-green-200 bg-green-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.imageSrc} alt={testimonial.author} />
                        <AvatarFallback>
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {testimonial.role}
                          </span>
                          {testimonial.email && (
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {testimonial.email}
                            </span>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(testimonial.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 mt-1 text-gray-500" />
                    <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
