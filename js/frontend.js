    // SIDE NAVBAR 
let navButton = document.querySelector("header #nav-button");
let sidebar = document.querySelector(".nav");

navButton.onclick = function () {
    sidebar.style = "display: flex";
    body.style = "overflow-y: hidden";
    html.style = "overflow-y: hidden";
    gsap.from(".nav #sidebar", {
        y: -20,
    });
}

sidebar.onclick = function (event) {
    if (event.target == sidebar) {
        sidebar.style = "display: none";
        body.style = "overflow-y: visible";
        html.style = "overflow-y: visible";
    }
}

    // Favicon update based on user UI theme
let fav = document.getElementById("favicon");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

window.addEventListener("load", function () {
    if (prefersLightScheme.matches) {
        fav.setAttribute("href", "media/logo/logo-black.png");
    } else {
        fav.setAttribute("href", "media/logo/logo-white.png");
    }
});

    // HOME PAGE BIG LOGO MOUSE INTERACTION 3D ROTATE
let sec1cont = document.querySelector(".sec1 .right");
let sec1img = document.querySelector(".sec1 .right img");

sec1cont.addEventListener("mousemove", function (event) {
    let rect = sec1cont.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let centerX = rect.width / 2;
    let centerY = rect.height / 2;
    let rotateY = (x - centerX) / centerX * 9;
    let rotateX = - (y - centerY) / centerY * 9;

    sec1img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

sec1cont.addEventListener("mouseleave", function () {
    sec1img.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
});

    // CONTACT METHODS WINDOW TOGGLE
let contactWindow = document.querySelector(".contact-window");

function openContactWindow() {
    contactWindow.style = "display: flex";
    body.style = "overflow-y: hidden";
    html.style = "overflow-y: hidden";
}

contactWindow.onclick = function (event) {
    if (event.target == contactWindow) {
        contactWindow.style = "display: none";
        body.style = "overflow-y: visible";
        html.style = "overflow-y: visible";
    }
}

    // FORM CHECKBOX TOGGLE
let checkbox = document.querySelector(".checkbox");
let checkIcon = document.querySelector(".checkbox span svg");

checkbox.onclick = function () {
    checkIcon.classList.toggle("show")
}

