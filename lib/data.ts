import { PortfolioData } from './types'

export const portfolioData: PortfolioData = {
    about: {
        title: "About Me",
        description: "Hi, I'm Eva. I've always carried this urge to leave a mark wherever I go– not just through what I achieve, but through the people I fight for and the changes I help spark. Among my friends, I'm known as the \"dadi\" of the house, the one they turn to for perspective, advice, and the occasional reality check. If I had to describe myself in three words, they would be grit, anti-fragile, and wise beyond my years.",
        fullStory: "My friends once said the song that captures me best is 'Fight Song,' and honestly, I think that fits. Life has never felt like a smooth road; it's felt like a fight. But I've never wanted to fight just for myself. I fight for others too– for fairness, for dignity, for the courage to face what's uncomfortable.\n\nI've lived through experiences that gave me a raw, unfiltered lens on the world. Instead of breaking me, they've made me sharper, hungrier, and more curious. They taught me not just to see problems but to take responsibility for fixing them. And that's what excites me about the future: the chance to learn endlessly, to keep pushing my limits, and to leave behind not just footprints, but real impact.",
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
            { label: "SAT Score", value: "1500" },
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
                        achievements: ["7 A* grades", "2 A grades", "Independent learning", "Resilient learner"]
                    },
                    {
                        id: "ib-diploma",
                        title: "IB Diploma Programme (Grade 11–12)",
                        grade: "Grade 11-12",
                        description: "Score: 41/42 in Grade 11. Subjects: Mathematics AA HL, Economics HL, Business Management HL, Hindi SL, English SL, Computer Science SL",
                        details: "In IB, I sharpened my focus by diving deep into mathematics, economics, and business management, while also exploring new territory in computer science. That mix of depth and breadth helped me see connections between numbers, systems, and people in ways I hadn't before. I scored 41/42, but what mattered more was learning how to balance ambition with time, a skill that now defines how I approach both academics and life.",
                        category: "Academic Performance",
                        achievements: ["41/42 score", "3 Higher Level subjects", "Comprehensive curriculum", "Time management"]
                    },
                    {
                        id: "sat",
                        title: "SAT",
                        grade: "Recent",
                        description: "1500 - Math has always been my stronghold (thanks, Kumon). English took more work – I had to build that foundation later, through deliberate effort.",
                        details: "I scored higher in mocks (1550+), but test-day anxiety hit me hard. I had no chance to retake it, but honestly, the SAT ended up being more of a teacher than a test – it showed me the importance of preparation, balance, and staying calm under pressure.",
                        category: "Standardized Testing",
                        achievements: ["1500 score", "Math excellence", "English improvement", "Test resilience"]
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
                        achievements: ["198/200 score", "Top 5 in India", "Top 10 Globally", "International representation"]
                    },
                    {
                        id: "iris-science-fair",
                        title: "IRIS National Science Fair (Grade 11)",
                        grade: "Grade 11",
                        description: "Selected as 1 of 50 students nationwide from 6,000+ applicants",
                        details: "Selected from over 8,000 students nationwide, I presented an original prototype of biodegradable faux leather made entirely from banana stems and rice husks at the IRIS National Science Fair. The project grew from curiosity-driven experimentation in chemistry and materials science—concepts I had first explored during my IGCSE science studies, which taught me to approach problems methodically, observe carefully, and iterate constantly.\n\nUnlike a purely theoretical project, I moved from idea to prototype to production. I extracted fibers from banana stems, processed rice husks, and combined them using natural binders, experimenting with texture, durability, and flexibility until the material could actually function as leather. Beyond the lab, I approached the project like an entrepreneur: calculating costs, optimizing production steps, and imagining how this material could be scaled for real-world applications.\n\nPresenting before a panel of national experts was both exhilarating and humbling. I learned that science isn't just about invention—it's about defending your process, explaining your choices, and translating technical complexity into clear, compelling communication. Standing there, I felt the full arc of research: curiosity, experimentation, iteration, and public engagement.\n\nThe IRIS experience was my first true intersection of science and entrepreneurship, showing me how rigorous research can be paired with practical innovation to create solutions that matter.",
                        category: "National Award",
                        achievements: ["1 of 50 selected", "6,000+ applicants", "Original prototype", "Sustainability focus"]
                    },
                    {
                        id: "economics-olympiad",
                        title: "International Economics Olympiad – Meccademia (Grade 11)",
                        grade: "Grade 11",
                        description: "Achieved All India Rank 39 out of ~7,000 participants",
                        details: "Demonstrated exceptional understanding of economic principles and analytical thinking in this prestigious international competition.",
                        category: "National Award",
                        achievements: ["AIR 39", "7,000+ participants", "International level", "Economic excellence"]
                    },
                    {
                        id: "ippf",
                        title: "International Public Policy Forum (IPPF) – Global Top 32 (Grade 11)",
                        grade: "Grade 11",
                        description: "Only team from India to qualify for global top 32",
                        details: "Advanced to Top 32 worldwide, arguing a policy case on preventive healthcare before a panel of global judges.",
                        category: "International Award",
                        achievements: ["Global Top 32", "Only team from India", "Policy case presentation", "Healthcare focus"]
                    },
                    {
                        id: "economics-world-cup",
                        title: "Economics World Cup – Finalist (Grade 11)",
                        grade: "Grade 11",
                        description: "Reached the finals of the international Economics World Cup",
                        details: "Demonstrated advanced economic knowledge and problem-solving skills to become a finalist in this global competition.",
                        category: "International Award",
                        achievements: ["Finalist status", "Global competition", "Economic excellence"]
                    },
                    {
                        id: "melbourne-case-competition",
                        title: "Melbourne Case Competition (Grade 11)",
                        grade: "Grade 11",
                        description: "Ranked Top 20 out of 300+ international teams",
                        details: "Presented strategic solutions for the Education industry to University of Melbourne judges and industry leaders, showcasing strong business analysis and presentation skills.",
                        category: "International Award",
                        achievements: ["Top 20 ranking", "300+ international teams", "Strategic solutions", "Education focus"]
                    },
                    {
                        id: "tie-young-entrepreneurs",
                        title: "TIE Young Entrepreneurs – State Finalist (Top 15) (Grade 11)",
                        grade: "Grade 11",
                        description: "Selected among Top 15 state teams in the TYE accelerator",
                        details: "Pitched TeenLink, a high school networking platform, to investors and mentors, gaining valuable experience in business presentation and the startup ecosystem.",
                        category: "State Award",
                        achievements: ["Top 15 state teams", "TYE accelerator", "Startup pitch experience", "Networking platform"]
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
                        achievements: ["80+ research hours", "Conference selection", "Publication submission", "Award entry"]
                    },
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
                        achievements: ["Top 3% selection", "Advanced mathematics", "Proof-based logic", "Game theory"]
                    },
                    {
                        id: "finance-intern",
                        title: "Capital Edge Technologies and 10xCapital10x – Finance Intern",
                        grade: "Current",
                        description: "Applied classroom skills to real-world finance and market analysis",
                        details: "At Capital Edge Technologies and 10xcapital10x, I stepped into the professional world of finance, applying classroom skills to real-world analysis. I worked on modeling tools, exploring how market dynamics shift under different assumptions, and saw how decisions were shaped by more than just formulas — context and intuition mattered equally.\n\nThe internship taught me to communicate insights in concise, business-ready language. It was my first time being accountable not just to my own learning, but to a firm that expected results. That sense of accountability to external stakeholders was both daunting and exhilarating.",
                        category: "Internship",
                        achievements: ["Real-world finance analysis", "Market modeling", "Professional communication", "Stakeholder accountability"]
                    }
                ]
            }
        }
    },

    leadership: {
        title: "Leadership & Activities",
        description: "Spearheading transformative initiatives including Legal Saathi, Janam, and TeenLink, demonstrating exceptional leadership in technology, social innovation, and community engagement across multiple domains.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Leadership_Activities_nsnvgv.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759006602/Leadership_Activities_bpofbc.png",
        stats: [
            { label: "Organizations Founded", value: "6+" },
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
                link: "https://legalsaathi.org"
            },
            {
                id: "janam",
                title: "Janam – Co-Founder",
                grade: "Current",
                description: "Transform waste shipping containers into mobile birthing centers, combining safety, dignity, and scale",
                details: "On a rusted stretcher with paint flaking like ash, my aunt screamed through childbirth with no doctor in sight. Standing frozen in Jaipuria Government Hospital, I realized that sterile wards, steady hands, and safe births– the things I had taken for granted in Bangalore– were privileges reserved for a few. Later, talking to baijis who delivered babies on muddy floors or in hospital corridors, I saw how society normalizes its most profound injustices. That moment didn't make me despair– it made me act.\n\nJanam was born from that urgency. We transform waste shipping containers into mobile birthing centers, combining safety, dignity, and scale. One container is already operational in Mahapura, and two more are underway. Each is fully equipped, designed in collaboration with gynecologists, the National Health Mission, and Aastrika Foundation, and supported by local panchayats. Beyond infrastructure, I trained over 100 midwives, organized health camps for more than 1,500 villagers, and published illustrated pregnancy guides in both Hindi and English to dispel common myths. In partnership with ProtectHer and Suraksha, we conducted cervical vaccination drives and menstrual hygiene programs.\n\nOn the financial side, I raised over $ 12,000 through crowdfunding, CSR partnerships, and grants, managing the allocation of funds across construction, equipment, and educational materials to ensure sustainability.\n\nEvery container, every midwife trained, every rupee spent became more than a statistic– it became a lifeline. Janam taught me that confronting systemic inequity is not about charity; it's about designing solutions that are practical, scalable, and rooted in dignity. Seeing women access care once denied to them is the reason I fight to transform ideas into real-world change.",
                category: "Healthcare Innovation",
                imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008708/janam_okbwp6.png",
                achievements: ["3 centers (1 completed)", "100+ midwives trained", "1,500+ villagers served", "$12,000+ raised"],
                link: "https://janamindia.vercel.app"
            },
            {
                id: "teenlink",
                title: "TeenLink – Founder",
                grade: "Current",
                description: "First 'LinkedIn for teenagers' with 400+ beta users, live on the App Store and Play Store",
                details: "TeenLink grew from frustration into action. At my old school, I launched a Debate Club from scratch – organizing rooms, teachers, logistics, and over 70 members– only to be told we couldn’t compete. That moment showed me the gap between talent and opportunity. Transferring schools revealed a new world of possibilities, and I realized that thousands of students were being denied access to mentorship, internships, and growth opportunities. TeenLink became my answer.\n\nI built the platform from the ground up: coding the app, designing the interface, creating graphics, planning onboarding, and drafting marketing strategies. Late nights debugging, learning from professional coders, and iterating endlessly taught me that real entrepreneurship is persistence in action.\n\nToday, TeenLink has 400 beta users, with a roadmap to reach 20,000 in the next app update. Partnerships with Mauka onboarded 80 NGOs and 56 companies for volunteer work, while over 20 school counselors expanded their mentorship programs. Early funding of ₹4 lakhs (~$5K) and selection in the TYE Rajasthan accelerator validated the work.\n\nEvery feature, every pitch, every bug fix reflects my drive to transform a gap I experienced firsthand into a platform that empowers thousands of students to discover opportunities and connect with mentors.",
                category: "Tech Entrepreneurship",
                achievements: ["400+ beta users", "App Store & Play Store live", "₹4 lakhs funding", "TYE accelerator selection"],
                link: "Available on App Store and Play Store: https://apps.apple.com/ https://play.google.com/"
            },
            {
                id: "sfcc",
                title: "Students for Collaborative Change – Finance Head",
                grade: "Grade 11-12",
                description: "Co-led India's largest student wellness campaign, raising $140,000+",
                details: "As Finance Head for SFCC, I co-led India's most extensive student wellness campaign: a 12-hour national livestream that attracted 1,000+ participants and raised $140,000+. My role spanned sponsor negotiations, allocation of funds, and directing operations to sustain on-ground therapy in Kota, a city where over 100,000 students prepare for competitive exams under intense pressure.\n\nI personally coordinated workshops in hostels with psychologists Dr. Prerna Maheshwari and Dr. Pankhuri Monga, directly engaging 300 students. The funds we raised enabled us to place full-time therapists in Kota, providing free, continuous mental health support.\n\nBeing on the ground in Kota, hearing students' silent struggles, made every sponsorship negotiation urgent and personal. For me, finance became more than numbers — it was the scaffolding for lives under strain.",
                category: "Social Impact",
                achievements: ["$140,000+ raised", "1,000+ participants", "Mental health support in Kota", "12-hour livestream"],
                link: "https://www.youtube.com/watch?v=G_ya89GaXDg"
            },
            {
                id: "cortisolx",
                title: "CortisolX – Vice President",
                grade: "Current",
                description: "Worked at the intersection of biotechnology and mental health, conducting 1,000+ cortisol tests",
                details: "At CortisolX, I worked at the intersection of biotechnology and mental health. We conducted 1,000+ cortisol tests using biosensor patches and AI-driven mental health assessments across JPIS, Kukoon Hostels in Kota, and Jaipur. In partnership with MindIE, a health-tech startup, we even received a $10,000 investment offer.\n\nThe project expanded into a global survey across five countries, gathering cross-cultural data on stress, anxiety, and coping mechanisms. Beyond the data, I learned to balance the scientific rigor of biosensor results with the entrepreneurial clarity needed to present to investors. It showed me that credibility is built on both numbers and narrative.",
                category: "Biotech & Health Tech",
                achievements: ["1,000+ tests conducted", "Global survey", "$10,000 investment offer", "5-country reach"],
                link: "https://cortisolx.in"
            },
            {
                id: "internlectual",
                title: "Internlectual – Founder & President",
                grade: "Current",
                description: "Founded a global student platform, hosting a competition that raised $2,000",
                details: "Internlectual started as a side experiment and became a global student platform. I hosted Internlink, a virtual competition that attracted participants from India, Oman, Dubai, Poland, Brazil, and Nepal. Through registrations, we raised $2,000 and distributed it entirely as prize winnings, rewarding students with both capital and opportunities.\n\nPartnering with companies like Nestlé and Godrej, we awarded internships to top performers and directly connected others to industry roles. What began as a student-led idea evolved into a professional-scale platform connecting global talent with work opportunities.\n\nFor me, Internlectual was the first time I saw my ideas carry weight beyond my immediate community. It validated the possibility that access gaps can be solved by platforms designed with intent and equity.",
                category: "Education Platform",
                achievements: ["Global reach", "$2,000 raised", "Internships awarded", "6-country participation"],
                link: "https://internlectual.com"
            },
            {
                id: "reshaping-society",
                title: "Reshaping Society – Podcast Host",
                grade: "Current",
                description: "Founded a podcast platform to open conversations on taboo issues like sexual abuse and drug use",
                details: "I founded Reshaping Society to open conversations around taboo issues like sexual abuse, mental health, and drug use—topics often silenced in families and communities. Through the podcast, I hosted lawyers, psychologists, and survivors, facilitating candid yet grounded dialogues that balanced honesty with sensitivity. Partnering with the Karnataka Government's anti-drug campaign allowed the conversations to extend beyond the digital sphere, creating real-world awareness and engagement.\n\nAlongside the podcast, I facilitated weekly anonymous support groups on Zoom, co-hosted by licensed therapist Dr. Prerna Maheshwari. These sessions became spaces where survivors could speak, share, and simply be heard. Each Thursday evening brought raw, sometimes challenging conversations, but it taught me that silence is not inevitable—spaces for voice can be intentionally created.\n\nThe process of hosting and moderating the podcast taught me resilience, empathy, and the responsibility that comes with giving people a platform. I realized that dialogue itself can be transformative: breaking stigma, connecting communities, and giving survivors agency over their stories. Launching Reshaping Society reinforced why I'm drawn to initiatives that combine communication, social impact, and practical action—it's not enough to observe problems; meaningful change starts with creating channels for understanding and expression.",
                category: "Media & Advocacy",
                achievements: ["Podcast founder", "Government partnership", "Support groups facilitated", "Weekly sessions"],
                link: "www.youtube.com/@ReshapingSociety"
            },
            {
                id: "school-captain",
                title: "Jayshree Periwal International School – School Captain",
                grade: "Grade 12",
                description: "Led 2,400 students across academic and hostel life responsibilities",
                details: "As School Captain of 2,400 students, I led assemblies, managed school-wide events, and carried out dual responsibilities in both academic and hostel life leadership. My tenure included curating speakers for TEDx JPIS, overseeing the school's finance club and editorial board, and designing a summer council program on finance and entrepreneurship for 56 juniors.\n\nLeadership here was less about titles and more about unseen work — late-night calls from anxious boarders, debates over wellness curricula, or guiding juniors through both academics and life away from home. It made me realize that authority is not granted by a badge but earned through reliability.",
                category: "Institutional Leadership",
                achievements: ["2,400 students led", "TEDx curation", "Finance club oversight", "56 juniors mentored"]
            },
            {
                id: "finance-club",
                title: "Finance Club – President",
                grade: "Current",
                description: "Revitalized JPIS's Finance Club into a hub of dialogue and practice",
                details: "I revitalized JPIS's Finance Club into a thriving hub of dialogue and practice. Under my leadership, the club hosted weekly sessions, published a 25-issue newsletter on financial trends, and coded a budgeting website for students.\n\nOur flagship initiatives included \"Future of Finance,\" a virtual series featuring experts such as ISB's N.V. Kumaraguru, and Invested, a mock investment competition that drew over 150 participants nationwide. We also partnered with DhanSarthi to lead financial literacy workshops for over 300 rural women, teaching them banking and savings practices.\n\nThe club convinced me that finance education isn't elitist — it's liberating. Whether through stock simulations or real women opening their first bank accounts, I saw finance as a language of empowerment.",
                category: "Club Leadership",
                achievements: ["Newsletter published", "Budgeting website", "Workshops for 300+ women", "150+ competition participants"]
            },
            {
                id: "dhan-sarthi",
                title: "DhanSarthi – Project & Impact Lead",
                grade: "Current",
                description: "Designed and led financial literacy workshops for 26,000+ rural women",
                details: "With DhanSarthi, I designed and led financial literacy workshops for 26,000+ rural women across Rajasthan and beyond. Our sessions covered opening bank accounts, accessing microloans, and entrepreneurship training.\n\nStanding in front of women who had never signed a form before, I saw how intimidating finance can feel without access or trust. Guiding them through these first steps — and watching them hold their first passbooks — showed me that financial literacy is not just an abstract theory; it is power in practice.",
                category: "Community Leadership",
                achievements: ["26,000+ women reached", "Financial literacy workshops", "Banking access", "Entrepreneurship training"],
                link: "https://dhansarthi.com"
            },
            {
                id: "tedx-jpis",
                title: "TEDx JPIS – Curator Volunteer",
                grade: "Grade 12",
                description: "Curated and coordinated speakers for the school's TEDx event",
                details: "As part of the curation team for TEDx JPIS, I scouted and coordinated speakers, shaped panel themes, and handled event logistics. The event became a platform for showcasing student-led innovation and broader ideas worth spreading.\n\nBeing behind the scenes at TEDx taught me that significant events are not about the spotlight but about the quiet rigor of planning: aligning schedules, managing personalities, and ensuring the coherence of the narrative arc. It was a masterclass in how small details can have a significant impact.",
                category: "Event Management",
                achievements: ["Speaker curation", "Event logistics", "Student innovation showcase", "Panel themes"]
            },
            {
                id: "editorial-board",
                title: "Editorial Board – President",
                grade: "Current",
                description: "Led the school's Editorial Board, transitioning it from print to digital",
                details: "I led the school's Editorial Board, steering the transition from print to digital platforms. Our team curated student voices into published issues, blending creativity with editorial discipline. Beyond editing, I mentored juniors, guiding them not only in writing but also in developing their critical voice.\n\nThe shift to digital forced me to think about accessibility — how to keep student writing engaging in an online-first world. More than an editorial project, it was about reimagining how young voices are archived and amplified.",
                category: "Media & Publishing",
                achievements: ["Digital transition", "Student voice amplification", "Junior mentoring", "Online adaptation"]
            },
            {
                id: "tech4bharat",
                title: "Tech4Bharat – Jaipur City Head",
                grade: "Current",
                description: "Led the Jaipur city chapter, teaching digital literacy to underserved communities",
                details: "At Tech4Bharat, I led the Jaipur city chapter, teaching underserved communities and seniors how to navigate the internet, use smartphones, and access banking services. What seemed simple to me — logging into an app, paying a bill online — was often intimidating for first-time users.\n\nTeaching digital literacy reinforced my belief that technology is not an equalizer unless paired with patient instruction. Every time someone made their first digital payment or video call, I saw how empowerment can look like the smallest of victories.",
                category: "Community Leadership",
                achievements: ["Jaipur city head", "Digital literacy workshops", "Senior focus", "Banking services"]
            },
            {
                id: "jpis-science-fair",
                title: "JPIS Science Fair – Finance Head",
                grade: "Grade 11",
                description: "Managed a budget of ₹80,000 for the regional science fair",
                details: "As Finance Head for the regional science fair at JPIS, I managed a budget of ₹80,000 and coordinated prize allocations for the largest school science fair in the region. Beyond the numbers, I ensured that funds were distributed transparently and fairly, giving participants confidence in the process.\n\nThe role served as a reminder that even in a student setting, finance carries significant responsibility. A poorly allocated budget could undermine months of work. Handling that responsibility gave me early practice in accountability under pressure.",
                category: "Event Management",
                achievements: ["₹80,000 budget managed", "Transparent fund distribution", "Regional scale", "Prize coordination"]
            },
            {
                id: "field-hockey",
                title: "Field Hockey – Captain & State Team Player",
                grade: "Grade 9-10",
                description: "Captain of the school team and a state-level player for Karnataka",
                details: "In Grades 9 and 10, I captained my school's hockey team and represented Karnataka at the state level. Practices demanded 8 hours a week; competitions required resilience under pressure and team cohesion.\n\nHockey taught me lessons that textbooks never could: how leadership on the field requires split-second decision-making, how losses build more character than wins, and how individual skill matters only when it serves the team. Those lessons still echo in how I lead projects today.",
                category: "Sports",
                achievements: ["School team captain", "State-level player", "8 hours weekly practice", "Leadership under pressure"]
            },
            {
                id: "school-swap-station",
                title: "SchoolSwapStation – Founder",
                grade: "Grade 9",
                description: "Founded a barter-based Instagram platform for students",
                details: "Long before TeenLink, I built SchoolSwapStation, a barter-based Instagram platform for students. It created a small but active community of 50+ users who exchanged books, uniforms, and supplies, promoting both affordability and sustainability.\n\nAlthough modest in scale, it was my first experience designing a system that solved a real-world problem. I learned that entrepreneurship isn't only about scale — it's about spotting inefficiencies and creating value, however small. That spirit later evolved into larger ventures, such as TeenLink.",
                category: "Tech Entrepreneurship",
                achievements: ["50+ users", "Sustainable barter platform", "First entrepreneurship experience", "Real-world problem solving"]
            },
            {
                id: "iris-national-science-fair-finalist",
                title: "IRIS National Science Fair – Finalist",
                grade: "Grade 11",
                description: "Selected from over 8,000 students nationwide, presented biodegradable faux leather prototype",
                details: "Selected from over 8,000 students nationwide, I presented an original prototype of biodegradable faux leather made entirely from banana stems and rice husks at the IRIS National Science Fair. The project grew from curiosity-driven experimentation in chemistry and materials science—concepts I had first explored during my IGCSE science studies, which taught me to approach problems methodically, observe carefully, and iterate constantly.\n\nUnlike a purely theoretical project, I moved from idea to prototype to production. I extracted fibers from banana stems, processed rice husks, and combined them using natural binders, experimenting with texture, durability, and flexibility until the material could actually function as leather. Beyond the lab, I approached the project like an entrepreneur: calculating costs, optimizing production steps, and imagining how this material could be scaled for real-world applications.\n\nPresenting before a panel of national experts was both exhilarating and humbling. I learned that science isn't just about invention—it's about defending your process, explaining your choices, and translating technical complexity into clear, compelling communication. Standing there, I felt the full arc of research: curiosity, experimentation, iteration, and public engagement.\n\nThe IRIS experience was my first true intersection of science and entrepreneurship, showing me how rigorous research can be paired with practical innovation to create solutions that matter.",
                category: "Science & Innovation",
                achievements: ["8,000+ applicants", "Original prototype", "Entrepreneurial approach", "National recognition"]
            }
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
                achievements: ["Inclusive spaces created", "Income-generating crafts", "Multi-faith circles", "Wellness sessions"]
            },
            {
                id: "protecther",
                title: "ProtectHer – Cervical Cancer Vaccination Drives (via Janam)",
                grade: "Current",
                description: "Organized cervical cancer vaccination drives in partnership with Janam",
                details: "Through Janam's partnerships, I helped organize cervical cancer vaccination drives in collaboration with ProtectHer. Beyond equipping birthing spaces, we saw the urgent need for preventive healthcare in rural communities. Coordinating with health workers, we ensured that vaccines reached underserved women, many of whom had never previously interacted with formal healthcare.\n\nEach drive reminded me how inequities in health access aren't just about hospitals — they're about distance, stigma, and awareness. By embedding vaccination into Janam's broader maternal health framework, we weren't just protecting women in the moment, but reshaping long-term health trajectories for families.",
                category: "Public Health",
                achievements: ["Vaccination drives organized", "Partnership with Janam", "Rural healthcare access", "Preventive healthcare"]
            },
            {
                id: "suraksha",
                title: "Suraksha – Menstrual Hygiene Campaigns",
                grade: "Current",
                description: "Led campaigns distributing 300+ sanitary pads and teaching menstrual hygiene",
                details: "Working with Suraksha, I coordinated drives to distribute 300+ sanitary pads and led workshops teaching menstrual hygiene in underserved communities. For many girls, this was their first structured conversation about their bodies. I also co-authored and distributed an illustrated pregnancy guide through Janam, integrating health education with cultural sensitivity.\n\nThe experience taught me that taboos are dismantled slowly, through trust and repetition. Watching young girls ask hesitant but brave questions showed me that service isn't about arriving with answers, but about creating safe spaces for curiosity.",
                category: "Public Health",
                achievements: ["300+ sanitary pads distributed", "Hygiene workshops led", "Illustrated guides", "Cultural sensitivity"]
            },
            {
                id: "mitrajyothi",
                title: "Mitrajyothi – Serving the Visually Impaired",
                grade: "Current",
                description: "Volunteered with a nonprofit for the visually impaired, bridging accessibility gaps",
                details: "At Mitrajyothi, a nonprofit for the visually impaired, I worked on initiatives that bridged accessibility gaps. Tasks ranged from organizing community events to distributing resources. More than the technical help, it was the human conversations — listening to how people adapted to everyday challenges — that stayed with me.\n\nMitrajyothi taught me the value of humility in service: often, what feels like \"help\" from the outside is actually collaboration, building alongside people who already possess extraordinary resilience.",
                category: "Social Services",
                achievements: ["Accessibility initiatives", "Community events organized", "Resource distribution", "Human connection"]
            },
            {
                id: "rotary-club",
                title: "Rotary Club – Environmental Restoration Projects",
                grade: "Current",
                description: "Volunteered with a Rotary-led community project focused on environmental restoration",
                details: "In Bangalore, I volunteered with a Rotary-led community project focused on restoration drives. We worked on cleaning local public spaces, planting trees, and running awareness campaigns.\n\nThough less high-profile than my other projects, this work grounded me. It made me realize that service is not always about large grants or innovations; sometimes, it is simply about showing up consistently to do physical, often invisible labor that benefits everyone.",
                category: "Environmental Stewardship",
                achievements: ["Environmental restoration drives", "Awareness campaigns", "Community cleanup", "Tree planting"]
            },
            {
                id: "tech4bharat-community",
                title: "Tech4Bharat – Digital Literacy",
                grade: "Current",
                description: "Led workshops teaching digital skills to seniors and underserved communities",
                details: "As Jaipur City Head for Tech4Bharat, I led workshops teaching digital skills to seniors and underserved communities. We covered smartphone use, digital payments, and accessing government services online.\n\nWhat struck me was how something as simple as teaching someone to use WhatsApp video calls could help bridge the isolation. Service here wasn't about grand systemic reform, but about closing everyday gaps in access and dignity.",
                category: "Education & Literacy",
                achievements: ["Digital literacy workshops led", "Senior focus", "Government services access", "Digital payments"]
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
                achievements: ["200,000+ cards distributed", "Access to government schemes", "Rural outreach", "Welfare awareness"]
            },
            {
                id: "asha-niketan-foundation",
                title: "Asha Niketan Foundation – Volunteer",
                grade: "Current",
                description: "Helped create inclusive spaces for individuals with Down syndrome, bipolar disorder, intellectual disabilities, and the elderly",
                details: "At Asha Niketan, a foundation that provides a home for individuals with Down syndrome, bipolar disorder, intellectual disabilities, and the elderly, I helped create inclusive spaces that blended care with community. I organized multi-faith prayer circles that celebrated verses from the Gita, Bible, and Quran, hosted karaoke nights and pizza parties, and led wellness sessions designed to bring residents joy and connection.\n\nAlongside daily engagement, I worked with residents to produce handmade greeting cards and candles, small crafts that generated income while restoring dignity in their labor. I spent time listening to their stories, playing games, and holding space for silence when words were unnecessary.\n\nThrough these activities, I saw how inclusion can be lived: not as charity, but as a matter of dignity and companionship. Asha Niketan taught me that empathy is a practice, not a gesture, and that the most profound impact is often quietly found in shared meals, small creations, and the recognition of humanity in one another.",
                category: "Social Services",
                achievements: ["Multi-faith prayer circles", "Income-generating crafts", "Wellness sessions", "Community building"]
            }
        ]
    },

    skills: {
        title: "Skills & Interests",
        description: "Comprehensive technical and professional skill development spanning programming, design, finance, research methodology, and leadership capabilities.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008692/Skills_Interests_iaaxxa.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759005754/Skills_Interests_ygsjpc.png",
        stats: [
            { label: "Programming", value: "JavaScript, Python" },
            { label: "Frameworks", value: "React, Node.js" },
            { label: "Design", value: "UI/UX, Figma" },
            { label: "Languages", value: "Hindi, English" }
        ],
        items: [
            {
                id: "programming",
                title: "Programming & Development",
                grade: "Advanced",
                description: "Full-stack development with modern web technologies",
                details: "Proficient in JavaScript, Python, and Java. Experience with React, Node.js, Express framework. Built TeenLink app from scratch including frontend, backend, and mobile deployment to App Store and Play Store.",
                category: "Technical",
                achievements: ["Full-stack development", "Mobile app deployment", "Modern frameworks", "Production applications"]
            },
            {
                id: "research-methodology",
                title: "Research & Analysis",
                grade: "Advanced",
                description: "Structured research methodology with publication experience",
                details: "80+ hours of structured research on healthcare economics. Formal research methods, data modeling, report writing. Selected for conference presentation, submitted for academic publication. Experience with both quantitative and qualitative research approaches.",
                category: "Academic",
                achievements: ["80+ research hours", "Conference selection", "Publication submission", "Mixed methods"]
            },
            {
                id: "financial-modeling",
                title: "Financial Analysis & Modeling",
                grade: "Intermediate",
                description: "Financial modeling, budgeting, and investment analysis",
                details: "Experience from finance internships and club leadership. Budget management for multiple projects totaling $20,000+. Investment competition organization, financial literacy curriculum development, and real-world modeling tools application.",
                category: "Finance",
                achievements: ["$20,000+ budget management", "Investment analysis", "Curriculum development", "Real-world modeling"]
            },
            {
                id: "leadership-management",
                title: "Leadership & Project Management",
                grade: "Advanced",
                description: "Leading teams, managing projects, and scaling organizations",
                details: "Led teams of 100+ members across multiple organizations. Managed complex projects from Legal Saathi (15 volunteers, 7 states) to SFCC ($140,000 campaign). Experience in strategic planning, resource allocation, and stakeholder management.",
                // imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1758530018/Your_Legal_Rights_y1znqt.png",
                imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008688/legal_ttr2ku.png",
                category: "Leadership",
                achievements: ["100+ team members", "Multi-state operations", "Strategic planning", "Stakeholder management"]
            }
        ]
    },

    awards: {
        title: "Awards & Media Recognition",
        description: "Recognition for academic excellence, social impact, and leadership achievements across national and international platforms.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008704/Awards_Media_Recognition_mffpnj.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759005852/Awards_Media_Recognition_kmpyq1.png",
        stats: [
            { label: "National Awards", value: "5+" },
            { label: "International Recognition", value: "3" },
            { label: "Scholarship Programs", value: "2" },
            { label: "Media Features", value: "Multiple" }
        ],
        items: [
            {
                id: "ibo-global",
                title: "International Business Olympiad - Global Top 10",
                grade: "Grade 12",
                description: "Highest Distinction with 198/200 score, represented India internationally",
                details: "Achieved highest distinction with 198/200 score. Ranked Top 5 in India (National Round) and Top 10 globally in both presentation and individual test. Represented India in international competition, showcasing exceptional business acumen on global stage.",
                category: "International Award",
                achievements: ["198/200 score", "Top 5 India", "Top 10 Global", "International representation"]
            },
            {
                id: "iris-national",
                title: "IRIS National Science Fair - Top 50 Finalist",
                grade: "Grade 11",
                description: "Selected from 6,000+ applicants for national-level science competition",
                details: "Selected as 1 of 50 students nationwide from over 6,000 applicants. Presented original biodegradable faux leather prototype to panel of national experts. Recognition for innovation in sustainable materials science.",
                category: "National Award",
                achievements: ["Top 50 nationwide", "6,000+ applicant pool", "Original prototype", "Expert presentation"]
            },
            {
                id: "economics-olympiad-rank",
                title: "International Economics Olympiad - AIR 39",
                grade: "Grade 11",
                description: "All India Rank 39 from approximately 7,000 participants",
                details: "Achieved All India Rank 39 in International Economics Olympiad (Meccademia) with approximately 7,000 participants. Demonstrated exceptional understanding of economic principles and analytical thinking.",
                category: "National Award",
                achievements: ["AIR 39", "7,000+ participants", "Economic excellence", "Analytical recognition"]
            },
            {
                id: "ippf-global",
                title: "International Public Policy Forum - Global Top 32",
                grade: "Grade 11",
                description: "Only team from India to qualify for global top 32",
                details: "Advanced to Top 32 worldwide in International Public Policy Forum (IPPF). Only team from India to qualify. Argued policy case on preventive healthcare before global panel of judges.",
                category: "International Award",
                imageSrc:"https://res.cloudinary.com/dqv4mucxh/image/upload/v1759007160/8a695a64-f612-4bb7-bd33-5ce64d0867ce.png",
                achievements: ["Global Top 32", "Only India team", "Policy argumentation", "Healthcare focus"]
            },
            {
                id: "tie-finalist",
                title: "TIE Young Entrepreneurs - State Finalist",
                grade: "Grade 11",
                description: "Selected among Top 15 state teams for entrepreneurship competition",
                details: "Selected among Top 15 state teams in TIE Young Entrepreneurs competition. Pitched TeenLink, high school networking platform, to panel of investors and mentors in TYE accelerator program.",
                category: "State Award",
                achievements: ["Top 15 state teams", "Investor pitch", "Accelerator selection", "Networking platform"]
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
                link: "www.youtube.com/@ReshapingSociety"
            }
        ]
    },

    reflections: {
        title: "Reflections",
        description: "Personal insights, lessons learned, and thoughts on impact, leadership, and growth.",
        imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Reflections_g1ubec.png",
        // imageSrc: "https://res.cloudinary.com/dqv4mucxh/image/upload/v1759006094/Reflections_q0oejj.png",
        stats: [
            { label: "Reflection Essays", value: "15+" },
            { label: "Topics Covered", value: "Leadership, Impact, Growth" },
            { label: "Words Written", value: "10,000+" },
            { label: "Personal Growth", value: "Continuous" }
        ],
        items: [
            {
                id: "leadership-reflections",
                title: "On Leadership and Service",
                grade: "Current",
                description: "Reflections on what it means to lead with empathy and create lasting impact",
                details: "Through my experiences leading Legal Saathi, Janam, and TeenLink, I've learned that true leadership isn't about titles or recognition—it's about the quiet moments of service, the late-night calls from team members, and the responsibility of turning ideas into tangible change that improves lives.",
                category: "Personal Growth",
                achievements: ["Leadership insights", "Service philosophy", "Impact measurement", "Team dynamics"]
            },
            {
                id: "resilience-journey",
                title: "Building Resilience Through Adversity",
                grade: "Current",
                description: "How challenges shaped my character and approach to problem-solving",
                details: "Life has never felt like a smooth road; it's felt like a fight. But I've never wanted to fight just for myself. I fight for others too– for fairness, for dignity, for the courage to face what's uncomfortable. These experiences have made me sharper, hungrier, and more curious.",
                category: "Personal Growth",
                achievements: ["Resilience building", "Character development", "Problem-solving approach", "Empathy cultivation"]
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
            imageSrc: '/placeholder.jpg',
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
            imageSrc: '/placeholder.jpg',
            href: 'https://play.google.com/',
            external: true
        },
        {
            key: 'reshaping-society',
            title: 'Reshaping Society – Podcast',
            imageSrc: 'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759258538/Reshaping_Society_vrh7he.png',
            href: 'https://www.youtube.com/@ReshapingSociety',
            external: true
        }
    ]
}
 