function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// ----------------------------------------
// Scroll Animation for Skills (One by One)
// ----------------------------------------

const skillCards = document.querySelectorAll(".skill-card");

function revealSkills() {
    let delay = 0;

    skillCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 80; 

        if (cardTop < triggerPoint) {
            setTimeout(() => {
                card.classList.add("visible");
            }, delay);

            delay += 150; // delay between each card
        }
    });
}

window.addEventListener("scroll", revealSkills);
