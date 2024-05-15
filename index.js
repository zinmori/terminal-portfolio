import { directories } from "./directories.js";

const fonts = [
  "Fire Font-k",
  "3D Diagonal",
  "ANSI Shadow",
  "Big Money-ne",
  "Doom",
  "Small Caps",
  "Standard",
  "Sub-Zero",
  "Sweet",
  "tmplr",
  "Varsity",
  "ANSI Shadow",
];
const url = "https://v2.jokeapi.dev/joke/Programming";
const font = fonts[rand(11)];
figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts([font], ready);

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "unit",
});

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
    term.echo(
      `Hi, I'm Ezechiel AGBAN (but you can call me BigZ😎), 
a software developer and data scientist based in Togo.
I love building software and learning new things. 
Feel free to explore my portfolio and projects.`,
      {
        delay: 20,
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
    term.echo(`List of available commands : ${help}`);
  },
  echo(...args) {
    if (args.length === 0) {
      term.echo("echo: missing arguments");
      return;
    }
    term.echo(args.join(" "));
  },
  async joke() {
    const res = await fetch(url);
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
};

const command_list = ["clear"].concat(Object.keys(commands));
const formatted_list = command_list.map((cmd) => {
  return `<white class="command">${cmd}</white>`;
});

const help = formatter.format(formatted_list);

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

function rand(max) {
  return Math.floor(Math.random() * (max + 1));
}

function render(text) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true,
  });
}

function rainbow(string, seed) {
  return lolcat
    .rainbow(
      function (char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
      },
      string,
      seed
    )
    .join("\n");
}

function hex(color) {
  return (
    "#" +
    [color.red, color.green, color.blue]
      .map((n) => {
        return n.toString(16).padStart(2, "0");
      })
      .join("")
  );
}

function ready() {
  const seed = rand(256);
  term
    .echo(() => rainbow(render("BIGZ'S PORTFOLIO"), seed), { ansi: true })
    .echo(
      `<green>
      _=====_                               _=====_
     / _____ \\                             / _____ \\
   +.-'_____'-.---------------------------.-'_____'-.+
  /   |     |  '.        B I G Z        .'  |  _  |   \\
 / ___| /|\\ |___ \\                     / ___| /_\\ |___ \\
/ |      |      | ;  __           _   ; | _         _ | ;
| | <---   ---> | | |__|         |_:> | ||_|       (_)| |
| |___   |   ___| ;SELECT       START ; |___       ___| ;
|\\    | \\|/ |    /  _     ___      _   \\    | (X) |    /|
| \\   |_____|  .','" "', |___|  ,'" "', '.  |_____|  .' |
|  '-.______.-' /       \\ANALOG/       \\  '-._____.-'   |
|               |       |------|       |                |
|              /\\       /      \\       /\\               |
|             /  '.___.'        '.___.'  \\              |
|            /                            \\             |
 \\          /                              \\           /
  \\________/                                \\_________/</green>`
    )
    .echo(
      "<green>Welcome to my Terminal Portfolio. Type help toget started.\n</green>"
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
