



let myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

}


const deleteBook = document.querySelector('tbody');
const changeStatus = document.getElementsByClassName('.slide');

function display() {

  const list = document.querySelector('#book-list');
  list.innerHTML = "";
  let i = 0;
  if (myLibrary != null)
    myLibrary.forEach((book) => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>
      <label class="switch" >
      <input data-index="${i}" type="checkbox" class = "slide" ${book.isRead ? 'checked' : ''
        }>
      <span class="slider round"></span>
      </label>

      </td>
      <td><button data-index="${i}" class="remove">Delete</button></td>
    `;
      list.appendChild(row);
      i++;
    });

}

function removeBook(e) {
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
    const index = +e.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    const removeBtn = document.querySelectorAll('.removeBtn');
    for (let i = 0; i < removeBtn.length; i++) {
      removeBtn[i].setAttribute('data-index', i);
    }
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
  }

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

  let book = new Book(bookName, authorName, numberOfpages, bookStatus);
  myLibrary.push(book);
  updateLocalStorage();
  form.reset();
  modal.style.display = "none"

}





function changeBook(e){
  if (e.target.classList.contains('slide')) {
    const index = +e.target.getAttribute("data-index");
    myLibrary[index].isRead = !(myLibrary[index].isRead);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
  }
  
}

deleteBook.addEventListener('click',changeBook);
deleteBook.addEventListener('click', removeBook);

function updateLocalStorage() {
  window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  restore();
}

function restore() {
  let objects = window.localStorage.getItem('myLibrary');
  objects = JSON.parse(objects);
  if (objects != null)
    myLibrary = objects;
  display();
}
restore();


