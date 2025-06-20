document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // scrolling down
        header.classList.add("hide");
    } else {
        // scrolling up
        header.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
