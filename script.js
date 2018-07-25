"use strict";

let counter = 0;

function start() {
    //clear boxes
    for (let i = 1; i < 10; i++){
        clearBox(i);
    }
    document.turn = "X";
    document.winner = null;
}
//If the box is empty a player can choose it and once a player goes, it switches players.
//You can not click the same box twice.
function yourTurn(box) {
    if (document.winner !== null){
        alert("Sorry, a winner has already been declared. Try again")
    } else if (box.innerText === '') {
        box.innerText = document.turn;
        counter++;
        console.log(counter);
        switchPlayer();
        if (counter === 9){
            alert("Cat's Game - Try Again")
            box.winner = document.turn;
        }
    } else {
        alert("This box is already used.")
    }
}

//Will switch the player from X to O
function switchPlayer(){
    if (winner(document.turn)){
        alert("Congrats! You won!");
        document.winner = document.turn; 
    } else if (document.turn === "X"){
        document.turn = "O";
    } else {
        document.turn = "X";
    }
}

function winner(turn) {
    let result = false;
    if (checkRow(1, 2, 3, turn) ||
        checkRow(4, 5, 6, turn) ||
        checkRow(7, 8, 9, turn) ||
        checkRow(1, 4, 7, turn) ||
        checkRow(2, 5, 8, turn) ||
        checkRow(3, 6, 9, turn) ||
        checkRow(1, 5, 9, turn) ||
        checkRow(7, 5, 3, turn)) {
            result = true;
        }
        return result;
}

//Compares the value of the box to the rows we pass in
function checkRow(a, b, c, turn){
    let result = false;
    if (getBox(a) === turn && getBox(b) === turn && getBox(c) === turn) {
        result = true;
    }
    return result;
}

//Returns the value (X or O) of the box
function getBox(number) {
    return document.getElementById(number).innerText;
}

function clearBox(number){
    document.getElementById(number).innerText = ' ';
}