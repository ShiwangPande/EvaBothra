# Testimonial System Setup

This document explains how to set up the testimonial system with Clerk.js authentication.

## Prerequisites

1. Install Clerk.js:
```bash
pnpm add @clerk/nextjs
```

2. Create a Clerk account at https://clerk.com and set up a new application.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
```

## Features Implemented

### 1. Testimonial Form Component (`components/TestimonialForm.tsx`)
- Modal dialog for submitting testimonials
- Google OAuth integration with Clerk
- Form validation
- Auto-fill user information from Google account
- Manual form entry option

### 2. API Routes
- `app/api/testimonials/route.ts` - GET (fetch approved testimonials), POST (create new testimonial)
- `app/api/testimonials/admin/route.ts` - Admin functions for managing testimonials

### 3. Updated Testimonials Component (`components/Testimonials.tsx`)
- Fetches testimonials from API
- Shows "Add Testimonial" button
- Loading states
- Real-time updates after submission

### 4. TypeScript Types (`lib/types.ts`)
- `Testimonial` interface
- `TestimonialFormData` interface

## How It Works

1. **User Authentication**: Users can sign in with Google through Clerk
2. **Form Submission**: Authenticated users can submit testimonials
3. **Approval Process**: New testimonials are marked as unapproved and need admin approval
4. **Display**: Only approved testimonials are shown on the website

## Google OAuth Setup

1. In your Clerk dashboard, go to "User & Authentication" > "Social Connections"
2. Enable Google OAuth
3. Configure your Google OAuth credentials
4. Set up redirect URLs

## Admin Functions

The system includes admin API routes for:
- Viewing all testimonials (including unapproved)
- Approving/rejecting testimonials
- Deleting testimonials

## Database

Currently uses an in-memory array for demonstration. In production, replace with a real database like:
- PostgreSQL
- MongoDB
- Supabase
- PlanetScale

## Usage

1. Users click the "Add Testimonial" button
2. They can either:
   - Sign in with Google and auto-fill their information
   - Fill out the form manually
3. Submit the testimonial
4. Admin can approve/reject through the admin API
5. Approved testimonials appear on the website

## Security Notes

- All API routes require authentication
- New testimonials require approval before display
- User information is validated before submission
- CSRF protection through Clerk
