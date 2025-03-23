const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;


async function init() {
    let currentGuess = '';
    let currentRow = 0;

    function addLetter (letter) {
        // add letter to the end
        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter;
        } else {
            // replace last letter
            currentGuess = currentGuess.substring(0, currentGuess.length -1) + letter;
        }
        letters[ANSWER_LENGTH * currentRow + currentGuess.length -1].innerText = letter;
    }

    async function commit() {
        if (currentGuess.length !== ANSWER_LENGTH) {
            // do nothing
            return;
        }

        // TODO validate the word

        // TODO do all of the marking as "correct", "close" or "wrong"

        // TODO did they win or lose?

        currentRow++;
        currentGuess = '';  
    }

    function backspace() {
        currentGuess = currentGuess.substring(0, currentGuess.length -1);
        letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
    }


    document.addEventListener('keydown', function handleKeyPress (event){
        const action = event.key;

        console.log(action);

        if (action === 'Enter') {
            commit();
        } else if (action === 'Backspace') {
            backspace();
            } else if (isLetter(action)) {
                addLetter(action.toUpperCase())
            } else {
                // do nothing
            }
        });
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);

}

init();