(() => {
    const mobile = document.querySelector("[data-mobile-menu]");

    mobile.addEventListener("click", () => {
        mobile.classList.toggle("is-open");
    });
})();