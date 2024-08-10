import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGit,
  faNodeJs,
  faWordpressSimple,
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
  faNodeJs,
  faWordpressSimple,
  faMobileAlt,
  faEnvelope,
  faPhone
);

// Updated and enhanced data for the home page
const HomePageData = {
  // Card Details
  iconImage: require("../Assets/vallarasuk.jpeg"),
  titleIcon: require("../Assets/logo/favicon-16x16.png"),
  cardImage: require("../Assets/vallarasuk.jpeg"),
  mobileProfileImage: require("../Assets/vallarasuk.jpeg"),
  resumeDownloadLink: require("../Assets/vallarasuReactDeveloper.pdf"),
  resumeFileName: "Vallarasu K",
  name: "Vallarasu Kanthasamy",
  roles: [
    "React Developer",
    "WordPress Plugin Developer",
    "Full-Stack Developer",
  ],
  bio: "A passionate and skilled developer with 1.8 years of experience specializing in React, WordPress custom plugin development, and full-stack development using Node.js and Express.js.",
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
    "With 1.8 years of hands-on experience, I specialize in React, WordPress custom plugin development, and full-stack development with Node.js and Express.js. My portfolio showcases a diverse collection of projects that highlight my expertise in delivering seamless user interactions and visually stunning solutions.",
    "From elegant landing pages to dynamic web applications and mobile-responsive sites, each project reflects my passion for pushing the boundaries of web development.",
    "I thrive on creating digital experiences that leave a lasting impression. Let's collaborate to bring your ideas to life with creativity and technical excellence.",
    "Feel free to explore my projects, and don't hesitate to reach out if you're interested in collaboration or have questions. Your visit is genuinely appreciated, and I'm excited about the potential to create something remarkable together!",
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
    { name: "Node.js", icon: faNodeJs },
    { name: "WordPress", icon: faWordpressSimple },
    { name: "Responsive Web Design", icon: faMobileAlt },
  ],
  projectsData: [
    {
      title: "Setup and Training",
      description:
        "Developed and deployed a comprehensive training setup using modern web technologies.",
      livePreview:
        "https://www.fondriest.com/field-station/set-up-and-training/",
      previewImage: require("../Assets/image.png"),
    },
    {
      title: "Home Page",
      description:
        "Created a responsive and interactive homepage with a focus on user experience.",
      livePreview: "https://www.fondriest.com/field-station/",
      previewImage: require("../Assets/fieldstation-Homepage.png"),
    },
    {
      title: "Education Outreach",
      description:
        "Built an educational outreach platform to enhance community engagement.",
      livePreview:
        "https://www.fondriest.com/field-station/educational-outreach/",
      previewImage: require("../Assets/education-outreach.png"),
    },
    {
      title: "Otto Clone",
      description: "Cloned and customized the Otto landing page with React.",
      gitLink: "https://github.com/vallarasuk/otto-landing-page",
      livePreview: "https://vallarasuk.github.io/otto-landing-page/",
      previewImage: require("../Assets/otto landing.png"),
    },
    {
      title: "Macro Touch Clone",
      description:
        "Replicated the Macro Touch interface, optimizing for responsiveness.",
      gitLink: "https://github.com/vallarasuk/Macro-Touch",
      livePreview: "https://vallarasuk.github.io/Macro-Touch/",
      previewImage: require("../Assets/macroTouch.png"),
    },
    {
      title: "About Internet Blog",
      description:
        "Designed a blog platform focused on front-end development insights.",
      gitLink: "https://github.com/vallarasuk/Front-End-Blog",
      livePreview: "https://vallarasuk.github.io/Front-End-Blog/",
      previewImage: require("../Assets/about internet blog.png"),
    },
    {
      title: "Portfolio",
      description:
        "Developed a personal portfolio showcasing my skills and projects.",
      livePreview: "https://vallarasuk.w3spaces.com/",
      previewImage: require("../Assets/portfolio 2.png"),
    },
    {
      title: "Nexsens CB 250",
      description: "Created a product page for the Nexsens CB 250 data buoy.",
      livePreview: "https://www.nexsens.com/products/data-buoys/cb-250",
      previewImage: require("../Assets/cb 250 page.png"),
    },
    {
      title: "X2 Environmental",
      description:
        "Developed a product page for the Nexsens X2 environmental data logger.",
      livePreview:
        "https://www.nexsens.com/products/data-loggers/x2-environmental-data-logger",
      previewImage: require("../Assets/Nexsens X2 page.png"),
    },
    {
      title: "Nexsens Contact Us",
      description: "Designed and implemented a contact page for Nexsens.",
      livePreview: "https://www.nexsens.com/support/contact-us",
      previewImage: require("../Assets/Nexsens Contact us page.png"),
    },
    {
      title: "Nexsens YSI",
      description:
        "Built a product page for the YSI EXO3 multi-parameter water quality sonde.",
      livePreview:
        "https://www.nexsens.com/products/sensors/water-quality/ysi-exo3-multi-parameter-water-quality-sonde",
      previewImage: require("../Assets/YSI page.png"),
    },
  ],
  studies: [
    {
      year: "2017 - 2020",
      title: "Diploma in Mechanical Engineering",
      institution: "Government Polytechnic College",
      description:
        "During my time at Government Polytechnic College, I embarked on an exciting journey in the world of mechanical engineering. From studying advanced concepts to mastering design principles and manufacturing techniques, I honed the skills needed to innovate and create in this dynamic field.",
      icon: "graduation",
    },
    {
      year: "2016 - 2017",
      title: "Secondary School Leaving Certificate (SSLC)",
      institution: "National Matriculation School",
      description:
        "My academic foundation was laid at National Matriculation School, where I immersed myself in a diverse range of subjects. With a focus on computer science and mathematics, I gained a solid understanding of essential concepts that continue to shape my problem-solving abilities today.",
      icon: "school",
    },
  ],
  aboutTitle:
    "Hello, I'm Vallarasu K, a dedicated React developer driven by the art of crafting exceptional web experiences. My passion lies in blending technical expertise with creativity to deliver high-quality front-end solutions.",
  aboutDescription:
    "My journey began with a standout achievement, securing 87% in my SSLC from the National Matriculation School. Building upon this foundation, I pursued a Diploma in Mechanical Engineering, channeling my curiosity towards front-end development. With 1.8 years of experience, I now thrive as a React Developer at Thidiff Technology in Bangalore, where I apply my skills in React, WordPress custom plugin development, and full-stack development using Node.js and Express.js.",
  keywords: [
    // Core Technical Skills
    "React developer",
    "JavaScript developer",
    "WordPress plugin developer",
    "Node.js developer",
    "Express.js developer",
    "React Native developer",
    "front-end development",
    "full-stack development",
    "web development",
    "JavaScript web development services",

    // Specific Tools & Libraries
    "React.js",
    "Node.js",
    "Express.js",
    "React Native",
    "WordPress",
    "Bootstrap",
    "Git",
    "CSS3",
    "HTML5",

    // Job Titles & Services
    "freelance React developer",
    "hire React developer",
    "Bangalore React developer",
    "JavaScript expert India",
    "WordPress developer Bangalore",
    "Node.js full-stack developer",
    "React Native mobile app developer",
    "custom WordPress plugin development",

    // Project-Specific Keywords
    "responsive web design",
    "interactive UI design",
    "landing page development",
    "dynamic web application",
    "mobile-responsive web design",
    "educational outreach platform",
    "environmental data logger page",
    "product page development",

    // Industry Keywords
    "software development services",
    "web application development",
    "mobile app development",
    "custom WordPress solutions",
    "front-end web design",
    "digital experience design",

    // Location-Based Keywords
    "Bangalore software developer",
    "Bangalore web developer",
    "React developer Bangalore",
    "WordPress developer India",
    "web development Bangalore",

    // Additional high-intent keywords (user searching for specific solutions)
    "hire React developer India",
    "React Native mobile app services Bangalore",
    "Bangalore WordPress plugin developer",
    "JavaScript development Bangalore",
    "web development company Bangalore",
  ],
};

export default HomePageData;
