export function initializeScrollSpy() {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#links a");

    function updateCurrentSection() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (
                window.scrollY >= top - 150 &&
                window.scrollY < top + height - 150
            ) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("selected");

            if (link.hash === "#" + currentSection) {
                link.classList.add("selected");
            }

        });

    }

    window.addEventListener("scroll", updateCurrentSection);

    updateCurrentSection();
}