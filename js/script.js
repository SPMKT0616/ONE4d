const header =  document.querySelector('header')
const menu = document.querySelector('.gnb');
const hamBtn = document.querySelector('.ham_btn');

hamBtn.addEventListener('click', () =>{
    header.classList.toggle('active');
    menu.classList.toggle('active');
})

let autoRun = setInterval(changeSlide, 4000);

function changeSlide(){
    const radioBtns = [...document.querySelectorAll('.slide_radio')];
    //console.log(radioBtns)
    const currentIdx = radioBtns.findIndex((rb) => rb.checked);
    // console.log(currentIdx);
    radioBtns[(currentIdx + 1) % radioBtns.length].checked = true;
}