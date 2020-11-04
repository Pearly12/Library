//test books
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 366, false);
const theRoad = new Book('The Road', 'Cormac McCarthy', 241, true);

//array to story book objects
let myLibrary = [theHobbit, theRoad];

// display default tests
displayBooks();

//object constructor for Book
function Book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.info = function() {
        let haveReadString = "";
        if(haveRead === true){
            haveReadString = "has been read";
        }else{
            haveReadString = "not read yet";
        }
        return `${title} by ${author}, ${pages} pages, ${haveReadString}.`;
    };
};


//adding books to the library 
function addBookToLibrary(){
    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("book-pages").value;
    let bookHaveRead = document.getElementById("book-haveRead").checked; //returns true or false if checked 
    // create new book object and add it to array
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookHaveRead);
    myLibrary.push(newBook);
    console.table(myLibrary);

    displayBooks();
}

function displayBooks(){
    // set library as div containing book cards
    let library = document.querySelector("#the-books");
    library.innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++){
        // create book card div and add class for styling
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        // adds data attribute to match index of item
        bookItem = myLibrary[i];
        bookCard.setAttribute("data-key", i);
        bookCard.innerHTML = `
            <h3>Title: </h3><br/>
            <p>${bookItem.title}</p><br/>
            <h3>Author: </h3><br/>
            <p>${bookItem.author}</p><br/>
            <h3>Pages: </h3><br/>
            <p>${bookItem.pages}</p><br/>
            <h3>Have you read it?: </h3><br/>
            <p>${bookItem.haveRead ? "yes" : "no"}</p><br/>
            <button id="btn-read" onclick="toggleRead(${i})">Have Read</button>
            <button id="btn-delete" onclick="deleteBook(${i})">Delete</button>`

        library.appendChild(bookCard);
    }
}

function revealForm(){
    let bookButton = document.querySelector('#add-book');
    let bookForm = document.querySelector('#book-form');

    if(bookButton.innerHTML = "Add a Book"){
        bookForm.style.display = "flex";
        bookButton.style.display = "none";
    }
}

function deleteBook(key){
    myLibrary.splice(key, 1);
    displayBooks();
}

function toggleRead(key){
    //if true, return false and otherwise
    let book = myLibrary[key];
    book.haveRead = !book.haveRead;

    displayBooks();
    console.log(book);
}

