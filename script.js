Coffee & Chapters
// Version 
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
document.getElementById("finish