const themes = {
  spring: {
    label: "🐝 Spring",
    decorations: ["🐝", "🌸", "🐝", "🌼"],
    cream: "#f4f1df",
    paper: "#fffdf4",
    espresso: "#2f281f",
    walnut: "#506445",
    cinnamon: "#78985f",
    pumpkin: "#e0b85c",
    gold: "#f0ce73",
    header: "#40513a",
    background: "linear-gradient(180deg, #f6f2df 0%, #e7efd9 100%)"
  },

  summer: {
    label: "☀️ Summer",
    decorations: ["☀️", "🌿", "🦋", "🌻"],
    cream: "#fff4dc",
    paper: "#fffaf0",
    espresso: "#33251d",
    walnut: "#65523b",
    cinnamon: "#c67a32",
    pumpkin: "#eda94d",
    gold: "#f4cd68",
    header: "#4f4932",
    background: "linear-gradient(180deg, #fff3d4 0%, #f4e3bd 100%)"
  },

  autumn: {
    label: "🍂 Autumn",
    decorations: ["🍂", "🍁", "🍂", "🍁"],
    cream: "#f7efe3",
    paper: "#fffaf2",
    espresso: "#2f1d16",
    walnut: "#4a2f24",
    cinnamon: "#a95d2a",
    pumpkin: "#d27a34",
    gold: "#e8b96d",
    header: "#3b251c",
    background: "linear-gradient(180deg, #f7efe3 0%, #f2e4d3 100%)"
  },

  halloween: {
    label: "🎃 Halloween",
    decorations: ["🦇", "🎃", "👻", "🕸️"],
    cream: "#ede2d2",
    paper: "#fff7ea",
    espresso: "#241828",
    walnut: "#43263e",
    cinnamon: "#913b68",
    pumpkin: "#dc6d23",
    gold: "#f0a93b",
    header: "#261728",
    background: "linear-gradient(180deg, #2c1b31 0%, #6a304d 45%, #d7782f 100%)"
  },

  winter: {
    label: "❄️ Winter",
    decorations: ["❄️", "✨", "❄️", "✨"],
    cream: "#edf1ed",
    paper: "#fffefa",
    espresso: "#2e302c",
    walnut: "#55594f",
    cinnamon: "#777d72",
    pumpkin: "#b29b73",
    gold: "#d9c79d",
    header: "#3c403a",
    background: "linear-gradient(180deg, #edf1ed 0%, #d9dfda 100%)"
  },

  christmas: {
    label: "🎄 Christmas",
    decorations: ["🎄", "✨", "🎁", "❄️"],
    cream: "#f4eadc",
    paper: "#fffaf1",
    espresso: "#301d19",
    walnut: "#4b241f",
    cinnamon: "#a12f2f",
    pumpkin: "#bd4437",
    gold: "#dab968",
    header: "#23452d",
    background: "linear-gradient(180deg, #f5eadb 0%, #e4d6c3 100%)"
  }
};

const themeOrder = [
  "spring",
  "summer",
  "autumn",
  "halloween",
  "winter",
  "christmas"
];

function getAutomaticTheme(date = new Date()) {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // March 16 – June 14
  if (
    (month === 3 && day >= 16) ||
    month === 4 ||
    month === 5 ||
    (month === 6 && day <= 14)
  ) {
    return "spring";
  }

  // June 15 – September 14
  if (
    (month === 6 && day >= 15) ||
    month === 7 ||
    month === 8 ||
    (month === 9 && day <= 14)
  ) {
    return "summer";
  }

  // September 15 – October 19
  if (
    (month === 9 && day >= 15) ||
    (month === 10 && day <= 19)
  ) {
    return "autumn";
  }

  // October 20 – October 31
  if (month === 10 && day >= 20) {
    return "halloween";
  }

  // November 1 – December 1
  if (month === 11 || (month === 12 && day === 1)) {
    return "winter";
  }

  // December 2 – December 26
  if (month === 12 && day >= 2 && day <= 26) {
    return "christmas";
  }

  // December 27 – March 15
  return "winter";
}

const seasonButton = document.getElementById("seasonButton");
const seasonalItems = document.querySelectorAll(".floating-leaf");

let activeTheme = getAutomaticTheme();

