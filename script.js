/* =========================================================
   COFFEE & CHAPTERS — THE STORYBOOK COTTAGE
   Complete script.js
   ========================================================= */


/* ---------------------------------------------------------
   BOOK LIBRARY
   Add future books inside this list.
   Status options: "tbr", "reading", "finished"
   --------------------------------------------------------- */

const books = [
  {
    title: "Claimed by the Rugged Mountain Man",
    author: "Rica Lane",
    category: "Dark Romance",
    status: "finished",
    rating: 2,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Mated and Ravaged",
    author: "Mila",
    category: "Paranormal",
    status: "finished",
    rating: 3,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "The Rejected Omega",
    author: "",
    category: "Paranormal",
    status: "finished",
    rating: 4.5,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Unknown Omega",
    author: "",
    category: "Paranormal",
    status: "finished",
    rating: 3,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Brody",
    author: "",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Dead Girls Tell No Tales",
    author: "",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: "Halloween"
  },
  {
    title: "John Gribble Is Gone",
    author: "",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: "Halloween"
  },
  {
    title: "The Little Rabbit",
    author: "",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "I Came Back for You",
    author: "Kate White",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: ""
  },
  {
    title: "The Naughty List",
    author: "",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: "Christmas"
  },
  {
    title: "Read Between the Lines",
    author: "",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Corrupt Vows",
    author: "",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: ""
  },
  {
    title: "Her Beautiful Life",
    author: "",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: ""
  },
  {
    title: "Wrecked",
    author: "",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: ""
  },
  {
    title: "How the Whitman Stole Christmas",
    author: "",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: "Christmas"
  },
  {
    title: "The Kill Clause",
    author: "",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: ""
  },
  {
    title: "Yours Always",
    author: "",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "A Bookshop to Die For",
    author: "",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: "Halloween"
  },
  {
    title: "Three Cowboys' Christmas Wishes",
    author: "Lacy Williams",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: "Christmas"
  },
  {
    title: "The Bleeding Woods",
    author: "Brittany Amara",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: "Halloween"
  },
  {
    title: "The Wishing Well",
    author: "Vivian Porter",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Baking It Merry",
    author: "Samantha Chase",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: "Christmas"
  },
  {
    title: "The Fix",
    author: "Mia Sheridan",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: false,
    seasonal: ""
  },
  {
    title: "Sweet Torture",
    author: "Caz Luan",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "The Tea Witch's Secret",
    author: "Laura Greenwood",
    category: "Paranormal",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Ethan's Embrace",
    author: "Julie Ranse",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Zero Pucks Given",
    author: "Jessa York",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Broken Life",
    author: "Laura Rise",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "The Rebound",
    author: "Sierra Hill",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Taming a Ruthless Heart",
    author: "Liz Gavin",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Danger in a Dive Bar",
    author: "Lori Sjoberg",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Magic in Mistletoe",
    author: "Janet Koops",
    category: "Paranormal",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: "Christmas"
  },
  {
    title: "Wild Game",
    author: "Alisa Woods",
    category: "Paranormal",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Save Me",
    author: "Molly Black",
    category: "Thriller",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Tanner",
    author: "Samantha Skye",
    category: "Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Vicious Lies",
    author: "Ella Miles",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  },
  {
    title: "Daddy's Arms",
    author: "Stella Moore",
    category: "Dark Romance",
    status: "tbr",
    rating: null,
    quickRead: true,
    seasonal: ""
  }
];


/* ---------------------------------------------------------
   SEASONAL THEMES
   --------------------------------------------------------- */

