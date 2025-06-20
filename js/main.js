document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    const isHovering = header.matches(":hover");

    if (currentScroll > lastScrollTop && !isHovering) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollTop = currentScroll;
});
