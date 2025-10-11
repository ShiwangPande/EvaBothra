import { PortfolioData } from './types'

export const portfolioData: PortfolioData = {
    about: {
        title: "About Me",
        description: "Hi! I'm Eva, a student who believes titles or trophies don't measure that impact, but by the people you stand up for and the changes you help build. Among my friends, I'm known as the \"dadi\" of the group – the one who listens, gives perspective, and keeps things honest.",
        fullStory: "Growing up, I've learned that life rarely goes as planned, but that's what makes it all the more meaningful. I've had to grow up fast, and it's taught me grit, patience, and perspective. If I had to describe myself, I'd say I'm grounded, quietly strong, and someone who believes in showing up – for myself and for others.\n\nMy friends say Fight Song captures me best – and maybe it does. But I've never seen myself as someone fighting against life; I fight for it – for fairness, dignity, and courage, both mine and others'.",
        callToAction: "Enter into the journey of my impact.",
        imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008695/About_Me_vjwifi.png"
        // imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759007019/About_Me_qysv4w.png"
    },

    academics: {
        title: "Academics & Research",
        description: "A journey of academic achievements spanning IGCSE excellence, IB Diploma Programme, international olympiads, and prestigious programs including Harvard Ventures Tech and Stanford Advanced Mathematics.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008710/Academics_Research_Activities_qfuz07.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759006848/Academics_Research_Activities_eqlqx8.png",
        stats: [
            { label: "IGCSE Score", value: "7 A*, 2 A" },
            { label: "IB Score", value: "41/42" },
            { label: "SAT Score", value: "1520" },
            { label: "Research Hours", value: "80+" }
        ],
        sections: {
            academicPerformance: {
                title: "📚 Academic Performance",
                items: [
                    {
                        id: "igcse",
                        title: "IGCSE (Grade 9–10)",
                        grade: "Grade 9-10",
                        description: "7 A* (Mathematics, History, Geography, Chemistry, Physics, Biology, Business Studies), 2 A (Hindi, English)",
                        details: "With IGCSE, I've had a very holistic education- science gave me a window into how the world actually works at its core, business showed me how ideas can be executed in practice, history gave me perspective on the forces that shape societies, and geography grounded me in the patterns that tie people, economies, and environments together. Languages, meanwhile, pushed me to build patience, nuance, and persistence.\n\nIronically, the subjects I'm most proud of are the ones where I didn't receive the top grade – Hindi and English. With almost no support in those classes, I had to study independently, building skills from the ground up. Losing the A* didn't discourage me; it lit something sharper in me. I pushed deeper into both languages on my own, and now they're among the areas where I consistently excel. That journey didn't just make me a better student– it made me a more resilient learner, someone who thrives even when the path isn't clearly laid out.",
                        category: "Academic Performance",
                        achievements: ["7 A* grades", "2 A grades", "Independent learning", "Resilient learner"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008710/Academics_Research_Activities_qfuz07.png",
                        link: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/"
                    },
                    {
                        id: "ib-diploma",
                        title: "IB Diploma Programme (Grade 11–12)",
                        grade: "Grade 11-12",
                        description: "Score: 41/42 in Grade 11. Subjects: Mathematics AA HL, Economics HL, Business Management HL, Hindi SL, English SL, Computer Science SL",
                        details: "In IB, I sharpened my focus by diving deep into mathematics and Business Management, while also exploring new territory in economics and computer science. That mix of depth and breadth helped me see connections between numbers, systems, and people in ways I hadn't before. I scored 41/42, but what mattered more was learning how to balance ambition with time, a skill that now defines how I approach both academics and life.",
                        category: "Academic Performance",
                        achievements: ["41/42 score", "3 Higher Level subjects", "Comprehensive curriculum", "Time management"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008710/Academics_Research_Activities_qfuz07.png",
                        link: "https://www.ibo.org/programmes/diploma-programme/"
                    },
                    {
                        id: "sat",
                        title: "SAT",
                        grade: "Recent",
                        description: "1520 - Math has always been my stronghold (thanks, Kumon). English took more work – I had to build that foundation later, through deliberate effort.",
                        details: "I scored higher in mocks (1550+), but test-day anxiety hit me hard. I had no chance to retake it, but honestly, the SAT ended up being more of a teacher than a test – it showed me the importance of preparation, balance, and staying calm under pressure.",
                        category: "Standardized Testing",
                        achievements: ["1520 score", "Math excellence", "English improvement", "Test resilience"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008710/Academics_Research_Activities_qfuz07.png",
                        link: "https://satsuite.collegeboard.org/sat"
                    }
                ]
            },
            olympiads: {
                title: "🏆 Olympiads & Competitions",
                items: [
                    {
                        id: "business-olympiad",
                        title: "International Business Olympiad (Grade 12)",
                        grade: "Grade 12",
                        description: "Scored 198/200 (Highest Distinction) - Top 5 in India, Top 10 globally",
                        details: "Represented India internationally after achieving a Top 5 ranking in the National Round. Ranked Top 10 globally in both presentation and the individual test, showcasing exceptional business acumen.",
                        category: "International Award",
                        achievements: ["198/200 score", "Top 5 in India", "Top 10 Globally", "International representation"],
                        imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259344/IBO-Integrated-Objective-Test_fki6bx.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259344/IBO-Gold-Award_mi4dci.jpg","https://res.cloudinary.com/dqv4mucxh/image/upload/v1759259342/IBO-National-Team-Performance_ueaqs7.jpg"],
                        // link: "https://ibo.ibo.org/"
                    },
                    {
                        id: "iris-science-fair",
                        title: "IRIS National Science Fair (Grade 11)",
                        grade: "Grade 11",
                        description: "Selected as 1 of 50 students nationwide from 6,000+ applicants",
                        details: "Selected from over 8,000 students nationwide, I presented an original prototype of biodegradable faux leather made entirely from banana stems and rice husks at the IRIS National Science Fair. The project grew from curiosity-driven experimentation in chemistry and materials science—concepts I had first explored during my IGCSE science studies, which taught me to approach problems methodically, observe carefully, and iterate constantly.\n\nUnlike a purely theoretical project, I moved from idea to prototype to production. I extracted fibers from banana stems, processed rice husks, and combined them using natural binders, experimenting with texture, durability, and flexibility until the material could actually function as leather. Beyond the lab, I approached the project like an entrepreneur: calculating costs, optimizing production steps, and imagining how this material could be scaled for real-world applications.\n\nPresenting before a panel of national experts was both exhilarating and humbling. I learned that science isn't just about invention—it's about defending your process, explaining your choices, and translating technical complexity into clear, compelling communication. Standing there, I felt the full arc of research: curiosity, experimentation, iteration, and public engagement.\n\nThe IRIS experience was my first true intersection of science and entrepreneurship, showing me how rigorous research can be paired with practical innovation to create solutions that matter.",
                        category: "National Award",
                        imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253136/IRISNational_kgkqwk.jpg",
                        achievements: ["1 of 50 selected", "6,000+ applicants", "Original prototype", "Sustainability focus"]
                    },
                    {
                        id: "economics-olympiad",
                        title: "International Economics Olympiad – Meccademia (Grade 11)",
                        grade: "Grade 11",
                        description: "Achieved All India Rank 39 out of ~7,000 participants",
                        details: "Demonstrated exceptional understanding of economic principles and analytical thinking in this prestigious international competition.",
                        category: "National Award",
                        achievements: ["AIR 39", "7,000+ participants", "International level", "Economic excellence"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253117/IEO2025_jy4xmv.jpg",
                        // link: "https://meccademia.com/"
                    },
                    {
                        id: "ippf",
                        title: "International Public Policy Forum (IPPF) – Global Top 32 (Grade 11)",
                        grade: "Grade 11",
                        description: "Only team from India to qualify for global top 32",
                        details: "Advanced to Top 32 worldwide, arguing a policy case on preventive healthcare before a panel of global judges.",
                        category: "International Award",
                        achievements: ["Global Top 32", "Only team from India", "Policy case presentation", "Healthcare focus"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759007160/8a695a64-f612-4bb7-bd33-5ce64d0867ce.png",
                        link: "https://www.ippfdebate.com/announcing-the-2024-25-top-32"
                    },
                    {
                        id: "economics-world-cup",
                        title: "Economics World Cup – Finalist (Grade 11)",
                        grade: "Grade 11",
                        description: "Reached the finals of the international Economics World Cup",
                        details: "Demonstrated advanced economic knowledge and problem-solving skills to become a finalist in this global competition.",
                        category: "International Award",
                        achievements: ["Finalist status", "Global competition", "Economic excellence"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759952592/edf1c953-1c8d-4dcf-94d6-74f89eb2bc52.png"
                    },
                    {
                        id: "melbourne-case-competition",
                        title: "Melbourne Case Competition (Grade 11)",
                        grade: "Grade 11",
                        description: "Ranked Top 20 out of 300+ international teams",
                        details: "Presented strategic solutions for the Education industry to University of Melbourne judges and industry leaders, showcasing strong business analysis and presentation skills.",
                        category: "International Award",
                        achievements: ["Top 20 ranking", "300+ international teams", "Strategic solutions", "Education focus"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759952698/cf99df25-95c9-426d-b84a-0aacb7791a9b.png",
                        // link: "https://fbe.unimelb.edu.au/students/competitions/melbourne-case-competition"
                    },
                    {
                        id: "tie-young-entrepreneurs",
                        title: "TIE Young Entrepreneurs – State Finalist (Top 15) (Grade 11)",
                        grade: "Grade 11",
                        description: "Selected among Top 15 state teams in the TYE accelerator",
                        details: "Pitched TeenLink, a high school networking platform, to investors and mentors, gaining valuable experience in business presentation and the startup ecosystem.",
                        category: "State Award",
                        achievements: ["Top 15 state teams", "TYE accelerator", "Startup pitch experience", "Networking platform"],
                        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008710/Academics_Research_Activities_qfuz07.png",
                        // link: "https://tie.org/tye"
                    }
                ]
            },
            research: {
                title: "🔬 Independent Research",
                items: [
                    {
                        id: "healthcare-research",
                        title: "Economic Value of Preventive Healthcare Startups (Grade 11–12)",
                        grade: "Grade 11-12",
                        description: "Conducted an independent research project analyzing India-focused healthcare models reducing long-term costs",
                        details: "Selected to present at Innosphere 2025 (Sigma Xi Research Conference), Published in IJSSER, Received Crest Gold Award. 80+ hours of structured research (formal research methods, data modeling, report writing).",
                        category: "Independent Research",
                        imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759262127/Acceptance_Letter_research_paper_page-0001_fp73y1.jpg",
                        achievements: ["80+ research hours", "Conference selection", "Publication submission", "Award entry"],
                        link: "https://ijsser.org/"
                    },
                ]
            },
            summer: {
                title: "How I Spent My Summer",
                items: [
                    {
                        id: "harvard-program",
                        title: "Harvard Ventures Tech Summer Program – Participant",
                        grade: "Recent",
                        description: "Intensive four-week experience mentored by Harvard faculty, CEOs, and investors",
                        details: "I was selected for the Harvard Ventures Tech Summer Program, an intensive four-week experience mentored by Harvard faculty, CEOs, and investors. Working in teams, I developed business solutions under real-world constraints, learning how to translate ideas into pitchable prototypes.\n\nThe program exposed me to the fast-paced world of venture creation, characterized by rapid iteration, data-driven decision-making, and constant feedback loops. What struck me most was how ideas are judged not by polish but by potential. That mindset — valuing raw possibility over perfection — has reshaped how I approach both entrepreneurship and research.",
                        category: "Summer Program",
                        imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759007150/279df43f-c71e-45b7-8964-ff93412eab30.png",
                        achievements: ["Harvard selection", "Faculty mentorship", "Real-world projects", "Prototype development"]
                    },
                    {
                        id: "stanford-math",
                        title: "Stanford Advanced Mathematics Program – Participant",
                        grade: "Recent",
                        description: "Selected in the top 3% of my school for advanced calculus and number theory",
                        details: "Selected in the top 3% of my school, I attended the Stanford-led Advanced Math Program. For two weeks, I immersed myself in advanced calculus, number theory, and finance models, solving AMC-style puzzles and tackling SUMaC-style problems.\n\nThe experience reminded me that math is not just a subject but a way of thinking — recursive, rigorous, and creative. Working through proof-based logic and game theory, I realized mathematics is my foundation, the lens through which I frame economics, finance, and even social ventures.",
                        category: "Summer Program",
                        achievements: ["Top 3% selection", "Advanced mathematics", "Proof-based logic", "Game theory"],
                        certificate: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759007150/279df43f-c71e-45b7-8964-ff93412eab30.png"
                    },
                    {
                        id: "finance-intern",
                        title: "Capital Edge Technologies and 10xCapital10x – Finance Intern",
                        grade: "Current",
                        description: "Applied classroom skills to real-world finance and market analysis",
                        details: "At Capital Edge Technologies and 10xcapital10x, I stepped into the professional world of finance, applying classroom skills to real-world analysis. I worked on modeling tools, exploring how market dynamics shift under different assumptions, and saw how decisions were shaped by more than just formulas — context and intuition mattered equally.\n\nThe internship taught me to communicate insights in concise, business-ready language. It was my first time being accountable not just to my own learning, but to a firm that expected results. That sense of accountability to external stakeholders was both daunting and exhilarating.",
                        category: "Internship",
                        achievements: ["Real-world finance analysis", "Market modeling", "Professional communication", "Stakeholder accountability"],
                        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760088742/Eva_Bothra_Internship_Letter_2__page-0001_pah3sq.jpg"
                    }
                ]
            },
        }
    },

    leadership: {
        title: "Leadership & Activities",
        description: "Spearheading transformative initiatives including Legal Saathi, Janam, and TeenLink, demonstrating exceptional leadership in technology, social innovation, and community engagement across multiple domains.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Leadership_Activities_nsnvgv.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759006602/Leadership_Activities_bpofbc.png",
        stats: [
            { label: "Organizations Founded", value: "3+" },
            { label: "People Impacted", value: "35,000+" },
            { label: "Funding Raised", value: "$20,000+" },
            { label: "Team Members Led", value: "100+" }
        ],
        items: [
            {
                id: "legal-saathi",
                title: "Legal Saathi – Founder",
                grade: "Current",
                description: "India's first QR-based legal literacy platform for workers, designed to make labor rights practical and accessible",
                details: "Legal Saathi is India's first QR-based legal literacy platform for workers, designed to make labor rights practical and accessible. I built the platform from scratch: coding the website, designing the QR-linked posters, writing and recording audio scripts in eight Indian languages, and creating a workshop manual for volunteers.\n\nI trained and coordinated a 15-member volunteer team to expand into cities across Karnataka, Madhya Pradesh, Bihar, Delhi, West Bengal, Tamil Nadu, and Nepal. Over 600 posters were distributed across 60+ factory, construction, and mandi sites in Jaipur, reaching more than 8,500 workers.\n\nEvery resource was vetted by a Supreme Court lawyer, and through a partnership with Citadel Law Solutions, workers gained direct access to pro bono legal counsel. To date, this has led to over 30 active labor rights cases, with follow-up support ensuring a tangible impact in the real world.\n\nLegal Saathi showed me that empowerment doesn't require grand reforms—sometimes, it's a worker scanning a QR code in their lunch break and, for the first time, accessing previously abstract rights.",
                category: "Social Innovation",
                achievements: ["8,500+ workers reached", "8 languages", "60+ sites", "30+ legal cases", "7 states coverage"],
                link: "https://legalsaathi.org",
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008688/legal_ttr2ku.png", 
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1753881314/IMG-20250730-WA0008_g6miji.jpg", 
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1753881313/IMG-20250730-WA0009_jod3b2.jpg", 
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1753881313/IMG-20250730-WA0004_ztg9oe.jpg", 
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1753881313/IMG-20250730-WA0005_blsffn.jpg",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1753881313/IMG-20250730-WA0006_tmvo0y.jpg",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1753881313/IMG-20250730-WA0003_yb7zmt.jpg", 
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1753881314/IMG-20250730-WA0008_g6miji.jpg"]
            },
            {
                id: "janam",
                title: "Janam – Co-Founder",
                grade: "Current",
                description: "Transform waste shipping containers into mobile birthing centers, combining safety, dignity, and scale",
                details: "On a rusted stretcher with paint flaking like ash, my aunt screamed through childbirth with no doctor in sight. Standing frozen in Jaipuria Government Hospital, I realized that sterile wards, steady hands, and safe births– the things I had taken for granted in Bangalore– were privileges reserved for a few. Later, talking to baijis who delivered babies on muddy floors or in hospital corridors, I saw how society normalizes its most profound injustices. That moment didn't make me despair– it made me act.\n\nJanam was born from that urgency. We transform waste shipping containers into mobile birthing centers, combining safety, dignity, and scale. One container is already operational in Mahapura, and two more are underway. Each is fully equipped, designed in collaboration with gynecologists, the National Health Mission, and Aastrika Foundation, and supported by local panchayats. Beyond infrastructure, I trained over 100 midwives, organized health camps for more than 1,500 villagers, and published illustrated pregnancy guides in both Hindi and English to dispel common myths. In partnership with ProtectHer and Suraksha, we conducted cervical vaccination drives and menstrual hygiene programs.\n\nOn the financial side, I raised over $ 12,000 through crowdfunding, CSR partnerships, and grants, managing the allocation of funds across construction, equipment, and educational materials to ensure sustainability.\n\nEvery container, every midwife trained, every rupee spent became more than a statistic– it became a lifeline. Janam taught me that confronting systemic inequity is not about charity; it's about designing solutions that are practical, scalable, and rooted in dignity. Seeing women access care once denied to them is the reason I fight to transform ideas into real-world change.",
                category: "Healthcare Innovation",
                imageSrc:[ "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760158408/4951a742-c51d-4c8f-bd74-d777e6ff9409.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760158402/792e0bf0-aa3a-48c8-a155-138e08880900.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1758307908/frame_0_06_22f_zzopbp.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1758307914/frame_0_13_10f_apucfz.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1758307915/frame_0_18_3f_fucwx2.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1758307871/frame_0_19_22f_hqb9nk.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1758307915/frame_0_30_18f_jqzige.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1758307885/frame_0_54_20f_ale2lk.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1758307909/frame_3_12_23f_d1rczo.jpg", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760113969/c574c622-fc10-426a-898d-d0dbcfea8419.png"],
                achievements: ["3 centers (1 completed)", "100+ midwives trained", "1,500+ villagers served", "$12,000+ raised"],
                link: "https://janamindia.vercel.app",
                instagram: "https://www.instagram.com/janamindia"
            },
            {
                id: "teenlink",
                title: "TeenLink – Founder",
                grade: "Current",
                description: "First 'LinkedIn for teenagers' with 400+ beta users, live on the App Store and Play Store",
                details: "TeenLink grew from frustration into action. At my old school, I launched a Debate Club from scratch – organizing rooms, teachers, logistics, and over 70 members– only to be told we couldn't compete. That moment showed me the gap between talent and opportunity. Transferring schools revealed a new world of possibilities, and I realized that thousands of students were being denied access to mentorship, internships, and growth opportunities. TeenLink became my answer.\n\nI built the platform from the ground up: coding the app, designing the interface, creating graphics, planning onboarding, and drafting marketing strategies. Late nights debugging, learning from professional coders, and iterating endlessly taught me that real entrepreneurship is persistence in action.\n\nToday, TeenLink has 400 beta users, with a roadmap to reach 20,000 in the next app update. Partnerships with Mauka onboarded 80 NGOs and 56 companies for volunteer work, while over 20 school counselors expanded their mentorship programs. Early funding of ₹4 lakhs (~$5K) and selection in the TYE Rajasthan accelerator validated the work.\n\nEvery feature, every pitch, every bug fix reflects my drive to transform a gap I experienced firsthand into a platform that empowers thousands of students to discover opportunities and connect with mentors.",
                category: "Tech Entrepreneurship",
                achievements: ["400+ beta users", "App Store & Play Store live", "₹4 lakhs funding", "TYE accelerator selection"],
                link: "https://apps.apple.com/in/app/teenlink-connect/id6746079280",
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759302338/TEENLink_3_vjzmqw.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942972/abf60202-755d-40f3-8f41-d4f4dc394843.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760163345/6070c0e7-fd9b-43c0-b0e8-d79b1675a355.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942944/b65e1e81-9bf6-4b7c-b793-732fa10f9458.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760163406/e7b719c1-794a-4fc9-aace-cf37cfcba814.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942921/789058cc-51b5-49df-b731-43a4677cecb1.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760163415/8afc94e3-e0e6-4344-ae09-41e4a177912a.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942894/8410607b-4b66-4001-ad19-bb54189186a7.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760163422/722af3d6-d26b-48e4-ac3b-ac4cf9c228f6.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942852/3be6dd35-ba4a-4edd-b21a-cca7c872ca62.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760163430/747bc620-7f00-448d-929d-7449f33ca7e6.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760163439/a48b95b6-3776-4633-a87b-c9e158b26869.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942802/d2d776e5-c3ab-4940-a9f3-6fcefcf4709c.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760163446/051dfff7-4f30-434a-96ca-fd57ce50ead0.png",
                ]
            },
            {
                id: "sfcc",
                title: "Students for Collaborative Change – Finance Head",
                grade: "Grade 11-12",
                description: "Co-led India's largest student wellness campaign, raising $140,000+",
                details: "As Finance Head for SFCC, I co-led India's most extensive student wellness campaign: a 12-hour national livestream that attracted 1,000+ participants and raised $140,000+. My role spanned sponsor negotiations, allocation of funds, and directing operations to sustain on-ground therapy in Kota, a city where over 100,000 students prepare for competitive exams under intense pressure.\n\nI personally coordinated workshops in hostels with psychologists Dr. Prerna Maheshwari and Dr. Pankhuri Monga, directly engaging 300 students. The funds we raised enabled us to place full-time therapists in Kota, providing free, continuous mental health support.\n\nBeing on the ground in Kota, hearing students' silent struggles, made every sponsorship negotiation urgent and personal. For me, finance became more than numbers — it was the scaffolding for lives under strain.",
                category: "Social Impact",
                achievements: ["$140,000+ raised", "1,000+ participants", "Mental health support in Kota", "12-hour livestream"],
                link: "https://www.youtube.com/watch?v=G_ya89GaXDg",
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253125/Kota_SFCC1_lviu66.jpg",  "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759688589/30ece55b-e54e-494d-bee4-0a1476529c1c.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759688654/c0c4b6e9-ad6a-428d-a539-80ae0a3e733c.png",  "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759688747/86235179-bbad-4d74-af33-930444f78a98.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759688784/540785fb-4605-4c1b-81d1-351d50c81629.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759688836/85bddedc-b587-4944-bb75-c22dfd92759a.png"]
            },
            {
                id: "cortisolx",
                title: "CortisolX – Vice President",
                grade: "Current",
                description: "Worked at the intersection of biotechnology and mental health, conducting 1,000+ cortisol tests",
                details: "At CortisolX, I worked at the intersection of biotechnology and mental health. We conducted 1,000+ cortisol tests using biosensor patches and AI-driven mental health assessments across JPIS, Kukoon Hostels in Kota, and Jaipur. In partnership with MindIE, a health-tech startup, we even received a $10,000 investment offer.\n\nThe project expanded into a global survey across five countries, gathering cross-cultural data on stress, anxiety, and coping mechanisms. Beyond the data, I learned to balance the scientific rigor of biosensor results with the entrepreneurial clarity needed to present to investors. It showed me that credibility is built on both numbers and narrative.",
                category: "Biotech & Health Tech",
                achievements: ["1,000+ tests conducted", "Global survey", "$10,000 investment offer", "5-country reach"],
                link: "https://cortisolx.in",
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114674/2e2096f5-c4c3-4f44-8ee6-8641786dcfa7.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114662/4038fc99-adb7-4321-bec5-68d03c8916e3.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114638/7f4b01d2-1a4b-45f6-9574-3be7efd4f886.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114626/b7e6efa2-e046-4bca-8ca1-7db45aa1d8dc.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114614/9b439bda-89f0-44fe-b2ae-dae841e1b02d.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114605/61e04a16-d0cb-456e-a549-8dcc0f44873d.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114592/bd9cdf98-039c-4e59-b2d8-04c19e6c37b9.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114579/a40bc024-3639-4d96-811b-b236cf9fc91d.png",""]
            },
            {
                id: "internlectual",
                title: "Internlectual – Founder & President",
                grade: "Current",
                description: "Founded a global student platform, hosting a competition that raised $2,000",
                details: "Internlectual started as a side experiment and became a global student platform. I hosted Internlink, a virtual competition that attracted participants from India, Oman, Dubai, Poland, Brazil, and Nepal. Through registrations, we raised $2,000 and distributed it entirely as prize winnings, rewarding students with both capital and opportunities.\n\nPartnering with companies like Nestlé and Godrej, we awarded internships to top performers and directly connected others to industry roles. What began as a student-led idea evolved into a professional-scale platform connecting global talent with work opportunities.\n\nFor me, Internlectual was the first time I saw my ideas carry weight beyond my immediate community. It validated the possibility that access gaps can be solved by platforms designed with intent and equity.",
                category: "Education Platform",
                achievements: ["Global reach", "$2,000 raised", "Internships awarded", "6-country participation"],
                link: "https://internlectual.com",
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759258931/566c3c68-a099-4a25-af70-abe033958a13.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760114893/f6bce22d-1631-4f4c-9d26-c9736676abb6.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115114/3bee8ac3-c5b6-4d0e-9b25-58dd8ecec26d.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115149/fe33afce-4f49-4d9a-9323-679a26d44cc7.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115066/34fb9bbb-b3be-456e-962f-2ee78757c6d4.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689046/2beaf7cb-eba7-4fcc-8a73-6388bf674b3a.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115014/42a7ffa1-f321-4da1-8129-8984e4a93933.png"]
            },
            {
                id: "reshaping-society",
                title: "Reshaping Society – Podcast Host",
                grade: "Current",
                description: "Founded a podcast platform to open conversations on taboo issues like sexual abuse and drug use",
                details: "Reshaping Society began as a small idea — to speak openly about what most people avoid: sexual abuse, mental health, and drug use. I founded and hosted the podcast to create conversations that were honest, sensitive, and informed. Each episode brought together lawyers, psychologists, and survivors for dialogues that blended empathy with realism, translating personal experience into social insight.\n\nIn partnership with the Karnataka Government's Anti-Drug Campaign, the conversations extended beyond the digital space into public awareness initiatives. Alongside the podcast, I co-facilitated weekly anonymous support groups on Zoom with licensed therapist Dr. Prerna Maheshwari, offering survivors a quiet, safe space to share.\n\nBeyond hosting, I handled the full production process — scripting, editing, and designing promotional clips to grow viewership. I taught myself video editing and digital promotion, learning to balance authenticity with algorithmic reach. Every thumbnail, caption, and cut became an extension of the message: that dialogue is powerful only when it's accessible.\n\nThrough Reshaping Society, I learned that storytelling isn't just expression — it's impact. A conversation, when handled with care, can challenge silence, rebuild trust, and give people ownership of their stories.",
                category: "Media & Advocacy",
                achievements: ["Podcast founder", "Government partnership", "Support groups facilitated", "Weekly sessions"],
                link: "https://www.youtube.com/@ReshapingSociety",
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759258538/Reshaping_Society_vrh7he.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689215/8970a709-f434-4f8c-a033-623ee5b189bc.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689327/42c14bee-be47-4c9d-8472-7df2ff1797c3.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689419/950bc5c4-4fae-4d61-8705-4ff20e8e219c.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689460/77258afa-3120-4646-bc40-87794c5ff32c.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760009972/7b98f911-eeb8-439d-a43e-6a0d246f0cef.png"]
            },
            {
                id: "school-captain",
                title: "Jayshree Periwal International School – School Captain",
                grade: "Grade 12",
                description: "As School Captain of 2,400 students, I led assemblies, managed school-wide events, and balanced dual responsibilities in both academic and hostel leadership. My tenure included curating speakers for TEDx JPIS, overseeing the school's Finance Club and Editorial Board, and designing a summer council program on finance and entrepreneurship for 56 juniors.",
                details: "But the real work of leadership often began after hours — in hostel corridors, during late-night conversations with homesick juniors, or in quiet corners, where they helped outline essays and plan extracurricular projects. I spent evenings mentoring students on everything from MUN speeches to balancing academics with self-care. Over time, I realized that the most meaningful influence isn't in giving directions, but in listening — helping others find their own footing rather than walking them through it.\n\nLeadership, I learned, isn't about being in charge; it's about being someone others trust when things feel uncertain. Authority isn't earned through a badge, but through consistency, empathy, and showing up even when no one's watching.",
                category: "Institutional Leadership",
                achievements: ["2,400 students led", "TEDx curation", "Finance club oversight", "56 juniors mentored"],
                // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Leadership_Activities_nsnvgv.png",
                link: "https://jpischool.com/"
            },
            {
                id: "finance-club",
                title: "Finance Club – President",
                grade: "Current",
                description: "Revitalized JPIS's Finance Club into a hub of dialogue and practice",
                details: "I revitalized JPIS's Finance Club into a thriving hub of dialogue and practice. Under my leadership, the club hosted weekly sessions, published a 25-issue newsletter on financial trends, and coded a budgeting website for students.\n\nOur flagship initiatives included \"Future of Finance,\" a virtual series featuring experts such as ISB's N.V. Kumaraguru, and Invested, a mock investment competition that drew over 150 participants nationwide. We also partnered with DhanSarthi to lead financial literacy workshops for over 300 rural women, teaching them banking and savings practices.\n\nThe club convinced me that finance education isn't elitist — it's liberating. Whether through stock simulations or real women opening their first bank accounts, I saw finance as a language of empowerment.",
                category: "Club Leadership",
                achievements: ["Newsletter published", "Budgeting website", "Workshops for 300+ women", "150+ competition participants"],
                imageSrc: [
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760124146/564ad808-0ec5-49ef-951a-fc4dd6493123.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760124198/eb747039-57be-4057-b6bd-abd03ff4ab55.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760124241/b96d42ae-900f-4041-b449-37dbc1376d03.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760124304/93cf4ee1-9ade-41db-8389-3d7233ad3eb3.png"
                ],
                link: "https://www.instagram.com/jpisfinance?igsh=MTd2MnduNDJyN25sMQ=="
            },
            {
                id: "dhan-sarthi",
                title: "DhanSarthi – Project & Impact Lead",
                grade: "Current",
                description: "Designed and led financial literacy workshops for 26,000+ rural women",
                details: "With DhanSarthi, I designed and led financial literacy workshops for 26,000+ rural women across Rajasthan and beyond. Our sessions covered opening bank accounts, accessing microloans, and entrepreneurship training.\n\nStanding in front of women who had never signed a form before, I saw how intimidating finance can feel without access or trust. Guiding them through these first steps — and watching them hold their first passbooks — showed me that financial literacy is not just an abstract theory; it is power in practice.",
                category: "Community Leadership",
                achievements: ["26,000+ women reached", "Financial literacy workshops", "Banking access", "Entrepreneurship training"],
                link: "https://dhansarthi.com",
                instagram: "https://www.instagram.com/dhansarthi",
                imageSrc: [ "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689580/3ce8955f-9d70-4e80-851a-0d7db1163af6.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689615/25b83a4a-016b-4a58-9ced-b3b6a22b2302.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689686/5178beb4-6f88-4fd8-b1b5-106dbc149694.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689751/34101eba-0e51-423a-b627-f739e99b6040.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689783/d2c1c0a5-2194-4944-b988-34feb93330cf.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689827/9ae52579-dbad-4b7d-bbb3-e6262cb08949.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689883/6fb986ad-fa2e-4190-8196-9bd92d3692af.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689902/17ae6f94-ffa3-480a-8ec5-fef4ab51e85e.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689918/fc134777-b874-4596-9d55-f134f0e934ac.png",  "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759689948/7d85ecaf-fce1-4d16-8991-38f06d860e4f.png"]
            },
            {
                id: "tedx-jpis",
                title: "TEDx JPIS – Curator Volunteer",
                grade: "Grade 12",
                description: "Curated and coordinated speakers for the school's TEDx event",
                details: "As part of the curation team for TEDx JPIS, I scouted and coordinated speakers, shaped panel themes, and handled event logistics. The event became a platform for showcasing student-led innovation and broader ideas worth spreading.\n\nBeing behind the scenes at TEDx taught me that significant events are not about the spotlight but about the quiet rigor of planning: aligning schedules, managing personalities, and ensuring the coherence of the narrative arc. It was a masterclass in how small details can have a significant impact.",
                category: "Event Management",
                achievements: ["Speaker curation", "Event logistics", "Student innovation showcase", "Panel themes"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1760124556/560d1916-97d9-4c94-828d-0a5f22363d91.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760124612/d41190ad-6cfd-4f6f-bd89-09c19736b0a9.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760127855/2bd73927-7f1c-4ff5-bcc6-824f859a35cf.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760127862/7037e647-38e1-4937-ad77-8dcca9250044.png"],
                link: "https://www.tedxyouthjpis.com/"
            },
            {
                id: "editorial-board",
                title: "Editorial Board – President",
                grade: "Current",
                description: "Led the school's Editorial Board, transitioning it from print to digital",
                details: "I led the school’s Editorial Board, designing, curating, and publishing five featured editions of the JPIS Journal. I oversaw every stage of production — from deciding themes and structuring content to guiding layout design and final publication. Leading a team of writers and designers, I focused on maintaining editorial quality while encouraging creativity and diverse perspectives. \n\n Each edition became a collaborative platform where students learned to write with precision and purpose, blending storytelling with visual design. For me, this wasn’t just about producing magazines — it was about shaping how our school’s voice is presented and preserved.",
                category: "Media & Publishing",
                achievements: ["Digital transition", "Student voice amplification", "Junior mentoring", "Online adaptation"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115851/49d7e32c-1038-4bed-ad89-c0085181f318.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115845/c9f8762f-0f93-4670-8998-b81e8d512bd5.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115845/c9f8762f-0f93-4670-8998-b81e8d512bd5.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115815/6a1b0976-a23e-429e-8cf8-5352df4fe697.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115748/29d7b3c2-0c87-4b38-b3c6-8688567d12fe.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760115709/4514f090-e3c4-42fe-ae39-a48e3e077e11.png"],
                link: "https://www.instagram.com/jpiseditorialboard"
            },
            {
                id: "tech4bharat",
                title: "Tech4Bharat – Jaipur City Head",
                grade: "Current",
                description: "Led the Jaipur city chapter, teaching digital literacy to underserved communities",
                details: "At Tech4Bharat, I led the Jaipur city chapter, teaching underserved communities and seniors how to navigate the internet, use smartphones, and access banking services. What seemed simple to me — logging into an app, paying a bill online — was often intimidating for first-time users.\n\nTeaching digital literacy reinforced my belief that technology is not an equalizer unless paired with patient instruction. Every time someone made their first digital payment or video call, I saw how empowerment can look like the smallest of victories.",
                category: "Community Leadership",
                achievements: ["Jaipur city head", "Digital literacy workshops", "Senior focus", "Banking services"],
                   imageSrc: [
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942552/62769f9c-3325-4fb5-81a3-1e4a9f193d3a.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942550/d9c1dc5f-c493-4fa7-ad90-2e7499afff1d.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942546/32f4aeb6-bc0f-4f45-b559-46e2a9785827.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942543/a6ed614e-ec00-4ee6-b220-4775ef43b7f9.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942540/fc75d69d-c543-4bb1-9cb4-09e35cd3fc0c.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942536/7b405df0-de3e-4d07-836f-3406c171455a.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942530/7e6953f5-0339-43a1-8edd-55dbd71070a5.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942528/3b7182cb-3145-449c-af66-ed47f53dc722.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942525/ada74401-df59-4363-a2c1-6973b62a38ed.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942521/bcb34f03-d7c0-4234-a6be-da34ed87d702.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942517/980b040c-5964-42d6-b030-4f950d33bac9.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942513/27a41b88-0909-4782-9668-819e13bb0191.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942506/9b41437e-4a0e-4a40-8e3f-d59e1f89a0fa.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942503/c565592b-cedf-4bbf-89e5-3557285de683.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942496/beace0ed-373a-4805-9ebe-9b183a2db7cb.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759942490/d9c3883c-3174-4a27-874a-2e629d4eef08.png",

                ],
                link: "https://www.tech4bharat.org.in/"
            },
            {
                id: "jpis-science-fair",
                title: "JPIS Science Fair – Finance Head",
                grade: "Grade 11",
                description: "Managed a budget of ₹80,000 for the regional science fair",
                details: "As Finance Head for the regional science fair at JPIS, I managed a budget of ₹80,000 and coordinated prize allocations for the largest school science fair in the region. Beyond the numbers, I ensured that funds were distributed transparently and fairly, giving participants confidence in the process.\n\nThe role served as a reminder that even in a student setting, finance carries significant responsibility. A poorly allocated budget could undermine months of work. Handling that responsibility gave me early practice in accountability under pressure.",
                category: "Event Management",
                achievements: ["₹80,000 budget managed", "Transparent fund distribution", "Regional scale", "Prize coordination"],
                // imageSrc: [],
                link: "https://jpis.edu.in/science-fair"
            },
            {
                id: "field-hockey",
                title: "Field Hockey – Captain & State Team Player",
                grade: "Grade 9-10",
                description: "Captain of the school team and a state-level player for Karnataka",
                details: "In Grades 9 and 10, I captained my school's hockey team and represented Karnataka at the state level. Practices demanded 8 hours a week; competitions required resilience under pressure and team cohesion.\n\nHockey taught me lessons that textbooks never could: how leadership on the field requires split-second decision-making, how losses build more character than wins, and how individual skill matters only when it serves the team. Those lessons still echo in how I lead projects today.",
                category: "Sports",
                achievements: ["School team captain", "State-level player", "8 hours weekly practice", "Leadership under pressure"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Leadership_Activities_nsnvgv.png",
                link: "https://www.hockeyindia.org/"
            },
            {
                id: "school-swap-station",
                title: "SchoolSwapStation – Founder",
                grade: "Grade 9",
                description: "Founded a barter-based Instagram platform for students",
                details: "Long before TeenLink, I built SchoolSwapStation, a barter-based Instagram platform for students. It created a small but active community of 50+ users who exchanged books, uniforms, and supplies, promoting both affordability and sustainability.\n\nAlthough modest in scale, it was my first experience designing a system that solved a real-world problem. I learned that entrepreneurship isn't only about scale — it's about spotting inefficiencies and creating value, however small. That spirit later evolved into larger ventures, such as TeenLink.",
                category: "Tech Entrepreneurship",
                achievements: ["50+ users", "Sustainable barter platform", "First entrepreneurship experience", "Real-world problem solving"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690300/4983d63a-3ea4-4ce9-b8cb-5ee39c0a2205.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690247/0448036d-53dc-4a4e-bc6a-be892114382a.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690340/493f5b4c-6212-4023-8123-485597df432a.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690373/60cf08bc-94a3-4d27-bfeb-95af9df71aa1.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690438/f9427036-83d7-4d55-8362-dfae82e0e28d.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690493/fac227d5-8eb3-40e5-92e2-a127b10994f0.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690509/e8e2a5bf-be3e-472e-9543-0550b0ab06bc.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759690536/87299668-5cd5-48af-9cb6-2a41e3f4feb1.png"],
                link: "https://www.instagram.com/schoolswapstation",
                instagram: "https://www.instagram.com/schoolswapstation"
            },
            {
                id: "iris-national-science-fair-finalist",
                title: "IRIS National Science Fair – Finalist",
                grade: "Grade 11",
                description: "Selected from over 8,000 students nationwide, presented biodegradable faux leather prototype",
                details: "Selected from over 8,000 students nationwide, I presented an original prototype of biodegradable faux leather made entirely from banana stems and rice husks at the IRIS National Science Fair. The project grew from curiosity-driven experimentation in chemistry and materials science—concepts I had first explored during my IGCSE science studies, which taught me to approach problems methodically, observe carefully, and iterate constantly.\n\nUnlike a purely theoretical project, I moved from idea to prototype to production. I extracted fibers from banana stems, processed rice husks, and combined them using natural binders, experimenting with texture, durability, and flexibility until the material could actually function as leather. Beyond the lab, I approached the project like an entrepreneur: calculating costs, optimizing production steps, and imagining how this material could be scaled for real-world applications.\n\nPresenting before a panel of national experts was both exhilarating and humbling. I learned that science isn't just about invention—it's about defending your process, explaining your choices, and translating technical complexity into clear, compelling communication. Standing there, I felt the full arc of research: curiosity, experimentation, iteration, and public engagement.\n\nThe IRIS experience was my first true intersection of science and entrepreneurship, showing me how rigorous research can be paired with practical innovation to create solutions that matter.",
                category: "Science & Innovation",
                achievements: ["8,000+ applicants", "Original prototype", "Entrepreneurial approach", "National recognition"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759299129/IRIS_1_sugz6f.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160287/ed523813-b984-417e-b007-0061efa31dd3.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160303/c43f3c91-4087-4264-a8bc-dd4e0971cded.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160358/96dadbe4-6964-4322-a4f2-6804f38f5469.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160370/51f4008f-e034-4d00-9bca-9415c0baaebb.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160405/5f8b868f-cd6e-4289-935f-efa461b51830.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160416/aca34d3e-04a4-4132-a0e6-95a4ced3cbba.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160430/735bf6e9-772d-4862-8107-427fdf8c3261.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160441/f53fc188-6a50-4017-b19a-1375aab486ac.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160453/f877d6cc-e6df-4097-9707-9715ebf0de55.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160467/b388b9dd-aceb-4642-93a5-ff5f0fcfe812.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160498/aff71167-7e36-4f68-8826-eb7e1d75fb1b.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160510/ed543612-93ed-4b90-a32c-abdbadc131ca.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160529/7a5bc915-cf3e-4def-b57f-17fa1420e62c.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160563/e6c7f719-f051-4e14-b8bb-871fc68a4c79.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160576/e3879c3e-a670-4177-a751-22bdec2734bc.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160591/93f01073-cc09-4487-b52b-1ef1eb88d75b.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160607/91851511-06f8-4cba-839c-d395bb4ec338.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160621/503c18ee-d010-48c2-910e-891037da5e9f.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160631/3604a1bb-d0d7-4194-8bbb-8fed4721765d.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160645/1194e9a3-dc09-40a2-9459-c7bfaf98fb3e.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160658/3022a179-5991-4a09-b0f3-ac168c7979ce.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160669/0460611d-5ef9-42fd-a77b-714d07d6ba3f.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160689/c121ba6d-ab84-44dd-b964-7db5d31f9719.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760160723/0773d2e3-9df8-42c2-a310-65b07fc50e27.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253136/IRISNational_kgkqwk.jpg"],
                link: "https://irisnationalfair.org/"
            },
            {
                id: "journey-of-a-high-school-student-blog",
                title: "Journey of a High School Student – Blog Founder",
                grade: "Grade 10",
                description: "Created a student-led blog sharing real stories, reflections, and experiences from classrooms across the country",
                details: "What began as my first experiment in website creation soon evolved into something more meaningful — a digital space to share the authentic experiences of high school life. I designed and launched 'Journey of a High School Student,' a blog where I chronicled my own reflections on academics, friendships, and personal growth, writing weekly pieces about the moments that define a student’s life.\n\nOver time, the project grew into a collaborative platform. I invited classmates and peers from other schools to contribute their stories, transforming the site into a shared voice for young people navigating the same challenges and aspirations. Each post became a small act of connection — a way for students to see themselves reflected in one another’s journeys.\n\nThrough this process, I learned more than just web design and writing; I discovered community-building. Managing contributions, editing articles, and keeping up a consistent publishing schedule taught me the discipline of creative collaboration and the impact of honest storytelling in bringing people together.",
                category: "Writing & Leadership",
                achievements: ["Founded independent blog", "Weekly published content", "Collaborative student platform"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1760089349/bbef6118-98fe-4a67-92e3-6e92d0f63be5.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760089430/61848da1-2639-4ad6-a02e-8b0e1ee2321d.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760089430/61848da1-2639-4ad6-a02e-8b0e1ee2321d.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760089519/53d74278-831c-41ee-a16e-66314463aa30.png", 
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760089564/5df94834-b33d-4943-8284-21a410a5f19e.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760089603/a0e17436-8f5d-4c00-973e-fa39f9b40438.png"],
                link: "https://evabothra.wixsite.com/website"
            },
            
        ]
    },

    community: {
        title: "Community Impact",
        description: "Engaging in diverse community projects, from spearheading healthcare drives and financial literacy workshops to creating inclusive spaces for individuals with disabilities and leading environmental restoration.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008703/Community_Impact_jgtfmp.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759006234/community_impact_tzzi5e.png",
        stats: [
            { label: "Community Groups Served", value: "8+" },
            { label: "People Impacted", value: "26,000+" },
            { label: "Volunteer Hours", value: "100+" }
        ],
        items: [
            {
                id: "asha-niketan",
                title: "Asha Niketan – Volunteer",
                grade: "Current",
                description: "Helped create inclusive spaces for individuals with Down syndrome, intellectual disabilities, and the elderly",
                details: "Over the past few months, I had the privilege of volunteering at Asha Niketan, a home for individuals with Down syndrome, bipolar disorder, intellectual disabilities, and elderly residents often overlooked by society.\n\nWhat began as a simple desire to give back transformed into one of the most meaningful journeys I've experienced. I organized multi-faith prayer circles, led karaoke nights and pizza parties, and ran wellness sessions—spaces where joy, resilience, and connection emerged in the most unexpected moments. I also created handmade greeting cards and candles, providing both income and dignity to their makers.\n\nBeyond activities, I spent hours listening to residents' life stories, sharing laughs over board games, and holding space for silence when words weren't needed. Through these experiences, I learned that empathy isn't just kindness—it's commitment; inclusion isn't just access—it's dignity.\n\nVolunteering at Asha Niketan reminded me that impact isn't always loud—often, it's quiet, consistent, and deeply human. The lessons I gained continue to guide my approach to service, leadership, and community engagement.",
                category: "Social Services",
                achievements: ["Inclusive spaces created", "Income-generating crafts", "Multi-faith circles", "Wellness sessions"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1760007127/eb3bf492-4d2b-499e-b110-510c446395e6.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760007211/a1bd512a-a51f-4e8d-831a-3d47e9cb4fdc.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760007268/341a3a17-24a4-4313-8fc6-f9a794f2977d.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760007308/6b070aa0-40c3-45be-81e1-079ebdfe1700.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760007308/6b070aa0-40c3-45be-81e1-079ebdfe1700.png"],
                link: "https://www.linkedin.com/posts/eva-bothra-56650325a_over-the-past-few-months-i-had-the-privilege-activity-7342855198857404416-M-5l?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfMsd4ButU3MKvKyp1BTqPv6UHrURqhH_Q"
            },
            {
                id: "protecther",
                title: "ProtectHer – Cervical Cancer Vaccination Drives (via Janam)",
                grade: "Current",
                description: "Organized cervical cancer vaccination drives in partnership with Janam",
                details: "Through Janam's partnerships, I helped organize cervical cancer vaccination drives in collaboration with ProtectHer. Beyond equipping birthing spaces, we saw the urgent need for preventive healthcare in rural communities. Coordinating with health workers, we ensured that vaccines reached underserved women, many of whom had never previously interacted with formal healthcare.\n\nEach drive reminded me how inequities in health access aren't just about hospitals — they're about distance, stigma, and awareness. By embedding vaccination into Janam's broader maternal health framework, we weren't just protecting women in the moment, but reshaping long-term health trajectories for families.",
                category: "Public Health",
                achievements: ["Vaccination drives organized", "Partnership with Janam", "Rural healthcare access", "Preventive healthcare"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008708/janam_okbwp6.png"],
                link: "https://protecther.org/"
            },
            {
                id: "suraksha",
                title: "Suraksha – Menstrual Hygiene Campaigns",
                grade: "Current",
                description: "Led campaigns distributing 300+ sanitary pads and teaching menstrual hygiene",
                details: "Working with Suraksha, I coordinated drives to distribute 300+ sanitary pads and led workshops teaching menstrual hygiene in underserved communities. For many girls, this was their first structured conversation about their bodies. I also co-authored and distributed an illustrated pregnancy guide through Janam, integrating health education with cultural sensitivity.\n\nThe experience taught me that taboos are dismantled slowly, through trust and repetition. Watching young girls ask hesitant but brave questions showed me that service isn't about arriving with answers, but about creating safe spaces for curiosity.",
                category: "Public Health",
                achievements: ["300+ sanitary pads distributed", "Hygiene workshops led", "Illustrated guides", "Cultural sensitivity"],
                imageSrc: [
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760118904/8a274dd0-822d-4516-939e-a94bb4a73edc.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760118946/5cb3b3e5-35aa-4ecb-af82-c6cd09f4500b.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760118988/489fd376-6717-49b1-bb1c-570fcc6998a8.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760119007/4d65299e-38c9-4fc5-a11a-3254e9a29d16.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760119032/80b14139-7ab2-448f-ac7c-835c136cbfa7.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760119055/300dd24e-5809-4ee1-9e7f-41152815b26e.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760119065/f2b65e5a-e754-4ae3-b61f-97b47959a110.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760119072/2c967364-cf11-4dcc-9996-21d924d948f3.png",
                "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760118874/e5ff588d-05df-49dc-8e4b-6c6a57bd184f.png",],
                link: "https://www.instagram.com/mission._.suraksha/"
            },
            {
                id: "mitrajyothi",
                title: "Mitrajyothi – Serving the Visually Impaired",
                grade: "Current",
                description: "Volunteered with a nonprofit for the visually impaired, bridging accessibility gaps",
                details: "At Mitrajyothi, a nonprofit for the visually impaired, I worked on initiatives that bridged accessibility gaps. Tasks ranged from organizing community events to distributing resources. More than the technical help, it was the human conversations — listening to how people adapted to everyday challenges — that stayed with me.\n\nMitrajyothi taught me the value of humility in service: often, what feels like \"help\" from the outside is actually collaboration, building alongside people who already possess extraordinary resilience.",
                category: "Social Services",
                achievements: ["Accessibility initiatives", "Community events organized", "Resource distribution", "Human connection"],
                imageSrc: [
                    // "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159422/f083ed91-98d4-4b11-8d28-f12f212b7e89.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159254/3637ada8-3bf3-4fd6-918b-1171c3b8c63f.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159145/788a2499-674c-4b58-a80d-9ed305141544.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159177/8f1803f3-8c81-4926-835e-2cf604e9252a.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159272/b53eba72-58a1-406e-b941-2c9e7faa7cf3.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159278/48638c71-154d-424c-9583-caebf0613852.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159284/2af12214-89f7-49ec-98f8-6f2b1dda07dd.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159378/5c7bb605-e372-4805-8387-e342f1d05f65.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159429/8563421f-0c2a-4911-b993-f5cc3c9b931a.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760159434/471dce42-54c9-4591-8b4d-e31229bc6c24.png"],
                link: "https://www.globalgiving.org/pfil/55418/projdoc.pdf"
            },
            {
                id: "rotary-club",
                title: "Rotary Club – Environmental Restoration Projects",
                grade: "Current",
                description: "Volunteered with a Rotary-led community project focused on environmental restoration",
                details: "In Bangalore, I volunteered with a Rotary-led community project focused on restoration drives. We worked on cleaning local public spaces, planting trees, and running awareness campaigns.\n\nThough less high-profile than my other projects, this work grounded me. It made me realize that service is not always about large grants or innovations; sometimes, it is simply about showing up consistently to do physical, often invisible labor that benefits everyone.",
                category: "Environmental Stewardship",
                achievements: ["Environmental restoration drives", "Awareness campaigns", "Community cleanup", "Tree planting"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120271/0fda265f-57bd-48d0-b8d9-e3c10b395487.png", "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120299/bc3bd8bf-5828-4530-aa08-3c0a6da9f644.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120199/b6758b9d-73bc-46f6-804c-478dbc1447bd.png"],
                link: "https://www.business-standard.com/content/press-releases-ani/ryan-international-academy-and-rotary-club-plant-1-200-saplings-across-bengaluru-in-major-green-initiative-125062500886_1.html"
            },
            {
                id: "welfare-access-cards",
                title: "Community Impact via Janam – Welfare Access Cards",
                grade: "Current",
                description: "Helped distribute 200,000+ Haqdarshak Yojna welfare access cards",
                details: "Through Janam, I helped design and distribute 200,000+ Haqdarshak Yojna cards — simple welfare access cards that explained government entitlements. For many rural families, these became their first entry points into navigating schemes that had long excluded them.\n\nThe project reinforced my belief that scale in service isn't just about numbers — it's about designing tools that travel, survive, and embed themselves in communities without constant external supervision.",
                imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008708/janam_okbwp6.png",
                // imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1758530520/janam_mxcgpx.png",
                category: "Social Services",
                achievements: ["200,000+ cards distributed", "Access to government schemes", "Rural outreach", "Welfare awareness"],
                link: "https://yojanacard.haqdarshak.com"
            },
            {
                id: "no-plastic-use-india",
                title: "No Plastic Use India – Social Media Volunteer",
                grade: "Current",
                description: "I volunteered with No Plastic Use India, a movement committed to reducing single-use plastic and promoting sustainable living. My specific role was handling their social media — creating content, managing community engagement, and helping grow their online presence.",
                details: "Through this, I learned more than just posting: I shaped conversations. I crafted messages that encouraged people to rethink everyday choices — from plastic bags and straws to packaging, urging small changes that can add up. I responded to comments, helped explain the impacts of plastic pollution, and shared tips on alternatives, such as cloth bags or reusable containers.\n\nWorking with No Plastic Use India, I also saw how digital stories can drive real-world behavior change: when someone said they'd stopped using plastic cutlery or started reusing containers, it wasn't just a social media post — it was an action. That made me realise that awareness and voice matter, but only if they lead to meaningful and lasting changes.",
                category: "Environmental Advocacy",
                achievements: ["Social media management", "Community engagement", "Behavior change campaigns", "Sustainable living promotion"],
                imageSrc: ["https://res.cloudinary.com/dqv4mucxh/image/upload/v1760158647/3a30f44c-f4c9-4397-9226-ece0b2238e23.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760158639/9e6d5e2d-6421-4c37-9d26-b7bb0edc53a6.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760158579/69e4dfb9-58f4-468f-80bc-d768e3170461.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120484/7328fa2d-b172-41c6-a295-e4e5a046af7b.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120515/92e3a024-1bbd-4223-b0fd-14bbded6b6a8.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120537/98f780e9-3bae-4b84-9618-314b04a1185d.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120572/37a1884a-4c52-461b-86cc-93d3c993d113.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120572/37a1884a-4c52-461b-86cc-93d3c993d113.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120603/a42ac43f-534a-4e25-b462-4b4df92cc400.png",
                    "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120647/e871e80f-0cb6-4647-b905-914e9faf2367.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120663/7e1fd64d-88d3-41e5-a086-b0cc7e56cd0b.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120678/0ce8b80d-ad67-4773-a3b1-372f65a9ba95.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120685/796e333b-d97f-4a3b-bc2b-995309711ed6.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120694/a621b1be-144b-4da9-b695-7fe99dd3770a.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120702/ee69b7a9-fd40-4e06-af2b-766554012bf9.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120712/91aef8a8-1c27-4837-8351-02d8813c707d.png","https://res.cloudinary.com/dqv4mucxh/image/upload/v1760120721/a4cc9524-fa2d-4c4f-8fbe-efa59259b0e0.png"],
                link: "https://www.instagram.com/noplasticuseindia/?hl=en"
            }
        ]
    },
    skills: {
        title: "Skills & Expertise",
        description: "Full-stack developer, designer, and social entrepreneur building impactful digital solutions. From leading 2,200+ students to raising ₹10L+ in funding, I combine technical execution with strategic thinking.",
        imageSrc: "/images/skills-hero.jpg", // Add your preferred image
        stats: [
            { label: "Projects Shipped", value: "8+" },
            { label: "Funds Raised", value: "₹15L+" },
            { label: "Users Reached", value: "8,500+" },
            { label: "Leading Team", value: "100+" }
        ],
        items: [
            {
                id: "fullstack-dev",
                title: "Full-Stack Development",
                grade: "Advanced",
                description: "Building functional web applications with modern JavaScript frameworks and tools",
                details: "Self-taught full-stack developer specializing in JavaScript, React, Node.js, and Next.js. Learned through hands-on projects including Legal Saathi, Janam, and TeenLink — a student networking app that grew from prototype to fully functional platform. Currently improving database design, debugging workflows, and UI implementation with Tailwind CSS and shadcn/ui. Development approach centers on transforming ideas into tangible, testable products through momentum and continuous learning.",
                category: "Technical",
                achievements: [
                    "Built TeenLink from prototype to production-ready platform",
                    "Developed websites for Legal Saathi (8,500+ users), Janam, and Internlectual",
                    "Mastered modern React patterns and Next.js app architecture",
                    "Implemented responsive designs using Tailwind CSS and shadcn/ui"
                ],
                link: ""
            },
            {
                id: "uiux-design",
                title: "UI/UX & Design Thinking",
                grade: "Advanced",
                description: "Creating intuitive, accessible interfaces that balance aesthetics with usability",
                details: "Skilled in Figma and user-centered design methodology. Focus on building interfaces that prioritize clarity, inclusivity, and multilingual accessibility. Designed complete digital experiences for Legal Saathi, Janam, and TeenLink, ensuring every interaction serves user needs while maintaining visual consistency and brand identity.",
                category: "Design",
                achievements: [
                    "Designed multilingual interfaces for diverse user bases",
                    "Created accessible design systems from scratch",
                    "Led user research and iterative design processes",
                    "Built design libraries in Figma for consistency"
                ],
                link: ""
            },
            {
                id: "finance-strategy",
                title: "Finance, Economics & Strategy",
                grade: "Expert",
                description: "From fundraising to financial modeling, blending economic theory with entrepreneurial execution",
                details: "Finance Club President with extensive hands-on experience in budgeting, sponsorship negotiation, and fund allocation. Secured ₹4L for TeenLink's early-stage funding, raised ₹10L+ for Janam, and ₹140K+ for SFCC wellness campaigns. Managed complex budget coordination for school events, inter-house stall profit-sharing systems, and strategic fund deployment across logistics, welfare, and marketing. Competed in prestigious case competitions (Wharton, Melbourne, TIE, IB League) applying financial modeling and market analysis to real business scenarios.",
                category: "Business",
                achievements: [
                    "Raised ₹15L+ across multiple ventures and initiatives",
                    "Coordinated budgets for large-scale school events",
                    "Competed in international case competitions",
                    "Negotiated sponsorships with local and regional firms"
                ],
                link: ""
            },
            {
                id: "leadership-mentorship",
                title: "Leadership & Mentorship",
                grade: "Expert",
                description: "Leading through listening, building systems that empower others to grow",
                details: "Leadership journey began as Hockey Team Captain, learning to lead through resilience and awareness. Founded school Debate Club, growing membership from 12 to 70+ by creating inclusive, structured environments. Served as School Captain for 2,200+ students, coordinating councils, assemblies, and hostel life while mentoring juniors through applications, extracurriculars, and personal challenges. Designed Summer with Council program for 56 juniors. Leadership philosophy: create space for others, build lasting systems, lead quietly but deeply.",
                category: "Leadership",
                achievements: [
                    "Led 2,200+ students as School Captain",
                    "Grew Debate Club from 12 to 70+ members",
                    "Mentored 56+ juniors through structured programs",
                    "Bridged community divides between day scholars and boarders"
                ],
                link: ""
            },
            {
                id: "social-impact",
                title: "Social Impact & Advocacy",
                grade: "Advanced",
                description: "Building platforms and campaigns that create measurable change in underserved communities",
                details: "Founded Legal Saathi, India's first QR-based legal literacy platform reaching 8,500+ workers with accessible rights information. Co-created Janam, transforming shipping containers into safe birthing spaces for rural women. Led digital outreach for No Plastic Use India promoting sustainable living practices. Experienced in campaign design, social media strategy, community mobilization, and on-ground operations that bridge technology with grassroots needs.",
                category: "Impact",
                achievements: [
                    "Reached 8,500+ workers through Legal Saathi",
                    "Launched innovative maternal health solution (Janam)",
                    "Led sustainability campaigns with measurable engagement",
                    "Designed multi-channel advocacy strategies"
                ],
                link: ""
            },
            {
                id: "writing-communication",
                title: "Writing & Communication",
                grade: "Advanced",
                description: "Crafting compelling narratives across podcasts, publications, and policy research",
                details: "Host of Reshaping Society podcast exploring economics, policy, and human behavior. Served as Editorial Board President, writing extensively for school publications. Produced research ranging from economic Internal Assessments to policy essays for IPPF. Skilled in storytelling, speechwriting, persuasive communication, and translating complex concepts into accessible content for diverse audiences.",
                category: "Communication",
                achievements: [
                    "Hosted Reshaping Society podcast series",
                    "Led editorial board and school publications",
                    "Published policy research and economic analysis",
                    "Delivered speeches to audiences of 2,000+ students"
                ],
                link: ""
            },
            {
                id: "languages",
                title: "Multilingual Communication",
                grade: "Fluent",
                description: "Communicating across cultures with fluency in English, Hindi, and conversational proficiency in regional languages",
                details: "Fluent in English and Hindi, enabling seamless communication in professional and community settings. Conversational proficiency in Marwadi and basic knowledge of Kannada, facilitating connections with diverse communities across India. Language skills enhance user research, community engagement, and inclusive design practices.",
                category: "Communication",
                achievements: [
                    "Fluent in English and Hindi",
                    "Conversational in Marwadi",
                    "Basic proficiency in Kannada",
                    "Designed multilingual platforms for diverse users"
                ],
                link: ""
            }
        ]
    },

    awards: {
        title: "Awards & Media Recognition",
        description: "Recognition for academic excellence, social impact, and leadership achievements across national and international platforms.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008704/Awards_Media_Recognition_mffpnj.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759005852/Awards_Media_Recognition_kmpyq1.png",
        stats: [
            { label: "International Awards", value: "5+" },
            { label: "Grant Recipient", value: "3" },
            { label: "Media Features", value: "Multiple" },
            { label: "Global Recognition", value: "Top 5%" }
        ],
        items: [
            // {
            //     id: "ibo-gold-medalist",
            //     title: "International Business Olympiad (Gold Medalist)",
            //     grade: "Grade 12",
            //     description: "Scored 198/200; represented India internationally; ranked Top 10 globally",
            //     details: "Achieved gold medal status with 198/200 score in the International Business Olympiad. Represented India internationally and ranked Top 10 globally, showcasing exceptional business acumen and analytical skills on the world stage.",
            //     category: "International Award",
            //     achievements: ["198/200 score", "Gold Medalist", "Top 10 Global", "India representative"],
            //     imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008704/Awards_Media_Recognition_mffpnj.png",
            //     link: "https://www.business-olympiad.org/"
            // },
            {
                id: "ib-youth-grant",
                title: "IB Youth Grant Recipient",
                grade: "Current",
                description: "Awarded funding in support of Janam, enabling expanded outreach in rural communities",
                details: "Awarded funding in support of Janam, enabling expanded outreach in rural communities, development of educational materials, and operational scaling of birthing centers. The grant recognized not only innovation in maternal healthcare but also community-driven impact and sustainability.",
                category: "Grant Award",
                achievements: ["Funding for Janam", "Rural outreach expansion", "Educational materials", "Operational scaling"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760121948/35dc2ab6-b7a6-4a19-84df-3547ea9629fa.png",
                link: "https://www.ibo.org/festival-of-hope/youth-in-action/janam?contentId=204588"
            },
            {
                id: "inflection-grant",
                title: "Inflection Grant (Global Top 5)",
                grade: "Current",
                description: "Selected from 350+ applicants worldwide for exceptional social innovation; awarded $2,000 to scale Janam",
                details: "Selected from 350+ applicants worldwide for exceptional social innovation in the Inflection Grant program. Awarded $2,000 to scale Janam's impact, recognizing the project's potential for transformative change in maternal healthcare.",
                category: "International Grant",
                achievements: ["Global Top 5", "350+ applicants", "$2,000 funding", "Social innovation"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760121225/7d27928d-9f3f-4284-9496-6a125ef8a1ba.png",
                link: "https://www.linkedin.com/posts/edge-city-live_announcing-the-first-cohort-of-inflection-activity-7344092564620275712-Ev_2/"
            },
            {
                id: "health-ministry-recognition",
                title: "Indian Health Ministry Recognition",
                grade: "Current",
                description: "Janam acknowledged for rural maternal health innovation and distributed 10,000+ bilingual pregnancy guides",
                details: "Janam received official recognition from the Indian Health Ministry for rural maternal health innovation. The project has distributed 10,000+ bilingual pregnancy guides, demonstrating significant impact in improving maternal healthcare access in rural communities.",
                category: "Government Recognition",
                achievements: ["Health Ministry recognition", "10,000+ guides distributed", "Rural innovation", "Bilingual materials"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008708/janam_okbwp6.png",
                link: ""
            },
            {
                id: "ippf-global",
                title: "International Public Policy Forum (Top 32 Global)",
                grade: "Grade 11",
                description: "Only Indian team to qualify for 2024 finals",
                details: "Advanced to Top 32 worldwide in International Public Policy Forum (IPPF). Only team from India to qualify for the 2024 finals. Argued policy case on preventive healthcare before global panel of judges.",
                category: "International Award",
                imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759007160/8a695a64-f612-4bb7-bd33-5ce64d0867ce.png",
                achievements: ["Global Top 32", "Only India team", "2024 finals", "Policy argumentation"]
            },
            {
                id: "iris-national",
                title: "IRIS National Science Fair (Finalist)",
                grade: "Grade 11",
                description: "Presented self-developed biodegradable leather prototype to national experts",
                details: "Selected as finalist in IRIS National Science Fair. Presented self-developed biodegradable leather prototype made from banana stems and rice husks to panel of national experts, showcasing innovation in sustainable materials science.",
                category: "National Award",
                achievements: ["National finalist", "Original prototype", "Biodegradable leather", "Expert presentation"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253136/IRISNational_kgkqwk.jpg",
                link: "https://irisnationalfair.org/"
            },
            {
                id: "economics-olympiad-rank",
                title: "International Economics Olympiad (AIR 39)",
                grade: "Grade 11",
                description: "Ranked top 1% in India out of 7,000+ participants",
                details: "Achieved All India Rank 39 in International Economics Olympiad, ranking in the top 1% in India out of 7,000+ participants. Demonstrated exceptional understanding of economic principles and analytical thinking.",
                category: "National Award",
                achievements: ["AIR 39", "Top 1% in India", "7,000+ participants", "Economic excellence"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253117/IEO2025_jy4xmv.jpg",
                link: ""
            },
            {
                id: "social-innovation-award",
                title: "Best Social Innovation Award (School)",
                grade: "Current",
                description: "Honored for Janam's sustainable healthcare model",
                details: "Received Best Social Innovation Award at school level for Janam's sustainable healthcare model. The award recognized the project's innovative approach to addressing maternal healthcare challenges through community-driven solutions.",
                category: "School Award",
                achievements: ["Social innovation", "Sustainable model", "Healthcare focus", "Community impact"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760158305/087f3daa-1a98-4446-bb57-092ba331f212.png",
                link: ""
            },
            {
                id: "legal-saathi-newspaper",
                title: "Legal Saathi Featured in Sandesh Patrika",
                grade: "Current",
                description: "Legal Saathi featured in the Sandesh Patrika (Rajasthan newspaper)",
                details: "Legal Saathi received media recognition through a feature in Sandesh Patrika, a prominent Rajasthan newspaper. The coverage highlighted the platform's innovative approach to legal literacy and its impact on worker rights across the state.",
                category: "Media Recognition",
                achievements: ["Newspaper feature", "Rajasthan coverage", "Legal literacy", "Worker rights"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759952247/newpaper_ocdbkh.png",
                link: "https://www.linkedin.com/posts/eva-bothra-56650325a_legalsaathi-gratitude-seemasandesh-activity-7353733985824354305-NaLj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfMsd4ButU3MKvKyp1BTqPv6UHrURqhH_Q"
            }
        ]
    },

    youtube: {
        title: "YouTube",
        description: "Video content showcasing projects, insights, and impact stories.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008703/Community_Impact_jgtfmp.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759005966/YouTube_sduej2.png",
        stats: [
            { label: "Videos Published", value: "10+" },
            { label: "Total Views", value: "5,000+" },
            { label: "Subscribers", value: "500+" },
            { label: "Content Focus", value: "Social Impact" }
        ],
        items: [
            {
                id: "reshaping-society-channel",
                title: "Reshaping Society Podcast",
                grade: "Current",
                description: "Podcast addressing taboo issues with weekly support groups",
                details: "YouTube channel featuring episodes from Reshaping Society podcast, covering topics like sexual abuse, mental health, and drug use. Partnered with Karnataka Government's anti-drug campaign.",
                category: "Media & Advocacy",
                achievements: ["Weekly episodes", "Government partnership", "Support groups", "Survivor advocacy"],
                link: "www.youtube.com/@ReshapingSociety",
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1760009972/7b98f911-eeb8-439d-a43e-6a0d246f0cef.png"
            }
        ]
    },

    reflections: {
        title: "Reflections",
        description: "Personal insights and contemplations on growth, awareness, and the deeper currents of experience.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Reflections_g1ubec.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759006094/Reflections_q0oejj.png",
        stats: [
            { label: "Meditation Hours", value: "1,400+" },
            { label: "Days in Silence", value: "10" },
            { label: "Teacher", value: "Dr. Renuka Goel" },
            { label: "Tradition", value: "S. N. Goenka" }
        ],
        items: [
            {
                id: "vipassana-reflection",
                title: "Vipassana Reflection",
                grade: "Recent",
                description: "Ten days in silence — no phone, no books, no conversation, and nearly 1,400 hours of meditation",
                details: "In the stillness of a Jaipur winter, I spent ten days in silence — no phone, no books, no conversation, and nearly 1,400 hours of meditation under the guidance of Dr. Renuka Goel, my Vipassana teacher. It was my first sustained experience of complete inward observation, and perhaps the first time I understood the discipline of simply being.\n\nVipassana, as taught in the tradition of S. N. Goenka, is a technique of insight — a systematic training of awareness through continuous attention to bodily sensations. From 4:00 a.m. until 9:00 p.m., the day unfolded in complete silence. Ten hours of seated meditation, broken only by brief meals and rest, created a rhythm that dissolved the usual boundaries between body and mind. With no clocks, no mirrors, and no eye contact, time lost its familiar weight; what remained was the cycle of breath and the movement of attention.\n\nEach session began with ānāpāna, observing the breath as it flows in and out — not controlling it, just noticing. Gradually, the practice deepened into Vipassana: scanning the body from head to toe, observing sensations — heat, tingling, tightness, calm — without reaction or preference. The simplicity is deceptive. To sit perfectly still for an hour is to watch the mind's restlessness laid bare. Yet in that repetition lies the heart of the practice: equanimity.\n\nDr. Goel often reminded us that Vipassana isn't about escape or transcendence, but about seeing reality as it is — impermanent, interconnected, and constantly changing. Over days, I began to feel that truth not as a concept, but as an experience. A sensation would arise, crest, and dissolve — like thoughts, emotions, and memories themselves. Nothing stayed fixed.\n\nWhat Vipassana offered was not peace in the sentimental sense, but clarity — a quietness that isn't the absence of noise but the ability to stay undisturbed within it. The silence became a mirror, reflecting how every moment, no matter how fleeting, carries its own completeness.\n\nWhen the ten days ended, the world outside felt louder but lighter. Vipassana didn't change my circumstances; it changed my relationship to them. It taught me that awareness is not passive — it's active presence. To observe without resistance is to understand, and to understand is to begin transforming.",
                category: "Meditation & Mindfulness",
                achievements: ["10 days in silence", "1,400+ meditation hours", "Complete inward observation", "Equanimity practice"],
                imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Reflections_g1ubec.png",
                link: ""
            }
        ]
    },

    homeTiles: [
        {
            key: 'legal-saathi',
            title: 'Legal Saathi',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1758530018/Your_Legal_Rights_y1znqt.png',
            href: 'https://legalsaathi.org',
            external: true
        },
        {
            key: 'janam',
            title: 'Janam',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1758530520/janam_mxcgpx.png',
            href: 'https://janamindia.vercel.app',
            external: true
        },
        {
            key: 'sfcc',
            title: 'SFCC',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253125/Kota_SFCC1_lviu66.jpg',
            href: '/sfcc',
            external: false
        },
        {
            key: 'cortisolx',
            title: 'CortisolX',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759253115/cortisolx_mgbl2b.jpg',
            href: 'https://www.youtube.com/watch?v=G_ya89GaXDg',
            external: true
        },
        {
            key: 'iris-national',
            title: 'IRIS National',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759299129/IRIS_1_sugz6f.png',
            href: '/iris-national',
            external: false
        },
        {
            key: 'internlectual',
            title: 'Internlectual',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759258931/566c3c68-a099-4a25-af70-abe033958a13.png',
            href: 'https://internlectual.com',
            external: true
        },
        {
            key: 'teenlink',
            title: 'TeenLink',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759302338/TEENLink_3_vjzmqw.png',
            href: 'https://play.google.com/',
            external: true
        },
        {
            key: 'reshaping-society',
            title: 'Reshaping Society – Podcast',
            // imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759258538/Reshaping_Society_vrh7he.png',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1760009972/7b98f911-eeb8-439d-a43e-6a0d246f0cef.png',
            href: '/youtube',
            external: false
        }
    ]
}
 