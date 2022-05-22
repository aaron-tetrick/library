const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const form = document.querySelector('form');
const tbody = document.querySelector('.tbody');

//EVENT LISTENERS
form.addEventListener('submit', runEvent);
form.addEventListener('submit', () => addBookToLibrary(title.value, author.value, pages.value, read.value));

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
};

//ADDS NEW BOOK TO LIBRARY
const addBookToLibrary = function(newTitle, newAuthor, newPages, newRead) {
    const bookObj = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(bookObj);
    displayBook(bookObj);
};

addBookToLibrary.prototype = Object.create(Book.prototype);

//DISPLAYS NEW BOOK ENTRY ON THE PAGE
const displayBook = function(newBook) {
    let newBookLine = document.createElement('tr');
    tbody.appendChild(newBookLine);

    //Create individual cells for each books' details
    let newTitle = document.createElement('td');
    let newAuthor = document.createElement('td');
    let newPages = document.createElement('td');
    let newRead = document.createElement('td');
    let newReadBtn = document.createElement('button');
    let deleteLine = document.createElement('td');
    let deleteBtn = document.createElement('button');

    //Give newBookLine and cells correct styling
    newBookLine.className = "book-line";
    newTitle.className = "book-item";
    newAuthor.className = "book-item";
    newPages.className = "book-item";
    newRead.className = "book-item";
    newReadBtn.className = "read-btn";
    deleteLine.className = "book-item";
    deleteLine.className = "delete-item";
    deleteBtn.className = "delete-btn";

    //Give book cells the correct information to display on page
    newTitle.innerText = `${newBook.bookTitle}`;
    newAuthor.innerText = `${newBook.bookAuthor}`;
    newPages.innerText = `${newBook.bookPages}`;
    if (newBook.bookRead === 'have-read') {
        newReadBtn.innerText = 'Have Read';
        newReadBtn.className = 'read-button-true';
    } else if (newBook.bookRead === 'not-read') {
    newReadBtn.innerText = 'Not Read'
    newReadBtn.className = 'read-button-false'
    };

    //Append book cells and buttons to page
    newBookLine.appendChild(newTitle);
    newBookLine.appendChild(newAuthor);
    newBookLine.appendChild(newPages);
    newBookLine.appendChild(newRead);
    newRead.appendChild(newReadBtn);
    newBookLine.appendChild(deleteLine);
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteLine.appendChild(deleteBtn);

//Loop through myLibrary Array and assign each book entry an id that matches it's placement in the library.
    for (i=0; i < myLibrary.length; i++) {
        newBookLine.setAttribute('id', i);
    };
  
newReadBtn.addEventListener('click', toggleRead);
deleteBtn.addEventListener('click', deleteEntry);
};

displayBook.prototype = Object.create(Book)

//Delete an entry from the webpage, delete the corresponding myLibrary index, reset the id attribute
function deleteEntry(e) {
    if(e.target.classList.contains('delete-btn')) {
        //If confirm, remove the entry from webpage
        if(confirm('Are You Sure?')){
            let bookEntry = e.target.parentElement.parentElement;
            tbody.removeChild(bookEntry);
        };

        //Removes entry from Library Array
        myLibrary.splice(e.target.parentElement.parentElement.id, 1);

        //Removes ID from each entry that is left
        let entryArray;
        entryArray = Array.from(tbody.children);;
        entryArray.forEach(entry => {
            entry.removeAttribute('id');
        });

        //Adds new ID, in the correct order, for each entry
        for (i=0; i < entryArray.length; i++) {
            if (entryArray[i].classList.contains("book-line")) {
                entryArray[i].setAttribute('id', (i-1));
            };
        };
    };
};

//Toggle read button
function toggleRead(e) {
        if(e.target.classList.contains("read-button-true")) {
        e.target.classList.toggle("read-button-true");
        e.target.classList.toggle("read-button-false");
        e.target.innerText = 'Not Read'
        myLibrary[e.target.parentElement.parentElement.id].bookRead = "not-read";
        } else if (e.target.classList.contains("read-button-false")) {
            e.target.classList.toggle("read-button-false");
            e.target.classList.toggle("read-button-true");
            e.target.innerText = 'Have Read';
            myLibrary[e.target.parentElement.parentElement.id].bookRead = "have-read";
        };
    };