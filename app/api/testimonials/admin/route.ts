import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin by comparing with environment variable
    const adminUserId = process.env.ADMIN_USER_ID
    
    if (!adminUserId) {
      console.error('ADMIN_USER_ID not set in environment variables')
      return NextResponse.json({ error: 'Admin configuration missing' }, { status: 500 })
    }

    const isAdmin = userId === adminUserId
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Access denied - not an admin' }, { status: 403 })
    }

    const allTestimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(allTestimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin by comparing with environment variable
    const adminUserId = process.env.ADMIN_USER_ID
    
    if (!adminUserId) {
      console.error('ADMIN_USER_ID not set in environment variables')
      return NextResponse.json({ error: 'Admin configuration missing' }, { status: 500 })
    }

    const isAdmin = userId === adminUserId
    
    if (!isAdmin) {
      return NextResponse.json({ error: 'Access denied - not an admin' }, { status: 403 })
    }

    const { id, action } = await request.json()
    
    const testimonial = await prisma.testimonial.findUnique({
      where: { id }
    })
    
    if (!testimonial) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })
    }

    let updatedTestimonial
    if (action === 'approve') {
      updatedTestimonial = await prisma.testimonial.update({
        where: { id },
        data: {
          status: 'APPROVED',
          approved: true
        }
      })
    } else if (action === 'reject') {
      updatedTestimonial = await prisma.testimonial.update({
        where: { id },
        data: {
          status: 'REJECTED',
          approved: false
        }
      })
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    return NextResponse.json(updatedTestimonial)
  } catch (error) {
    console.error('Error updating testimonial:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}