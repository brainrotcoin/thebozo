document.addEventListener("DOMContentLoaded", function () {
    // Apply floating effect to mascot
    let mascot = document.querySelector(".mascot");
    if (mascot) {
        setInterval(() => {
            mascot.classList.toggle("floating");
        }, 3000);
    }

    // Random Glitch Text Effect
    let glitchTexts = document.querySelectorAll(".glitch-text");
    setInterval(() => {
        glitchTexts.forEach((text) => {
            text.style.animation = "glitch 0.2s infinite alternate";
        });
    }, 1000);
});