// Grab what we need
const buttonChangeBackground = document.querySelector('.button');
const headingText = document.querySelector('.text');

// Function
function changeColors() {
    let randomBackgroundColor = Math.floor(Math.random()*16777215).toString(16);
    let randomTextColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = `#${randomBackgroundColor}`;
    document.querySelector('.text').style.color = `#${randomTextColor}`;
}

// Add event listener
buttonChangeBackground.addEventListener('click', changeColors);
buttonChangeBackground.addEventListener('click', changeColors);