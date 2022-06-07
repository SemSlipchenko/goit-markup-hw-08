(() => {
    const button = document.querySelector("[data-mobile-menu]");
    const mobile = document.querySelector(".mobile");

    button.addEventListener("click", () => {
        mobile.classList.toggle("is-open");
        document.querySelector("body").classList.toggle("overflowhidden");
        document.querySelector(".header__menu-mobile").classList.toggle("is-open");
    });
})();