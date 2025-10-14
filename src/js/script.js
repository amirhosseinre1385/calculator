const buttons = document.querySelector('.buttons');
const display = document.querySelector('.result');
const plus = document.getElementById('btn-+');
const min = document.getElementById('btn--');
const mosavi = document.getElementById('btn-=');
const backslash = document.getElementById('btn=');
const zarb = document.getElementById('btn-*');
const tavan = document.getElementById('btn-**');


let the = '';
let memory = 0;


buttons.addEventListener('click' , inputNumber);
function inputNumber(event){
    const data = event.target.dataset.input;
    if(data ==! undefined){
        display.value += data
    }
}


min.addEventListener('click' , () =>{
    the = 'minus';
    memory = Number(display.value);
    display.value = ' ';
});
plus.addEventListener('click' , () =>{
    the = 'plus';
    memory = Number(display.value);
    display.value = ' ';
});
backslash.addEventListener('click' , () =>{
    the = 'divide';
    memory = Number(display.value);
    display.value = ' ';
});
zarb.addEventListener('click' , () =>{
    the = 'zarb';
    memory = Number(display.value);
    display.value = ' ';
});
tavan.addEventListener('click' , () =>{
    the = 'tavan';
    memory = Number(display.value);
    display.value = ' ';
});