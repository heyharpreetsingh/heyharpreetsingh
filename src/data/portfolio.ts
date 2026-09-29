export interface Skill {
  name: string
  level: number
  icon: string
  category: 'frontend' | 'backend' | 'tools' | 'cloud'
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

export interface Project {
  title: string
  description: string[]
  image: string
  technologies: string[]
  github?: string
  demo?: string
  featured: boolean
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  logo: string
}

export interface Social {
  name: string
  icon: string
  url: string
}

export interface Language {
  name: string
}

export const personalInfo = {
  name: 'Harpreet Singh',
  title: 'Senior Full-Stack Engineer',
  subtitle: 'Full-Stack Developer | LMS Expert | AI-Assisted Development',
  email: 'heyharpreetsingh@gmail.com',
  phone: '+918684820640',
  location: 'Ambala, Haryana | Available Immediately',
  bio: `Senior Full-Stack Software Engineer with 9+ years of experience building scalable web applications, Learning Management Systems, SaaS platforms, and e-commerce solutions. Strong expertise in Laravel, PHP, Next.js, Node.js/Express.js, Vue.js, Moodle, MySQL, PostgreSQL, MongoDB, REST APIs, and OOP. Experienced in modernizing legacy applications, developing scalable APIs, database optimization, third-party integrations, LMS migrations, and production troubleshooting. Built and migrated multi-school Moodle platforms, modernized PHP applications using Laravel/Vue.js, and integrated AI-powered speech processing with Whisper. Experienced with Claude Code and AI-assisted development workflows to accelerate coding, debugging, refactoring, testing, and feature development.`,
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Next.js', level: 90, icon: 'Zap', category: 'frontend' },
  { name: 'React.js', level: 88, icon: 'Atom', category: 'frontend' },
  { name: 'Vue.js', level: 92, icon: 'Code2', category: 'frontend' },
  { name: 'JavaScript', level: 93, icon: 'FileCode', category: 'frontend' },
  { name: 'HTML5', level: 95, icon: 'Code', category: 'frontend' },
  { name: 'CSS3', level: 92, icon: 'Palette', category: 'frontend' },

  // Backend
  { name: 'Laravel', level: 95, icon: 'Server', category: 'backend' },
  { name: 'PHP', level: 95, icon: 'Code', category: 'backend' },
  { name: 'Node.js', level: 90, icon: 'Server', category: 'backend' },
  { name: 'Express.js', level: 88, icon: 'Server', category: 'backend' },
  { name: 'REST APIs', level: 93, icon: 'Network', category: 'backend' },
  { name: 'MySQL', level: 92, icon: 'Database', category: 'backend' },
  { name: 'PostgreSQL', level: 90, icon: 'Database', category: 'backend' },
  { name: 'MongoDB', level: 85, icon: 'Database', category: 'backend' },
  { name: 'Prisma ORM', level: 85, icon: 'Database', category: 'backend' },

  // Cloud & DevOps
  { name: 'CI/CD', level: 85, icon: 'GitBranch', category: 'cloud' },
  { name: 'API Integration', level: 90, icon: 'Network', category: 'cloud' },
  { name: 'Performance Optimization', level: 88, icon: 'Zap', category: 'cloud' },

  // Tools
  { name: 'Git', level: 95, icon: 'GitBranch', category: 'tools' },
  { name: 'Claude Code', level: 90, icon: 'Code2', category: 'tools' },
  { name: 'AI-Assisted Development', level: 88, icon: 'Code', category: 'tools' },
  { name: 'Moodle', level: 90, icon: 'Server', category: 'tools' },
  { name: 'CS-Cart', level: 85, icon: 'Server', category: 'tools' },
  { name: 'Whisper', level: 80, icon: 'Mic', category: 'tools' },
]

export const experiences: Experience[] = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'RisingLMS LLP.',
    location: 'Remote',
    period: 'Jan 2025 - Present',
    description: [
      'Design, develop, and maintain scalable Learning Management System (LMS) platforms using Moodle, Laravel, Next.js, MySQL, and PostgreSQL',
      'Develop and enhance LMS features, REST APIs, backend services, database workflows, and third-party integrations',
      'Work across the complete software development lifecycle, including requirement analysis, technical planning, development, testing, deployment, and production support',
      'Leverage Claude Code and AI-assisted development tools for code generation, debugging, refactoring, code analysis, optimization, documentation, and accelerating feature development',
      'Optimize application and database performance through query optimization, code refactoring, bottleneck analysis, and scalable architecture improvements',
      'Lead technical implementation and mentor junior developers on Laravel, PHP, JavaScript, OOP, database design, debugging, Git, and development best practices',
      'Troubleshoot complex production issues by analyzing logs, tracing application behavior, identifying root causes, implementing permanent fixes, and supporting code reviews, CI/CD workflows, testing, and production releases',
    ],
    technologies: ['Moodle', 'Laravel', 'Next.js', 'MySQL', 'PostgreSQL', 'Claude Code', 'AI Development'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Tech Prastish Software Solutions Pvt. Ltd.',
    location: 'Mohali, Punjab, India',
    period: 'Mar 2018 - Nov 2024',
    description: [
      'Designed, developed, and maintained full-stack web applications using PHP, Laravel, Node.js, Express.js, Vue.js, MySQL, and CS-Cart',
      'Developed and customized e-commerce and multi-vendor platforms using CS-Cart, including custom features, payment solutions, shipping integrations, APIs, and business workflows',
      'Built scalable REST APIs and backend services using Laravel and Node.js, integrating them with modern frontend applications built with React.js and Vue.js',
      'Integrated third-party services and APIs, including payment gateways, shipping services, external business systems, and other platform integrations',
      'Improved application performance through database optimization, API optimization, caching, code refactoring, and bottleneck analysis',
      'Worked closely with clients and cross-functional teams to analyze requirements, define technical solutions, and deliver projects while maintaining existing business functionality and system stability',
      'Mentored junior developers on PHP, Laravel, JavaScript, OOP, Git, debugging, coding standards, and problem-solving techniques',
      'Diagnosed and resolved complex production issues by analyzing logs, tracing API requests, debugging application code, and implementing fixes',
    ],
    technologies: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'Vue.js', 'React.js', 'MySQL', 'CS-Cart'],
  },
  {
    title: 'Software Engineer',
    company: 'Ditro Infotech Pvt. Ltd.',
    location: 'Mohali, Punjab, India',
    period: 'Oct 2016 - Feb 2018',
    description: [
      'Developed and maintained web applications using PHP, CodeIgniter, WordPress, MySQL, JavaScript, jQuery, HTML, and CSS',
      'Built backend functionality using CodeIgniter, including database workflows, forms, authentication, reusable components, and business logic',
      'Developed and customized WordPress websites and plugins based on client requirements',
      'Integrated backend functionality with frontend interfaces, databases, and third-party services, working closely with frontend developers and designers',
      'Participated in requirement analysis, development, testing, debugging, deployment, and maintenance, resolving application issues and improving system stability',
    ],
    technologies: ['PHP', 'CodeIgniter', 'WordPress', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
  },
]

