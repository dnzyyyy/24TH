const messages = [
  "Are you really sure about that?",
  "Maybe think again 😢",
  "C'mon, he's adorable!",
  "He brings you snacks, remember?",
  "Pretty perfect, isn't he?",
  "You know he's trying his best 💘",
  "Okay now you're just teasing 😭",
  "You're breaking his perfect heart!",
  "Last chance... 😔",
  "Just admit it, he's the best! 💖"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Grow the Yes button a bit
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.1}px`;

  // Move the No button randomly
  const maxX = window.innerWidth - noButton.offsetWidth - 20;
  const maxY = window.innerHeight - noButton.offsetHeight - 20;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