const themes = {
  spring: {
    label: "🐝 Spring",
    decorations: ["🐝", "🌸", "🌼", "🌿"],
    cream: "#f4f1df",
    paper: "#fffdf4",
    espresso: "#2f281f",
    walnut: "#506445",
    cinnamon: "#78985f",
    pumpkin: "#d8b56b",
    gold: "#f0ce73",
    header: "#40513a",
    background:
      "linear-gradient(180deg, #f6f2df 0%, #e7efd9 100%)"
  },

  summer: {
    label: "☀️ Summer",
    decorations: ["☀️", "🌿", "🦋", "🌻"],
    cream: "#fff4dc",
    paper: "#fffaf0",
    espresso: "#33251d",
    walnut: "#65523b",
    cinnamon: "#7f9270",
    pumpkin: "#d8b56b",
    gold: "#f4cd68",
    header: "#f7f0df",
    background:
      "linear-gradient(180deg, #fff8e8 0%, #eee8cf 100%)"
  },

  autumn: {
    label: "🍂 Autumn",
    decorations: ["🍂", "🍁", "🎃", "🌾"],
    cream: "#f7efe3",
    paper: "#fffaf2",
    espresso: "#2f1d16",
    walnut: "#4a2f24",
    cinnamon: "#a95d2a",
    pumpkin: "#d27a34",
    gold: "#e8b96d",
    header: "#efe2cf",
    background:
      "linear-gradient(180deg, #f7efe3 0%, #e9d5bd 100%)"
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
    background:
      "linear-gradient(180deg, #2c1b31 0%, #6a304d 45%, #d7782f 100%)"
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
    header: "#e9eee8",
    background:
      "linear-gradient(180deg, #edf1ed 0%, #d9dfda 100%)"
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
    background:
      "linear-gradient(180deg, #f5eadb 0%, #e4d6c3 100%)"
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

  if (
    (month === 3 && day >= 16) ||
    month === 4 ||
    month === 5 ||
    (month === 6 && day <= 14)
  ) {
    return "spring";
  }

  if (
    (month === 6 && day >= 15) ||
    month === 7 ||
    month === 8 ||
    (month === 9 && day <= 14)
  ) {
    return "summer";
  }

  if (
    (month === 9 && day >= 15) ||
    (month === 10 && day <= 19)
  ) {
    return "autumn";
  }

  if (month === 10 && day >= 20) {
    return "halloween";
  }

  if (month === 11 || (month === 12 && day === 1)) {
    return "winter";
  }

  if (month === 12 && day >= 2 && day <= 26) {
    return "christmas";
  }

  return "winter";
}

const seasonButton = document.getElementById("seasonButton");
const seasonalItems =
  document.querySelectorAll(".floating-leaf");

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
    const nextIndex =
      (currentIndex + 1) % themeOrder.length;

    applyTheme(themeOrder[nextIndex]);
  });
}


/* ---------------------------------------------------------
   READING STATISTICS
   --------------------------------------------------------- */

function getBooksByStatus(status) {
  return books.filter(book => book.status === status);
}

function getCurrentBook() {
  return books.find(book => book.status === "reading");
}

const readingStats = {
  library: books.length,
  tbr: getBooksByStatus("tbr").length,
  finished: getBooksByStatus("finished").length,
  goal: 50
};

function updateText(id, text) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = text;
  }
}

function updateDashboard() {
  const currentBook = getCurrentBook();

  updateText(
    "libraryCount",
    `${readingStats.library} Books`
  );

  updateText(
    "tbrCount",
    `${readingStats.tbr} Books`
  );

  updateText(
    "finishedCount",
    `${readingStats.finished} Books`
  );

  updateText(
    "currentBook",
    currentBook
      ? currentBook.title
      : "Choose your next adventure..."
  );

  updateText(
    "currentAuthor",
    currentBook
      ? currentBook.author || "Author not added"
      : "No current book selected"
  );

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

  const progressFill =
    document.getElementById("progressFill");

  const progressTrack =
    document.querySelector(".progress-track");

  if (progressFill) {
    progressFill.style.width = `${percentage}%`;
  }

  if (progressTrack) {
    progressTrack.setAttribute(
      "aria-valuenow",
      String(percentage)
    );
  }

  const message =
    document.getElementById("challengeMessage");

  if (message) {
    if (percentage >= 100) {
      message.textContent =
        "Goal crushed. Hades is impressed.";
    } else if (percentage >= 75) {
      message.textContent =
        "You’re flying through that reading goal.";
    } else if (percentage >= 40) {
      message.textContent =
        "The shelves are filling beautifully.";
    } else {
      message.textContent =
        "Every finished book brings the cottage to life.";
    }
  }
}

updateDashboard();


/* ---------------------------------------------------------
   LIBRARY DISPLAY
   Automatically replaces the old coming-soon section.
   --------------------------------------------------------- */

function createStars(rating) {
  if (!rating) {
    return "";
  }

  return `⭐ ${rating}/5`;
}

