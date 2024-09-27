  document.addEventListener("DOMContentLoaded", function() {
    const randomCounter = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    document.querySelector('.counter-number').textContent = randomCounter;
  });

