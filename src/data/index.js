export const about = {
  name: "Kairus Noah E. Tecson",
  description:
    "Computer Science graduate from Batangas State University - TNEU, Philippines. Software Engineer and a ML/AI Engineer. Currently interested in Data science and, AI and Machine learning.",
  imageUrl: "./img/profile_img.jpg",
};

export const footer = {
  description: " © 2023 Kairus Noah E. Tecson",
};

export const navLinks = [
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Experience",
    url: "#work-experience",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Awards",
    url: "#awards",
  },
  {
    name: "Blogs",
    url: "#blogs",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const emailJSConfig = {
  serviceID: "service_ghsnk3j",
  templateID: "template_swzyujx",
  publicKey: "-q-JVAPb0cDJbPnCO",
  contactsPreviewText:
    "Currently open for work, commissions, internships, and other experiences.",
};

export const blenderModel = {
  modelPath: "./baker_and_the_bridge.glb",
  type: "glb",
};

export const threeJSConfig = {
  scale: "2",
  modelPosition: [0, -10, 0],
  rotationSpeed: 0.0003,
};

export const modelViewerConfig = {
  ambientLight: {
    intensity: 0,
    color: "blue",
  },
  directionalLight: {
    intensity: 0,
    color: "blue",
    position: [10, 10, 15],
  },
  camera: {
    position: [40, 15, 10],
  },
  exposure : -1.64
};

export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/kairus-tecson",
    imageUrl: "./img/socials_icon/fb.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kaitcson/",
    imageUrl: "./img/socials_icon/instagram.svg",
  },
  {
    name: "Github",
    url: "https://github.com/SchadenKai",
    imageUrl: "./img/socials_icon/github.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kairus-tecson/",
    imageUrl: "./img/socials_icon/linkedin.svg",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@noahkai",
    imageUrl: "./img/socials_icon/tiktok.svg",
  },
];

