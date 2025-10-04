"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CheckCircle, XCircle, Clock, User, Mail, MessageSquare, Eye } from 'lucide-react'
import { ContactMessage } from '@/lib/types'
import { toast } from 'sonner'

interface ContactAdminProps {
  contactMessages: ContactMessage[]
  onMarkAsRead: (id: string) => Promise<void>
  onMarkAsReplied: (id: string) => Promise<void>
}

export function ContactAdmin({ contactMessages, onMarkAsRead, onMarkAsReplied }: ContactAdminProps) {
  const [pendingMessages, setPendingMessages] = useState<ContactMessage[]>([])
  const [readMessages, setReadMessages] = useState<ContactMessage[]>([])
  const [repliedMessages, setRepliedMessages] = useState<ContactMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const pending = contactMessages.filter(m => m.status === 'PENDING')
    const read = contactMessages.filter(m => m.status === 'READ')
    const replied = contactMessages.filter(m => m.status === 'REPLIED')
    setPendingMessages(pending)
    setReadMessages(read)
    setRepliedMessages(replied)
  }, [contactMessages])

  const handleMarkAsRead = async (id: string) => {
    setIsLoading(true)
    try {
      await onMarkAsRead(id)
      toast.success('Message marked as read!')
    } catch (error) {
      toast.error('Failed to mark message as read')
    } finally {
      setIsLoading(false)
    }
  }

  const handleMarkAsReplied = async (id: string) => {
    setIsLoading(true)
    try {
      await onMarkAsReplied(id)
      toast.success('Message marked as replied!')
    } catch (error) {
      toast.error('Failed to mark message as replied')
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>
      case 'READ':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200"><Eye className="w-3 h-3 mr-1" />Read</Badge>
      case 'REPLIED':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Replied</Badge>
      default:
        return null
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-6">
      {/* Pending Messages */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-yellow-600" />
          New Messages ({pendingMessages.length})
        </h2>
        {pendingMessages.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No new messages</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {pendingMessages.map((message) => (
              <Card key={message.id} className="border-yellow-200 bg-yellow-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {message.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{message.name}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {message.email}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatDate(message.createdAt)}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(message.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 mt-1 text-gray-500" />
                      <p className="text-gray-700 leading-relaxed">{message.message}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleMarkAsRead(message.id)}
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Mark as Read
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => handleMarkAsReplied(message.id)}
                        disabled={isLoading}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Mark as Replied
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Read Messages */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Eye className="w-6 h-6 text-blue-600" />
          Read Messages ({readMessages.length})
        </h2>
        {readMessages.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <Eye className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No read messages</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {readMessages.map((message) => (
              <Card key={message.id} className="border-blue-200 bg-blue-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {message.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{message.name}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {message.email}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatDate(message.createdAt)}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(message.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 mt-1 text-gray-500" />
                      <p className="text-gray-700 leading-relaxed">{message.message}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleMarkAsReplied(message.id)}
                        disabled={isLoading}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Mark as Replied
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Replied Messages */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Replied Messages ({repliedMessages.length})
        </h2>
        {repliedMessages.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No replied messages yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {repliedMessages.map((message) => (
              <Card key={message.id} className="border-green-200 bg-green-50/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {message.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{message.name}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {message.email}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatDate(message.createdAt)}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    {getStatusBadge(message.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 mt-1 text-gray-500" />
                    <p className="text-gray-700 leading-relaxed">{message.message}</p>
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
