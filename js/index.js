let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__burger');
let body = document.body
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('noscroll')
})

let button = document.querySelectorAll('.burger__button');

function hide(){
    menu.classList.remove('active');
    body.classList.remove('noscroll');
    menuBtn.classList.remove('active')
}

let leftBtn = document.querySelector('.photo__button__left');
let rightBtn = document.querySelector('.photo__button__right');

leftBtn.addEventListener('click', slide);
rightBtn.addEventListener('click', slide);

function slide(e) {
    e.target.id === 'left' ? scroll(-100) : scroll(100);
}

function scroll(val) {
    document.querySelector('#ul').scrollBy({ 
        left: val,
        behavior: 'smooth' 
    });
}

let tic = 0;

leftBtn.addEventListener('click', leftclick);
rightBtn.addEventListener('click', rightclick);

function leftclick(){
    tic--;
    if(tic < 3){
        rightBtn.classList.remove('invisible')
    }
    if(tic == 0){
        leftBtn.classList.add('invisible')
    }
    console.log(tic);
}

function rightclick(){
    tic++;
    if(tic == 3){
        rightBtn.classList.add('invisible')
    }
    if(tic > 0){
        leftBtn.classList.remove('invisible')
    }
    console.log(tic);
}



