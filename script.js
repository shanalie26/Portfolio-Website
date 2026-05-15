function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* ================= SCROLL REVEAL ================= */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

});

/* ================= DARK MODE ================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "☀️";
    } else {
        themeToggle.innerHTML = "🌙";
    }

});

/* ================= PROJECT FILTERS ================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active")
            .classList.remove("active");

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach((card) => {

            if (
                filter === "all" ||
                card.getAttribute("data-category") === filter
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});