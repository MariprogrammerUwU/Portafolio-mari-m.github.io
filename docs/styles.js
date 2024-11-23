const container = document.createElement('div');
container.id = 'firefly-container';
document.body.appendChild(container);

let totalStars = 0;

function createFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');

  const size = Math.random() * 6 + 5;
  firefly.style.width = `${size}px`;
  firefly.style.height = `${size}px`;

  const leftPos = Math.random() * 100;
  const topPos = Math.random() * 100;

  firefly.style.left = `${leftPos}vw`;
  firefly.style.top = `${topPos}vh`;

  container.appendChild(firefly);

  totalStars++;
}

function removeFirefly() {
  const stars = document.querySelectorAll('.firefly');
  if (stars.length > 100) {
    container.removeChild(stars[0]);
    totalStars--;
  }
}

function generateStars() {
  if (totalStars < 100) {
    createFirefly();
  }

  removeFirefly();

  setTimeout(generateStars, 300);
}

generateStars();

const style = document.createElement('style');
style.innerHTML = `
  #firefly-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .firefly {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(160, 66, 226, 0.8), rgba(160, 66, 226, 0.1));
    animation: blink 2s infinite alternate, drift 10s infinite linear;
    pointer-events: none;
    mix-blend-mode: screen;
  }

  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes drift {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(10vh) translateX(10vw);
    }
    100% {
      transform: translateY(20vh) translateX(20vw);
    }
  }
`;
document.head.appendChild(style);

