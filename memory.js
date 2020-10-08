var cards = ["+2-rojo.PNG","+2-verde.PNG","7-azul.PNG","9-amarillo.PNG","+4.PNG","cambio-amarillo.PNG","cambio-azul.PNG","color.PNG","prohibido-amarillo.PNG","prohibido-rojo.PNG"];
var cover = "portada.PNG";
const LIMIT_CARDS = 20;
var random_numbers = new Array(LIMIT_CARDS);
var pairs = new Array(); //Store the id of the pair cards

window.onload = function() {    
    getRandomNumbers();
}

function getRandomNumbers() {
    for(var n = 0; n < LIMIT_CARDS; n++) {
        var number = Math.floor(Math.random() * 10);

        while(random_numbers.filter(x => x === number).length >= 2) {
            number = Math.floor(Math.random() * 10);
        }
        random_numbers[n] = number;
    }
}

