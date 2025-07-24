<!-- script.js -->
const messages = [
    "Are you sure?",
    "Really sure??",
    "Pookie please...",
    "Think about it!",
    "Don’t break my heart 💔",
    "Noooo don't say that!",
    "Last chance! 💘",
    "One more try?",
    "You're joking right?? 😭",
    "Just say yes arianeee!"
];

let messageIndex = 0;
let yesButton = document.querySelector('.yes-button');
let noButton = document.querySelector('.no-button');
let yesFontSize = 24;
let noFontSize = 24;

function handleNoClick() {
    // Update no button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Shrink no button
    noFontSize *= 0.92;
    noButton.style.fontSize = `${noFontSize}px`;

    // Random position for no button
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    noButton.style.left = `${randX}px`;
    noButton.style.top = `${randY}px`;

    // Grow yes button faster
    yesFontSize *= 1.15;
    yesButton.style.fontSize = `${yesFontSize}px`;
}

function handleYesClick() {
    window.location.href = "yes.html";
}
