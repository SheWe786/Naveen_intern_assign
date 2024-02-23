document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");

    imageContainer.addEventListener("click", function (event) {
        const selectedCard = event.target.closest(".image-card");
        document.querySelectorAll(".image-card").forEach(card => {
            card.classList.remove("selected-card");
        });
        if (selectedCard) {
            selectedCard.classList.add("selected-card");
        }
    });
    const imagesJson = [
        { "image": "Images/img1.jpg", "name": "Dr. John Doe", "occupation": "Ophthalmology" },
        { "image": "Images/img2.jpg", "name": "Dr. Emily Johnson ", "occupation": "Pediatrics" },
        { "image": "Images/img3.jpg", "name": "Dr. Jane Smith", "occupation": "Orthopedics" },
        { "image": "Images/img4.jpg", "name": "Dr. Daniel Harris", "occupation": "Emergency Medicine" },
        { "image": "Images/img5.jpg", "name": "Dr. Sarah Miller", "occupation": "Cardiology" },
        { "image": "Images/img6.jpg", "occupation": "Obstetrics and Gynecology" },
        { "image": "Images/img7.jpg", "name": "Dr. Megan Davis", "occupation": "Neurology" },
        { "image": "Images/img8.jpg","name":"Dr. Alexandra Smith ", "occupation": " Internal Medicine" },
        { "image": "Images/img9.jpg", "name": "Dr. Henry White ", "occupation": "Pediatrics" },
        { "image": "Images/img10.jpg", "name": "Dr. Olivia Taylor ", "occupation": "Psychiatry" },
        { "image": "Images/img11.jpg", "name": "Dr. Isaac Taylor", "occupation": "Internal Medicine" },
        { "image": "Images/img12.jpg", "name": "Dr. Jackson Clark", "occupation": "Psychiatry" },
        { "image": "Images/img13.jpg", "name": "Dr. Jackson Clark", "occupation": " Dermatology" },
        { "image": "Images/img14.jpg", "name": "Dr. Kevin Anderson", "occupation": "Radiology" },
        { "image": "Images/img15.jpg","name": "Dr. Jackson Clark", "occupation": "Orthopedics" },
        { "image": "Images/img16.jpg", "name": "Dr. Grace Robinson", "occupation": "Ophthalmology" },
        { "image": "Images/img17.jpg", "name": "Dr. Jackson Clark", "occupation": "Infectious Diseases" },
        { "image": "Images/img18.jpg", "name": "Dr. Isabella Garcia", "occupation": "Family Medicine" },
        { "image": "Images/img19.jpg", "name": "Dr. Jackson Clark", "occupation": "Radiology" },
        { "image": "Images/img20.jpg", "name": "Dr. Ryan Carter", "occupation": "Endocrinology" },
        { "image": "Images/img21.jpg", "name": "Dr. Ryan Carter", "occupation": "Endocrinology" },
        { "image": "Images/img22.jpg", "name": "Dr. Ryan Carter", "occupation": "Endocrinology" },
        { "image": "Images/img23.jpg", "name": "Dr. Ryan Carter", "occupation": "Endocrinology" },
        { "image": "Images/img24.jpg", "name": "Dr. Ryan Carter", "occupation": "Endocrinology" },
        { "image": "Images/img25.jpg", "name": "Dr. Ryan Carter", "occupation": "Endocrinology" },
 
    ];

    imagesJson.forEach(imageObj => {
        const imageCard = document.createElement("div");
        imageCard.classList.add("image-card");

        const imgElement = document.createElement("img");
        imgElement.src = imageObj.image;
        imgElement.alt = "User Image";

        const userInfo = document.createElement("div");
        userInfo.classList.add("user-info");
        userInfo.innerHTML = `<strong>${imageObj.name}</strong><br>${imageObj.occupation}`;

        imageCard.appendChild(imgElement);
        imageCard.appendChild(userInfo);
        imageContainer.appendChild(imageCard);
    });
});
