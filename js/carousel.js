export function initializeCarousel() {

    const slides = document.querySelectorAll(".project-slide");
    if (!slides.length) return;

    const dots = document.querySelectorAll(".dot");

    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    if (!next || !prev) return;

    let current = 0;

    function show(index) {

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    next.addEventListener("click", () => {

        current = (current + 1) % slides.length;
        show(current);

    });

    prev.addEventListener("click", () => {

        current = (current - 1 + slides.length) % slides.length;
        show(current);

    });

}