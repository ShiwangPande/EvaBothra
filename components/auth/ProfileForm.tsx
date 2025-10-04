"use client"

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UploadButton, UploadDropzone } from '@/lib/uploadthing'
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { toast } from 'sonner'

interface ProfileData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  location?: string
  occupation?: string
  education?: string
  bio?: string
  imageUrl?: string
}

export function ProfileForm() {
  const { user } = useUser()
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    occupation: '',
    education: '',
    bio: '',
    imageUrl: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  // Auto-fill form when user data is available
  useEffect(() => {
    if (user) {
      setProfileData(prev => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        imageUrl: user.imageUrl || '',
        phone: user.phoneNumbers[0]?.phoneNumber || '',
      }))
    }
  }, [user])

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSaveProfile = async () => {
    if (!user) return

    try {
      setIsLoading(true)
      
      // Update Clerk user data
      await user.update({
        firstName: profileData.firstName,
        lastName: profileData.lastName,
      })

      // Update public metadata with additional profile info
      await user.update({
        publicMetadata: {
          phone: profileData.phone,
          location: profileData.location,
          occupation: profileData.occupation,
          education: profileData.education,
          bio: profileData.bio,
        }
      })

      toast.success('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error)
      toast.error('Failed to update profile')
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = (url: string) => {
    if (user) {
      user.setProfileImage({ file: url })
      setProfileData(prev => ({ ...prev, imageUrl: url }))
      toast.success('Profile image updated!')
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Profile Information
        </CardTitle>
        <CardDescription>
          Complete your profile information. This will be visible to others.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profileData.imageUrl} alt="Profile" />
            <AvatarFallback className="text-lg">
              {profileData.firstName?.[0]}{profileData.lastName?.[0]}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex gap-2">
            <UploadButton
              endpoint="profileImage"
              onClientUploadComplete={(res) => {
                if (res?.[0]?.url) {
                  handleImageUpload(res[0].url)
                }
              }}
              onUploadError={(error: Error) => {
                toast.error(`Upload failed: ${error.message}`)
              }}
              appearance={{
                button: "bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium",
                allowedContent: "text-xs text-muted-foreground mt-1",
              }}
            />
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              First Name
            </Label>
            <Input
              id="firstName"
              value={profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="Enter your first name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              disabled // Email is managed by Clerk
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </Label>
          <Input
            id="location"
            value={profileData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="Enter your location (city, state, country)"
          />
        </div>

        {/* Professional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="occupation" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Occupation
            </Label>
            <Input
              id="occupation"
              value={profileData.occupation}
              onChange={(e) => handleInputChange('occupation', e.target.value)}
              placeholder="Enter your occupation"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Education
            </Label>
            <Input
              id="education"
              value={profileData.education}
              onChange={(e) => handleInputChange('education', e.target.value)}
              placeholder="Enter your education"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={profileData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            placeholder="Tell us about yourself..."
            rows={4}
          />
        </div>

        {/* Save Button */}
        <Button 
          onClick={handleSaveProfile} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Saving...' : 'Save Profile'}
        </Button>
      </CardContent>
    </Card>
  )
}
