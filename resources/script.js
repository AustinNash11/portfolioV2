//varibles for the slideshow function
const projectIMG = document.getElementById("projectIMG");
const caption = document.getElementById("caption")
const buttons = document.getElementsByClassName("button");
const link  = document.getElementById("link");
buttons[0].style.backgroundColor = "#373c3c";
//slide show function
function slideShow(i){
    // a switch case to change the projects
    switch(i) {
        //changing to the message game project
        case 0:
            projectIMG.src = "./resources/Images/Screenshot 2024-08-15 at 6.46.01 PM.png";
            caption.innerHTML = "Message game!";
            link.href = "https://github.com/AustinNash11/messageGame";
            break;
        // changing to a c# tictactoe game
        case 1:
            projectIMG.src = "./resources/Images/Screenshot 2024-08-17 at 12.38.39 PM.png";
            caption.innerHTML = "C# TicTacToe Game";
            link.href = "#";
            break;
        //changing to a place holder
        case 2:
            projectIMG.src = "./resources/Images/IMG_4967.JPG";
            caption.innerHTML = "Place holder"
            link.href = "#";
            break;
    }

}
// event listeners for each radio button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){slideShow(i);
    })
}


//TicTacToe GAME

//Varibles
const move = document.getElementsByClassName("square");
const newGameButton = document.getElementById("newGameButton");
//geting the computers move
function computerMove(){
    let pos = Math.floor(Math.random()* 9);
    if (move[pos].innerHTML === ""){
        move[pos].innerHTML = "O";
    }
    else{
        computerMove();
    }
}
//check win
function checkWin(){
    //player won
    if(move[0].innerHTML === "X" && move[1].innerHTML === "X" && move[2].innerHTML === "X"){
        alert("You Won!");
    }
    else if(move[3].innerHTML === "X" && move[4].innerHTML === "X" && move[5].innerHTML === "X"){
        alert("You Won!");
    }
    else if(move[6].innerHTML === "X" && move[7].innerHTML === "X" && move[8].innerHTML === "X"){
        alert("You Won!");
    }
    else if(move[0].innerHTML === "X" && move[3].innerHTML === "X" && move[6].innerHTML === "X"){
        alert("You Won!");
    }
    else if(move[1].innerHTML === "X" && move[4].innerHTML === "X" && move[7].innerHTML === "X"){
        alert("You Won!");
    }
    else if(move[2].innerHTML === "X" && move[5].innerHTML === "X" && move[8].innerHTML === "X"){
        alert("You Won");
    }
    else if(move[0].innerHTML === "X" && move[4].innerHTML === "X" && move[8].innerHTML === "X"){
        alert("You Won!");
    }
    else if(move[2].innerHTML === "X" && move[4].innerHTML === "X" && move[6].innerHTML === "X"){
        alert("You Won!");
    }
    //computer won
    else if (move[0].innerHTML === "O" && move[1].innerHTML === "O" && move[2].innerHTML === "O"){
        alert("Computer Won!");
    }
    else if(move[3].innerHTML === "O" && move[4].innerHTML === "O" && move[5].innerHTML === "O"){
        alert("Computer Won!");
    }
    else if(move[6].innerHTML === "O" && move[7].innerHTML === "O" && move[8].innerHTML === "O"){
        alert("Computer Won!");
    }
    else if(move[0].innerHTML === "O" && move[3].innerHTML === "O" && move[6].innerHTML === "O"){
        alert("Computer Won!");
    }
    else if(move[1].innerHTML === "O" && move[4].innerHTML === "O" && move[7].innerHTML === "O"){
        alert("Computer Won!");
    }
    else if(move[2].innerHTML === "O" && move[5].innerHTML === "O" && move[8].innerHTML === "O"){
        alert("Computer Won");
    }
    else if(move[0].innerHTML === "O" && move[4].innerHTML === "O" && move[8].innerHTML === "O"){
        alert("Computer Won!");
    }
    else if(move[2].innerHTML === "O" && move[4].innerHTML === "O" && move[6].innerHTML === "O"){
        alert("Computer Won!");
    }
}




//The main function
function ticTacToe(i){
    if(move[i].innerHTML === ""){
        move[i].innerHTML = "X";
        //computer move
        computerMove();
        checkWin();
    }
}
//getting players moves
for (let i = 0; i < move.length; i++) {
    move[i].addEventListener('click', function(){ticTacToe(i);
    })
}


//Creating a new game
function newGame(){
    for (let i = 0; i < move.length; i++){
        move[i].innerHTML = "";
    }
}



newGameButton.addEventListener('click',newGame);