let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__burger');
let body = document.body
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('noscroll')
})

let button = document.querySelectorAll('.burger__button');

function slide(){
    menu.classList.remove('active');
    body.classList.remove('noscroll');
    menuBtn.classList.remove('active')
}