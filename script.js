const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const crushNameInput = document.getElementById('crushName');
const startButton = document.getElementById('startButton');
const displayName = document.getElementById('displayName');
const messageContainer = document.getElementById('messageContainer');
const nextPageButton = document.getElementById('nextPageButton');
const loveEffect = document.querySelector('.love-effect');

const messages = [
    "Happy Best Friend Day!",
    "Stay here, don't leave—let's grow old together, side by side.",
    "In both happiness and sorrow, you're always my safe place.",
    "I can't imagine how empty my days would be without you.",
    "If you ever feel down or lost, just stay here with me.",
    "Let me make everything better so you’ll always feel at home with me. (hajhajhh kidding chatgpt mes nato)"
];

let currentMessageIndex = 0;

function showMessageWithTypingAnimation() {
    if (currentMessageIndex < messages.length) {
        const text = messages[currentMessageIndex];
        const messageElement = document.createElement('p'); 
        messageElement.classList.add('message'); 
        messageContainer.appendChild(messageElement); 

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                messageElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                currentMessageIndex++;
                if (currentMessageIndex < messages.length) {
                    setTimeout(showMessageWithTypingAnimation, 1000); 
                }
            }
        }, 100); 
    }
}

function createLoveEffect() {
    const emojis = ["💖", "😍", "💌", "🥰", "💕", "💘", "💓", "💞"];
    for (let i = 0; i < 50; i++) { 
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';
        loveEffect.appendChild(span);
    }
}

function shakeButton() {
    startButton.classList.add('shake');
    setTimeout(() => {
        startButton.classList.remove('shake');
    }, 500);
}

startButton.addEventListener('click', () => {
    const name = crushNameInput.value.trim();
    if (name) {
        // Best Friend Day special messages
        if (name === "Anebur") {
            alert("Happy Best Friend Day, Anebur! You're the sunshine in my life! ahajhajhajahahahj joke 🌞💖");
        } else if (name === "Keilala") {
            alert("Best Friend Day shoutout to Keilala! Thanks for always being my rock! missu so much pookiee stay safe and loveu good luck sa acads hajhajajah may pasok na kayo men 🪨❤️");
        } else if (name === "Rhianna") {
            alert("Rhianna, you're an amazing best friend! I missu so much pookiee stay safe and loveu good luck sa acads! 🎉💫");
        } else if (name === "Ube") {
            alert("Happy Best Friend Day, Ube! Life is sweeter with you around nd I missu so much pookiee stay safe and loveu good luck sa acads hajhajajah may pasok na kayo men! 🍠💜");
        }

        displayName.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        currentMessageIndex = 0;
        messageContainer.innerHTML = ''; 
        showMessageWithTypingAnimation();
    } else {
        shakeButton();
        alert("enter your name!");
    }
});

nextPageButton.addEventListener('click', () => {
    window.location.href = 'Flower.html';
});

createLoveEffect();
