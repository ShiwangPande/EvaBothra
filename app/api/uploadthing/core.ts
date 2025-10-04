import { createUploadthing, type FileRouter } from "uploadthing/next"
import { auth } from "@clerk/nextjs/server"

const f = createUploadthing()

// Middleware to verify authentication
const middleware = async () => {
  const { userId } = await auth()
  
  if (!userId) throw new Error("Unauthorized")
  
  return { userId }
}

export const ourFileRouter = {
  // Profile image upload
  profileImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)
      console.log("file url", file.url)
      
      return { uploadedBy: metadata.userId, url: file.url }
    }),
    
  // General image upload
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)
      console.log("file url", file.url)
      
      return { uploadedBy: metadata.userId, url: file.url }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
