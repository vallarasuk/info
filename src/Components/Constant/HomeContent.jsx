import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobileAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the imported icons to the Font Awesome library
library.add(
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGit,
  faMobileAlt,
  faEnvelope,
  faPhone
);

// Updated and enhanced data for the home page
const HomePageData = {
  // Card Details
  iconImage: require("../Assets/Profile.jpg"),
  titleIcon: require("../Assets/logo/favicon-16x16.png"),
  cardImage: require("../Assets/profileimgtwo.JPG"),
  MobileProfileImage: require("../Assets/profileimgtwo.JPG"),
  // resumeDownloadLink: require("../Assets/VALLARASU K.png"),
  resumeDownloadLink: require("../Assets/vallarasuReactDeveloper.pdf"),
  resumeFileName: "Vallarasu K",
  name: "Vallarasu Kanthasamy",
  roles: [
    "Software Developer",
    "Wordpress Plugin Developer",
    "React Developer",
  ],
  bio: "Passionate web developer specializing in React and other cutting-edge technologies.",
  email: "vallarasuk143@gmail.com",
  emailTo: "mailto:vallarasuk143@gmail.com",
  mobile: "8122992143",
  mobileTo: "tel:8122992143",
  instagramProfileLink: "https://www.instagram.com/vallarasu_kanthasamy/?hl=en",
  twitterProfileLink: "https://twitter.com/vallarasuk143",
  linkedInProfileLink: "https://www.linkedin.com/in/vallarasu-k/",
  githubProfileLink: "https://github.com/vallarasuk",
  title: "Explore My Web Universe",
  description: [
    "Greetings! I'm Vallarasu K, an enthusiastic React Developer committed to crafting captivating web experiences using the latest technologies.",
    "My portfolio showcases my dedication to creating user-centric interfaces and interactive web applications. Armed with expertise in React and modern web development tools like HTML5, CSS3, and Bootstrap, I transform concepts into sleek, functional, and visually stunning solutions.",
    "Here, you'll find a diverse collection of projects highlighting my talent in delivering seamless user interactions and eye-catching designs. From elegant landing pages to dynamic web applications and mobile-responsive sites, each project reflects my passion, attention to detail, and determination to exceed expectations.",
    "I thrive on pushing the boundaries of web development, aiming to craft digital experiences that leave a lasting impression. By immersing myself in the unique goals of each project, I produce solutions that captivate users and achieve results that transcend lines of code.",
    "Feel free to explore my projects and witness the work that fuels my passion. If you're interested in collaboration or have questions, please don't hesitate to reach out. Your visit is genuinely appreciated, and I'm excited about the potential to create something remarkable together!",
  ],
  imageURL: "https://example.com/your-image.jpg",
  projectButtonName: "View Projects",
  projectButtonlink: "/projects",
  skillsTitle: "Skills and Expertise",
  skills: [
    { name: "React", icon: faReact },
    { name: "JavaScript", icon: faJs },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Git", icon: faGit },
    { name: "Responsive Web Design", icon: faMobileAlt },
  ],
  projectsData: [
    {
      title: "Setup and Training",
      description: "Description for Project 1",
      // gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview:
        "https://www.fondriest.com/field-station/set-up-and-training/",
      previewImage: require("../Assets/setup-and-training.png"),
    },
    {
      title: "Home Page",
      description: "Description for Project 2",
      // gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview: "https://www.fondriest.com/field-station/",
      previewImage: require("../Assets/fieldstation-Homepage.png"),
    },
    {
      title: "Education Outreach",
      description: "Description for Project 3",
      // gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview:
        "https://www.fondriest.com/field-station/educational-outreach/",
      previewImage: require("../Assets/education-outreach.png"),
    },
    ,
    {
      title: "Otto Clone",
      description: "Description for Project 4",
      gitLink: "https://github.com/vallarasuk/otto-landing-page",
      livePreview: "https://vallarasuk.github.io/otto-landing-page/",
      previewImage: require("../Assets/otto landing.png"),
    },
    {
      title: "Macro Touch Clone",
      description: "Description for Project 5",
      gitLink: "https://github.com/vallarasuk/Macro-Touch",
      livePreview: "https://vallarasuk.github.io/Macro-Touch/",
      previewImage: require("../Assets/macroTouch.png"),
    },
    {
      title: "About Internet Blog",
      description: "Description for Project 6",
      gitLink: "https://github.com/vallarasuk/Front-End-Blog",
      livePreview: "https://vallarasuk.github.io/Front-End-Blog/",
      previewImage: require("../Assets/about internet blog.png"),
    },
    {
      title: "Portfolio",
      description: "Description for Project 7",
      // gitLink: "https://vallarasuk.github.io/otto-landing-page/",
      livePreview: "https://vallarasuk.w3spaces.com/",
      previewImage: require("../Assets/portfolio 2.png"),
    },
    {
      title: "Nexsens CB 250",
      description: "Description for Project 8",
      // gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview: "https://www.nexsens.com/products/data-buoys/cb-250",
      previewImage: require("../Assets/cb 250 page.png"),
    },
    {
      title: "X2 Environmental",
      description: "Description for Project 9",
      // gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview:
        "https://www.nexsens.com/products/data-loggers/x2-environmental-data-logger",
      previewImage: require("../Assets/Nexsens X2 page.png"),
    },
    {
      title: "Nexsens Contact Us",
      description: "Description for Project 10",
      // gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview: "https://www.nexsens.com/support/contact-us",
      previewImage: require("../Assets/Nexsens Contact us page.png"),
    },
    {
      title: "Nexsens YSI",
      description: "Description for Project 11",
      // gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview:
        "https://www.nexsens.com/products/sensors/water-quality/ysi-exo3-multi-parameter-water-quality-sonde",
      previewImage: require("../Assets/YSI page.png"),
    },

    // {
    //   title: "Vote Validate Check",
    //   description: "Description for Project 5",
    //   gitLink: "https://github.com/vallarasuk/Vote-Check",
    //   livePreview: "https://vallarasuk.github.io/Vote-Check/",
    //   previewImage: require("../Assets/vote eligible check.png"),
    // },
  ],
  studies: [
    {
      year: "2017 - 2020",
      title: "Diploma in Mechanical Engineering",
      institution: "Government Polytechnic College",
      description:
        "During my time at Government Polytechnic College, I embarked on an exciting journey in the world of mechanical engineering. From studying advanced concepts to mastering design principles and manufacturing techniques, I honed the skills needed to innovate and create in this dynamic field.",
      icon: "graduation", // Use 'graduation' icon for this entry
    },
    {
      year: "2016 - 2017",
      title: "Secondary School Leaving Certificate (SSLC)",
      institution: "National Matriculation School",
      description:
        "My academic foundation was laid at National Matriculation School, where I immersed myself in a diverse range of subjects. With a focus on computer science and mathematics, I gained a solid understanding of essential concepts that continue to shape my problem-solving abilities today.",
      icon: "school", // Use 'school' icon for this entry
    },
  ],
  aboutTitle:
    "Hello, I'm Vallarasu K, a dedicated React developer driven by the art of crafting exceptional web experiences. My passion lies in blending technical expertise with creativity to deliver high-quality front-end solutions.",

  aboutDescription:
    "My journey began with a standout achievement, securing 87% in my SSLC from the National Matriculation School. Building upon this foundation, I pursued a Diploma in Mechanical Engineering, channeling my curiosity towards front-end development. Now, with years of hands-on experience, I thrive as a React Developer at Thidiff Technology in Bangalore.",
  keywords: [
    "portfolio website",
    "software developer",
    "web development",
    "front-end development",
    "React developer",
    "JavaScript developer",
    "Bangalore",
    "React front-end developer",
    "WordPress plugin developer",

    // Additional high-intent keywords (user searching for specific solutions):
    "freelance React developer Bangalore",
    "hire React developer India",
    "JavaScript web development services",
    "WordPress website development Bangalore",
    "custom WordPress plugin development",

    // Broader skills and technologies (increased reach):
    "UI/UX design",
    "API integration",
    "web accessibility",
    "responsive web design",
    "SEO optimization",

    // Location-specific keywords (target local clients):
    "React developer",
    "web development Bangalore",
    "WordPress development services Bangalore",
  ],
};

export default HomePageData;
