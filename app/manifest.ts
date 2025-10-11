import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    name: "Eva Bothra - Portfolio",
    short_name: "Eva Bothra",
    start_url: "/",
    scope: "/",
    description: "Enter into the journey of my impact — academics, leadership, community, skills, awards, YouTube, and reflections.",
    theme_color: "#007b78",
    background_color: "#ffffff",
    icons: [
        {
          src: "/web-app-manifest-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ],
  }
}