function createBookCard(book) {
  const article = document.createElement("article");
  article.className = "library-book-card";

  const statusLabels = {
    reading: "Currently Reading",
    tbr: "To Be Read",
    finished: "Finished"
  };

  const tags = [];

  if (book.quickRead) {
    tags.push("Quick Read");
  }

  if (book.seasonal) {
    tags.push(book.seasonal);
  }

  article.innerHTML = `
    <div class="book-card-top">
      <span class="book-category">
        ${book.category}
      </span>

      <span class="book-status book-status-${book.status}">
        ${statusLabels[book.status]}
      </span>
    </div>

    <div class="book-spine-icon" aria-hidden="true">
      📖
    </div>

    <h3>${book.title}</h3>

    <p class="book-author">
      ${book.author || "Author to be added"}
    </p>

    ${
      book.rating
        ? `<p class="book-rating">${createStars(book.rating)}</p>`
        : ""
    }

    ${
      tags.length
        ? `
          <div class="book-tags">
            ${tags
              .map(tag => `<span>${tag}</span>`)
              .join("")}
          </div>
        `
        : ""
    }
  `;

  return article;
}

function renderLibrary(filter = "all") {
  const librarySection =
    document.getElementById("library");

  if (!librarySection) {
    return;
  }

  let filteredBooks = [...books];

  if (filter === "tbr") {
    filteredBooks =
      books.filter(book => book.status === "tbr");
  }

  if (filter === "finished") {
    filteredBooks =
      books.filter(book => book.status === "finished");
  }

  if (filter === "quick") {
    filteredBooks =
      books.filter(book => book.quickRead);
  }

  if (filter === "halloween") {
    filteredBooks =
      books.filter(book => book.seasonal === "Halloween");
  }

  if (filter === "christmas") {
    filteredBooks =
      books.filter(book => book.seasonal === "Christmas");
  }

  if (filter === "dark") {
    filteredBooks =
      books.filter(book => book.category === "Dark Romance");
  }

  if (filter === "paranormal") {
    filteredBooks =
      books.filter(book => book.category === "Paranormal");
  }

  if (filter === "thriller") {
    filteredBooks =
      books.filter(book => book.category === "Thriller");
  }

  librarySection.classList.remove("coming-soon");
  librarySection.classList.add("real-library");

  librarySection.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Inside the library</p>
      <h2>Twyla’s Books</h2>
      <p>
        ${books.length} books currently live inside
        The Storybook Cottage.
      </p>
    </div>

    <div class="library-filters" aria-label="Filter books">
      <button type="button" data-filter="all" class="active">
        All
      </button>

      <button type="button" data-filter="tbr">
        TBR
      </button>

      <button type="button" data-filter="finished">
        Finished
      </button>

      <button type="button" data-filter="quick">
        Quick Reads
      </button>

      <button type="button" data-filter="dark">
        Dark Romance
      </button>

      <button type="button" data-filter="paranormal">
        Paranormal
      </button>

      <button type="button" data-filter="thriller">
        Thrillers
      </button>

      <button type="button" data-filter="halloween">
        Halloween
      </button>

      <button type="button" data-filter="christmas">
        Christmas
      </button>
    </div>

    <p class="library-result-count">
      Showing ${filteredBooks.length} books
    </p>

    <div id="libraryBookGrid" class="library-book-grid"></div>
  `;

  const grid =
    document.getElementById("libraryBookGrid");

  filteredBooks.forEach(book => {
    grid.appendChild(createBookCard(book));
  });

  const filterButtons =
    librarySection.querySelectorAll(
      ".library-filters button"
    );

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      renderLibrary(button.dataset.filter);
    });
  });

  const activeButton =
    librarySection.querySelector(
      `[data-filter="${filter}"]`
    );

  if (activeButton) {
    activeButton.classList.add("active");
  }
}

renderLibrary();


/* ---------------------------------------------------------
   LIBRARY STYLES
   Added here so the books display immediately.
   --------------------------------------------------------- */

const libraryStyles = document.createElement("style");

libraryStyles.textContent = `
  .real-library {
    padding: 5rem 1.25rem;
    background: #f7f0df;
  }

  .real-library .section-heading {
    max-width: 720px;
    margin: 0 auto 2rem;
    text-align: center;
  }

  .library-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.65rem;
    max-width: 1000px;
    margin: 0 auto 1.25rem;
  }

  .library-filters button {
    padding: 0.7rem 1rem;
    border: 1px solid #748367;
    border-radius: 999px;
    background: #fffaf0;
    color: #59664f;
    font: inherit;
    font-weight: 800;
    cursor: pointer;
  }

  .library-filters button.active {
    background: #7f9270;
    color: #ffffff;
  }

  .library-result-count {
    margin: 0 auto 1.5rem;
    text-align: center;
    color: #75675c;
    font-weight: 700;
  }

  .library-book-grid {
    display: grid;
    grid-template-columns:
      repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    width: min(1100px, 100%);
    margin: 0 auto;
  }

  .library-book-card {
    display: flex;
    flex-direction: column;
    min-height: 285px;
    padding: 1.2rem;
    border: 1px solid rgba(89, 102, 79, 0.22);
    border-radius: 20px;
    background:
      linear-gradient(
        145deg,
        #fffdf6 0%,
        #f1ead9 100%
      );
    box-shadow:
      0 12px 25px rgba(65, 51, 39, 0.1);
  }

  .book-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .book-category,
  .book-status {
    display: inline-flex;
    padding: 0.35rem 0.55rem;
    border-radius: 999px;
    font-size: 0.68rem;
    font-weight: 800;
  }

  .book-category {
    background: #e5eadc;
    color: #59664f;
  }

  .book-status {
    text-align: right;
  }

  .book-status-tbr {
    background: #eee2d1;
    color: #76513d;
  }

  .book-status-reading {
    background: #dce7d3;
    color: #4f6845;
  }

  .book-status-finished {
    background: #efe4be;
    color: #725f26;
  }

  .book-spine-icon {
    margin: 1.2rem 0 0.7rem;
    font-size: 2.4rem;
  }

  .library-book-card h3 {
    margin: 0;
    color: #40372f;
    font-family: "Cormorant Garamond", serif;
    font-size: 1.55rem;
    line-height: 1.08;
  }

  .book-author {
    margin: 0.45rem 0 0;
    color: #75675c;
  }

  .book-rating {
    margin: 0.8rem 0 0;
    color: #725f26;
    font-weight: 800;
  }

  .book-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;
    padding-top: 1rem;
  }

  .book-tags span {
    padding: 0.35rem 0.55rem;
    border-radius: 8px;
    background: #f0e5d2;
    color: #665243;
    font-size: 0.7rem;
    font-weight: 800;
  }

  @media (max-width: 600px) {
    .real-library {
      padding: 3.5rem 1rem;
    }

    .library-book-grid {
      grid-template-columns: 1fr;
    }

    .library-book-card {
      min-height: 245px;
    }

    .library-filters {
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 0.5rem;
    }

    .library-filters button {
      flex: 0 0 auto;
    }
  }
