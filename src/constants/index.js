export const about = {
    name: "Kairus Noah E. Tecson",
    description : "I am a full-stack developer and currently a third year Computer Science student in Batangas State University 🏫.",
    imageUrl: "./img/profile_img.jpg",
}

export const navLinks = [
    {
        name : "Tech Stack",
        url : "#tech_stack"
    }, 
    {
        name : "Projects",
        url : "#projects"
    },
    {
      name : "Awards",
      url : "#awards"
    },
    {
        name : "Contact",
        url : "#contact"
    }
]

export const emailJSConfig = {
  serviceID : "service_ghsnk3j",
  templateID : "template_swzyujx",
  publicKey : "-q-JVAPb0cDJbPnCO",
  contactsPreviewText : "Get in touch if you want me to be in collaboration or in future projects. I am also currently open and finding an internship for summer."
}

export const blenderModel = {
    modelPath : "./fantasy_island.glb",
    type : "glb"
}

export const threeJSConfig = {
  scale : "0.5",
  modelPosition : [0,0,0],
  rotationSpeed : 0.0001,
}

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
    imageUrl: "./img/socials_icon/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kairus-tecson/",
    imageUrl: "./img/socials_icon/linkedin.svg",
  },
];

export const skills = {
  tech_stack: [
    {
      name: "HTML",
      imageUrl: "./img/icons/html.svg",
    },
    {
      name: "CSS",
      imageUrl: "./img/icons/css.svg",
    },
    {
      name: "ReactJS",
      imageUrl: "./img/icons/react.svg",
    },
    {
      name: "ThreeJS",
      imageUrl: "./img/icons/threejs.png",
    },
    {
      name: "ExpressJS",
      imageUrl: "./img/icons/express.png",
    },
    {
      name: "NodeJS",
      imageUrl: "./img/icons/node_js.svg",
    },
    {
      name: "Bootstrap",
      imageUrl: "./img/icons/bootstrap.svg",
    },
  ],
  languages: [
    {
      name: "Javascript",
      imageUrl: "./img/icons/javascript.svg",
    },
    {
      name: "Python",
      imageUrl: "./img/icons/python.svg",
    },
    {
      name: "C++",
      imageUrl: "./img/icons/c++.svg",
    },
    {
      name: "Kotlin",
      imageUrl: "./img/icons/kotlin.svg",
    },
    {
      name: "PHP",
      imageUrl: "./img/icons/php.svg",
    },
    {
      name: "Typescript",
      imageUrl: "./img/icons/typescript.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      imageUrl: "./img/icons/git.svg",
    },
    {
      name: "Jquery",
      imageUrl: "./img/icons/jquery.svg",
    },
    {
      name: "Sass",
      imageUrl: "./img/icons/sass.svg",
    },
    {
      name: "Figma",
      imageUrl: "./img/icons/figma.svg",
    },
    {
      name: "ChartJS",
      imageUrl: "./img/icons/chartjs.png",
    },
    {
      name: "EJS",
      imageUrl: "./img/icons/ejs.png",
    },
    {
      name: "HandlebarJS",
      imageUrl: "./img/icons/handlebarjs.png",
    },
  ],
};

export const awards = [
  {
    name : "iSITE x StackLeague Programming Competition Champion",
    issuer : "StackLeague",
    location : "Lyceum of the Philippines - Laguna",
    description : "The competition focuses on problem solving in data structures and algorithms in which I competed with PHP as my programming language. The competition taught me a lot mostly throughout the training period wherein our college has supported on.",
    date : "2023",
    imageUrl : [
      "./img/awards/stackleague-competition.jpg",
      "./img/awards/stackleague-competition-2.jpg"
    ]
  },
  {
    name : "iSITE National Programming Competition Participant",
    issuer : "iSITE",
    location : "Virtual",
    description : "The competition focuses on problem solving in data stuctures and algorithm in which I competed for the C++ category.",
    date : "2023",
    imageUrl : [
      "./img/awards/isite-nationals.jpg",
      "./img/awards/isite-nationals-1.jpg"
    ]
  },
  {
    name : "Hackada : Kadakareer x Help Bridge Business Challenge Hackathon - Fourth Place",
    issuer : "Kadakarerr",
    location : "Virtual",
    description : "The hackathon revolves around offering a business solution for the target company, Help Bridge, on the its current situation. The hackathon enhanced my skills in UI/UX designing and prototyping which has been proposed and pitched by us.",
    date : "2023",
    imageUrl : [
      "./img/awards/kadakareer.jpg",
      "./img/awards/kadakareer-1.jpg"
    ]
  }
]

