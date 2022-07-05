var display = document.querySelector('#display');
var numbers = document.querySelectorAll('.number');
var fnt = document.querySelectorAll('.fnt');
var inputsRnd = document.querySelectorAll('.rnd-range');
var value = "";
var resultado = 0;
var fieldFocus = "display";

// if press a key
window.addEventListener("keypress", function(e){
    let inp = e.key;
    controlInput(inp);
});

// if press a button
numbers.forEach(element => {
    element.addEventListener('click', function(e) {
        let number = element.id.split('b')[1];
        controlInput(number);
    })
});

fnt.forEach(element => {
    element.addEventListener('click', function(e) {
        controlInput(element.id);
    })
});

function controlInput(inp) {
    if(inp >= 0 && inp <= 9 && inp != " ") {
        addValue(inp);
        console.log(inp);
    } else if(inp == '+' || inp == '-' || inp == '/' || inp == '*') {
        addValue(" "+inp+" ");
    } else {
        switch (inp) {
            case '=':
                calculateResult();
                break;
            case 'c':
                emptyField();
                break;
            case 'rnd':
                numberRandom();
                break;
        
            default:
                console.log("no me sirve");
                break;
        }
    }
}


function focusRandom() {
    fieldFocus = "random";
}
function focusDisplay() {
    fieldFocus = "display";
}

function addValue(val) {
    if(fieldFocus=="display"){
        value+=val;    
    }
    refreshDisplay();
}

function refreshDisplay() {
    display.innerHTML = value;
}


function calculateResult() {
    resultado = eval(value);
    value = resultado;
    refreshDisplay();
}

function emptyField() {
    value = "";
    resultado = 0;
    refreshDisplay();
}

function numberRandom() {
    let min = document.querySelector('.rnd-range-min').value;
    let max = document.querySelector('.rnd-range-max').value;
    min = Number(min);
    max = Number(max);

    if(min != ''){
        if(max != ''){
            const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    
            addValue(random(min,max));
        }
    }
    //console.log("termino" + min + "_" + max);

}