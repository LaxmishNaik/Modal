const getElement = (selector) => {
    const el = document.querySelector(selector)
    if (el) return el
    throw new Error ('Please check your classes : $ {selector} does not exist')
}

const modalBtn = getElement('.modal-btn')
const modalOverlay = getElement('.modal-overlay')
const closeBtn = getElement('.close-btn')

modalBtn.addEventListener('click', function () {
    modal-overlay.classList.content('open-modal')
})

closeBtn.addEventListener('click', () => {
    modal-overlay.classList.remove('open-modal')
})