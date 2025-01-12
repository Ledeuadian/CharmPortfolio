import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Charm',
    lastName:  'VA',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Customer Service Advisor/Virtual Assistant',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Manila',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Filipino']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:charichzon@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>CSR Advisor and VA Specialist</>,
    subline: <>I'm Charm, An experience CSR Advisor under  <InlineCode>EBAY</InlineCode>, and an Aspiring VA Specialist.<br/><br/> ~Excellence means not just managing tasks, but mastering the art of adaptability, efficiency, and proactive support.~"</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hello! I’m Charm, an outstanding Customer Support Specialist with a proven track record of delivering exceptional service and consistently exceeding performance benchmarks. With a passion for problem-solving and a customer-first mindset, I specialize in creating seamless and memorable experiences for clients.<br/><br/>As a top performer in my field, I thrive on turning challenges into opportunities. Whether it’s resolving complex issues, guiding customers through processes, or simply ensuring they feel valued, I pride myself on my ability to connect, communicate, and build trust.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Concentrix',
                timeframe: '2021 - Present',
                role: 'Customer Service Advisor',
                achievements: [
                    <>Answer incoming calls, emails, or chat messages to assist customers with questions about their accounts, orders, returns, or payments.</>,
                    <>Provide clear, concise, and empathetic responses to ensure customer satisfaction.</>
                ],
                images: [ ]
            },
            {
                company: 'Teleperformance',
                timeframe: '2019 - 2021',
                role: 'Travel Associate',
                achievements: [
                    <>Assist customers with making, modifying, or canceling reservations.</>,
                    <>Ensure smooth coordination of itineraries, including resolving issues with overbooked flights, delayed accommodations, or other travel disruptions.</>
                ],
                images: [ ]
            }
        ]
    },
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };