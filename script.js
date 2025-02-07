const [rating, thanks] = document.querySelectorAll("section");
const ratingForm = rating.querySelector("form");
const radioButtons = ratingForm.querySelectorAll("input[type=radio]");
const selection = document.getElementById("selection");

const populateRating = (rating) => {
    selection.textContent = rating;
}

const displayMessage = () => {
    rating.classList.add("invisible");
    thanks.classList.remove("invisible");
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    const selectedRating = [...radioButtons].filter(rating => rating.checked);
    if (selectedRating.length === 0) {
        return;
    }
    const value = selectedRating[0].value;
    populateRating(value);
    displayMessage();
}

ratingForm.addEventListener("submit", handleFormSubmit)
