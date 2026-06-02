const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

const photos = document.querySelectorAll(".photo-card img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImage.src = photo.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";
    }

});