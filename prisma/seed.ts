import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create initial testimonials
  const testimonials = [
    {
      id: 'seed_1',
      author: 'Dr. Sarah Johnson',
      role: 'Stanford Mathematics Program Director',
      content: 'An exceptional student with remarkable analytical abilities. Her dedication to the Advanced Mathematics Program was outstanding.',
      imageSrc: '/professional-headshot-of-accomplished-young-person.jpg',
      email: 'sarah.johnson@stanford.edu',
      userId: 'system',
      status: 'APPROVED' as const,
      approved: true
    },
    {
      id: 'seed_2',
      author: 'Michael Chen',
      role: 'Tech4Bharat Mentor',
      content: 'Demonstrated incredible leadership skills and innovative thinking in developing technological solutions for social impact.',
      imageSrc: '/person-in-business-attire--professional-portrait.jpg',
      email: 'michael.chen@tech4bharat.org',
      userId: 'system',
      status: 'APPROVED' as const,
      approved: true
    },
    {
      id: 'seed_3',
      author: 'Priya Nair',
      role: 'SFCC Co-Lead',
      content: 'Her clarity, ownership, and calm under pressure helped us deliver India\'s largest student wellness campaign.',
      imageSrc: '/young-leader-presenting-at-tech-conference-with-au.jpg',
      email: 'priya.nair@sfcc.org',
      userId: 'system',
      status: 'APPROVED' as const,
      approved: true
    },
    {
      id: 'seed_4',
      author: 'Arjun Mehta',
      role: 'Janam Partner, Aastrika',
      content: 'Janam would not be where it is without her execution. She pairs empathy with rigor — rare and invaluable.',
      imageSrc: '/person-in-coat-standing-by-boats-on-shore--moody-l.jpg',
      email: 'arjun.mehta@aastrika.org',
      userId: 'system',
      status: 'APPROVED' as const,
      approved: true
    }
  ]

  console.log('Seeding testimonials...')
  
  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: testimonial.id },
      update: testimonial,
      create: testimonial
    })
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
