const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "galeria.html";

    }, 1000);

});