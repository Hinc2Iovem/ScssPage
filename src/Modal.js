const asideShadow = document.querySelector('.modal');
const blueBtnModals = document.querySelectorAll('.blue-btn-modal');
const closeBtnModal = document.querySelectorAll('.close-modal-btn');
const btnBlue = document.querySelectorAll('.btn-blue');

blueBtnModals.forEach(btnModal => {
    btnModal.addEventListener('click', function(){
        asideShadow.classList.add('modal-visible')
        document.body.classList.add('scroll-disabled')
    })
})

closeBtnModal.forEach(closeBtn => closeBtn.addEventListener('click', function(){
        asideShadow.classList.remove('modal-visible')
        document.body.classList.remove('scroll-disabled'); //scroll-during-burger-----------------
}))


document.addEventListener('click', function(e) {
    if(e.target == asideShadow){
        asideShadow.classList.remove('modal-visible')
        document.body.classList.remove('scroll-disabled')
    }
})
