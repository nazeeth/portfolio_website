// Refine Website JavaScript

const phrases = ["Innovate.", "Code.", "Create."];
let i = 0;
let j = 0;
let currentPhrase = "";
let isDeleting = false;
const dynamicText = document.querySelector(".home-dynamicText");

function typeWriter() {
  if (!dynamicText) return;
  
  if (!isDeleting) {
    currentPhrase = phrases[i].substring(0, j + 1);
    dynamicText.innerText = currentPhrase;
    j++;
    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(typeWriter, 1500); // Pause at end
      return;
    }
  } else {
    currentPhrase = phrases[i].substring(0, j - 1);
    dynamicText.innerText = currentPhrase;
    j--;
    if (j === 1) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }
  setTimeout(typeWriter, isDeleting ? 100 : 150); // speed
}

window.onload = typeWriter;



document.querySelector('.cssbuttons-io-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'portfolio.html';
    }, 800);
});
