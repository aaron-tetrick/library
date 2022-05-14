
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
    console.log(read);
}

function displayBook(title, author, pages, read) {
    if (myLibrary.length <= 10) {
    let newBookLine = document.createElement('tr')
    tbody.appendChild(newBookLine);

    let newTitle = document.createElement('td');
    let newAuthor = document.createElement('td');
    let newPages = document.createElement('td');
    let newRead = document.createElement('td');
    let newReadBtn = document.createElement('button');
    let deleteLine = document.createElement('td');
    let deletebtn = document.createElement('button');
    
    newTitle.className = "book-item";
    newAuthor.className = "book-item";
    newPages.className = "book-item";
    newRead.className = "book-item";
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
}
    newBookLine.appendChild(newTitle);
    newBookLine.appendChild(newAuthor);
    newBookLine.appendChild(newPages);
    newBookLine.appendChild(newRead);
    newRead.appendChild(newReadBtn);
    newBookLine.appendChild(deleteLine);
    deletebtn.appendChild(document.createTextNode('X'));
    deleteLine.appendChild(deletebtn);



    console.log(myLibrary);

    console.log(`New Book Line: ${newBookLine}`);
    console.log(`New Title: ${newTitle}`);
    
    console.log(table);

    myLibrary.forEach(book => {
        newBookLine.className = `${book.title}`;
        //newBookLine.innerText = book.title;
            console.log(tbody);
            console.log(book.title)
    });


    

    }
    // const newTitle = document.createElement('td');
    // newTitle.innerText = `${myLibrary[0].title}`;
    // newTitle.className = "book-item";
    // newBookLine.appendChild(newTitle)
    
};
  

















































// function displayTitle(book) {
//     const newTitle = document.createElement('td');
//     newTitle.innerText = `${myLibrary[0].title}`;
//     newTitle.className = "book-item";
//     book.appendChild(newTitle);

// }

// function displayAuthor(book) {
//     const newAuthor = document.createElement('td');
//     newAuthor.innerText = `${myLibrary[0].author}`;
//     newAuthor.className = "book-item";
//     book.appendChild(newAuthor);
// };

// function displayPages(book) {
//     const newPages = document.createElement('td');
//     newPages.innerText = `${myLibrary[0].pages}`;
//     newPages.className = "book-item";
//     book.appendChild(newPages);
// };

// function displayRead(book) {
//     // if (myLibrary[0].read === true) {
//         const newRead = document.createElement('td');
//         const newReadBtn = document.createElement('button');
//         newReadBtn.className = ".read-button-true";
//         newReadBtn.innerText = "Have Read";
//         newRead.className = "book-item";
//         book.appendChild(newRead);
//         newRead.appendChild(newReadBtn);
//     // } else if (myLibrary.read === false) {
//     //     const newRead = document.createElement('td');
//     //     const newReadBtn = document.createElement('button');
//     //     newReadBtn.className = ".read-button-false";
//     //     newReadBtn.innerText = "Not Read";
//     //     newRead.className = "book-item";
//     //     book.appendChild(newRead);
//     // }
//     console.log(book)
//     //newRead.appendChild(newReadBtn);
// }


// const Book1 = new Book("Harry Potter", "JK Rowling", 899, "Yes");
// const Book2 = new Book("1984", "George Orwell", 550, 'No');
// console.log(Book1.sayInfo());
// console.log(Book2.info());
// console.dir(Book2);