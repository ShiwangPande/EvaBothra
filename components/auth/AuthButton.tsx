"use client"

import { useState } from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { AuthModal } from './AuthModal'

export function AuthButton() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')

  return (
    <>
      <SignedOut>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setAuthMode('signin')
              setIsAuthModalOpen(true)
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              setAuthMode('signup')
              setIsAuthModalOpen(true)
            }}
          >
            Sign Up
          </Button>
        </div>
      </SignedOut>
      
      <SignedIn>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
              userButtonPopoverCard: "shadow-lg border",
            }
          }}
        />
      </SignedIn>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  )
}
