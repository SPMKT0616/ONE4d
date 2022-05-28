const header =  document.querySelector('header')
const menu = document.querySelector('.gnb');
const hamBtn = document.querySelector('.ham_btn');

hamBtn.addEventListener('click', () =>{
    header.classList.toggle('active');
    menu.classList.toggle('active');
})

let autoRun = setInterval(changeSlide, 5000);

function changeSlide(){
    const radioBtns = [...document.querySelectorAll('.slide-radio')];
}