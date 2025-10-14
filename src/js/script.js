const buttons = document.getElementsByClassName('.buttons');
const results = document.getElementsByClassName('.result');
const plus = document.getElementById('.btn-+');
const min = document.getElementById('.btn--');
const mosavi = document.getElementById('.btn-=');
const backslash = document.getElementById('.btn=/');
const zarb = document.getElementById('.btn-*');
const tavan = document.getElementById('.btn-**');


const the = '';
const memory = 0;


buttons.addEventlistener('click' , inputNumber)
function inputNumber(event){
    let data = event.target.dataset.input;
}


min.addEventListener('click' , () =>{
    the = 'minus';
    memory = Number(display.textContent);
    display.textContent = 0;
});
plus.addEventListener('click' , () =>{
    the = 'plus';
    memory = Number(display.textContent);
    display.textContent = 0;
});
backslash.addEventListener('click' , () =>{
    the = 'divide';
    memory = Number(display.textContent);
    display.textContent = 0;
});
zarb.addEventListener('click' , () =>{
    the = 'zarb';
    memory = Number(display.textContent);
    display.textContent = 0;
});
tavan.addEventListener('click' , () =>{
    the = 'tavan';
    memory = Number(display.textContent);
    display.textContent = 0;
});