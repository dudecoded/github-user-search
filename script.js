const form = document.querySelector("#github-form");
const usernameInput = document.querySelector("#github-username");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;

    console.log("Searching for:", username);
});