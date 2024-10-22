// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const descriptions = [
        "Stay connected with chathub.",
        "Chat securely with end-to-end encryption.",
        "Access all your messaging apps in one place.",
        "Experience seamless cross-platform chatting."
    ];
    
    let currentIndex = 0;

    const descriptionElement = document.getElementById("description");

    function changeDescription() {
        currentIndex = (currentIndex + 1) % descriptions.length;
        descriptionElement.textContent = descriptions[currentIndex];
    }

    setInterval(changeDescription, 3000); // Change description every 3 seconds

    const mobileMenu = document.getElementById('mobile-menu');
    const navContent = document.querySelector('.nav-content');
    
    mobileMenu.addEventListener('click', () => {
        navContent.classList.toggle('show');
    });
    

});
