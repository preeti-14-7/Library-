
//const  deleteBook = document.querySelector('remove') ;


let myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

}



function display() {
 
  const list = document.querySelector('#book-list');
  list.innerHTML = "";
 
  if(myLibrary != null)
  myLibrary.forEach((book) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.isRead}</td>
      <td><button class="remove">Delete</button></td>
    `;
    list.appendChild(row);
  });

}

//for modal form 
let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".container")
let closeBtn = document.querySelector(".close")
modalBtn.onclick = function () {
  modal.style.display = "block"
}
closeBtn.onclick = function () {
  modal.style.display = "none"
}
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none"
  }
}


const form = document.querySelector('form');
form.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(event) {
  // handle the form data
  event.preventDefault();
  let bookName = document.getElementById('title').value;
  let authorName = document.getElementById('author').value;
  let numberOfpages = document.getElementById('pages').value;
  let bookStatus = document.getElementById('status').checked;
  let isRead = "No";
  if(bookStatus === true)
  isRead = "Yes";
  let book = new Book(bookName, authorName, numberOfpages, isRead);
  myLibrary.push(book);
  updateLocalStorage();
  form.reset();
  modal.style.display = "none"

}



function updateLocalStorage() {
  window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  restore();
}

function restore() {
      let objects = window.localStorage.getItem('myLibrary');
      objects = JSON.parse(objects);
      if(objects != null)
      myLibrary = objects;
      display();
}

window.onload = restore();




