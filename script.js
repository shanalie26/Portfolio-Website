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

/* ================= PARTICLES ================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i = 0; i < 80; i++){

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        size: Math.random() * 2 + 1,

        speedY: Math.random() * 0.3 + 0.1,

        opacity: Math.random() * 0.5 + 0.2
    });

}

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {

        const dark =
            document.body.classList.contains("dark-mode");

        ctx.beginPath();

        ctx.fillStyle = dark
            ? `rgba(255,255,255,${p.opacity})`
            : `rgba(120,120,120,${p.opacity})`;

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

        p.y += p.speedY;

        if(p.y > canvas.height){
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }

    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});