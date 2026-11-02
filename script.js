


document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".nxMenu");
    const navbar = document.querySelector(".nxNavbar");
    const menuIcon = menu.querySelector("i");

    menu.addEventListener("click", function () {

        navbar.classList.toggle("active");

        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");

    });

    document.querySelectorAll(".nxNavbar a").forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-xmark");
        });
    });

});
