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
let sec1 = document.querySelector(".sec1")
let sec1cont = document.querySelector(".sec1 .right");
let green = document.querySelector(".sec1 .right .green");
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
    // control RGB position with mouse, mapping to ±20px range
    let shadowX = (x - centerX) / centerX * 10; // left/right
    let shadowY = (y - centerY) / centerY * 10; // up/down
    sec1img.style.filter = `drop-shadow(${-shadowX}px ${-shadowY}px 5px #CCD6FF)`;
    green.style.filter = `drop-shadow(${-(shadowX + 3)}px ${-(shadowY + 3)}px 5px #879FFF)`;
    sec1cont.style.filter = `drop-shadow(${-(shadowX+5)}px ${-(shadowY+5)}px 5px #493AED)`;
});

sec1cont.addEventListener("mouseleave", function () {
    sec1img.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    sec1img.style.filter = `drop-shadow(${0}px ${0}px 0px #000)`;
    sec1cont.style.filter = `drop-shadow(${0}px ${0}px 0px #000)`;
    green.style.filter = `drop-shadow(${0}px ${0}px 0px #000)`;
});

    // CONTACT METHODS WINDOW TOGGLE
let contactWindow = document.querySelector(".contact-window");

function openContactWindow() {
    contactWindow.style = "display: flex";
}

contactWindow.onclick = function (event) {
    if (event.target == contactWindow) {
        contactWindow.style = "display: none";
    }
}

    // FORM CHECKBOX TOGGLE
let checkbox = document.querySelector(".checkbox");
let checkIcon = document.querySelector(".checkbox span svg");

checkbox.onclick = function () {
    checkIcon.classList.toggle("hidden");
}

    // WEB DATA FROM JSON
let webTitle = document.querySelector("title");
let webDescription = document.querySelector("#webDescription");
let webKeyWords = document.querySelector("#webKeyWords");

let webSpotify = document.querySelectorAll("#web-spotify");
let webInstagram = document.querySelector("#web-instagram");
let webTiktok = document.querySelector("#web-tiktok");
let webYoutube = document.querySelector("#web-youtube");
let webDiscord = document.querySelectorAll("#web-discord");
let webWhatsapp = document.querySelector("#web-whatsapp");
let webEmail = document.querySelector("#web-email");
let webMail = document.querySelector("#mail");
let webMailText = document.querySelector("#web-mail");
let webLink = document.querySelector("#web-logo");

let webAlgus = document.querySelector("#web-algus");
let webBrutos = document.querySelector("#web-brutos");
// let webDyren = document.querySelector("#web-dyren");

let webAboutTop = document.querySelector("#web-top");
let webAboutBottom = document.querySelector("#web-bottom");
let webMilestone = document.querySelector("#web-milestone");
let webListeners = document.querySelector("#web-listeners");
let webDemos = document.querySelector("#web-demos");
let webListenersP = document.querySelector("#web-listeners-p");
let webDemosP = document.querySelector("#web-demos-p");
let copyright = document.querySelector("#copyright");

async function loadWebData() {
    const response = await fetch("data/webdata.json");
    const data = await response.json();
    //console.log(data.webdata.header.title)
    webTitle.textContent = data.webdata.header.title;
    webDescription.setAttribute("content", `${data.webdata.header.description}`);
    webKeyWords.setAttribute("content", `${data.webdata.header.keywords}`);
    webSpotify.forEach(e => {
        e.setAttribute("href", `${data.webdata.contactLinks.spotify}`)
    });
    webInstagram.setAttribute("href", `${data.webdata.contactLinks.instagram}`)
    webTiktok.setAttribute("href", `${data.webdata.contactLinks.tiktok}`)
    webYoutube.setAttribute("href", `${data.webdata.contactLinks.youtube}`)
    webDiscord.forEach(e => {
        e.setAttribute("href", `${data.webdata.contactLinks.discord}`)
    });
    webWhatsapp.setAttribute("href", `${data.webdata.contactLinks.whatsapp}`)
    webEmail.setAttribute("href", `mailto:${data.webdata.contactLinks.email}`)
    webMail.setAttribute("href", `mailto:${data.webdata.contactLinks.email}`)
    webLink.setAttribute("href", `${data.webdata.contactLinks.weblink}`)
    webMailText.textContent = `${data.webdata.contactLinks.email}`
    webAlgus.setAttribute("href", `${data.webdata.contactLinks.foundersInstagramLinks.algus}`)
    webBrutos.setAttribute("href", `${data.webdata.contactLinks.foundersInstagramLinks.brutos}`)
    //webDyren.setAttribute("href", `${data.webdata.contactLinks.foundersInstagramLinks.dyren}`)
    webAboutTop.textContent = `${data.webdata.webTexts.about.top}`
    webAboutBottom.textContent = `${data.webdata.webTexts.about.bottom}`
    webMilestone.textContent = `${data.webdata.webTexts.milestones}`
    webListeners.textContent = `${data.webdata.webTexts.anylytics.monthlyListeners}+`
    webDemos.textContent = `${data.webdata.webTexts.anylytics.monthlyDemos}+`
    webListenersP.textContent = `${data.webdata.webTexts.anylytics.ListenersInNumber}+ Listeners from all over the world listening BRTS7 every month and making it one of the top record label in Brazil`
    webDemosP.textContent = `Over ${data.webdata.webTexts.anylytics.monthlyDemos}+ demos are submitted each month from various locations around the globe.`
    copyright.textContent = `${data.webdata.webTexts.copyright}`
}
loadWebData();
