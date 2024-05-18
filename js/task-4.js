const form = document.querySelector(".login-form");

form.addEventListener("submit", noDefault => {
    noDefault.preventDefault();

const email = noDefault.target.elements.email.value.trim();
const password = noDefault.target.elements.password.value.trim();

if (email === "" || password === "") {
    alert('All form fields must be filled in');
} else {
    console.log({ email, password });
}

form.reset();

});




