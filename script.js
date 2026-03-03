const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&<>";

document.querySelectorAll(".hack-text").forEach(element => {

    const original = element.textContent;
    const speed = parseInt(element.dataset.speed) || 30;

    let interval = null;

    element.parentElement.addEventListener("mouseenter", () => {

        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {

            element.textContent = original
                .split("")
                .map((char, index) => {
                    if (index < iteration) return original[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iteration >= original.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;

        }, speed);

    });

    element.parentElement.addEventListener("mouseleave", () => {
        clearInterval(interval);
        element.textContent = original;
    });

});
