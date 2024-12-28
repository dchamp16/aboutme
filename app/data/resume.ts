export const resumeData = {
  contact: {
    phone: '(801) 906-1326',
    email: ['dchamp16@gmail.com'],
    github: 'https://github.com/dchamp16',
    linkedin: 'https://www.linkedin.com/in/peter-justine-ramos-2a40a4284',
  },
  name: 'Peter Justine Ramos',
  summary: 'Full Stack Developer with hands-on experience in JavaScript, TypeScript, React, NodeJS, and modern web technologies. Skilled in creating user-friendly applications and implementing cloud using AWS and Google Console. Passionate about developing high-quality software through collaboration and building projects.',
  skills: {
    frontend: ['JavaScript', 'TypeScript', 'ReactJS', 'Next.js', 'Tailwind', 'Sass', 'Bootstrap', 'jQuery'],
    backend: ['NodeJS', 'ExpressJS', 'REST APIs', 'SQL', 'NoSQL'],
    cloud: ['AWS', 'Docker', 'Google Console'],
    tools: ['Git', 'MongoDB', 'MySQL'],
    softSkills: ['Agile methodologies', 'Team collaboration', 'Problem-solving'],
    other: ['C', 'C++', 'Python']
  },
  education: [
    {
      institution: 'Utah Valley University',
      degree: 'Bachelor of Computer Science, Full Stack Web Development',
      dates: 'May 2022 – December 2024',
      location: 'Provo, Utah',
      courses: [
        {
          code: 'CS3410',
          name: 'Human Factors in Software Development',
          highlights: [
            'Designed and evaluated user interfaces with tools like Balsamiq and Photoshop',
            'Contextual inquiries and developed wireframes for user-centered design solutions'
          ]
        },
        {
          code: 'CS4880',
          name: 'Cloud Application Development',
          highlights: [
            'Developed REST APIs and deployed solutions on AWS using Lambda, DynamoDB, and S3'
          ]
        },
        {
          code: 'CS4690',
          name: 'Distributed Systems',
          highlights: [
            'Built secure distributed systems with effective authentication and authorization'
          ]
        },
        {
          code: 'CS3520',
          name: 'Database Management Systems',
          highlights: [
            'Designed and implemented normalized relational databases using MySQL and Python'
          ]
        },
        {
          code: 'CS3530',
          name: 'Advanced Databases and NoSQL',
          highlights: [
            'Designed and implemented databases tailored to specific use cases, utilizing MySQL, Postgres, MongoDB, and Cassandra'
          ]
        },
        {
          code: 'CS4900',
          name: 'Capstone Project — Environmental Monitoring System',
          highlights: [
            'Deployed Arduino units across campus for real-time environmental data collection',
            'Developed a responsive UI with Next.js and Tailwind CSS and implemented a CI/CD workflow'
          ]
        }
      ]
    },
    {
      institution: 'Salt Lake Community College',
      degree: 'Associate in Computer Science Information Systems',
      dates: 'January 2020 – December 2022',
      location: 'Salt Lake, Utah',
      courses: [
        {
          code: 'CSIS 1400',
          name: 'Fundamentals of Programming',
          highlights: [
            'Learned foundational programming concepts with Java',
            'Designed and implemented programs using IDEs and UML diagrams',
            'Developed skills in problem-solving, debugging, and method creation'
          ]
        },
        {
          code: 'CSIS 2420',
          name: 'Algorithms & Data Structures',
          highlights: [
            'Focused on designing and analyzing efficient algorithms',
            'Evaluated algorithm performance and data structures',
            'Developed skills in Java generics, recursion, and Big-O analysis'
          ]
        },
        {
          code: 'CSIS 2810',
          name: 'Computer Architecture',
          highlights: [
            'Examined hardware-software interaction and computer architecture',
            'Built understanding of parallel processing',
            'Collaborated on processor performance optimization projects'
          ]
        }
      ]
    }
  ],
  experience: [
    {
      company: 'Albany Composite',
      location: 'Salt Lake, Utah',
      position: 'Mechanical Assembler I',
      dates: 'March 2024 - Present',
      responsibilities: [
        'Assembled helicopter components with a focus on precision and safety',
        'Collaborated with engineering teams to identify and resolve assembly issues',
        'Implemented quality control measures, reducing defects by 10%'
      ]
    },
    {
      company: 'Backcountry Corporation',
      location: 'West Valley, Utah',
      position: 'Merchant II',
      dates: 'October 2018 - March 2024',
      responsibilities: [
        'Managed inventory and improved operational efficiency through team training',
        'Operated forklifts and ensured safe handling of heavy materials'
      ]
    },
    {
      company: 'Arroyo Seco Baseball',
      location: 'California',
      position: 'Web Developer',
      dates: 'December 2022 - May 2023',
      responsibilities: [
        'Improved website performance and reduced load times by 20% using WordPress',
        'Developed interactive features to enhance user experience',
        'Collaborated with cross-functional teams'
      ]
    }
  ],
  projects: [
    {
      name: 'Environmental Monitoring System',
      description: 'Real-time environmental monitoring system for UVU campus using Arduino and MongoDB. The system collected environmental data through Arduino sensors and exposed it via a REST API deployed on Render (Note: Arduino data collection ended with course completion).',
      technologies: ['Arduino', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Express.js'],
      highlights: [
        'Built real-time Arduino monitoring for air quality, temperature, and humidity',
        'Designed responsive UI for data visualization',
        'Deployed REST API on Render (https://arduino-environmental-monitoring-system.onrender.com/data)',
        'Configured Render services and Middleware pipelines',
        'Implemented Arduino sensors for data collection (active during course duration)'
      ],
      repository: 'https://github.com/dchamp16/CS4900_Capstone'
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
      name: 'Directory Reader',
      description: 'Node.js application for recursive directory content extraction',
      technologies: ['Node.js', 'TypeScript'],
      highlights: [
        'Developed directory tree structure visualization',
        'Implemented file content extraction and compression'
      ],
      repository: 'https://github.com/dchamp16/directoryReader'
    },
    {
      name: 'Python Ordering System',
      description: 'Terminal-based ordering system with NoSQL data manipulation',
      technologies: ['Python', 'MongoDB', 'Mongoose'],
      highlights: [
        'Implemented CRUD operations for data management',
        'Built efficient data handling system'
      ],
      repository: 'https://github.com/dchamp16/python-ordering-system'
    },
    {
      name: 'UVSim Basic Machine Language Simulator',
      description: 'A simulator designed to teach students machine language and computer architecture by executing programs written in Basic Machine Language (BasicML).',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Developed a web-based simulator for executing BasicML programs.',
        'Implemented features to edit, save, and handle memory overflow.',
        'Integrated error handling for invalid instructions, file not found, and division by zero.',
        'Supported dynamic memory size configuration and interactive editing of loaded programs.',
        'Enabled step-by-step execution with real-time updates on memory and registers.'
      ],
      repository: 'https://github.com/dchamp16/group-a-cs2450'
    },
    {
      "name": "BabelFish Translator",
      "description": "A multilingual communication app using HTTP APIs and Google Translation API for real-time text and speech translation.",
      "technologies": [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Google Translation API",
        "Tailwind CSS",
        "Vite",
        "Docker",
        "Vercel"
      ],
      "highlights": [
        "Built a RESTful API for real-time translation and multilingual chat.",
        "Integrated Google Translation API with robust error handling.",
        "Developed a responsive UI with React, TypeScript, and Tailwind CSS.",
        "Added speech recognition and synthesis for hands-free interaction.",
        "Deployed on Vercel with optimized builds via Docker.",
        "Messages are stored in memory during runtime, resetting on restart."
      ],
      "repository": "https://github.com/dchamp16/translator",
      "website": "https://translator-phi-black.vercel.app/"
    }

  ]
};