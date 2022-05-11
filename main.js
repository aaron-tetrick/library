
const h1 = document.getElementById("h1");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const library = document.getElementById("library");
const form = document.querySelector('form');

console.log(form);

form.addEventListener('submit', runEvent)
form.addEventListener('submit', () => addBooktoLibrary(title.value, author.value, pages.value, read.checked))

/*Creates empty library*/
let myLibrary = [];

function runEvent(e) {
    e.preventDefault();
}
/* */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.` 
    }
}

function addBooktoLibrary(title, author, pages, read) {
    const bookObj = new Book(title, author, pages, read);
    myLibrary.push(bookObj);
    displayBook();
    console.log(this);
    console.log(myLibrary);
    //I need to take the users input and store it in the myLibrary array
}

function displayBook() {
    for (i=0; i < myLibrary.length; i++) {
        const newBook = document.createElement("li");
        newBook.innerText = `${this.title.value}`;
        library.appendChild(newBook);
        console.log(newBook);
        console.log(this.title.value);
        //let addBook = new Book(this.title.value, this.author.value, this.pages.value, this.read.value);
    }
}

const newBook = document.createElement("li");



// Book.prototype.sayInfo = function() {
//     myLibrary.push(this.title);
//     console.log(myLibrary);
//     return `${this.author} wrote ${this.title} which is ${this.pages} pages.`;
// }

const Book1 = new Book("Harry Potter", "JK Rowling", 899, "Yes");
const Book2 = new Book("1984", "George Orwell", 550, 'No');
// console.log(Book1.sayInfo());
// console.log(Book2.info());
// console.dir(Book2);