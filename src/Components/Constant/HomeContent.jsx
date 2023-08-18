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

// Data for the home page
const HomePageData = {
  // card Details
  iconImage: require("../Assects/Profile.jpg"),
  titleIcon:
    "https://us.123rf.com/450wm/berkut2011/berkut20111309/berkut2011130900093/21991120-abstract-icon-based-on-the-letter.jpg?ver=6",
  cardImage:
    "https://us.123rf.com/450wm/arbuzu/arbuzu1811/arbuzu181100005/111437501-letter-v-logo-icon-design-template-elements.jpg?ver=6",
  MobileProfileImage: require("../Assects/Profile.jpg"),
  resumeDownloadLink: require("../Assects/VALLARASU K.png"),
  resumeFileName: "Vallarasu K",
  name: "Vallarasu Kanthasamy",
  role: "React Front End Developer",
  // bio: "Passionate web developer with expertise in React and other web technologies.",
  email: "vallarasuk143@gmail.com",
  emailTo: "mailto:vallarasuk143@gmail.com",
  mobile: "8122992143",
  mobileTo: "tel:8122992143",
  instagramProfileLink: "https://www.instagram.com/vallarasu_kanthasamy/?hl=en",
  twitterProfileLink: "https://twitter.com/vallarasuk143",
  linkedInProfileLink: "https://www.linkedin.com/in/vallarasu-k/",
  githubProfileLink: "https://github.com/vallarasuk",
  title: "Welcome to Your Portfolio",
  description: [
    "Hello! I'm Vallarasu K, a dedicated Front End Developer with a passion for crafting captivating web experiences using cutting-edge technologies.",
    "My portfolio is a living testament to my commitment to creating user-centric interfaces and interactive web applications. With a strong command of React and modern web development tools like HTML5, CSS3, and Bootstrap, I transform ideas into sleek, functional, and visually stunning solutions.",
    "Here, you'll discover a diverse collection of projects that shine a spotlight on my talent in delivering seamless user interactions and eye-catching designs. From elegant landing pages to dynamic web applications and mobile-responsive sites, each project reflects my enthusiasm, meticulous attention to detail, and determination to exceed expectations.",
    "I thrive on pushing the boundaries of web development. My mission is to craft digital experiences that leave a lasting impression. By immersing myself in the unique goals of each project, I produce solutions that captivate users and achieve results that transcend lines of code.",
    "Feel free to delve into my projects and witness the work that fuels my passion. If you're keen on collaborating or have questions, please don't hesitate to reach out. Your visit is genuinely appreciated, and I'm excited about the potential to create something remarkable together!",
  ],
  imageURL: "https://example.com/your-image.jpg",
  projectButtonName: "View Projects",
  projectButtonlink: "/projects",
  skillsTitle: "Skills and Expertise:",
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
      title: "Otto Clone",
      description: "Description for Project 1",
      gitLink: "https://github.com/vallarasuk/otto-landing-page",
      livePreview: "https://vallarasuk.github.io/otto-landing-page/",
      previewImage: require("../Assects/otto landing.png"),
    },
    {
      title: "Macro Touch Clone",
      description: "Description for Project 2",
      gitLink: "https://github.com/vallarasuk/Macro-Touch",
      livePreview: "https://vallarasuk.github.io/Macro-Touch/",
      previewImage: require("../Assects/macroTouch.png"),
    },
    {
      title: "About Internet Blog",
      description: "Description for Project 3",
      gitLink: "https://github.com/vallarasuk/Front-End-Blog",
      livePreview: "https://vallarasuk.github.io/Front-End-Blog/",
      previewImage: require("../Assects/about internet blog.png"),
    },
    {
      title: "Portfolio",
      description: "Description for Project 4",
      // gitLink: "https://vallarasuk.github.io/otto-landing-page/",
      livePreview: "https://vallarasuk.w3spaces.com/",
      previewImage: require("../Assects/portfolio 2.png"),
    },
    {
      title: "Vote Validate Check",
      description: "Description for Project 5",
      gitLink: "https://github.com/vallarasuk/Vote-Check",
      livePreview: "https://vallarasuk.github.io/Vote-Check/",
      previewImage: require("../Assects/vote eligible check.png"),
    },
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
};



export default HomePageData;