export const work_experience = [
  {
    company: "CoolRiots",
    logo: "./img/company_logo/coolriots_logo.jpg",
    position: "Software Engineer",
    location: "Remote - Singapore",
    startDate: "January 2025",
    endDate: "February 2025",
    description: [
        "Led architecture redesign for a generative UI system that dynamically renders interactive dashboards and data visualizations from natural language queries.",
        "Identified architectural issues in the existing approach and proposed a simplified direction - eliminated unnecessary database storage for UI components and removed SSR overhead in favor of client-side rendering",
        "Delivered working MVP within 2 months demonstrating a single-agent system that generates JSON-based UI definitions, proving feasibility without over-engineering",
        "Reduced system complexity from a proposed multi-agent architecture to a streamlined single-agent design integrated with existing microservices",
        "Created comprehensive system design documentation and implementation handover materials",
        "Presented architecture to engineering team across multiple countries; proposal was endorsed by leadership and adopted as the project's technical direction and roadmap"
    ],
    tech_stack: [
      {
        name: "FastAPI",
        imageUrl: "./img/icons/fastapi.svg",
      },
      {
        name: "SQLAlchemy",
        imageUrl: "./img/icons/sqlalchemy.png",
      },
      {
        name: "PostgreSQL",
        imageUrl: "./img/icons/postgres.svg",
      },
      {
        name: "OpenAI",
        imageUrl: "./img/icons/openai.webp",
      },
      {
        name: "ReactJS",
        imageUrl: "./img/icons/react.svg",
      },
      {
        name: "PydanticAI",
        imageUrl: "./img/icons/pydanticai.png",
      }
    ]
  },
  {
    company: "ArnoldAI",
    logo: "./img/company_logo/arnold_ai_logo.jpg",
    position: "Head of Engineering",
    location: "Remote - Vienna, Austria",
    startDate: "January 2024",
    endDate: "Present",
    description: [
        "Leading engineering for an AI platform providing chatbot agents, agent builder, and RAG systems for highly regulated industries.",
        "Pioneer engineer who helped transform an open-source project into a proprietary platform targeting regulated markets, shipping MVP and driving post-MVP improvements for scale and stability",
        "Managing a team of 8 (6 developers, 1 QA, 1 EA), overseeing all development while establishing Scrumban workflows, coding guidelines, Git branching strategies, and documentation standards for traceability and compliance",
        "Architected cloud infrastructure for horizontal scaling - decoupled services across VMs with private network communication, increasing concurrent user capacity by 3-4x",
        "Designed and shipped major platform features: market intelligence assistant with ReAct agentic flow, multi-workspace tenancy, multi-teamspace collaboration, agent memory layer, code interpreter tool, feature flag system, and security audit logs",
        "Led migration from legacy LLM infrastructure to LangChain, introduced LangGraph for complex workflows and multi-agent architecture",
        "Created system design artifacts (data flows, ERDs, information architecture, lo-fi designs) for features including assistant management, workspace management, and security logging",
        "Reduced Docker build times by implementing BuildKit caching and migrating from pip to uv for dependency management",
        "Established user feedback systems to capture insights from enterprise customers"
    ],
    tech_stack: [
      {
        name: "NextJS",
        imageUrl: "./img/icons/nextjs.svg",
      },
      {
        name: "ReactJS",
        imageUrl: "./img/icons/react.svg",
      },
      {
        name: "FastAPI",
        imageUrl: "./img/icons/fastapi.svg",
      },
      {
        name: "SQLAlchemy",
        imageUrl: "./img/icons/sqlalchemy.png",
      },
      {
        name: "PostgreSQL",
        imageUrl: "./img/icons/postgres.svg",
      },
      {
        name: "Docker",
        imageUrl: "./img/icons/docker.svg",
      },
      {
        name: "AWS",
        imageUrl: "./img/icons/aws-logo.png",
      },
      {
        name: "Azure",
        imageUrl: "./img/icons/azure.svg",
      },
      {
        name: "Github",
        imageUrl: "./img/icons/github.png",
      },
      {
        name: "Git",
        imageUrl: "./img/icons/git.svg",
      },
      {
        name: "Github Actions",
        imageUrl: "./img/icons/github_actions.png",
      },
      {
        name: "Linux",
        imageUrl: "./img/icons/linux.svg",
      },
      {
        name: "Beautiful Soup",
        imageUrl: "./img/icons/beautifulsoup.webp",
      },
      {
        name: "OpenAI",
        imageUrl: "./img/icons/openai.webp",
      },
      {
        name: "Pandas",
        imageUrl: "./img/icons/pandas.svg",
      },
      {
        name: "Stripe",
        imageUrl: "./img/icons/stripe.svg",
      },
      {
        name: "Supabase",
        imageUrl: "./img/icons/supabase.svg",
      },
      {
        name: "Wordpress",
        imageUrl: "./img/icons/wordpress.svg",
      },
      {
        name: "Schadcn UI",
        imageUrl: "./img/icons/schadcn-ui.png",
      },
      {
        name: "Nginx",
        imageUrl: "./img/icons/nginx.svg",
      },
      {
        name: "Figma",
        imageUrl: "./img/icons/figma.svg",
      },
      {
        name: "PydanticAI",
        imageUrl: "./img/icons/pydanticai.png",
      },
      {
        name: "Langchain",
        imageUrl: "./img/icons/langchain.png",
      },
      {
        name: "LiteLLM",
        imageUrl: "./img/icons/litellm.png",
      },
      {
        name: "Traefik",
        imageUrl: "./img/icons/traefik.webp",
      },
      {
        name: "Expo",
        imageUrl: "./img/icons/expo.webp",
      },
      {
        name: "Hetzner",
        imageUrl: "./img/icons/hetzner.png",
      },
    ]
  }
]

