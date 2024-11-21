// script.js - JavaScript for Wheel of Fortune game

document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.querySelector('.spin-button');
    const wheel = document.querySelector('.wheel');
    
    spinButton.addEventListener('click', () => {
        // Disable the button while spinning
        spinButton.disabled = true;

        // Randomly determine the spin angle (between 720 and 1440 degrees)
        const spinAngle = Math.floor(Math.random() * 720) + 720;
        
        // Rotate the wheel
        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${spinAngle}deg)`;

        // Re-enable the button after the spin completes
        setTimeout(() => {
            spinButton.disabled = false;
            // Determine prize logic here if needed
            alert('Spin complete! Now guess a letter or solve the puzzle!');
        }, 3000);
    });
});
