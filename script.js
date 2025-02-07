const [rating, thanks] = document.querySelectorAll("section");
const ratingForm = rating.querySelector("form");
const radioButtons = ratingForm.querySelectorAll("input[type=radio]");
const selection = document.getElementById("selection");

let hasError = false;

const populateRating = (rating) => {
    selection.textContent = rating;
}

const displayMessage = () => {
    rating.classList.add("invisible");
    thanks.classList.remove("invisible");
}

const displayError = () => {
    if (!hasError) {
        const error = document.createElement("p");
        error.classList.add("error");
        error.textContent = "Please choose a rating";
        ratingForm.appendChild(error);
        hasError = true;
    }
}

const handleRating = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
        e.target.click();
    }
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    const selectedRating = [...radioButtons].filter(rating => rating.checked);
    if (selectedRating.length === 0) {
        displayError();
    } else {
        const value = selectedRating[0].value;
        populateRating(value);
        displayMessage();
    }
}

ratingForm.addEventListener("submit", handleFormSubmit)

radioButtons.forEach((button) => {
    button.addEventListener("keypress", handleRating);
})