`;

document.head.appendChild(libraryStyles);


/* ---------------------------------------------------------
   HADES
   --------------------------------------------------------- */

const hadesMessages = [
  "Hades is guarding your books.",
  "Hades says one more chapter.",
  "That book looks suspicious. Hades will inspect it.",
  "Coffee first. Reading second. Hades always.",
  "Hades approves this cozy little library.",
  "Hades thinks your TBR is getting out of control."
];

let hadesMessageIndex = 0;

const hadesButton =
  document.getElementById("hadesButton");

const hadesMessage =
  document.getElementById("hadesMessage");

function showNextHadesMessage() {
  if (!hadesMessage) {
    return;
  }

  hadesMessageIndex =
    (hadesMessageIndex + 1) %
    hadesMessages.length;

  hadesMessage.textContent =
    hadesMessages[hadesMessageIndex];
}

if (hadesButton) {
  hadesButton.addEventListener("click", () => {
    showNextHadesMessage();

    hadesButton.animate(
      [
        {
          transform:
            "translateY(0) rotate(0deg)"
        },
        {
          transform:
            "translateY(-8px) rotate(-3deg)"
        },
        {
          transform:
            "translateY(0) rotate(0deg)"
        }
      ],
      {
        duration: 500,
        easing: "ease-out"
      }
    );
  });
}

setInterval(showNextHadesMessage, 7000);


/* ---------------------------------------------------------
   GREETING
   --------------------------------------------------------- */

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


/* ---------------------------------------------------------
   NAVIGATION
   --------------------------------------------------------- */

const navigationLinks =
  document.querySelectorAll(
    ".main-navigation a"
  );

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    navigationLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});