export const skills = {
  frontend_web: [
    {
      name: "HTML",
      imageUrl: "./img/icons/html.svg",
      status: "learned",
    },
    {
      name: "CSS",
      imageUrl: "./img/icons/css.svg",
      status: "learned",
    },
    {
      name: "ReactJS",
      imageUrl: "./img/icons/react.svg",
      status: "learned",
    },
    {
      name: "ThreeJS",
      imageUrl: "./img/icons/threejs.png",
      status: "learned",
    },
    {
      name: "Bootstrap",
      imageUrl: "./img/icons/bootstrap.svg",
      status: "learned",
    },
    {
      name: "TailwindCSS",
      imageUrl: "./img/icons/tailwindcss.svg",
      status: "learned",
    },
    {
      name: "Sass",
      imageUrl: "./img/icons/sass.svg",
      status: "learned",
    },
    {
      name: "Jquery",
      imageUrl: "./img/icons/jquery.svg",
      status: "learned",
    },
    {
      name: "NextJS",
      imageUrl: "./img/icons/nextjs.svg",
      status: "learned",
    },
    {
      name: "Schadcn UI",
      imageUrl: "./img/icons/schadcn-ui.png",
      status: "learned",
    },
  ],
  backend: [
    {
      name: "ExpressJS",
      imageUrl: "./img/icons/express.png",
      status: "learned",
    },
    {
      name: "NodeJS",
      imageUrl: "./img/icons/node_js.svg",
      status: "learned",
    },
    {
      name: "FastAPI",
      imageUrl: "./img/icons/fastapi.svg",
      status: "learned",
    },
    {
      name: "SQLAlchemy",
      imageUrl: "./img/icons/sqlalchemy.png"
    },
    {
      name: "Nginx",
      imageUrl: "./img/icons/nginx.svg",
      status: "learned",
    },
    {
      name: "Traefik",
      imageUrl: "./img/icons/traefik.webp",
      status: "learned",
    },
  ],
  database: [
    {
      name: "Firebase Firestore",
      imageUrl: "./img/icons/firestore.svg",
      status: "learned",
    },
    {
      name: "PostgreSQL",
      imageUrl: "./img/icons/postgres.svg",
      status: "learned",
    },
    {
      name: "Supabase",
      imageUrl: "./img/icons/supabase.svg",
      status: "learned",
    },
  ],
  mobile: [
    {
      name: "Ionic (React)",
      imageUrl: "./img/icons/ionic.svg",
      status: "learned",
    },
    {
      name: "React Native",
      imageUrl: "./img/icons/react-native.png",
      status: "learned",
    },
    {
      name: "Expo",
      imageUrl: "./img/icons/expo.webp",
      status: "learned",
    },
  ],
  dev_ops: [
    {
      name: "Git",
      imageUrl: "./img/icons/git.svg",
      status: "learned",
    },
    {
      name: "Github",
      imageUrl: "./img/icons/github.png",
      status: "learned",
    },
    {
      name: "Github Actions",
      imageUrl: "./img/icons/github_actions.png",
    },
    {
      name: "Docker",
      imageUrl: "./img/icons/docker.svg",
      status: "learned",
    },
    {
      name: "Linux",
      imageUrl: "./img/icons/linux.svg",
      status: "learned",
    },
  ],
  languages: [
    {
      name: "Javascript",
      imageUrl: "./img/icons/javascript.svg",
      status: "learned",
    },
    {
      name: "Typescript",
      imageUrl: "./img/icons/typescript.svg",
      status: "learned",
    },
    {
      name: "Python",
      imageUrl: "./img/icons/python.svg",
      status: "learned",
    },
    {
      name: "PHP",
      imageUrl: "./img/icons/php.svg",
      status: "learned",
    },
  ],
  cloud: [
    {
      name: "Firebase",
      imageUrl: "./img/icons/firebase.svg",
      status: "learned",
    },
    {
      name: "Google Cloud",
      imageUrl: "./img/icons/google-cloud.svg",
      status: "learned",
    },
    {
      name: "AWS",
      imageUrl: "./img/icons/aws-logo.png",
      status: "learned",
    },
    {
      name: "Azure",
      imageUrl: "./img/icons/azure.svg",
      status: "learned",
    },
    {
      name: "Hetzner",
      imageUrl: "./img/icons/hetzner.png",
      status: "learned",
    },
  ],
  tools: [
    {
      name: "Figma",
      imageUrl: "./img/icons/figma.svg",
      status: "learned",
    },
    {
      name: "Blender",
      imageUrl: "./img/icons/blender.svg",
      status: "learned",
    },
    {
      name: "Power BI",
      imageUrl: "./img/icons/power-bi.svg",
      status: "learned",
    },
    {
      name: "Wordpress",
      imageUrl : "./img/icons/wordpress.svg",
      status: "learned"
    },
    {
      name: "Stripe",
      imageUrl : "./img/icons/stripe.svg",
      status: "learned"
    },
  ],
  ml_ai: [
    {
      name: "Langchain",
      imageUrl: "./img/icons/langchain.png",
      status: "learned",
    },
    {
      name: "Langgraph",
      imageUrl: "./img/icons/langgraph.png",
      status: "learned",
    },
    {
      name: "PydanticAI",
      imageUrl: "./img/icons/pydanticai.png",
      status: "learned",
    },
    {
      name: "LiteLLM",
      imageUrl: "./img/icons/litellm.png",
      status: "learned",
    },
    {
      name: "OpenAI",
      imageUrl: "./img/icons/openai.webp",
      status: "learned",
    },
    {
      name: "Pandas",
      imageUrl: "./img/icons/pandas.svg",
      status: "learned",
    },
    {
      name: "Numpy",
      imageUrl: "./img/icons/numpy.svg",
      status: "learned",
    },
    {
      name: "Matplotlib",
      imageUrl: "./img/icons/matplotlib.png",
      status: "learned",
    },
    {
      name: "Scikit Learn",
      imageUrl: "./img/icons/scikit-learn.png",
      status: "learned",
    },
    {
      name: "Pytorch",
      imageUrl: "./img/icons/pytorch.svg",
      status: "learned",
    },
  ],
};

