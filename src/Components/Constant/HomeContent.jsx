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
  resumeDownloadLink:require("../Assects/VALLARASU K.png"),
  resumeFileName:"Vallarasu K",
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
    "Greetings! I'm Vallarasu K, a passionate React Front End Developer with a knack for creating captivating web experiences using cutting-edge technology.",
    "My portfolio is a showcase of my commitment to crafting user-friendly interfaces and interactive web applications. With expertise in React and modern web development practices, including HTML5, CSS3, and Bootstrap, I transform concepts into sleek, functional, and visually stunning solutions.",
    "You'll discover a diverse array of projects that highlight my talent in delivering seamless user interactions and eye-catching designs. Whether it's a sleek landing page, a dynamic web application, or a mobile-responsive site, I approach each project with enthusiasm, meticulous attention to detail, and a drive to exceed expectations.",
    "I thrive on pushing the boundaries of web development. My goal is to create digital experiences that make a lasting impact. By understanding the unique goals of each project, I deliver solutions that captivate users and drive results beyond mere code.",
    "Feel free to explore my projects to witness the work I'm passionate about. If you're interested in collaborating on a project or have any questions, don't hesitate to reach out. Your visit is valued, and I'm excited about the potential to work together!",
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
      title: "Diploma Mechanical Engineering",
      institution: "Goverment Polytechnic college",
      description:
        "Studied advanced front-end development techniques and web design principles.",
      icon: "graduation", // Use 'graduation' icon for this entry
    },
    {
      year: "2018 - 2020",
      title: "Bachelor's Degree in Computer Science",
      institution: "Tech University",
      description:
        "Completed coursework in computer science, algorithms, data structures, and software engineering.",
      icon: "graduation", // Use 'graduation' icon for this entry
    },
  ],
  aboutDescription:
    "I completed my SSLC with 87% from the National Matriculation School and later pursued a Diploma in Mechanical Engineering. I have a year of focused learning in front-end development.  Currently, I am thriving in the role of a React Developer at  Thidiff Technology, located in Bangalore. I'm passionate  about creating efficient and user-friendly web applications that make a meaningful impact.",
    aboutTitle:
    "Hi, I'm Vallarasu K, a passionate React developer with a strong focus on creating exceptional web experiences. I'm dedicated to delivering high-quality front-end solutions that combine technical expertise with creativity. With a background in computer science and years of hands-on experience, I bring a unique perspective to every project I work on.",
};



export default HomePageData;
