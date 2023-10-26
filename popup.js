const openPopup = document.querySelectorAll('[data-open-button]')
const closePopup = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopup.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.openButton)
        openPopup(popup)
    })
})

closePopup.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})


function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}
function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}