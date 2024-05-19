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
    "<white>My Projects\n</white>",
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
        "Expense Tracker",
        "https://github.com/zinmori/meals",
        "Track your daily expenses with this app.",
      ],
      [
        "Meals",
        "https://github.com/zinmori/expense-tracker",
        "Discover diverse recipes with step-by-step instructions for all tastes in this app.",
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
        "Investment Calculator",
        "https://investmentz.vercel.app/",
        "An investment Calculator app with React.js",
      ],
      [
        "Credit Card Approvals",
        "https://www.datacamp.com/datalab/w/d42d9ccb-b97d-4fcb-a802-556f23ab3959/edit",
        "A machine learning model to predict credit card approvals",
      ],
      [
        "CO2 Emissions in Africa",
        "https://www.datacamp.com/datalab/w/3fa278e9-7c61-4134-a1c9-c3604a9b87f0/edit",
        "Study of CO2 emissions in Africa with and prediction of future emissions with machine learning models",
      ],
      [
        "The Android app market on Google play",
        "https://www.datacamp.com/datalab/w/e7057801-47eb-4ca8-b549-916dd6740ae3/edit",
        "Analysis of the Android app market on Google play",
      ],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}" target="_blank">${name}</a> &mdash; <white>${description}</white>\n`;
    }),
    "",
    '<white>Find more on my</white> <a href="https://github.com/zinmori/">github page</a> and <a href="https://www.datacamp.com/portfolio/ezechiel9087?view=true">Datacamp portfolio</a>',
    "",
  ].flat(),
  skills: [
    "",
    "<white>Languages</white>",

    ["JavaScript", "Java", "Python", "SQL", "Dart"].map(
      (lang) => `* <yellow>${lang}</yellow>`
    ),
    "",
    "<white>Databases</white>",

    ["MySQL", "PostgreSQL", "MongoDB", "Firestore"].map(
      (lang) => `* <magenta>${lang}</magenta>`
    ),
    "",
    "<white>Frameworks and Libraries</white>",
    [
      "Flutter",
      "React.js",
      "Redux",
      "Express",
      "Tensorflow/Keras",
      "Scikit-learn",
    ].map((lib) => `* <green>${lib}</green>`),
    "",
    "<white>Tools</white>",
    ["Git", "Visual Studio Code"].map((lib) => `* <blue>${lib}</blue>`),
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
