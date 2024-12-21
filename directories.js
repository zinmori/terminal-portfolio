export const directories = {
  experience: [
    "",
    "<white>Professional Experience</white>",

    '* <yellow>Data Scientist</yellow> - <a href="https://www.linkedin.com/company/numeriquetg/" target="_blank">Ministry of the Digital Economy and Transformation</a> December 2024 - Present',
    '* <yellow>Full Stack Developer</yellow> - <a href="https://www.linkedin.com/company/mitsiomotu/" target="_blank">Mitsio Motu</a> July 2024 - November 2024',
    "",
  ],
  education: [
    "",
    "<white>Education</white>",

    '* <a href="https://univ-lome.tg/" target="_blank">Université de Lomé</a> - Ecole Polythechnique de Lomé <yellow>"Software Engeneering"</yellow> 2021-2024',
    "* Lycée Scientifique de Lomé - <yellow>Baccalauréat C4</yellow> 2018-2021",
    "",
  ],
  certifications: [
    "",
    "<white>Certifications (Click to verify)</white>",
    '* <a href="https://coursera.org/verify/specialization/2RUCU48RMPBY" target="_blank"><yellow>Machine Learning Specialization</yellow></a> - Coursera',
    '* <a href="www.udacity.com/certificate/e/9d70472c-2dce-11ef-aa1f-d3a47e90255f" target="_blank"><yellow>AI Programming with Python Nanodegree</yellow></a> - Udacity',
    '* <a href="https://www.datacamp.com/certificate/DSA0019605927685" target="_blank"><yellow>Associate Data Scientist</yellow></a> - Datacamp',
    "",
  ],
  projects: [
    "",
    "<white>My Projects (Click to see)\n</white>",
    [
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
      "Pytorch",
      "Tensorflow/Keras",
      "Scikit-learn",
      "Flutter",
      "React.js",
      "Redux",
      "Express",
      "Django",
    ].map((lib) => `* <green>${lib}</green>`),
    "",
    "<white>Tools</white>",
    ["Git", "Visual Studio Code", "Docker"].map(
      (lib) => `* <blue>${lib}</blue>`
    ),
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
