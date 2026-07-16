/* ==========================================
   PORTFOLIO SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADER
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.style.transition = "opacity .8s";

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    document.querySelectorAll("section,.card,.skill").forEach(el => {

        el.classList.add("fade-up");

        observer.observe(el);

    });

    /* ==========================================
       PARALLAX CIRCLE
    ========================================== */

    const circle = document.querySelector(".circle");

    if (circle) {

        document.addEventListener("mousemove", (e) => {

            const x = e.clientX / 45;

            const y = e.clientY / 45;

            circle.style.transform =
                `translate(${x}px,${y}px)`;

        });

    }

    /* ==========================================
       HEADER SHADOW
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.08)";

        }

        else {

            header.style.boxShadow = "none";

        }

    });

    /* ==========================================
       DARK MODE
    ========================================== */

    const darkButton = document.createElement("button");

    darkButton.className = "dark-btn";

    darkButton.innerHTML = "🌙";

    document.body.appendChild(darkButton);

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        darkButton.innerHTML = "☀️";

    }

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            darkButton.innerHTML = "☀️";

        }

        else {

            localStorage.setItem("theme", "light");

            darkButton.innerHTML = "🌙";

        }

    });

    /* ==========================================
       HERO BUTTON EFFECT
    ========================================== */

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-5px) scale(1.03)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0) scale(1)";

        });

    });

    /* ==========================================
       PROJECT CARD EFFECT
    ========================================== */

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(79,178,134,.18),
                rgba(255,255,255,.95))`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background =
                "rgba(255,255,255,.92)";

        });

    });

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.clientHeight;

            if (scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});

/* ==========================================
   END
========================================== */