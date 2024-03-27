
let value = 20;

document.getElementById("display").addEventListener("click", diceRoll);

document.querySelector("html").addEventListener("keyup", (e) => {

    if (e.key === 'Enter') {
        setTimeout(diceRoll, 10);
    }
    
});

document.getElementById("diceCount").addEventListener("mouseup", changeDiceCount)

function changeDiceCount(e) {
    var max_roll = value * Math.max(document.getElementById("diceCount").value, 1);
    document.getElementById("display").textContent = `1 - ${max_roll}`;
}

for (i = 0; i < document.getElementsByClassName("dice-option").length; i++) {
    document.getElementsByClassName("dice-option")[i].addEventListener("click", setDiceValue);
}

function setDiceValue(e) {
    value = Number(e.target.textContent.substring(1));
    var max_roll = value * Math.max(document.getElementById("diceCount").value, 1);;
    document.getElementById("display").textContent = `1 - ${max_roll}`;
}

function diceRoll() {
    var dice_count = Math.max(document.getElementById("diceCount").value, 1);
    var answer = 0;
    for (let i = 0; i < dice_count; i++){
        answer += Math.ceil(Math.random() * value)
    }
    document.getElementById("answer").textContent = answer;
}