export const projects: Project[] = [
  {
    title: 'Literacy Solutions — Multi-School Moodle LMS',
    description: [
      'Developed a centralized, standalone Moodle-based Learning Management System to consolidate multiple school websites into a single platform',
      'Migrated approximately 20–23 school websites, including courses, users, enrolments, and related learning data, into the centralized Moodle environment',
      'Implemented Moodle Cohorts to logically separate schools and ensure users could securely access courses associated with their respective school',
      'Worked on LMS configuration, data migration, user enrolment workflows, course management, and customization to support multiple schools within a single platform',
      'Helped streamline administration by bringing multiple independent school LMS environments into one centralized system',
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=450&fit=crop',
    technologies: ['Moodle', 'PHP', 'MySQL', 'LMS', 'Data Migration'],
    featured: true,
  },
  {
    title: 'EESAPP — Early Echoic Skills Assessment & Program Planner',
    description: [
      'Modernized an existing PHP-based application by migrating the platform to Laravel and Vue.js and transforming it into a modern single-page application',
      'Redesigned and migrated the application\'s MySQL database while preserving existing application data and business workflows',
      'Integrated AI-powered speech-to-text using Whisper to transcribe learners\' voice responses during assessment activities',
      'Implemented automated processing and scoring workflows to assist with evaluating learners\' vocal imitation and speech skills',
      'Developed backend APIs in Laravel and integrated them with the Vue.js frontend to provide a responsive and interactive user experience',
      'Improved the application\'s maintainability, scalability, and overall user experience through modernization of the existing architecture',
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop',
    technologies: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'AI', 'OpenAI Whisper'],
    featured: true,
  },
  {
    title: 'Self & Match App — Learner Self-Monitoring Platform',
    description: [
      'Developed a modern web application focused on helping learners build self-awareness, self-monitoring, and positive behavioral habits',
      'Built the application using Next.js with a scalable backend architecture and Prisma ORM for database management',
      'Designed and integrated PostgreSQL database structures to manage learners, projects, activities, behavioral data, and related application workflows',
      'Developed reusable components and application workflows to support learner activities and progress tracking',
      'Focused on performance, maintainability, responsive design, and a smooth user experience across the platform',
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Redis'],
    featured: true,
  },
  {
    title: 'Laravel Firebase Cloud Messaging (FCM)',
    description: [
      'Developed and published a Laravel package for integrating Firebase Cloud Messaging (FCM), enabling push notifications for web and mobile applications',
    ],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=450&fit=crop',
    technologies: ['Laravel', 'PHP', 'Firebase', 'FCM', 'Push Notifications'],
    github: 'https://github.com/heyharpreetsingh/fcm',
    demo: 'https://packagist.org/packages/heyharpreetsingh/fcm',
    featured: false,
  },
]

export const certifications: Certification[] = [
  {
    name: 'Bachelor of Science (B.S.): Computer Science',
    issuer: 'Kurukshetra University',
    date: 'June 2012 - July 2015',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=340&h=340&fit=crop',
  },
  {
    name: '12th Grade: PCM',
    issuer: 'Arya Sen. Sec. School, Naraingarh',
    date: 'April 2011 - March 2012',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=340&h=340&fit=crop',
  },
  {
    name: '10th Grade',
    issuer: 'Arya Sen. Sec. School, Naraingarh',
    date: 'April 2009 - March 2010',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=340&h=340&fit=crop',
  },
]

export const socials: Social[] = [
  { name: 'GitHub', icon: 'Github', url: 'https://github.com/heyharpreetsingh' },
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/heyharpreetsingh' },
  { name: 'Email', icon: 'Mail', url: 'mailto:heyharpreetsingh@gmail.com' },
]

export const languages: Language[] = [
  { name: 'English' },
  { name: 'Hindi' },
  { name: 'Punjabi' },
]
