  document.addEventListener("DOMContentLoaded", function() {
    function updateCounter() {
      const randomCounter = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      document.querySelector('.counter-number').textContent = randomCounter;
    }

    updateCounter();
    
    setInterval(function() {
      updateCounter();
    }, Math.random() * (10000 - 5000) + 5000);
  });
