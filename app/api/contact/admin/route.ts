import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

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

export async function PATCH(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id, status } = await request.json()

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID and status are required' },
        { status: 400 }
      )
    }

    const validStatuses = ['PENDING', 'READ', 'REPLIED']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      )
    }

    const updatedMessage = await prisma.contactMessage.update({
      where: { id },
      data: { status }
    })

    return NextResponse.json(updatedMessage)
  } catch (error) {
    console.error('Error updating contact message:', error)
    return NextResponse.json(
      { error: 'Failed to update contact message' },
      { status: 500 }
    )
  }
}
