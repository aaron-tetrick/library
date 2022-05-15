const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const library = document.getElementById("library");
const form = document.querySelector('form');
const table = document.querySelector('table');
const tbody = document.querySelector('.tbody');
const libraryHeader = document.querySelector(".book-item-header")


//EVENT LISTENERS
form.addEventListener('submit', runEvent)
form.addEventListener('submit', () => addBookToLibrary(title.value, author.value, pages.value, read.value))


//CREATES EMPTY LIBRARY
let myLibrary = [];

//PREVENTS DEFAULT 
function runEvent(e) {
    e.preventDefault();
};

//BOOK CONSTRUCTOR FUNCTION
function Book(title, author, pages, read) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookRead = read;
    console.log(title);
    console.log(this);
    console.log(this.title)
    console.log(this.bookTitle)
    console.log(this.newTitle)
    console.log(this.bookAuthor)
};

//console.log(Book("One", 'Me', '69', 'have-read'))

//ADDS NEW BOOK TO LIBRARY
const addBookToLibrary = function(newTitle, newAuthor, newPages, newRead) {
    const bookObj = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(bookObj);
    //displayBook(title, author, pages, read);
    console.log(myLibrary);
    console.dir(bookObj);
    console.log(this);
    console.log(this.title);
    console.log(this.bookTitle);
    console.log(this.newTitle);
};


addBookToLibrary.prototype = Object.create(Book.prototype);
console.dir(addBookToLibrary);

const displayBook = function() {
    const newObj = {}
    console.log(newObj); 
}
displayBook.prototype = Object.create(Book.prototype)
console.log(displayBook());

//I want my book entry to be entered into the myLibrary array
//I want to display the myLibrary array onto the page
//I want to press the read-btn and change the status on the page and in the myLibrary array
//I want to press the delete-btn and delete the entry on the page and in the myLibrary array
















// function displayBook(title, author, pages, read) {
//     let newBookLine = document.createElement('tr')
//     tbody.appendChild(newBookLine);

//     let newTitle = document.createElement('td');
//     let newAuthor = document.createElement('td');
//     let newPages = document.createElement('td');
//     let newRead = document.createElement('td');
//     let newReadBtn = document.createElement('button');
//     let deleteLine = document.createElement('td');
//     let deletebtn = document.createElement('button');

//     newBookLine.className = "book-line";
//     newTitle.className = "book-item";
//     newAuthor.className = "book-item";
//     newPages.className = "book-item";
//     newRead.className = "book-item";
//     deleteLine.className = "book-item";
//     deleteLine.className = "delete-item";
//     deletebtn.className = "delete-btn";

//     newTitle.innerText = `${title}`;
//     newAuthor.innerText = `${author}`;
//     newPages.innerText = `${pages}`;
//     if (read === 'have-read') {
//     newReadBtn.innerText = 'Have Read';
//     newReadBtn.className = 'read-button-true';    
// } else if (read === 'not-read') {
//     newReadBtn.innerText = 'Not Read'
//     newReadBtn.className = 'read-button-false'
// };
//     newBookLine.appendChild(newTitle);
//     newBookLine.appendChild(newAuthor);
//     newBookLine.appendChild(newPages);
//     newBookLine.appendChild(newRead);
//     newRead.appendChild(newReadBtn);
//     newBookLine.appendChild(deleteLine);
//     deletebtn.appendChild(document.createTextNode('X'));
//     deleteLine.appendChild(deletebtn);
    
// deletebtn.addEventListener('click', DeleteBook);
// newReadBtn.addEventListener('click', toggleRead);

// };

// const DeleteBook = function(e) {
//     console.log();
//     if(e.target.classList.contains('delete-btn')) {
//         if(confirm('Are You Sure?')) {
//             let parentElement = e.target.parentElement.parentElement;
//             tbody.removeChild(parentElement);

//             for (let i=0; i < myLibrary.length; i++) {
//                 if (myLibrary[i].title === e.target.parentElement.parentElement.firstChild.innerText) {
//                 console.log(myLibrary[i].title, "Does Match");
//             } else {
//                 console.log("doesnt match")
//             }
//             }
            
//         }
        
//     }
    
// }

// DeleteBook.prototype = Object.create(Book.prototype);

// Book.prototype = {
//     deleteBook(e) {
//         console.log(e);
//     }
// };




// function toggleRead(e) {
//     console.log(e.target);
//     if(e.target.innerText === "Have Read") {
//         e.target.innerText = "Not Read";
//         e.target.classList.remove('read-button-true');
//         e.target.classList.add('read-button-false');
//         read.value = false;
//         console.log(Book);
//         console.log(myLibrary[0])
//     } else if (e.target.innerText === "Not Read") {
//         e.target.innerText = "Have Read";
//         e.target.classList.remove('read-button-false');
//         e.target.classList.add('read-button-true');
//         read.value = false;
//         console.log(Book);
//         console.log(myLibrary[0]);
//     }
// }