import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { ContactFormData } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    const body: ContactFormData = await request.json()
    
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
        userId: userId || null,
        status: 'PENDING'
      }
    })

    return NextResponse.json(contactMessage, { status: 201 })
  } catch (error) {
    console.error('Error creating contact message:', error)
    return NextResponse.json(
      { error: 'Failed to create contact message' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if user is admin (you might want to implement proper admin check)
    const contactMessages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(contactMessages)
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contact messages' },
      { status: 500 }
    )
  }
}
