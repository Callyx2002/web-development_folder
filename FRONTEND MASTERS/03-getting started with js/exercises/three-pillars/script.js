class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(instance) {
  // TODO: call fakeAjax( .. );
  var BOOK_API = "https://some.url/api";
  fakeAjax(BOOK_API, function onShelf(bookName) {
    for (let name of bookName) {
      instance.addFavoriteBook(name);
    }
    instance.printFavoriteBooks();
  });
}

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}

var myBookshelf = new Bookshelf();
loadBooks(myBookshelf);
