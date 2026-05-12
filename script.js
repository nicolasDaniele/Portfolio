function select(link) {

    const options = document.querySelectorAll('#links a');

    options.forEach(option => {
        option.classList.remove('selected');
    });

    link.classList.add('selected');

    document.getElementById('nav').className = '';
}

function responsiveMenu() {

    const nav = document.getElementById('nav');

    nav.classList.toggle('responsive');
}

/* =========================
   ACTIVE MENU ON SCROLL
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150 &&
            window.scrollY < sectionTop + sectionHeight - 150) {

            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("selected");

        const href = link.getAttribute("href").replace("#", "");

        if (href === currentSection) {
            link.classList.add("selected");
        }
    });
});