export const awards = [
  {
    name: "Seminar: Beyond the Hype - The Real World of Generative AI and Language Models",
    issuer: "Batangas State University - The National Engineering University",
    location: "Batangas State University - Alangilan Campus",
    description:
      "The main objective is to introduce Generative AI and Language Models to Compputer Engineering students. This includes definition of what Generative AI and Language Models, technical overview of how it works, its history, technical concepts, and its real-world applications. The seminar also includes live coding session on how to use different capabilities of Language models through Langchain, from basic calling of LLM's to Agents.",
    date: "2025",
    imageUrl: [
      "./img/awards/seminar_1.jpg",
      "./img/awards/seminar_2.jpg",
    ],
  },
  {
    name: "iSITE x StackLeague Programming Competition Champion",
    issuer: "StackLeague",
    location: "Lyceum of the Philippines - Laguna",
    description:
      "The competition focuses on problem solving in data structures and algorithms in which I competed with PHP as my programming language. The competition taught me a lot mostly throughout the training period wherein our college has supported on.",
    date: "2023",
    imageUrl: [
      "./img/awards/stackleague-competition.jpg",
      "./img/awards/stackleague-competition-2.jpg",
    ],
  },
  {
    name: "iSITE National Programming Competition Participant",
    issuer: "iSITE",
    location: "Virtual",
    description:
      "The competition focuses on problem solving in data stuctures and algorithm in which I competed for the C++ category.",
    date: "2023",
    imageUrl: [
      "./img/awards/isite-nationals.jpg",
      "./img/awards/isite-nationals-1.jpg",
    ],
  },
  {
    name: "Hackada : Kadakareer x Help Bridge Business Challenge Hackathon - Fourth Place",
    issuer: "Kadakareer",
    location: "Virtual",
    description:
      "The hackathon revolves around offering a business solution for the target company, Help Bridge, on the its current situation. The hackathon enhanced my skills in UI/UX designing and prototyping which has been proposed and pitched by us.",
    date: "2023",
    imageUrl: ["./img/awards/kadakareer.jpg", "./img/awards/kadakareer-1.jpg"],
  },
  {
    name: "Hackada : Kadakareer x Home Credit Business Challenge Hackathon Participant",
    issuer: "Kadakareer",
    location: "Virtual",
    description:
      "Creating a product positioning for Home Credit's new mobile application. This involved learning marketing strategies and solution, and creating a marketing plan.",
    date: "2023",
    imageUrl: ["./img/awards/homeCreditHackadaCertificate.png"],
  },
  {
    name: "International Symposium on Education and AI Convergence (ISEAC) Hackathon 2023 - Third Place",
    issuer: "University of the Philippines Open University",
    location: "UPOU- Los Banos, Laguna",
    description:
      "The Hackathon revolves around creating a AI solution for an innovation on effective online proctoring system. This progressed my knowledge in Artificial Intelligence and Hackathons in general.",
    date: "2023",
    imageUrl: [
      "./img/awards/ISEACHackathon1.jpg",
      "./img/awards/ISEACHackathon2.jpg",
    ],
  },
  {
    name: "ASCENT'24 - The Annual Student Conference for Engineering and Technology",
    issuer: "Batangas State University - The National Engineering University",
    location: "Batangas State University Alangilan campus - STEER Hub Building",
    description:
      "The conference involves presentation of thesis that excels amongst their respective colleges, especially studies that involves targetting SDG's / Sustainable Development Goals.",
    date: "2024",
    imageUrl: [
      "./img/awards/ascent-24.jpg"
    ],
  }
];

