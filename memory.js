var cards = ["+2-red.png","+2-green.png","7-blue.png","9-yellow.png","+4.png","color-change-yellow.png","color-change-blue.png","color.png","prohibited-yellow.png","prohibited-red.png"];
var cover = "cover.png";
const LIMIT_CARDS = 20;
var random_numbers = new Array(LIMIT_CARDS);
var pairs = new Array(); //Store the id of the pair cards

window.onload = function() {    
    getRandomNumbers();
    createCards();
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

function createCards() {
    var container = document.getElementById("container");

    for(var n = 0; n < random_numbers.length; n++) {
        var card = document.createElement("img");
        card.src = "Cards/" + cover;
        card.setAttribute("class",cards[random_numbers[n]]);
        card.setAttribute("id",n);
        card.setAttribute("onclick","play(id)");
        container.appendChild(card);
    }
}

function play(id_card) {
    var type_card = document.getElementById(id_card);
    pairs.push(id_card);
    type_card.src = "Cards/" + type_card.getAttribute("class");

    if(pairs.length == 2) {
        enableDisableEvent("d");
        setTimeout(turnCard,1000);
    }
}

function enableDisableEvent(type) {
    var imgs = document.getElementsByTagName("img");

    for(var n = 0; n < random_numbers.length; n++) {
        if(type == "d") {
            imgs[n].removeAttribute("onclick");
        } else {
            imgs[n].setAttribute("onclick","play(id)");
        }
    }
}

function turnCard() {
    var card_a = document.getElementById(pairs[0]);
    var card_b = document.getElementById(pairs[1]);

    if(card_a.getAttribute("src") != card_b.getAttribute("src")) {
        card_a.src = "Cards/" + cover;
        card_b.src = "Cards/" + cover;
    }
    enableDisableEvent("e");
    pairs = new Array();
}