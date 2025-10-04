import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

// GET - Fetch all approved testimonials
export async function GET() {
  try {
    const approvedTestimonials = await prisma.testimonial.findMany({
      where: {
        approved: true,
        status: 'APPROVED'
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(approvedTestimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

// POST - Create new testimonial
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    const userId = session?.userId;

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json()
    const { author, role, content, imageSrc, email } = body

    if (!author || !role || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const newTestimonial = await prisma.testimonial.create({
      data: {
        author,
        role,
        content,
        imageSrc: imageSrc || '/placeholder-user.jpg',
        email: body.email || '',
        userId,
        status: 'PENDING',
        approved: false // New testimonials need approval
      }
    })

    return NextResponse.json(newTestimonial, { status: 201 })
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 })
  }
}