export const projects = [
  {
    name: "Chatman",
    location: "Personal Learning Project",
    description:
      "AI-powered chatbot agent that can perform tasks similar to state of the art AI chatbot agents. Built using latest conventional way of building AI solutions, from AG-UI to MCP servers. This project is still ongoing and is primarily for learning purposes for exploring different Applied AI Solutions revolviing around chat agents such as RAG Systems, Agentic Workflows, Protocols, and more.",
    position: "Fullstack Developer; Applied AI Engineer",
    year: "2025",
    imageUrl: [
      "./img/projects/chat_man_1.png",
      "./img/projects/chat_man_2.png",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SchadenKai/chat-man",
        imageUrl: "./img/socials_icon/github.png",
        sideNote: "Github",
      },
    ],
    tech_stack: [
      {
        name: "FastAPI",
        imageUrl: "./img/icons/fastapi.svg",
      },
      {
        name: "Langchain",
        imageUrl: "./img/icons/langchain.png",
      },
      {
        name: "Langgraph",
        imageUrl: "./img/icons/langgraph.png",
      },
      {
        name: "ReactJS",
        imageUrl: "./img/icons/react.svg",
      },
    ],
  },
  {
    name: "Dynamic UI (Proof of Concept)",
    location: "Project Proposal - CoolRiots",
    description:
      "A proof of concept project, currently under development, that aims to create a web app that can dynamically change its UI based on the user's preference. The project is built using FastAPI, OpenAI (moving to Langchain in the future) and NextJS - ReactJS - Typescript. The project is solely conceptualized and developed by me.",
    position: "Fullstack Developer; Applied AI Engineer",
    year: "2025",
    imageUrl: [
      "./img/projects/dynamic-ui-1.gif",
      "./img/projects/dynamic-ui-2.gif",
    ],
    links: [
      {
        name: "Github - API Server",
        url: "https://github.com/SchadenKai/dynamic-ui",
        imageUrl: "./img/socials_icon/github.png",
        sideNote: "Github",
      },
    ],
    tech_stack: [
      {
        name: "FastAPI",
        imageUrl: "./img/icons/fastapi.svg",
      },
      {
        name: "SQLAlchemy",
        imageUrl: "./img/icons/sqlalchemy.png",
      },
      {
        name: "PostgreSQL",
        imageUrl: "./img/icons/postgres.svg",
      },
      {
        name: "OpenAI",
        imageUrl: "./img/icons/openai.webp",
      },
      {
        name: "NextJS",
        imageUrl: "./img/icons/nextjs.svg",
      }
    ],
  },
  {
    name: "Credit Management System API",
    location: "Commission / Company's Startup Partner Company - Patentopia",
    description:
      "Backend API which is used to handle user credit balance and handle payments through Stripe python package as a payment infrastructure. It is built on event-driven architecture and deployed in Azure functions with Azure SQL database. Implemented secured routes through cookies and middlewares.",
    position: "Backend developer",
    year: "2024",
    imageUrl: [
      "./img/projects/credit-management-system-1.png",
      "./img/projects/credit-management-system-2.png",
    ],
    links: [
    ],
    tech_stack: [
      {
        name: "FastAPI",
        imageUrl: "./img/icons/fastapi.svg",
      },
      {
        name: "SQLAlchemy",
        imageUrl: "./img/icons/sqlalchemy.png",
      },
      {
        name: "Azure",
        imageUrl: "./img/icons/azure.svg",
      },
      {
        name: "Stripe",
        imageUrl: "./img/icons/stripe.svg",
      },
    ],
  },
  {
    name: "E-commerce Management System",
    location: "Commission - College Capstone Project",
    description:
      "A project that features both admin and client side functionality. It is integrated with different features needed in managing an ecommerce. Worked as the backend developer and the partial frontend develop of the project. I am responsible for setting up the backend infrastructure, database, deployment, and connecting the frontend to the backend.",
    position: "Backend developer",
    year: "2024",
    imageUrl: [
      "./img/projects/bnb-1.png",
      "./img/projects/bnb-2.png",
      "./img/projects/bnb-3.png"
    ],
    links: [
      {
        name: "Website",
        url: "https://bath-and-bark.vercel.app/",
        imageUrl: "./img/icons/web-icon.png",
        sideNote: "Web App",
      },
      {
        name: "Github - API Server",
        url: "https://github.com/SchadenKai/ems_api",
        imageUrl: "./img/socials_icon/github.png",
        sideNote: "Github",
      },
    ],
    tech_stack: [
      {
        name: "ReactJS",
        imageUrl: "./img/icons/react.svg",
      },
      {
        name: "Supabase",
        imageUrl: "./img/icons/supabase.svg",
      },
      {
        name: "FastAPI",
        imageUrl: "./img/icons/fastapi.svg",
      },
      {
        name: "SQLAlchemy",
        imageUrl: "./img/icons/sqlalchemy.png",
      },
      {
        name: "PostgreSQL",
        imageUrl: "./img/icons/postgres.svg",
      },
      {
        name: "Vercel",
        imageUrl: "./img/icons/vercel.png",
      }
    ],
  },
  {
    name: "Artemis : Smart Waste Management System",
    location: "College Project w/ Client - Environmental Management Unit - Batangas State University",
    description:
      "Worked as the lead developer and project leader for the Artemis project. Been part of working on the frontend using ReactJS: used different react hooks, state management, data visualization, fetch API, and more. Also worked on the backend using ExpressJS: used different middlewares, MVC pattern, RESTful API, and more. Used Firebase to deploy the backend, as a serverless function, and the frontend. Also used Firebase Firestore as the database.",
    position: "Project Leader / Lead Fullstack Developer",
    year: "2023",
    imageUrl: [
      "./img/projects/artemis_preview.png",
      "./img/projects/artemis-mobile-preview.png",
      "./img/projects/artemis-3.png",
      "./img/projects/artemis-4.png"

    ],
    links: [
      {
        name: "Website",
        url: "https://artemis-b18ae.web.app",
        imageUrl: "./img/icons/web-icon.png",
        sideNote: "Web App",
      },
      {
        name: "Github",
        url: "https://github.com/SchadenKai/ArteMIS-Waste-Management-System",
        imageUrl: "./img/socials_icon/github.png",
        sideNote: "Github",
      },
    ],
    tech_stack: [
      {
        name: "ReactJS",
        imageUrl: "./img/icons/react.svg",
      },
      {
        name: "ExpressJS",
        imageUrl: "./img/icons/express.png",
      },
      {
        name: "Firebase",
        imageUrl: "./img/icons/firebase.svg",
      },
      {
        name: "NodeJS",
        imageUrl: "./img/icons/node_js.svg",
      },
      {
        name: "Bootstrap",
        imageUrl: "./img/icons/bootstrap.svg",
      },
      {
        name: "Typescript",
        imageUrl: "./img/icons/typescript.svg",
      },
    ],
  },
  {
    name: "I-Track : Student Progress Tracking System",
    location: "College Project",
    description:
      "Worked as the lead developer and project leader. mostly worked in the frontend where I used pure HTML, CSS and Bootstrap for the design, PHP for calling the API. I also used Javascript and Jquery for the dynamic behavior of the website. Also worked on the mobile app using Ionic framework.",
    position: "Project Leader / Lead Frontend Developer",
    year: "2023",
    imageUrl: [
      "./img/projects/i-track-preview.png",
      "./img/projects/i-track-mobile-preview.png",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SchadenKai/I-Track-Web",
        imageUrl: "./img/socials_icon/github.png",
        sideNote: "Frontend",
      },
      {
        name: "Github",
        url: "https://github.com/SchadenKai/I-Track-Mobile",
        imageUrl: "./img/socials_icon/github.png",
        sideNote: "Mobile",
      },
    ],
    tech_stack: [
      {
        name: "PHP",
        imageUrl: "./img/icons/php.svg",
      },
      {
        name: "HTML",
        imageUrl: "./img/icons/html.svg",
      },
      {
        name: "CSS",
        imageUrl: "./img/icons/css.svg",
      },
      {
        name: "PostgreSQL",
        imageUrl: "./img/icons/postgres.svg",
      },
      {
        name: "Bootstrap",
        imageUrl: "./img/icons/bootstrap.svg",
      },
      {
        name: "Typescript",
        imageUrl: "./img/icons/javascript.svg",
      },
      {
        name: "Ionic",
        imageUrl: "./img/icons/ionic.svg",
      },
    ],
  }
];
