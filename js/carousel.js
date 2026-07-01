export function initializeCarousel() {

    const slides = document.querySelectorAll(".project-slide");
    if (!slides.length) return;

    const dots = document.querySelectorAll(".dot");

    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    if (!next || !prev) return;

    let current = 0;

    function show(index, direction) {

        document.querySelectorAll(".project-slide video")
        .forEach(video => {
            video.pause();
            video.currentTime = 0;
        });

        slides.forEach(slide => {
            slide.classList.remove(
                "active",
                "from-left",
                "from-right"
            );
        });

        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");

        if(direction === "next")
            slides[index].classList.add("from-right");
        else
            slides[index].classList.add("from-left");

        dots[index].classList.add("active");
    }

    next.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        show(current, "next");
    });

    prev.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        show(current, "prev");
    });
}