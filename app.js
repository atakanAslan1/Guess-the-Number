const inputField = document.querySelector('.guessed-number');
const container = document.querySelector('.container');
const submitButton = document.querySelector('.submit-button');
const message = document.querySelector('.message');

// generate random number
const randomNumber = Math.floor(Math.random()*10) +1;


let chances = 3;
let score= 100;

submitButton.addEventListener('click', function(){
    let guessedNumber = parseInt(inputField.value);
    
    if(chances > 0){
        if (guessedNumber === randomNumber) {
            message.textContent = 'Congrats You Guessed The Right Number';
            inputField.value = '';  
            inputField.disabled = true;
            submitButton.disabled = true;
            // show the score
            const scoreElement = document.createElement('h2');
            scoreElement.textContent = `Your Score is ${score}`;
            container.appendChild(scoreElement);
            scoreElement.style.backgroundColor = '#F9F871';
            // create new game button
            const newGame = document.createElement('button');
            newGame.textContent = 'New Game';
            newGame.classList.add('new-game-button');
            container.appendChild(newGame);
            newGame.addEventListener('click', function(){
                location.reload();
            });
           

        } else if (guessedNumber > randomNumber || guessedNumber < randomNumber) {
            chances--;
            score -= 20;
            message.textContent = `Wrong Number, You have ${chances} chances left`;
            message.style.backgroundColor = '#D65DB1';
            message.style.color = 'white';
            
            inputField.value = '';
        }   if(chances ===0) {
            message.textContent = `You Lost, The Number was ${randomNumber}`;
            inputField.disabled = true;
            submitButton.disabled = true;
            inputField.value = ''; 
            message.style.backgroundColor = '#845EC2';
            message.style.textAlign = 'center';
            const newGame = document.createElement('button');
            newGame.textContent = 'New Game';
            newGame.classList.add('new-game-button');

            container.appendChild(newGame);
            newGame.addEventListener('click', function(){
                location.reload();
            });
        }
        
    }});



    
