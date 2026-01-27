const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&<>";

document.querySelectorAll("[data-hack]").forEach(el => {
    const originalText = el.innerText;
    let interval = null;

    el.addEventListener("mouseenter", () => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            el.innerText = originalText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    });

    el.addEventListener("mouseleave", () => {
        clearInterval(interval);
        el.innerText = originalText;
    });
});
