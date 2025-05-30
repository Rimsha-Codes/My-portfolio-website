const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },

  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "DeveloperPersona",
    link: "#persona",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];



const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Frontend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Basic knowledge of Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Frontend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const persona = [
  {
    name: "Creative Front-End Developer",
    review:
      "I specialize in building modern, responsive websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS. My aim is to create clean, user-friendly experiences that leave a lasting impact.",
  },
  {
    name: "Passionate Learner",
    review:
      "As a fresh graduate, I’m always learning and growing. I believe in continuous improvement, staying updated with the latest tech trends, and pushing boundaries in web development.",
  },
  {
    name: "Detail-Oriented Coder",
    review:
      "I take pride in writing clean, maintainable code with a focus on performance and accessibility. Whether it's a small component or a complete UI, I aim for perfection.",
  },
  {
    name: "Team Player",
    review:
      "I love working in teams and contributing with positive energy. Communication, honesty, and mutual growth are values I hold dear in any collaborative space.",
  },
  {
    name: "Future-Ready Developer",
    review:
      "My goal is to become a high-impact front-end engineer. I’m focused, consistent, and excited to build meaningful products that solve real-world problems.",
  },
  {
    name: "Rimsha — Front-End Enthusiast",
    review:
      "I may not have client persona (yet!), but I have passion, projects, and a hunger to grow. Let’s build something amazing together!",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  persona,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
