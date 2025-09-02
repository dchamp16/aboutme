// Define types for resume data
export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Course {
  code: string;
  name: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  courses?: Course[];
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  dates: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  repository: string;
  website?: string;
}

export interface Contact {
  phone: string;
  email: string[];
  github: string;
  linkedin: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  os: string[];
  cloudAndDevops: string[];
  systemAdminAndIt: string[];
  developmentTools: string[];
}

export interface ResumeData {
  contact: Contact;
  name: string;
  summary: string;
  skills: Skills;
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

export const resumeData = {
  contact: {
    phone: '(801) 906-1326',
    email: ['peterjustineramos@gmail.com'],
    github: 'https://github.com/dchamp16',
    linkedin: 'https://www.linkedin.com/in/peter-justine-ramos-2a40a4284',
  },
  name: 'Peter Justine Ramos',
  summary: 'Recent Computer Science graduate focusing on full-stack web development with experience in JavaScript, TypeScript, ReactJS, NodeJS, and cloud technologies. Demonstrated ability to develop scalable applications and optimize websites to improve performance using modern technologies. Through education, continued learning, and freelance web development experience, I built a strong foundation in full-stack development, cloud technology, and database design.',
  skills: {
    frontend: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'jQuery', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Bootstrap', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Server-side Rendering', 'Microservices Architecture'],
    database: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Snowflake', 'Database Optimization', 'NoSQL'],
    os: ['Windows', 'MacOS', 'Linux'],
    cloudAndDevops: ['AWS (Lambda, DynamoDB, S3)', 'Google Cloud Platform', 'Docker', 'CI/CD Pipelines'],
    systemAdminAndIt: ['Network Management', 'Active Directory', 'User Account Administration', 'Windows Server', 'System Security', 'Hardware Troubleshooting', 'Backup Systems', 'Technical Support', 'Help Desk Operations'],
    developmentTools: ['Git', 'Visual Studio Code', 'JetBrains IDEs', 'Lucidchart', 'Figma', 'Adobe XD', 'Sketch', 'Balsamiq']
  },
  education: [
    {
      institution: 'Western Governors University',
      degree: 'Master of Computer Science',
      dates: 'August 2025 - Present',
      location: 'Salt Lake, Utah',
      courses: [
        {
          code: 'AI/ML Focus',
          name: 'Artificial Intelligence and Machine Learning',
          highlights: [
            'Major: Artificial Intelligence and Machine Learning',
            'Focus Areas: Formal Language Theory, Programming Language Design, Algorithm Analysis'
          ]
        },
        {
          code: 'ML/DL',
          name: 'Machine Learning for Computer Scientists & Deep Learning',
          highlights: [
            'Deep learning architectures, neural networks, and machine learning algorithms'
          ]
        },
        {
          code: 'NLP',
          name: 'Natural Language Processing',
          highlights: [
            'Applications of language models and text analysis'
          ]
        },
        {
          code: 'AI Found',
          name: 'Artificial Intelligence Foundations',
          highlights: [
            'AI algorithms, reasoning systems, and intelligent agent design'
          ]
        },
        {
          code: 'Algorithms',
          name: 'Applied Algorithms and Reasoning',
          highlights: [
            'Algorithm analysis, computational complexity, and automated reasoning'
          ]
        },
        {
          code: 'Unix/Linux',
          name: 'Unix/Linux Systems',
          highlights: [
            'System administration, shell scripting, and server management'
          ]
        }
      ]
    },
    {
      institution: 'Utah Valley University',
      degree: 'Bachelor of Computer Science',
      dates: 'April 2022 - December 2024',
      location: 'Provo, Utah',
      courses: [
        {
          code: 'CS4900',
          name: 'Capstone Project - Environmental Monitoring System',
          highlights: [
            'Development of a campus-wide environmental monitoring system using Arduino sensors for real-time data collection',
            'Built a responsive Next.js dashboard with Tailwind CSS for data visualization and system management',
            'Implemented CI/CD pipeline for automated deployment and system updates'
          ]
        },
        {
          code: 'CS4880',
          name: 'Cloud Application Development',
          highlights: [
            'Developed a REST API and deployed it in AWS',
            'Created serverless architecture using Lambda functions, DynamoDB, and S3 storage',
            'Used Amazon Cognito(Authentication), AWS IAM(Managing User), AWS KMS(Hashing), SNS(Email notification for authentication flow)'
          ]
        },
        {
          code: 'CS4690',
          name: 'Distributed Systems',
          highlights: [
            'Built a secure database for authentication and authorization mechanisms'
          ]
        },
        {
          code: 'CS3530',
          name: 'Advanced Databases & NoSQL',
          highlights: [
            'Designed and implemented normalized relational databases and NoSQL solutions for specific use cases',
            'Worked extensively with MySQL, PostgreSQL, MongoDB, and Cassandra for various data storage needs'
          ]
        },
        {
          code: 'CS3520',
          name: 'Database Management Systems',
          highlights: [
            'Designed and implemented normalized relational databases and NoSQL solutions for specific use cases',
            'Worked extensively with MySQL, PostgreSQL, MongoDB, and Cassandra for various data storage needs'
          ]
        }
      ]
    },
    {
      institution: 'Salt Lake Community College',
      degree: 'Associate of Computer Science Information Systems',
      dates: 'January 2020 - April 2022',
      location: 'Salt Lake, Utah',
      courses: [
        {
          code: 'Core',
          name: 'Key Coursework',
          highlights: [
            'Data Structures & Algorithms, Computer Architecture, Object-Oriented Programming, Java Development'
          ]
        }
      ]
    }
  ],
  experience: [
    {
      company: 'Albany Composite',
      location: 'Salt Lake, Utah',
      position: 'Mechanical Technician II',
      dates: 'March 2024 - Present',
      responsibilities: [
        'Built high-precision helicopter components with 99.5% accuracy, ensuring compliance with strict quality standards',
        'Partnered with engineering teams to diagnose and fix complex assembly challenges, cutting production delays by 15%',
        'Applied quality control protocols and documentation practices, lowering defects by 10%'
      ]
    },
    {
      company: 'Arroyo Seco Baseball',
      location: 'California',
      position: 'Web Developer & IT intern',
      dates: 'December 2022 - May 2023',
      responsibilities: [
        'Used WordPress and custom JavaScript to speed up and improve the website\'s performance by 20% by optimizing code, compressing images, and caching',
        'Made more than five interactive features, like dynamic forms, real-time updates, and tools to get people involved to improve the user experience',
        'Oversaw IT infrastructure by managing user accounts, system administration, and technical support for over 15 employees',
        'To keep the system up 99% of the time, backup systems were set up, network security was improved, and hardware and software issues were fixed',
        'Collaborated with multidisciplinary groups to provide complete IT support and mobile-first, responsive solutions'
      ]
    }
  ],
  projects: [
    {
      name: 'Environmental Monitoring System for UVU',
      description: 'Using Arduino and MongoDB, a real-time environmental monitoring system for temperature, humidity, and air quality was constructed.',
      technologies: ['Arduino', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Express.js'],
      highlights: [
        'Integrated Tailwind CSS for responsive styling and designed a Next.js user interface for data visualization',
        'Middleware pipelines and render services were configured for smooth deployment'
      ],
      repository: 'https://github.com/dchamp16/CS4900_Capstone',
      website: 'https://arduino-environmental-monitoring-system.onrender.com/data'
    },
    {
      name: 'Python Simulate Ordering System / NoSQL Data Manipulation',
      description: 'A terminal-based ordering system with extensive CRUD functions for NoSQL data manipulation was developed.',
      technologies: ['Python', 'MongoDB'],
      highlights: [
        'I implemented data handling to optimize the database using Python and MongoDB',
        'Validation and hashing were implemented for security'
      ],
      repository: 'https://github.com/dchamp16/python-ordering-system'
    },
    {
      name: 'Enterprise Ordering System with Role-Based Access',
      description: 'Developed a thorough ordering system with audit logging and role-based access control (Admin, Super Admin).',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vite'],
      highlights: [
        'CRUD operations for orders, hardware inventory, user management, and bulk Excel uploads are supported by the RESTful API that was developed',
        'A modern React frontend with responsive design, real-time chat, and Hot Module Replacement was created using Vite',
        'Implemented a secure authentication system and data validation for enterprise-level reliability'
      ],
      repository: 'https://github.com/dchamp16/ordering-system',
      website: 'https://ordering-system-heto.vercel.app/'
    },
    {
      name: 'Multi-tenant School Management System',
      description: 'Comprehensive management system for UVU and UofU with role-based access control',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind CSS'],
      highlights: [
        'Implemented multi-tenant architecture supporting UVU and UofU institutions',
        'Built role-based access control for admins, teachers, TAs, and students',
        'Developed course management with assignment submission and grading',
        'Created dashboard analytics for student performance tracking',
        'Integrated real-time notifications for course updates and announcements'
      ],
      repository: 'https://github.com/dchamp16/CS4690-web-iii/tree/main/megaPracticum'
    },
    {
      name: 'BabelFish Translator',
      description: 'A multilingual communication app using HTTP APIs and Google Translation API for real-time text and speech translation.',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Google Translation API', 'Tailwind CSS', 'Vite', 'Docker', 'Vercel'],
      highlights: [
        'Built a RESTful API for real-time translation and multilingual chat',
        'Integrated Google Translation API with robust error handling',
        'Developed a responsive UI with React, TypeScript, and Tailwind CSS',
        'Added speech recognition and synthesis for hands-free interaction',
        'Deployed on Vercel with optimized builds via Docker',
        'Messages are stored in memory during runtime, resetting on restart'
      ],
      repository: 'https://github.com/dchamp16/translator',
      website: 'https://translator-phi-black.vercel.app/'
    },
    {
      name: 'Expense Tracker',
      description: 'A web-based expense tracker application that allows users to manage their expenses and income, providing a user-friendly interface for tracking financial transactions.',
      technologies: ['TypeScript', 'React.js', 'Tailwind CSS', 'C#', 'ASP.NET Core'],
      highlights: [
        '(✓)Implemented user authentication and authorization with ASP.NET Core',
        '(𐄂)Integrated RESTful APIs for data management and real-time updates',
        '(𐄂)Utilized C# for backend development, ensuring efficient data processing and storage',
        '(𐄂)Developed a responsive web application for tracking expenses and income using React.js and TypeScript',
        '(𐄂)Designed a user-friendly interface with Tailwind CSS for seamless navigation'
      ],
      repository: 'https://github.com/dchamp16/expenseTracker'
    }
  ]
};