import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin by comparing with environment variable
    const adminUserId = process.env.ADMIN_USER_ID
      ? process.env.ADMIN_USER_ID.split(',').map(id => id.trim())
      : []
    
    if (!adminUserId) {
      console.error('ADMIN_USER_ID not set in environment variables')
      return NextResponse.json({ error: 'Admin configuration missing' }, { status: 500 })
    }

    const isAdmin = adminUserId.includes(userId)

    if (!isAdmin) {
      return NextResponse.json({ error: 'Access denied - not an admin' }, { status: 403 })
    }

    return NextResponse.json({ 
      isAdmin: true, 
      userId,
      message: 'Admin access granted' 
    })
  } catch (error) {
    console.error('Error checking admin access:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
