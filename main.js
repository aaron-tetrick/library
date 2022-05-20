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
form.addEventListener('submit', runEvent);
form.addEventListener('submit', () => addBookToLibrary(title.value, author.value, pages.value, read.value));



//CREATES EMPTY LIBRARY
let myLibrary = [];
console.log(myLibrary);
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

//console.log(Book("One", 'Me', '69', 'have-read'))

//ADDS NEW BOOK TO LIBRARY
const addBookToLibrary = function(newTitle, newAuthor, newPages, newRead) {
    const bookObj = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(bookObj);
    displayBook(bookObj);
    console.log(myLibrary);
};

addBookToLibrary.prototype = Object.create(Book.prototype);

let newBookLine;
let newTitle;
let newAuthor;
let newPages;
let newRead;
let newReadBtn;
let deleteLine;
let deleteBtn;


const displayBook = function(newBook) {
        newBookLine = document.createElement('tr');
        tbody.appendChild(newBookLine);

        //Create individual cells for each books' details
        newTitle = document.createElement('td');
        newAuthor = document.createElement('td');
        newPages = document.createElement('td');
        newRead = document.createElement('td');
        newReadBtn = document.createElement('button');
        deleteLine = document.createElement('td');
        deleteBtn = document.createElement('button');

        //Give newBookLine and cells correct styling
        newBookLine.className = "book-line";
        newTitle.className = "book-item";
        newAuthor.className = "book-item";
        newPages.className = "book-item";
        newRead.className = "book-item";
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
    }
  

newReadBtn.addEventListener('click', toggleRead);
deleteBtn.addEventListener('click', deleteEntry);


console.log(tbody);
console.log(myLibrary);



}

displayBook.prototype = Object.create(Book)

//Delete an entry from the webpage, delete the corresponding myLibrary index, reset the id attribute
function deleteEntry(e) {
    //Creates an array
    let entryArray;

    if(e.target.classList.contains('delete-btn')) {
        //If confirm, remove the entry from webpage
        if(confirm('Are You Sure?')){
            let bookEntry = e.target.parentElement.parentElement;
            tbody.removeChild(bookEntry);
        }

         //Removes entry from Library Array
         for (i=0; i < myLibrary.length; i++) {
            myLibrary.splice(newBookLine.id, 1);
            console.log(newBookLine.id);
        }

        //Removes ID from each entry that is left
        entryArray = Array.from(tbody.children);
        console.log(entryArray);
        entryArray.forEach(entry => {
            entry.removeAttribute('id');
        });

        //Adds new, correct order ID back for each entry
        for (i=0; i < entryArray.length; i++) {
            console.log(entryArray);
            if (entryArray[i].classList.contains("book-line")) {
                entryArray[i].setAttribute('id', (i-1));
            };
    };

    console.log(entryArray);
    console.log(myLibrary);
}
}


//Toggle read button
function toggleRead(e) {
        if(e.target.classList.contains("read-button-true")) {
        e.target.classList.toggle("read-button-true");
        e.target.classList.toggle("read-button-false");
        newReadBtn.innerText = 'Not Read'
        myLibrary[newBookLine.id].bookRead = "not-read";
        } else if (e.target.classList.contains("read-button-false")) {
            e.target.classList.toggle("read-button-false");
            e.target.classList.toggle("read-button-true");
            newReadBtn.innerText = 'Have Read';
            myLibrary[newBookLine.id].bookRead = "have-read";
        }
        console.log(myLibrary[newBookLine.id].bookRead);
        console.log(myLibrary);
    }

//     if(entry.classList.contains('book-line')) {
//         entry.setAttribute('id', i)
//  }
            
        //     console.log(newBookLine);
        //     console.log(tbody);
        // }
        // for(i=0; i < myLibrary.length; i++) {
        // newBookLine.setAttribute('id', i);
        // console.log(newBookLine, "Help")
        // console.log(tbody);
        // }

//X// I want my book entry to be entered into the myLibrary array 
//X//I want to display the myLibrary array onto the page
////I want to press the read-btn and change the status on the page and in the myLibrary array
////^^^Locate the bookObject by the myLibray index then change myLibrary[i].Book/bookObj.read = "have-read" or "not-read"

//X//I want to press the delete-btn and delete the entry on the page and in the myLibrary array
//^^^Locate the bookObject by the myLibrary index then myLibrary.slice()/splice() <-- one of those
//Create a loop in the displayBook function and loop through the myLibrary and use this.bookTitle, this.bookAuthor, etc.
//Try the forEach loop, appending each to the page.








// function displayBook(title, author, pages, read) {

    
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