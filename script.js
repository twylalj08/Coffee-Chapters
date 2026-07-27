// Coffee & Chapters
// Version 0.1

const seasons = [
  {
    name: "🍂 Autumn",
    background: "#f7f1e8",
    header: "#5c3b28"
  },
  {
    name: "❄️ Winter",
    background: "#eef5fb",
    header: "#365c7a"
  },
  {
    name: "🌸 Spring",
    background: "#f7fff5",
    header: "#6b8e5d"
  },
  {
    name: "☀️ Summer",
    background: "#fff8e8",
    header: "#c47b32"
  }
];

let currentSeason = 0;

const button = document.getElementById("seasonButton");

button.addEventListener("click", () => {

  currentSeason++;

  if (currentSeason >= seasons.length) {
    currentSeason = 0;
  }

  const season = seasons[currentSeason];

  document.body.style.background = season.background;

  document.querySelector("header").style.background = season.header;

  document.querySelector("footer").style.background = season.header;

  button.textContent = season.name + " Theme";

});

// Placeholder stats
document.getElementById("libraryCount").textContent = "Your Library";
document.getElementById("finishedCount").textContent = "Finished Books";
document.getElementById("tbrCount").textContent = "To Be Read";
document.getElementById("currentBook").textContent =
  "Choose your next adventure...";
