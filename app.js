/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score, roundScore, activePlayer;

score = [0, 0];
activePlayer = 0;
roundScore = 0;

document.querySelector('.dice').style.display = 'none';

// document.querySelector('#current-' + activePlayer).textContent = dice;
// let x = document.querySelector('#score-0').textContent;
// console.log(x);


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    // randomize dice
    let dice = Math.floor(Math.random() * 6) + 1;

    // change display
    let dice_display = document.querySelector('.dice');
    dice_display.style.display = 'block';
    dice_display.src = 'dice-' + dice + '.png';

    // change the player to the next person
    if (dice !== 1){
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }});

// implement the hold functionality
document.querySelector('.btn-hold').addEventListener('click', function(){
    // update the scores
    score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

    // check for the winner
    if (score[activePlayer] >= 20){
        document.getElementById('name-' + activePlayer).textContent = 'Winner !!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else{
    // change the player to the next person
    nextPlayer();

    }    

});

function nextPlayer(){
    // change players
    activePlayer === 1 ? activePlayer = 0 : activePlayer =  1;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}