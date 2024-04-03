function select(link) {
    var options = document.querySelectorAll('#links a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";

    link.className = "selected";

    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");

    if (x.className === "") {
        x.className = "responsive";
    }
    else {
        x.className = "";
    }
}

window.onscroll = function () {
    skillsEffect();
};

function skillsEffect() {
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;

    if (skills_distance >= 300) {
        document.getElementById("cpp").classList.add("progress-bar-cpp");
        document.getElementById("ue").classList.add("progress-bar-ue");
        document.getElementById("cs").classList.add("progress-bar-cs");
        document.getElementById("unity").classList.add("progress-bar-unity");
        document.getElementById("oop").classList.add("progress-bar-oop");
        document.getElementById("git").classList.add("progress-bar-git");
        document.getElementById("htmlcssjs").classList.add("progress-bar-htmlcssjs");
        document.getElementById("java").classList.add("progress-bar-java");
        document.getElementById("sql").classList.add("progress-bar-sql");
    }
}