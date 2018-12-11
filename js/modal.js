//********  MODALS  *********//

/***** FIRST WORK ITEM *****/

const portfolioContainer = document.querySelector('.work-item')

portfolioContainer.addEventListener('click', e => {
  //console.log(e)
  //e.preventDefault()

  const modalToggle = e.target.closest('.btn-transparent')
    // console.log(modalToggle)
    if (! modalToggle) return

  const modal = modalToggle.parentNode.nextElementSibling
  const closeButton = modal.querySelector('.modal-close')

  const modalOpen = _ => {
    modal.classList.add('is-open')
    modal.style.animation = 'modalIn 500ms forwards'
    //document.body.style.overflowY = 'hidden'
  }

  const modalClose = _ => {
    modal.classList.remove('is-open')
    modal.removeEventListener('animationend', modalClose)
  }

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalOut 500ms forwards'
    modal.addEventListener('animationend', modalClose)
    //document.body.style.overflowY = 'scroll'
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
  //console.log(e)

  const modalToggle = e.target.closest('.btn-transparent')
  // console.log(modalToggle)
  if (! modalToggle) return

const modal = modalToggle.parentNode.nextElementSibling
const closeButton = modal.querySelector('.modal-close')

const modalOpen = _ => {
  modal.classList.add('is-open')
  modal.style.animation = 'modalIn 500ms forwards'
  //document.body.style.overflowY = 'hidden'
}

const modalClose = _ => {
  modal.classList.remove('is-open')
  modal.removeEventListener('animationend', modalClose)
}

closeButton.addEventListener('click', _ => {
  modal.style.animation = 'modalOut 500ms forwards'
  modal.addEventListener('animationend', modalClose)
  //document.body.style.overflowY = 'scroll'
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
  //console.log(e)

  const modalToggle = e.target.closest('.btn-transparent')
  // console.log(modalToggle)
  if (! modalToggle) return

const modal = modalToggle.parentNode.nextElementSibling
const closeButton = modal.querySelector('.modal-close')

const modalOpen = _ => {
  modal.classList.add('is-open')
  modal.style.animation = 'modalIn 500ms forwards'
  //document.body.style.overflowY = 'hidden'
}

const modalClose = _ => {
  modal.classList.remove('is-open')
  modal.removeEventListener('animationend', modalClose)
}

closeButton.addEventListener('click', _ => {
  modal.style.animation = 'modalOut 500ms forwards'
  modal.addEventListener('animationend', modalClose)
  //document.body.style.overflowY = 'scroll'
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

// Get the <span> element that closes the modal
var closeTop = document.getElementsByClassName("close")[0];

var closeBottom = document.getElementById("close-privacy-policy-bottom");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeTop.onclick = function() {
  modal.style.display = "none";
}

closeBottom.onclick = function() {
  modal.style.display = "none";
}
