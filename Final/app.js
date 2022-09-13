// select modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn 
// when user clicks modal-btn add .OPEN-MODAL to modal-overay 
// when user clicks close-btn remove .OPEN-MODAL form modal-overlay 

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');


modalBtn.addEventListener('click', function(){
    
    modal.classList.add('open-modal');

    // another way to add open-modal 


    // if(modal.classList.contains('open-modal')){
    //     modal.classList.remove('open-modal');
    // }
    // else{
    //     modal.classList.add('open-modal');
    // }
});

closeBtn.addEventListener('click', function(){

    modal.classList.remove('open-modal');

    // another way to remove open-modal 


    // if(modal.classList.contains('open-modal')){
    //     modal.classList.remove('open-modal');
    // }
});


// ANOTHER WAY TO ADD MODAL 



// const getElement = (selector) => {
//     const el = document.querySelector(selector)
//     if (el) return el
//     throw new Error ('Please check your classes : $ {selector} does not exist')
// }

// const modalBtn = getElement('.modal-btn')
// const modalOverlay = getElement('.modal-overlay')
// const closeBtn = getElement('.close-btn')

// modalBtn.addEventListener('click', function () {
//     modal-overlay.classList.content('open-modal')
// });

// closeBtn.addEventListener('click', () => {
//     modal-overlay.classList.remove('open-modal')
// });