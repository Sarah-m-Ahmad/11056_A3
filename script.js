// CODE Sourced from: https://www.youtube.com/watch?v=flItyHiDm7E&ab_channel=Coding2GO

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked!");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

// SOURCED FROM CHATGPT

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}
)