//********  MODALS  *********//

/***** FIRST WORK ITEM *****/

const portfolioContainer = document.querySelector('.work-item')

portfolioContainer.addEventListener('click', e => {
  
  const modalToggle = e.target.closest('.btn-transparent')
    // console.log(modalToggle)
    if (! modalToggle) return

  const modal = modalToggle.parentNode.nextElementSibling
  
  const closeButton = modal.querySelector('.modal-close')

  const closeButton2 = modal.querySelector('.modal-close-2')

  const modalOpen = _ => {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 700ms forwards'
  }

  const modalClose = _ => {
    modal.classList.remove('is-open')
    modal.removeEventListener('animationend', modalClose)
  }

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards'
    modal.addEventListener('animationend', modalClose)
  })

  closeButton2.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards'
    modal.addEventListener('animationend', modalClose)
  })

  document.addEventListener('keydown', e => {
    if ( e.keyCode === 27 ) {
      modal.style.animation = 'modalOut 500ms forwards'
      modal.addEventListener('animationend', modalClose)
      document.body.style.overflowY = 'scroll'
    }
  })

  modalOpen()

})

/***** SECOND WORK ITEM *****/

const portfolioContainer2 =
document.querySelector('.work-item2')

portfolioContainer2.addEventListener('click', e => {

  const modalToggle = e.target.closest('.btn-transparent')
  if (! modalToggle) return

const modal = modalToggle.parentNode.nextElementSibling

const closeButton = modal.querySelector('.modal-close')

const closeButton2 = modal.querySelector('.modal-close-2')

const modalOpen = _ => {
  modal.classList.add('is-open')
  modal.style.animation = 'modalIn 700ms forwards'
}

const modalClose = _ => {
  modal.classList.remove('is-open')
  modal.removeEventListener('animationend', modalClose)
}

closeButton.addEventListener('click', _ => {
  modal.style.animation = 'modalOut 500ms forwards'
  modal.addEventListener('animationend', modalClose)
})

closeButton2.addEventListener('click', _ => {
  modal.style.animation = 'modalOut 500ms forwards'
  modal.addEventListener('animationend', modalClose)
})

document.addEventListener('keydown', e => {
  if ( e.keyCode === 27 ) {
    modal.style.animation = 'modalOut 500ms forwards'
    modal.addEventListener('animationend', modalClose)
    document.body.style.overflowY = 'scroll'
  }
})

modalOpen()

})

/***** THIRD WORK ITEM *****/

const portfolioContainer3 =
document.querySelector('.work-item3')

portfolioContainer3.addEventListener('click', e => {

  const modalToggle = e.target.closest('.btn-transparent')
  if (! modalToggle) return

const modal = modalToggle.parentNode.nextElementSibling

const closeButton = modal.querySelector('.modal-close')

const closeButton2 = modal.querySelector('.modal-close-2')

const modalOpen = _ => {
  modal.classList.add('is-open')
  modal.style.animation = 'modalIn 700ms forwards'
}

const modalClose = _ => {
  modal.classList.remove('is-open')
  modal.removeEventListener('animationend', modalClose)
}

closeButton.addEventListener('click', _ => {
  modal.style.animation = 'modalOut 500ms forwards'
  modal.addEventListener('animationend', modalClose)
})

closeButton2.addEventListener('click', _ => {
  modal.style.animation = 'modalOut 500ms forwards'
  modal.addEventListener('animationend', modalClose)
})

document.addEventListener('keydown', e => {
  if ( e.keyCode === 27 ) {
    modal.style.animation = 'modalOut 500ms forwards'
    modal.addEventListener('animationend', modalClose)
    document.body.style.overflowY = 'scroll'
  }
})

modalOpen()

})

/***** MODAL PRIVACY POLICY *****/

// Get the modal
var modal = document.getElementById('modal-footer');

// Get the button that opens the modal
var btn = document.getElementById("open-privacy-policy");
modal.style.animation = 'modalIn 700ms forwards'

// Get the elements that closes the modal
var closeTop = document.getElementById("close-privacy-policy-top");

var closeBottom = document.getElementById("close-privacy-policy-bottom");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on (x), close the modal
closeTop.onclick = function() {
  modal.style.display = "none";
}

closeBottom.onclick = function() {
  modal.style.display = "none";
}


