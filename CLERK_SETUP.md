# Clerk Authentication Setup Guide

## 🚀 **Complete Setup Instructions**

### **1. Environment Variables Setup**

Create a `.env.local` file in your project root with the following variables:

```bash
# Clerk Authentication Keys
# Get these from: https://dashboard.clerk.com/last-active?path=api-keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_SECRET_KEY

# UploadThing Configuration
# Get these from: https://uploadthing.com/dashboard
UPLOADTHING_SECRET=YOUR_UPLOADTHING_SECRET
UPLOADTHING_APP_ID=YOUR_UPLOADTHING_APP_ID

# Optional: Customize authentication URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/profile
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/profile
```

### **2. Clerk Dashboard Configuration**

1. **Go to [Clerk Dashboard](https://dashboard.clerk.com/)**
2. **Create a new application** or select existing one
3. **Configure OAuth Providers:**
   - Go to "User & Authentication" → "Social Connections"
   - Enable **Google** OAuth
   - Add your domain to allowed origins
4. **Copy API Keys:**
   - Go to "API Keys" section
   - Copy Publishable Key and Secret Key
   - Add them to your `.env.local` file

### **3. UploadThing Configuration**

1. **Sign up at [UploadThing](https://uploadthing.com/)**
2. **Create a new app**
3. **Copy your API keys** from the dashboard
4. **Add them to your `.env.local` file**

### **4. Install Required Dependencies**

```bash
npm install uploadthing @uploadthing/react sonner
```

**Note:** Lucide React icons are already included in your project dependencies.

### **5. Features Included**

✅ **Custom Authentication Form** with Google OAuth
✅ **Auto-fill functionality** after Google sign-in
✅ **Profile image upload** using UploadThing
✅ **Complete profile management**
✅ **Responsive design** with modern UI
✅ **Toast notifications** for user feedback
✅ **Protected routes** and middleware

### **6. Available Pages & Components**

- **`/profile`** - Complete profile management with image upload
- **Custom Auth Modal** - Beautiful sign-in/sign-up form
- **Google OAuth Integration** - One-click authentication
- **Image Upload** - Profile pictures with UploadThing

### **7. Usage**

1. **Sign Up/Sign In:** Click the authentication buttons in the header
2. **Google Authentication:** Use the "Continue with Google" button
3. **Profile Management:** Visit `/profile` after authentication
4. **Image Upload:** Use the upload button in the profile form

### **8. Security Notes**

- All environment variables are properly secured
- UploadThing handles secure file uploads
- Clerk manages authentication and user sessions
- Middleware protects API routes

### **9. Customization**

You can customize:
- **Authentication flow** in `components/auth/CustomAuthForm.tsx`
- **Profile fields** in `components/auth/ProfileForm.tsx`
- **Upload settings** in `app/api/uploadthing/core.ts`
- **UI styling** using Tailwind CSS classes

## 🎉 **You're All Set!**

Your application now has:
- ✅ Modern authentication with Google OAuth
- ✅ Auto-fill forms after Google sign-in
- ✅ Secure image uploads with UploadThing
- ✅ Complete profile management
- ✅ Beautiful, responsive UI
- ✅ Production-ready security
