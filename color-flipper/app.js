const colors = ['green', 'red', 'purple', 'white', 'blue', 'yellow', 'pink', 'black']
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // get random num between 0 and 3
    const randomNumber = getRamdomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRamdomNumber() {
    return Math.floor(Math.random() * colors.length)
}   
