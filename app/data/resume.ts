export const resumeData = {
  contact: {
    phone: '(801) 906-1326',
    email: ['peterjustineramos@gmail.com'],
    github: 'https://github.com/dchamp16',
    linkedin: 'https://www.linkedin.com/in/peter-justine-ramos-2a40a4284',
  },
  name: 'Peter Justine Ramos',
  summary: 'Full Stack Developer with hands-on experience in JavaScript, TypeScript, React, NodeJS, and modern web technologies. Skilled in creating user-friendly applications and implementing cloud using AWS and Google Console. Passionate about developing high-quality software through collaboration and building projects.',
  skills: {
    frontend: ['JavaScript', 'TypeScript', 'Vue.js', 'React.js', 'Next.js', 'Tailwind', 'CSS', 'Sass', 'Bootstrap', 'jQuery'],
    backend: ['Node.js', 'Express.js', 'REST APIs'],
    databases: ['SQL', 'MongoDB', 'PostgreSQL', 'Snowflake'],
    cloud: ['AWS', 'Google Console', 'Docker'],
    tools: ['Git', 'Visual Studio Code', 'IntelliJ IDEA', 'Lucidchart'],
    prototyping: ['Figma', 'Adobe XD', 'Sketch', 'Balsamiq'],
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
          code: 'CS4900',
          name: 'Capstone Project — Environmental Monitoring System',
          highlights: [
            'Deployed Arduino units across campus for real-time environmental data collection',
            'Developed a responsive UI with Next.js and Tailwind CSS and implemented a CI/CD workflow'
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
          code: 'CS3530',
          name: 'Advanced Databases and NoSQL',
          highlights: [
            'Designed databases with MySQL, PostgreSQL, and NoSQL solutions using MongoDB and Cassandra'
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
          code: 'CS3410',
          name: 'Human Factors in Software Development',
          highlights: [
            'Designed and evaluated user interfaces with tools like Figma, Balsamiq, and Photoshop',
            'Conducted contextual inquiries and developed wireframes for user-centered design solutions'
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
          code: 'CSIS 2810',
          name: 'Computer Architecture',
          highlights: [
            'Examined the interaction between hardware and software, including logic gates, processors, and memory hierarchies',
            'Built a deeper understanding of computer architecture and parallel processing',
            'Collaborated on team projects analyzing processor performance and optimization techniques'
          ]
        },
        {
          code: 'CSIS 2420',
          name: 'Algorithms & Data Structures',
          highlights: [
            'Focused on designing and analyzing efficient algorithms and implementing data structures like stacks, queues, linked lists, trees, and graphs',
            'Evaluated algorithm performance and selected appropriate data structures for problem-solving',
            'Developed skills in Java generics, recursion, and Big-O complexity analysis'
          ]
        },
        {
          code: 'CSIS 1400',
          name: 'Fundamentals of Programming',
          highlights: [
            'Learned foundational programming concepts, including primitive data types, control structures, and object-oriented programming with Java',
            'Designed and implemented simple Java programs using IDEs and UML diagrams',
            'Developed skills in problem-solving, debugging, and method creation for software design'
          ]
        }
      ]
    }

  ],
  experience: [
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
    },
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
      name: 'BabelFish Translator',
      description: 'A multilingual communication app using HTTP APIs and Google Translation API for real-time text and speech translation.',
      technologies: [
        'React.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Google Translation API',
        'Tailwind CSS',
        'Vite',
        'Docker',
        'Vercel'
      ],
      highlights: [
        'Built a RESTful API for real-time translation and multilingual chat.',
        'Integrated Google Translation API with robust error handling.',
        'Developed a responsive UI with React, TypeScript, and Tailwind CSS.',
        'Added speech recognition and synthesis for hands-free interaction.',
        'Deployed on Vercel with optimized builds via Docker.',
        'Messages are stored in memory during runtime, resetting on restart.'
      ],
      repository: 'https://github.com/dchamp16/translator',
      website: 'https://translator-phi-black.vercel.app/'
    },
    {
      name: 'Ordering System',
      description: 'A comprehensive ordering and user management system designed to streamline employee order tracking and admin user management, featuring role-based access control and RESTful APIs.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JavaScript',
        'Reactjs',
        'bcrypt.js',
        'Express-Session',
        'Joi',
        'JWT',
        'dotenv',
        'Postman'
      ],
      highlights: [
        'Implemented order management for employees, allowing them to track orders via empId without requiring login.',
        'Developed admin user management system with Super Admin and Admin roles, including role-based permissions.',
        'Built RESTful APIs for orders and user management with robust error handling and validation.',
        'Designed session-based authentication and middleware for secure access control.',
        'Created an intuitive workflow for adding, updating, and deleting orders and users.',
        'Integrated MongoDB for data persistence, with Mongoose for schema modeling.',
        'Implemented top-tier admin and lower-tier admin that have 2 different permissions.',
        'Current status: Work in progress; when ordered deducted - current stock, then return deducted + current stock but when initially 0 or NULL no deduction or addition.'
      ],
      repository: 'https://github.com/dchamp16/ordering-system',
      website: 'https://ordering-system-heto.vercel.app/'
    },
    {
      name: 'Expense Tracker',
      description: 'A web-based expense tracker application that allows users to manage their expenses and income, providing a user-friendly interface for tracking financial transactions.',
      technologies: ['TypeScript', 'React.js', 'Tailwind', 'C#', 'ASP.NET Core'],
      highlights: [
        '(✓)Implemented user authentication and authorization with ASP.NET Core.',
        '(𐄂)Integrated RESTful APIs for data management and real-time updates.',
        '(𐄂)Utilized C# for backend development, ensuring efficient data processing and storage.',
        '(𐄂)Developed a responsive web application for tracking expenses and income using React.js and TypeScript.',
        '(𐄂)Designed a user-friendly interface with Tailwind CSS for seamless navigation.',

      ],
      repository: 'https://github.com/dchamp16/expenseTracker'
    },
  ]
};