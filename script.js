function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* ================= DARK MODE ================= */

const desktopToggle = document.getElementById("theme-toggle");
const mobileToggle = document.getElementById("theme-toggle-mobile");

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const darkEnabled =
        document.body.classList.contains("dark-mode");

    if(darkEnabled){
        desktopToggle.innerHTML = "☀️";

        if(mobileToggle){
            mobileToggle.innerHTML = "☀️";
        }

    }else{
        desktopToggle.innerHTML = "🌙";

        if(mobileToggle){
            mobileToggle.innerHTML = "🌙";
        }
    }
}

desktopToggle.addEventListener("click", toggleDarkMode);

if(mobileToggle){
    mobileToggle.addEventListener("click", toggleDarkMode);
}