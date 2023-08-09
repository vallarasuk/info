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
    "Hello, I'm Vallarasu K, a passionate web developer with expertise in React and other web technologies. This is my portfolio website where I showcase my projects and skills. Take a look around and get to know more about me and my work.",
    "Feel free to explore the projects I've worked on and don't hesitate to reach out if you'd like to discuss any collaboration or have any questions. Thank you for visiting!",
  ],
  imageURL: "https://example.com/your-image.jpg",
  ctaButtonText: "View Projects",
  ctaButtonLink: "/projects",
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
};

export default HomePageData;
