export function select(link) {

    document.querySelectorAll("#links a").forEach(option => {
        option.classList.remove("selected");
    });

    link.classList.add("selected");

    document.getElementById("nav").classList.remove("responsive");
}

export function responsiveMenu() {

    document
        .getElementById("nav")
        .classList.toggle("responsive");
}

export function initializeNavigation() {

    document
        .querySelectorAll("#links a")
        .forEach(link => {

            link.addEventListener("click", () => {
                select(link);
            });

        });

        document
        .getElementById("nav-icon")
        .addEventListener("click", responsiveMenu);
}