// ==========================================
// Coffee & Chapters
// Storybook Cottage Version 1.0
// ==========================================

// ---------- Storage ----------

const STORAGE_KEY = "coffeeChaptersLibrary";

// ---------- Book Library ----------

let library = [];

// ---------- Navigation ----------

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

// ---------- Dashboard ----------

const totalBooks = document.getElementById("totalBooks");
const readingCount = document.getElementById("readingCount");
const tbrCount = document.getElementById("tbrCount");
const readCount = document.getElementById("readCount");
const favoriteCount = document.getElementById("favoriteCount");
const averageRating = document.getElementById("averageRating");

// ---------- Library ----------

const libraryGrid = document.getElementById("libraryGrid");
const searchBooks = document.getElementById("searchBooks");
const filterStatus = document.getElementById("filterStatus");

// ---------- Form ----------

const bookForm = document.getElementById("bookForm");

const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookStatus = document.getElementById("bookStatus");
const bookRating = document.getElementById("bookRating");
const bookNotes = document.getElementById("bookNotes");
const bookFavorite = document.getElementById("bookFavorite");

// ---------- Buttons ----------

const hadesPick = document.getElementById("hadesPick");
const continueReading = document.getElementById("continueReading");
// ==========================================
// Save and Load Library
// ==========================================

function saveLibrary() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
}

function loadLibrary() {
    const savedLibrary = localStorage.getItem(STORAGE_KEY);

    if (savedLibrary) {
        try {
            library = JSON.parse(savedLibrary);
        } catch (error) {
            console.error("Could not load the saved library:", error);
            library = [];
        }
    }
}
// ==========================================
// Display Library
// ==========================================

function renderLibrary() {
    const searchTerm = searchBooks.value.trim().toLowerCase();
    const selectedStatus = filterStatus.value;

    const filteredBooks = library.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm);

        const matchesStatus =
            selectedStatus === "all" ||
            book.status === selectedStatus ||
            (selectedStatus === "favorite" && book.favorite);

        return matchesSearch && matchesStatus;
    });

    libraryGrid.innerHTML = "";

    if (filteredBooks.length === 0) {
        libraryGrid.innerHTML = `
            <p class="empty-library">
                📖 No books found.
                <br><br>
                Try a different search or add another book.
            </p>
        `;
        return;
    }

    filteredBooks.forEach((book) => {
        const bookCard = document.createElement("article");
        bookCard.className = "book-card";

        const stars = book.rating > 0
            ? "⭐".repeat(book.rating)
            : "Not rated";

        const statusLabels = {
            tbr: "To Be Read",
            reading: "Currently Reading",
            read: "Finished"
        };

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p class="book-author">${book.author || "Unknown author"}</p>

            <div class="book-meta">
                <span class="book-badge">
                    ${statusLabels[book.status] || "To Be Read"}
                </span>

                <span class="book-badge">
                    ${stars}
                </span>

                ${book.favorite
                    ? '<span class="book-badge">❤️ Favourite</span>'
                    : ""}
            </div>

            ${book.notes
                ? `<p class="book-notes">${book.notes}</p>`
                : ""}
       <div class="book-actions">
    <button type="button">✏️ Edit</button>
    <button type="button">🗑️ Delete</button>
</div>
        `;

        libraryGrid.appendChild(bookCard);
    });
}
// ==========================================
// Update Reading Stats
// ==========================================

function updateStats() {
    totalBooks.textContent = library.length;

    readingCount.textContent = library.filter(
        (book) => book.status === "reading"
    ).length;

    tbrCount.textContent = library.filter(
        (book) => book.status === "tbr"
    ).length;

    readCount.textContent = library.filter(
        (book) => book.status === "read"
    ).length;

    favoriteCount.textContent = library.filter(
        (book) => book.favorite
    ).length;

    const ratedBooks = library.filter(
        (book) => Number(book.rating) > 0
    );

    if (ratedBooks.length === 0) {
        averageRating.textContent = "0.0 ⭐";
        return;
    }

    const totalRating = ratedBooks.reduce(
        (sum, book) => sum + Number(book.rating),
        0
    );

    const average = totalRating / ratedBooks.length;

    averageRating.textContent = `${average.toFixed(1)} ⭐`;
}
// ==========================================
// Add a New Book
// ==========================================

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newBook = {
        id: Date.now(),
        title: bookTitle.value.trim(),
        author: bookAuthor.value.trim(),
        status: bookStatus.value,
        rating: Number(bookRating.value),
        notes: bookNotes.value.trim(),
        favorite: bookFavorite.checked
    };

    library.unshift(newBook);

    saveLibrary();
    renderLibrary();
    updateStats();

    bookForm.reset();

    document.getElementById("library").scrollIntoView({
        behavior: "smooth"
    });
});
// ==========================================
// Search and Filter
// ==========================================

searchBooks.addEventListener("input", renderLibrary);

filterStatus.addEventListener("change", renderLibrary);
// ==========================================
// Mobile Navigation
// ==========================================

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => {
        const viewId = button.dataset.view;
        const targetSection = document.getElementById(viewId);

        document.querySelectorAll(".nav-button").forEach((navButton) => {
            navButton.classList.remove("active");
        });

        button.classList.add("active");

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

        mainNav.classList.remove("open");
    });
});
// ==========================================
// Hades Picks
// ==========================================

hadesPick.addEventListener("click", () => {
    const tbrBooks = library.filter(
        (book) => book.status === "tbr"
    );

    if (tbrBooks.length === 0) {
        alert("Hades says your TBR shelf is empty. Add some books first!");
        return;
    }

    const randomIndex = Math.floor(
        Math.random() * tbrBooks.length
    );

    const chosenBook = tbrBooks[randomIndex];

    alert(
        `🐈‍⬛ Hades picked:\n\n${chosenBook.title}\nby ${chosenBook.author || "Unknown author"}`
    );
});
// ==========================================
// Continue Reading
// ==========================================

continueReading.addEventListener("click", () => {
    const currentBooks = library.filter(
        (book) => book.status === "reading"
    );

    if (currentBooks.length === 0) {
        alert("You do not have a book marked as Currently Reading yet.");
        return;
    }

    const currentBook = currentBooks[0];

    const searchText = `${currentBook.title} ${currentBook.author || ""}`;

    searchBooks.value = searchText.trim();
    filterStatus.value = "all";

    renderLibrary();

    document.getElementById("library").scrollIntoView({
        behavior: "smooth"
    });
});
// ==========================================
// Start the App
// ==========================================

loadLibrary();
renderLibrary();
updateStats();
// ==============================
// Edit + Delete Books
// ==============================

libraryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const card = button.closest(".book-card");
    if (!card) return;

    const title = card.querySelector("h3").textContent;

    const book = library.find(b => b.title === title);
    if (!book) return;

    // Delete
    if (button.textContent.includes("Delete")) {
        if (!confirm(`Delete "${book.title}"?`)) return;

        library = library.filter(b => b.id !== book.id);
        saveLibrary();
        renderLibrary();
        updateStats();
        return;
    }

    // Edit
    if (button.textContent.includes("Edit")) {

        const newTitle = prompt("Book Title:", book.title);
        if (newTitle === null) return;

        const newAuthor = prompt("Author:", book.author);
        if (newAuthor === null) return;

        const newNotes = prompt("Notes:", book.notes);
        if (newNotes === null) return;

        book.title = newTitle;
        book.author = newAuthor;
        book.notes = newNotes;

        saveLibrary();
        renderLibrary();
        updateStats();
    }
});
