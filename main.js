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

form.addEventListener('submit', runEvent)
form.addEventListener('submit', () => addBooktoLibrary(title.value, author.value, pages.value, read.value))


/*Creates empty library*/
let myLibrary = [];

/*PREVENTS DEFAULT*/ 
function runEvent(e) {
    e.preventDefault();
}
/*BOOK CONSTRUCTOR FUNCTION*/
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(title, author, pages, read) {
    const bookObj = new Book(title, author, pages, read);
    myLibrary.push(bookObj);
    displayBook(title, author, pages, read);
    console.log(myLibrary);
}

function displayBook(title, author, pages, read) {
    let newBookLine = document.createElement('tr')
    tbody.appendChild(newBookLine);

    let newTitle = document.createElement('td');
    let newAuthor = document.createElement('td');
    let newPages = document.createElement('td');
    let newRead = document.createElement('td');
    let newReadBtn = document.createElement('button');
    let deleteLine = document.createElement('td');
    let deletebtn = document.createElement('button');

    newBookLine.className = "book-line";
    newTitle.className = "book-item";
    newAuthor.className = "book-item";
    newPages.className = "book-item";
    newRead.className = "book-item";
    deleteLine.className = "book-item";
    deleteLine.className = "delete-item";
    deletebtn.className = "delete-btn";

    newTitle.innerText = `${title}`;
    newAuthor.innerText = `${author}`;
    newPages.innerText = `${pages}`;
    if (read === 'have-read') {
    newReadBtn.innerText = 'Have Read';
    newReadBtn.className = 'read-button-true';    
} else if (read === 'not-read') {
    newReadBtn.innerText = 'Not Read'
    newReadBtn.className = 'read-button-false'
};
    newBookLine.appendChild(newTitle);
    newBookLine.appendChild(newAuthor);
    newBookLine.appendChild(newPages);
    newBookLine.appendChild(newRead);
    newRead.appendChild(newReadBtn);
    newBookLine.appendChild(deleteLine);
    deletebtn.appendChild(document.createTextNode('X'));
    deleteLine.appendChild(deletebtn);
    
deletebtn.addEventListener('click', deleteBook);
newReadBtn.addEventListener('click', toggleRead);

};

function deleteBook(e) {
    console.log(e.target.parentElement.parentElement);
    if(e.target.classList.contains('delete-btn')) {
        if(confirm('Are You Sure?')) {
            let parentElement = e.target.parentElement.parentElement;
            tbody.removeChild(parentElement);
        }
        
    }
    
}

function toggleRead(e) {
    console.log(e.target);
    if(e.target.innerText === "Have Read") {
        e.target.innerText = "Not Read";
        e.target.classList.remove('read-button-true');
        e.target.classList.add('read-button-false');
        read.value = false;
        console.log(Book);
        console.log(myLibrary[0])
    } else if (e.target.innerText === "Not Read") {
        e.target.innerText = "Have Read";
        e.target.classList.remove('read-button-false');
        e.target.classList.add('read-button-true');
        read.value = false;
        console.log(Book);
        console.log(myLibrary[0].read);
    }
}



// Book.prototype.sayRead = function() {
//     console.log(this.read);
// }