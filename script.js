// script.js - JavaScript for Wheel of Fortune game

document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.querySelector('.wheel .button');
    const wheelImage = document.querySelector('.wheel img');
    const lettersBoard = document.querySelector('.letters');
    const puzzlePhrase = "WHEEL OF FORTUNE";
    let revealedLetters = Array(puzzlePhrase.length).fill('_');

    // Initialize the puzzle board
    function setupPuzzle() {
        let displayPuzzle = '';
        for (let i = 0; i < puzzlePhrase.length; i++) {
            if (puzzlePhrase[i] === ' ') {
                displayPuzzle += '  '; // Add extra space for word gaps
            } else {
                displayPuzzle += revealedLetters[i] + ' ';
            }
        }
        lettersBoard.textContent = displayPuzzle.trim();
    }

    setupPuzzle();
    
    spinButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Disable the button while spinning
        spinButton.disabled = true;

        // Randomly determine the spin angle (between 720 and 1440 degrees)
        const spinAngle = Math.floor(Math.random() * 720) + 720;
        
        // Rotate the wheel image
        wheelImage.style.transition = 'transform 3s ease-out';
        wheelImage.style.transform = `rotate(${spinAngle}deg)`;

        // Re-enable the button after the spin completes
        setTimeout(() => {
            spinButton.disabled = false;
            // Determine prize logic here if needed
            alert('Spin complete! Now guess a letter or solve the puzzle!');
        }, 3000);
    });
});
