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
