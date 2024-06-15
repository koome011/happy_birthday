// script.js

document.getElementById('wish-button').addEventListener('click', () => {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.style.display = 'block';
    confettiContainer.innerHTML = '';
    createConfetti();
    createHearts();
    playAudio();
});

function createConfetti() {
    const confettiCount = 100;
    const colors = ['#ff0', '#ff6', '#f66', '#6f6', '#66f'];
    
    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        document.getElementById('confetti-container').appendChild(confetti);
    }
}

function createHearts() {
    const heart1 = document.createElement('div');
    heart1.classList.add('heart', 'heart1');
    document.body.appendChild(heart1);

    const heart2 = document.createElement('div');
    heart2.classList.add('heart', 'heart2');
    document.body.appendChild(heart2);
}

function playAudio() {
    const audio = document.getElementById('birthday-audio');
    audio.play().catch(error => {
        console.log("Audio playback failed:", error);
        alert("Please click the button again to allow audio playback.");
    });
}

const confettiStyles = document.createElement('style');
confettiStyles.innerHTML = `
    .confetti {
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        opacity: 0.8;
        animation: fall 5s linear infinite;
    }

    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }

    .heart {
        position: absolute;
        bottom: -150px;
        width: 60px;
        height: 60px;
        background-color: red;
        transform: rotate(45deg);
        animation: floatHeart 8s ease-in-out infinite;
    }

    .heart::before,
    .heart::after {
        content: '';
        position: absolute;
        width: 60px;
        height: 60px;
        background-color: red;
        border-radius: 50%;
    }

    .heart::before {
        top: -30px;
        left: 0;
    }

    .heart::after {
        top: 0;
        left: -30px;
    }

    @keyframes floatHeart {
        0% {
            transform: translateY(0) rotate(45deg);
        }
        50% {
            transform: translateY(-200px) rotate(45deg);
        }
        100% {
            transform: translateY(0) rotate(45deg);
        }
    }

    .heart1 {
        left: 10%;
        animation-delay: 1s;
    }

    .heart2 {
        left: 70%;
        animation-delay: 3s;
    }
`;
document.head.appendChild(confettiStyles);
