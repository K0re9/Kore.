// Wait for the DOM to load before running the code
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            const productCard = button.closest(".product-card");
