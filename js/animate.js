    // LOADING ANIMATION FUNCTIONALITY

const tl = gsap.timeline({ repeat: -1 });

tl.from(".loader h3 span", {
    scaleY: 0,
    transformOrigin: "bottom",
    stagger: 0.1,
    ease: "power3.out"
})
tl.to(".loader h3 span", {
    scaleY: 0,
    transformOrigin: "top",
    stagger: 0.1,
    ease: "power3.in"
})

const body = document.querySelector("body");
const html = document.querySelector("html");
const loaderBg = document.querySelector(".loader");
function hideLoader() {
    loaderBg.style = "top: -100%;"
}

window.addEventListener("load", function () {
    tl.repeat(0);
    body.style = "overflow-y: visible";
    html.style = "overflow-y: visible";
    setTimeout(hideLoader, 1500);
    setTimeout(function () {
        loaderBg.remove()
    }, 3000);
})

    // SECTION 1 GSAP ANIMATION
gsap.from(".sec1 *", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    delay: 1.5
});
gsap.from("header", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    overwrite: true,
    delay: 2.5
});

    // SECTION 2 GSAP ANIMATION
gsap.from(".sec2 h2, .sec2 .container .album", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec2",
        start: "top 90%"
    }
});

    // SECTION 3 GSAP ANIMATION
gsap.from(".sec3 .left, .sec3 .right *", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec3",
        start: "top 90%"
    }
});

    // SECTION 4 GSAP ANIMATION
gsap.from(".sec4 .gallery *", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec4 .gallery",
        start: "top 90%"
    }
});
gsap.from(".sec4 .analytics .box, .sec4 .analytics svg", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec4 .analytics",
        start: "top 90%"
    }
});

    // SECTION 5 GSAP ANIMATION
gsap.from(".sec5 h2, .sec5 h4", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec5",
        start: "top 90%"
    }
});
gsap.from(".sec5 .profiles", {
    padding: "0 500px",
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec5 .profiles",
        start: "top 90%"
    }
});
gsap.from(".sec5 .profiles .profile", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec5 .profiles",
        start: "top 90%"
    }
});

    // SECTION 6 GSAP ANIMATION
gsap.from(".sec6 h2, .sec6 h4, .sec6 form", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: ".sec6",
        start: "top 90%"
    }
});

    // FOOTER GSAP ANIMATION
gsap.from("footer *", {
    y: 10,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    overwrite: true,
    scrollTrigger: {
        scroller: "body",
        trigger: "footer",
        start: "top 90%"
    }
});
