let  elBlok = document.querySelector('.blok')
let  elButton = document.querySelector('.button')

console.log(elBlok)

elButton.addEventListener('click', function(){
    elBlok.classList.toggle('avtive')
})