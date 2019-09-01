const heart = document.querySelector('.-heart')
const stars = document.querySelectorAll('.star')

heart.addEventListener('click', handleClick)

stars.forEach((star) => {
    star.addEventListener('click', handleClick)
})

function handleClick() {
    this.classList.toggle('-active')
}