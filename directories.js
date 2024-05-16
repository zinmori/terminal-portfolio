export const directories = {
  education: [
    "",
    "<white>Education</white>",

    '* <a href="https://univ-lome.tg/" target="_blank">Université de Lomé</a> - Ecole Polythechnique de Lomé <yellow>"Software Engeneering"</yellow> 2021-2024',
    "* Lycée Scientifique de Lomé - <yellow>Baccalauréat C4</yellow> 2018-2021",
    "",
  ],
  certifications: [
    "",
    "<white>Certifications</white>",
    '* <a href="https://www.datacamp.com/certificate/DSA0019605927685" target="_blank"><yellow>Associate Data Scientist</yellow></a> - Datacamp',
    '* <a href="https://coursera.org/verify/SF24JFHH5H5Q" target="_blank"><yellow>Supervised Machine Learning</yellow></a> - Coursera',
    '* <a href="https://coursera.org/verify/PNK3EEPQSR4S" target="_blank"><yellow>Advanced Learning Algorithms</yellow></a> - Coursera',
    '* <a href="https://www.udemy.com/certificate/UC-18077573-e617-42d6-8b7a-8f2d8d70a0cf/" target="_blank"><yellow>Flutter et Dart</yellow></a> - Udemy',
    '* <a href="https://openclassrooms.com/fr/course-certificates/8609343030" target="_blank"><yellow>React JS</yellow></a> - Openclassrooms',
    '* <a href="https://openclassrooms.com/fr/course-certificates/4249712619" target="_blank"><yellow>NodeJS/Express/MongoDB</yellow></a> - Openclassrooms',
    "",
  ],
  projects: [
    "",
    "<white>Projects</white>",
    [
      [
        "MuZic",
        "https://github.com/zinmori/muzic",
        "A music player mobile app with Flutter",
      ],
      [
        "Zcalcul",
        "https://github.com/zinmori/zcalcul",
        "A simple calculator with Flutter",
      ],
      [
        "Tic Tac Toe",
        "https://tic-tac-toe-bigz.vercel.app/",
        "A simple Tic Tac Toe game with React.js",
      ],
      [
        "Zfood",
        "https://zfood-beige.vercel.app/",
        "A food delivery app with React.js",
      ],
      [
        "Credit Card Approvals",
        "https://github.com/zinmori/creditCardApprovals",
        "A machine learning model to predict credit card approvals",
      ],
      [
        "CO2 Emissions in Africa",
        "https://github.com/zinmori/co2Africa",
        "Study of CO2 emissions in Africa with and prediction of future emissions with machine learning models",
      ],
      ["Find more on my github page", "https://github.com/zinmori/"],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}" target="_blank">${name}</a> &mdash; <white>${description}</white>`;
    }),
    "",
  ].flat(),
  skills: [
    "",
    "<white>Languages</white>",

    ["JavaScript", "Java", "Python", "SQL", "Dart"].map(
      (lang) => `* <yellow>${lang}</yellow>`
    ),
    "",
    "<white>Frameworks and Libraries</white>",
    [
      "Flutter",
      "React.js",
      "Redux",
      "Jest",
      "Express",
      "Tensorflow/Keras",
      "Scikit-learn",
    ].map((lib) => `* <green>${lib}</green>`),
    "",
    "<white>Tools</white>",
    ["Git", "GNU/Linux"].map((lib) => `* <blue>${lib}</blue>`),
    "",
  ].flat(),
  links: [
    "",
    "<white>My links</white>",
    '* 👉<a href="https://www.linkedin.com/in/kokou-ezechiel-agban/" target="_blank"><blue>Linkedin</blue></a>',
    '* 👉<a href="https://github.com/zinmori" target="_blank"><blue>Github</blue></a>',
    '* 👉<a href="https://www.datacamp.com/portfolio/ezechiel9087" target="_blank"><blue>Datacamp</blue></a>',
    "",
  ],
  languages: [
    "",
    "<white>Languages</white>",
    "* <yellow>French</yellow> - Native",
    "* <yellow>English</yellow> - Professional",
    "",
  ],
};
