let myLibrary = [];

function Book() {
  // the constructor...

}

function addBookToLibrary() {
  // do stuff here
}





//for pop up form 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})



closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.new-book-form')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
 
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
 
}