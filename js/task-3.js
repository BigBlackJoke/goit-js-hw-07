const inputElement = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

const changeName = (event) => {
    if (event.target.value.trim() !== "") {
        return userName.textContent = event.target.value;
    } else {
        return userName.textContent = "Anonymous";
    }
}

inputElement.addEventListener("input", changeName);