function applyTheme(themeName) {
  const theme = themes[themeName] || themes.summer;
  const root = document.documentElement;

  root.style.setProperty("--cream", theme.cream);
  root.style.setProperty("--paper", theme.paper);
  root.style.setProperty("--espresso", theme.espresso);
  root.style.setProperty("--walnut", theme.walnut);
  root.style.setProperty("--cinnamon", theme.cinnamon);
  root.style.setProperty("--pumpkin", theme.pumpkin);
  root.style.setProperty("--gold", theme.gold);

  document.body.style.background = theme.background;

  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");

  if (header) {
    header.style.background = theme.header;
  }

  if (footer) {
    footer.style.background = theme.header;
  }

  seasonalItems.forEach((item, index) => {
    item.textContent =
      theme.decorations[index % theme.decorations.length];
  });

  if (seasonButton) {
    seasonButton.textContent = theme.label;
  }

  activeTheme = themeName;
}

applyTheme(activeTheme);

if (seasonButton) {
  seasonButton.addEventListener("click", () => {
    const currentIndex = themeOrder.indexOf(activeTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    applyTheme(themeOrder[nextIndex]);
  });
}

const readingStats = {
  library: 0,
  tbr: 0,
  finished: 0,
  goal: 50,
  currentBook: "Choose your next adventure...",
  currentAuthor: "No current book selected"
};

function updateText(id, text) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = text;
  }
}

function updateDashboard() {
  updateText("libraryCount", `${readingStats.library} Books`);
  updateText("tbrCount", `${readingStats.tbr} Books`);
  updateText("finishedCount", `${readingStats.finished} Books`);
  updateText("currentBook", readingStats.currentBook);
  updateText("currentAuthor", readingStats.currentAuthor);

  updateText(
    "challengeProgress",
    `${readingStats.finished} books finished`
  );

  updateText(
    "challengeGoal",
    `Goal: ${readingStats.goal}`
  );

  const percentage =
    readingStats.goal > 0
      ? Math.min(
          100,
          Math.round(
            (readingStats.finished / readingStats.goal) * 100
          )
        )
      : 0;

  const progressFill = document.getElementById("progressFill");
  const progressTrack = document.querySelector(".progress-track");

  if (progressFill) {
    progressFill.style.width = `${percentage}%`;
  }

  if (progressTrack) {
    progressTrack.setAttribute(
      "aria-valuenow",
      String(percentage)
    );
  }

  const message = document.getElementById("challengeMessage");

  if (message) {
    if (percentage >= 100) {
      message.textContent =
        "Goal crushed. Hades is impressed.";
    } else if (percentage >= 75) {
      message.textContent =
        "You’re flying through that reading goal.";
    } else if (percentage >= 40) {
      message.textContent =
        "The shelf is filling up beautifully.";
    } else {
      message.textContent =
        "Every finished book brings the shelf to life.";
    }
  }
}

updateDashboard();

const hadesMessages = [
  "Hades is guarding your books.",
  "Hades says one more chapter.",
  "That book looks suspicious. Hades will inspect it.",
  "Coffee first. Reading second. Hades always.",
  "Hades approves this cozy little library."
];

let hadesMessageIndex = 0;

const hadesButton = document.getElementById("hadesButton");
const hadesMessage = document.getElementById("hadesMessage");

if (hadesButton) {
  hadesButton.addEventListener("click", () => {
    hadesMessageIndex =
      (hadesMessageIndex + 1) % hadesMessages.length;

    if (hadesMessage) {
      hadesMessage.textContent =
        hadesMessages[hadesMessageIndex];
    }

    hadesButton.animate(
      [
        { transform: "translateY(0) rotate(0deg)" },
        { transform: "translateY(-8px) rotate(-3deg)" },
        { transform: "translateY(0) rotate(0deg)" }
      ],
      {
        duration: 500,
        easing: "ease-out"
      }
    );
  });
}

const navigationLinks =
  document.querySelectorAll(".main-navigation a");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    navigationLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

const hour = new Date().getHours();

const greeting =
  hour < 12
    ? "Good morning"
    : hour < 18
      ? "Good afternoon"
      : "Good evening";

const heroHeading =
  document.querySelector(".hero-content h1");

if (heroHeading) {
  heroHeading.innerHTML =
    `${greeting}, <span>Twyla.</span>`;
}
