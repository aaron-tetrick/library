const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.` 
        
    }
}

console.log(read.checked)

title.addEventListener('click', () => addBooktoLibrary(title.value, author.value, pages.value, read.checked,))

function addBooktoLibrary(title, author, pages, read) {
    let bookObj = {
        title: title,
        author: author,
        pages: pages,
        read: read,
    }
    //let bookArray = [title, author, pages, read];
    console.log(bookObj);
    myLibrary.push(bookObj);
    console.log(myLibrary);
    //I need to take the users input and store it in the myLibrary array
}

console.log(myLibrary);


// Book.prototype.sayInfo = function() {
//     myLibrary.push(this.title);
//     console.log(myLibrary);
//     return `${this.author} wrote ${this.title} which is ${this.pages} pages.`;
// }

const Book1 = new Book("Harry Potter", "JK Rowling", 899, "Yes");
const Book2 = new Book("1984", "George Orwell", 550, 'No');
// console.log(Book1.sayInfo());
console.log(Book2.info());
console.dir(Book2)

const animals = {
    jumps: "yes"
}

const rabbits = {
    eats: "lettuce"
}

console.log(rabbits.prototype);