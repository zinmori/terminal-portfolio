import { directories } from "./directories.js";
import { rainbow } from "./utils.js";
import { rand } from "./utils.js";

const fonts = ["ANSI Shadow", "Doom", "Standard", "Big", "Slant"];
const jokeUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw";
const font = fonts[rand(4)];
figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts([font], ready);

const dirs = Object.keys(directories);
const root = "~";
let cwd = root;
const user = "guest";
const server = "big.z";

function prompt() {
  return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}

const commands = {
  about() {
    term
      .echo('<img src="profil.png"/>')
      .echo("")
      .echo(
        `<glow><white>Hi, I'm Ezechiel AGBAN (but you can call me BigZ😎). 
I'm a software developer and passionate about data science and machine learning. 
I love building software and learning new things. 
Feel free to explore my portfolio and projects.</white></glow>`,
        {
          delay: 10,
          typing: true,
        }
      );
  },
  contact() {
    term.echo(
      "My mail : ezechielagban1@gmail.com\n" +
        "My Tel : +228 91 35 59 86\n" +
        "Location : Lomé, Togo"
    );
  },
  help() {
    term.echo(`
      List of available commands :
      <span class="command"><white>about</white></span> : Display information about me
      <span class="command"><white>contact</span> : Display my contacts
      <span class="command"><white>echo</span> args : Display something (args) on the screen
      <span class="command"><white>color</span> color : Change the background color of the terminal
      <span class="command"><white>cd</span> dir : Change directory to 'dir'
      <span class="command"><white>ls</span> dir : List the content of directory 'dir'
      <span class="command"><white>joke</span> : Tell a random joke
      <span class="command"><white>clear</span> : Clear the screen
      <span class="command"><white>credits</span> : Display the used libraries
      <span class="command"><white>exit</span> : exit ? why ?
      <span class="command"><white>help</span> : Display this help menu
      `);
  },
  echo(...args) {
    if (args.length === 0) {
      term.echo("echo: missing arguments");
      return;
    }
    term.echo(args.join(" "));
  },
  async joke() {
    const res = await fetch(jokeUrl);
    const data = await res.json();
    (async () => {
      if (data.type == "twopart") {
        const prompt = this.get_prompt();
        this.set_prompt("");
        await this.echo(`Q: ${data.setup}`, {
          delay: 50,
          typing: true,
        });
        await this.echo(`A: ${data.delivery}`, {
          delay: 50,
          typing: true,
        });
        this.set_prompt(prompt);
      } else if (data.type === "single") {
        await this.echo(data.joke, {
          delay: 50,
          typing: true,
        });
      }
    })();
  },
  cd(dir = null) {
    if (dir === null || (dir === ".." && cwd !== root)) {
      cwd = root;
    } else if (dir.startsWith("~/") && dirs.includes(dir.substring(2))) {
      cwd = dir;
    } else if (dirs.includes(dir)) {
      cwd = root + "/" + dir;
    } else {
      this.error("Wrong directory");
    }
  },
  ls(dir = null) {
    if (dir) {
      if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          this.error("Invalid directory");
        } else {
          const dir = dirs[0];
          this.echo(directories[dir].join("\n"));
        }
      } else if (cwd === root) {
        if (dir in directories) {
          this.echo(directories[dir].join("\n"));
        } else {
          this.error("Invalid directory");
        }
      } else if (dir === "..") {
        print_dirs();
      } else {
        this.error("Invalid directory");
      }
    } else if (cwd === root) {
      print_dirs();
    } else {
      const dir = cwd.substring(2);
      this.echo(directories[dir].join("\n"));
    }
  },
  color(color) {
    switch (color) {
      case "black":
        term.css("background-color", "#000000");
        break;
      case "green":
        term.css("background-color", "#071200");
        break;
      case "blue":
        term.css("background-color", "#00001C");
        break;
      case "ubuntu":
        term.css("background-color", "#140303");
        break;
      default:
        term.echo(`Invalid color
Available colors: black, green, blue, ubuntu.`);
        break;
    }
  },
  credits() {
    return [
      "",
      "<white>Used libraries:</white>",
      '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
      '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
      '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
      '* <a href="https://jokeapi.dev/">Joke API</a>',
      "",
    ].join("\n");
  },
  exit() {
    term.echo(
      'Why do you want to leave me 😒? Try a <span class="command"><white>joke</white></sapn> to see.'
    );
  },
};

const command_list = ["clear"].concat(Object.keys(commands));

function print_dirs() {
  term.echo(
    dirs
      .map((dir) => {
        return `<blue class="directory">${dir}</blue>`;
      })
      .join("\n")
  );
}

const term = $("body").terminal(commands, {
  greetings: false,
  checkArity: false,
  completion(string) {
    const cmd = this.get_command();
    const { name, rest } = $.terminal.parse_command(cmd);
    if (["cd", "ls"].includes(name)) {
      if (rest.startsWith("~/")) {
        return dirs.map((dir) => `~/${dir}`);
      }
      if (cwd === root) {
        return dirs;
      }
    }
    return Object.keys(commands);
  },
  prompt,
});

function render(text) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true,
  });
}

function ready() {
  const seed = rand(256);
  term
    .css("background-color", "#00001C")
    .echo(() => rainbow(render("Ezechiel AGBAN"), seed), {
      ansi: true,
    })
    .echo(
      '<glow><green><span class="job">Software Developer & Data Science enthousiast</span></green></glow>'
    )
    .echo(
      "<green>\nWelcome to my Terminal Portfolio. Type help to get started.\n</green>"
    );
}

term.on("click", ".command", function () {
  const command = $(this).text();
  term.exec(command);
});

term.on("click", ".directory", function () {
  const dir = $(this).text();
  term.exec(`cd ~/${dir}`);
});

const re = new RegExp(`^\s*(${command_list.join("|")})(\s?.*)`);

$.terminal.new_formatter([
  re,
  function (_, command, args) {
    return `<yellow>${command}</yellow><gray>${args}</gray>`;
  },
]);

$.terminal.xml_formatter.tags.green = (attrs) => {
  return `[[;#44D544;]`;
};

$.terminal.xml_formatter.tags.blue = (attrs) => {
  return `[[;#55F;;${attrs.class}]`;
};
