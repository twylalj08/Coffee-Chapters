// Coffee & Chapters app

const STORAGE_KEY = "coffeeChaptersLibrary";
let library = [];

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

const totalBooks = document.getElementById("totalBooks");
const readingCount = document.getElementById("readingCount");
const tbrCount = document.getElementById("tbrCount");
const readCount = document.getElementById("readCount");
const favoriteCount = document.getElementById("favoriteCount");
const averageRating = document.getElementById("averageRating");

const libraryGrid = document.getElementById("libraryGrid");
const searchBooks = document.getElementById("searchBooks");
const filterStatus = document.getElementById("filterStatus");

const bookForm = document.getElementById("bookForm");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookStatus = document.getElementById("bookStatus");
const bookRating = document.getElementById("bookRating");
const bookNotes = document.getElementById("bookNotes");
const bookFavorite = document.getElementById("bookFavorite");

const hadesPick = document.getElementById("hadesPick");
const continueReading = document.getElementById("continueReading");

function saveLibrary() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
}

function normalize(value) {
    return String(value || "").trim().toLowerCase();
}

function getBookKey(book) {
    return `${normalize(book.title)}|${normalize(book.author)}`;
}

function loadLibrary() {
    const savedLibrary = localStorage.getItem(STORAGE_KEY);
    let savedBooks = [];

    if (savedLibrary) {
        try {
            const parsedLibrary = JSON.parse(savedLibrary);

            if (Array.isArray(parsedLibrary)) {
                savedBooks = parsedLibrary;
            }
        } catch (error) {
            console.error("Could not load the saved library:", error);
        }
    }

    const savedBookKeys = new Set(
        savedBooks.map((book) => getBookKey(book))
    );

    const missingMasterBooks = starterLibrary.filter((book) => {
        return !savedBookKeys.has(getBookKey(book));
    });

    library = [...savedBooks, ...missingMasterBooks];

    saveLibrary();
}

function escapeHtml(value) {
    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderLibrary() {
    const searchTerm = normalize(searchBooks.value);
    const selectedStatus = filterStatus.value;

    const filteredBooks = library.filter((book) => {
        const matchesSearch =
            normalize(book.title).includes(searchTerm) ||
            normalize(book.author).includes(searchTerm);

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
                Try another search or add a new book.
            </p>
        `;

        return;
    }

    filteredBooks.forEach((book) => {
        const bookCard = document.createElement("article");

        bookCard.className = "book-card";
        bookCard.dataset.id = String(book.id);

        const stars =
            Number(book.rating) > 0
                ? "⭐".repeat(Number(book.rating))
                : "Not rated";

        const statusLabels = {
            tbr: "To Be Read",
            reading: "Currently Reading",
            read: "Finished"
        };

        bookCard.innerHTML = `
            <h3>${escapeHtml(book.title)}</h3>

            <p class="book-author">
                ${escapeHtml(book.author || "Unknown author")}
            </p>

            <div class="book-meta">
                <span class="book-badge">
                    ${statusLabels[book.status] || "To Be Read"}
                </span>

                <span class="book-badge">
                    ${stars}
                </span>

                ${
                    book.favorite
                        ? '<span class="book-badge">❤️ Favourite</span>'
                        : ""
                }
            </div>

            ${
                book.notes
                    ? `<p class="book-notes">${escapeHtml(book.notes)}</p>`
                    : ""
            }

            <div class="book-actions">
                <button type="button" data-action="edit">
                    ✏️ Edit
                </button>

                <button type="button" data-action="delete">
                    🗑️ Delete
                </button>
            </div>
        `;

        libraryGrid.appendChild(bookCard);
    });
}

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

    const average =
        ratedBooks.length > 0
            ? ratedBooks.reduce(
                  (total, book) => total + Number(book.rating),
                  0
              ) / ratedBooks.length
            : 0;

    averageRating.textContent = `${average.toFixed(1)} ⭐`;
}

function refreshApp() {
    renderLibrary();
    updateStats();
}

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newBook = {
        id: `user-${Date.now()}`,
        title: bookTitle.value.trim(),
        author: bookAuthor.value.trim() || "Unknown author",
        status: bookStatus.value,
        rating: Number(bookRating.value),
        notes: bookNotes.value.trim(),
        favorite: bookFavorite.checked
    };

    library.unshift(newBook);

    saveLibrary();
    refreshApp();

    bookForm.reset();

    document.getElementById("library").scrollIntoView({
        behavior: "smooth"
    });
});

searchBooks.addEventListener("input", renderLibrary);
filterStatus.addEventListener("change", renderLibrary);

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => {
        document
            .querySelectorAll(".nav-button")
            .forEach((navButton) => {
                navButton.classList.remove("active");
            });

        button.classList.add("active");

        const targetSection = document.getElementById(
            button.dataset.view
        );

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

        mainNav.classList.remove("open");
    });
});

hadesPick.addEventListener("click", () => {
    const tbrBooks = library.filter(
        (book) => book.status === "tbr"
    );

    if (tbrBooks.length === 0) {
        alert(
            "Hades says your TBR shelf is empty. Add some books first!"
        );

        return;
    }

    const chosenBook =
        tbrBooks[Math.floor(Math.random() * tbrBooks.length)];

    alert(
        `🐈‍⬛ Hades picked:\n\n${chosenBook.title}\nby ${
            chosenBook.author || "Unknown author"
        }`
    );
});

continueReading.addEventListener("click", () => {
    const currentBook = library.find(
        (book) => book.status === "reading"
    );

    if (!currentBook) {
        alert(
            "You do not have a book marked as Currently Reading yet."
        );

        return;
    }

    searchBooks.value = currentBook.title;
    filterStatus.value = "all";

    renderLibrary();

    document.getElementById("library").scrollIntoView({
        behavior: "smooth"
    });
});

libraryGrid.addEventListener("click", (event) => {
    const button = event.target.closest(
        "button[data-action]"
    );

    if (!button) return;

    const bookCard = button.closest(".book-card");

    if (!bookCard) return;

    const book = library.find(
        (item) => String(item.id) === bookCard.dataset.id
    );

    if (!book) return;

    if (button.dataset.action === "delete") {
        const confirmed = confirm(
            `Delete "${book.title}"?`
        );

        if (!confirmed) return;

        library = library.filter(
            (item) => String(item.id) !== String(book.id)
        );

        saveLibrary();
        refreshApp();

        return;
    }

    const newTitle = prompt("Book Title:", book.title);

    if (newTitle === null) return;

    const newAuthor = prompt("Author:", book.author);

    if (newAuthor === null) return;

    const newStatus = prompt(
        "Status: tbr, reading, or read",
        book.status
    );

    if (newStatus === null) return;

    const newRating = prompt(
        "Rating: 0 to 5",
        String(book.rating || 0)
    );

    if (newRating === null) return;

    const newNotes = prompt(
        "Notes:",
        book.notes || ""
    );

    if (newNotes === null) return;

    book.title = newTitle.trim() || book.title;
    book.author =
        newAuthor.trim() || "Unknown author";

    const cleanedStatus =
        newStatus.trim().toLowerCase();

    if (
        ["tbr", "reading", "read"].includes(cleanedStatus)
    ) {
        book.status = cleanedStatus;
    }

    book.rating = Math.min(
        5,
        Math.max(0, Number(newRating) || 0)
    );

    book.notes = newNotes.trim();

    saveLibrary();
    refreshApp();
});

loadLibrary();
refreshApp();
