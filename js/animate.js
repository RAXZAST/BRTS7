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
    animation()
})

function animation() {
    // SECTION 1 GSAP ANIMATION
    gsap.from(".sec1 *", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
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
    gsap.from(".sec2 h2, .sec2 .album", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: ".sec2",
            start: "top 50%"
        }
    });

    // SECTION 3 GSAP ANIMATION
    gsap.from(".sec3 .left, .sec3 .right *", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: ".sec3",
            start: "top 20%",
        }
    });

    // SECTION 4 GSAP ANIMATION
    gsap.from(".sec4 .gallery h2, .sec4 .gallery h4, .sec4 .gallery .popular a", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: ".sec4 .gallery",
            start: "top 0%",
            toggleActions: "play play none reset"
        }
    });
    gsap.from(".sec4 .analytics .box, .sec4 .analytics svg", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: ".sec4 .analytics",
            start: "top 0%",
            toggleActions: "play play none reset"
        }
    });

    // SECTION 5 GSAP ANIMATION
    gsap.from(".sec5 h2, .sec5 h4", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: ".sec5",
            start: "top 0%"
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
            start: "top 0%"
        }
    });
    gsap.from(".sec5 .profiles .profile", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: ".sec5 .profiles",
            start: "top 0%"
        }
    });

    // SECTION 6 GSAP ANIMATION
    gsap.from(".sec6 h2, .sec6 h4, .sec6 form", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: ".sec6",
            start: "top 0%"
        }
    });

    // FOOTER GSAP ANIMATION
    gsap.from("footer #container, footer .bottom", {
        y: 15,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        overwrite: true,
        scrollTrigger: {
            scroller: "body",
            trigger: "footer",
            start: "top 0%",
            toggleActions: "play play none reset"
        }
    });

    // SCROLL INDICATOR CIRCLE FILL ANIMATION
    gsap.to("#scroll-indicator #fill #white-fill", {
        transform: "translateY(0%)",
        ease: "linear",
        scrollTrigger: {
            scroller: "body",
            trigger: "header",
            start: "top 0%",
            endTrigger: "footer",
            end: "top 10%",
            scrub: true,
        }
    })
}