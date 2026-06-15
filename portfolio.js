
// =========================
// Smooth Scroll Navigation
// =========================

document.querySelectorAll(".navLinks a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        const navLinks = document.querySelector(".navLinks");
        navLinks?.classList.remove("showMenu");
    });
});

// =========================
// Dark / Light Mode Toggle
// =========================

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight = document.body.classList.contains("light");

        themeBtn.classList.toggle("fa-moon", !isLight);
        themeBtn.classList.toggle("fa-sun", isLight);

        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}

// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuToggle");
const navLinks = document.querySelector(".navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("showMenu");
    });
}

//=====================================
//=====================================

<script>
const texts = [
    "GIS & Remote Sensing Specialist",
    "UAV Mapping Specialist",
    "LiDAR Data Analyst",
    "Geospatial Data Analyst",
    "Spatial Data Analyst",
    "Urban Growth Modelling Researcher"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    const typingElement = document.getElementById("typingText");

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
</script>