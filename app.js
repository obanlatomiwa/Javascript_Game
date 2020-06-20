let score, roundScore, activePlayer, gameInProgress, lastDice;

init ();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gameInProgress){
        // randomize dice
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
    
        // change display
        let dice_display_1 = document.getElementById('dice-1');
        let dice_display_2 = document.getElementById('dice-2');
        dice_display_1.style.display = 'block';
        dice_display_2.style.display = 'block';
        dice_display_1.src = 'dice-' + dice1 + '.png';
        dice_display_2.src = 'dice-' + dice2 + '.png';

    
        // change the player to the next person
        if (dice1 === 6 && dice2 === 6){
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();

        }
        else if (dice1 !== 1 && dice2 !== 1 ){
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
        // lastDice === dice;
    };
});


// implement the hold functionality
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gameInProgress){
        // update the scores
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        let inputScore = document.querySelector('.final-score').value;
        let winningScore;
        // check for the winner
        if (inputScore){
            winningScore = inputScore;
        }else{
            winningScore = 100;
        }
        if (score[activePlayer] >= winningScore){
            document.getElementById('name-' + activePlayer).textContent = 'Winner !!!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameInProgress = false;
        }else{
        // change the player to the next person
        nextPlayer();
    
        }    
    
    };
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameInProgress = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer(){
    // change players
    activePlayer === 1 ? activePlayer = 0 : activePlayer =  1;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';


}