export const projects = [
  {
    name: "ArteMIS : Waste Management Information Sytem",
    description:
      "ArteMIS is a wide ecosystem that offers smart waste management system. Its goal is to automate waste management and offers critical insights on waste management status on the environment. ArteMIS offers three products, mobile app, web app, and IoT Trash bin.",
    position: "Project Leader / Lead Developer",
    imageUrl: [
      "./img/projects/artemis_preview.png",
      "./img/projects/artemis-mobile-preview.png",
    ],
    links : [
        {
            name : "Website",
            url : "https://artemis-b18ae.web.app",
            imageUrl : "./img/socials_icon/artemis-favicon.webp",
            sideNote : "Web App"
        },
        {
            name : "Github",
            url : "https://github.com/SchadenKai/ArteMIS-Waste-Management-System",
            imageUrl : "./img/socials_icon/github.svg",
            sideNote : "Github"
        }
    ],
    tech_stack : [
        {
            name : "ReactJS",
            imageUrl : "./img/icons/react.svg"
        },
        {
            name : "ExpressJS",
            imageUrl : "./img/icons/express.png"
        },
        {
            name : "Firebase",
            imageUrl : "./img/icons/firebase.svg"
        },
        {
            name : "NodeJS",
            imageUrl : "./img/icons/node_js.svg"
        },
        {
            name : "Bootstrap",
            imageUrl : "./img/icons/bootstrap.svg"
        },
        {
            name : "Typescript",
            imageUrl : "./img/icons/typescript.svg"
        }
    ]
  },
  {
    name: "I-Track : Student Progress Tracking System",
    description:
      "I-Track is a web and mobile application that aims to track the academic performance of student and provide critical insights to the school. I-Track's main goal is to be a main platform for college students while being able to offer insights on the students.",
    position: "Project Leader / Lead Developer",
    imageUrl: [
        "./img/projects/i-track-preview.png",
        "./img/projects/i-track-mobile-preview.png",
    ],
    links : [
        {
            name : "Github",
            url : "https://github.com/SchadenKai/I-Track-Web",
            imageUrl : "./img/socials_icon/github.svg",
            sideNote : "Frontend"
        },
        {
            name : "Github",
            url : "https://github.com/SchadenKai/I-Track-Mobile",
            imageUrl : "./img/socials_icon/github.svg",
            sideNote : "Mobile"
        }
    ],
    tech_stack : [
        {
            name : "PHP",
            imageUrl : "./img/icons/php.svg"
        },
        {
            name : "HTML",
            imageUrl : "./img/icons/html.svg"
        },
        {
            name : "CSS",
            imageUrl : "./img/icons/css.svg"
        },
        {
            name : "PostgreSQL",
            imageUrl : "./img/icons/postgres.svg"
        },
        {
            name : "Bootstrap",
            imageUrl : "./img/icons/bootstrap.svg"
        },
        {
            name : "Typescript",
            imageUrl : "./img/icons/javascript.svg"
        }
    ]
  },
  {
    name: "Space Exploration Website",
    description:
      "Simple HTML, CSS, and Javascript website that showcases different planets in our solar system. The website is developed for a coding bootcamp as a side project.",
    position: "Developer",
    imageUrl: [
        "./img/projects/space-website.png",
        "./img/projects/space-website-1.png"
    ],
    links : [
        {
            name : "Github",
            url : "https://schadenkai.github.io/space-exploration/",
            imageUrl : "./img/icons/web-icon.png",
            sideNote : "Website"
        },
        {
            name : "Github",
            url : "https://github.com/SchadenKai/space-exploration",
            imageUrl : "./img/socials_icon/github.svg",
            sideNote : "Github"
        }
    ],
    tech_stack : [
        {
            name : "HTML",
            imageUrl : "./img/icons/html.svg"
        },
        {
            name : "CSS",
            imageUrl : "./img/icons/css.svg"
        }
    ]
  },
  {
    name: "Pacman CLI Game",
    description:
      "A simple Pacman insired CLI game built in C++. The project aims to showcase Greedy Algorithm which is applied in the enemy entities in the game.",
    position: "Developer",
    imageUrl: [
        "./img/projects/pacman-preview.png",
        "./img/projects/pacman-preview-1.png"
    ],
    links : [
        {
            name : "Github",
            url : "https://schadenkai.github.io/space-exploration/",
            imageUrl : "./img/icons/web-icon.png",
            sideNote : "Website"
        },
        {
            name : "Github",
            url : "https://github.com/SchadenKai/space-exploration",
            imageUrl : "./img/socials_icon/github.svg",
            sideNote : "Github"
        }
    ],
    tech_stack : [
        {
            name : "C++",
            imageUrl : "./img/icons/c++.svg"
        },
    ]
  },
];
