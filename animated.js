document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("Titanic-Animated");

    const messages = [
        "Will You Survive the Titanic?",
        "Check Your Survival Odds!",
        "Will you be the next Dawson?",
        "Relive Titanic's Fate",
        "See If You'd Make It!"
    ];

    let index = 0;

    setInterval(() => {
        // Fade out
        heading.style.opacity = 0;

        setTimeout(() => {
            // Change text and fade in
            index = (index + 1) % messages.length;
            heading.textContent = messages[index];
            heading.style.opacity = 1;
        }, 500); // match transition duration
    }, 3000); // change every 2 seconds
});