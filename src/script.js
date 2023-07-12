////Burger

const burgerContent = document.querySelector('.burger-content');
const burgerBtnClose = document.querySelector('.burger-close-icon');
const burger = document.querySelector('.burger-icon');
const burgerElement = document.querySelectorAll('.burger-element');

window.addEventListener('click', function(e){
    let target = e.target;
   
    if(burgerContent.classList.contains('active') && target !== burger && target !== burgerContent && target !== burgerElement){
        burgerContent.classList.remove('active')
        document.body.classList.remove('scroll-disabled');
    }

})

burger.addEventListener('click', function(){
    burgerContent.classList.add('active');
    document.body.classList.add('scroll-disabled'); //scroll-during-burger-----------------
})

burgerBtnClose.addEventListener('click', function(){
    burgerContent.classList.remove('active')
    document.body.classList.remove('scroll-disabled'); //scroll-during-burger-----------------
})


//slider-----------------------------






/////////////////////////blue-btn-modal







