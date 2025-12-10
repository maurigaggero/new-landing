// Fade-in & reveal on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(
                entry.target.classList.contains("reveal")
                    ? "reveal-visible"
                    : "fade-in-visible"
            );
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in, .reveal").forEach(el => observer.observe(el));


// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Animación hamburguesa
    menuBtn.children[0].classList.toggle("rotate-45");
    menuBtn.children[1].classList.toggle("opacity-0");
    menuBtn.children[2].classList.toggle("-rotate-45");
});

const header = document.getElementById("ghia-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("scrolled-header");
    } else {
        header.classList.remove("scrolled-header");
    }
});

// Counters
const counters = document.querySelectorAll(".counter");
const speed = 80;

counters.forEach(counter => {
    const animate = () => {
        const target = +counter.getAttribute("data-target");
        const value = +counter.innerText;
        const step = Math.ceil(target / speed);

        if (value < target) {
            counter.innerText = value + step;
            requestAnimationFrame(animate);
        } else {
            counter.innerText = target;
        }
    };

    const onScroll = () => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animate();
            window.removeEventListener("scroll", onScroll);
        }
    };

    window.addEventListener("scroll", onScroll);
});


// Parallax (smooth)
window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset;
    document.querySelectorAll(".parallax-bg").forEach(bg => {
        bg.style.backgroundPositionY = scroll * 0.4 + "px";
    });
});
