const prompt = require('prompt-sync')({sigint: true});

let player1  = (prompt('Lets play Rock, Paper, Scissors. Player 1 enter rock, paper, or scissors. '));


let player2 = (prompt('Your turn! Player 2.  '));


if (player1 === 'rock' && player2 === 'paper'){ 
    console.log('Player 2 is the winner!!');

} else if (player1 === 'rock' && player2 === 'scissors'){
    console.log('Player 1 is the winner!!');

} else if ( player1 === 'rock' && player2 === 'rock'){
    console.log('It is a tie');

} else if (player1 === 'paper' && player2 === 'rock'){
    console.log('Player one is the winner!');

} else if (player1 === 'paper' && player2 === 'scissors'){
    console.log('Player 2 is the winner!!');

} else if (player1 === 'paper' && player2 === 'paper'){
    console.log('It is a tie!! ');

} else if (player1 === 'scissors' && player2 === 'rock'){
    console.log('Player2 is the winner!!');

} else if( player1 === 'scissors' && player2 === 'paper'){
    console.log('Player 1 is the winner!! ')

} else if ( player1 === 'scissors' && player2 === 'scissors'){
    console.log('It is a tie!! ')

} else {
    console.log('Not an option')
}

 


