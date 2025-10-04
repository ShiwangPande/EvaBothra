import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import { ProfileForm } from '@/components/auth/ProfileForm'

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SignedIn>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-muted-foreground mt-2">
              Manage your profile information and preferences.
            </p>
          </div>
          <ProfileForm />
        </div>
      </SignedIn>
      
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  )
}
