const form = document.querySelector("#github-form");
const usernameInput = document.querySelector("#github-username");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const username = usernameInput.value;

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

       
        if (!response.ok) {
            throw new Error("GitHub user not found");
        }
        const data = await response.json();

        document.querySelector("#profile-image").src = data.avatar_url;

        document.querySelector("#profile-username").textContent = data.login;

        document.querySelector("#profile-name").textContent =
            data.name || "Name not available";

        document.querySelector("#profile-bio").textContent =
            data.bio || "No bio available";

        document.querySelector("#repo-count").textContent =
            data.public_repos;

        document.querySelector("#follower-count").textContent =
            data.followers;

        document.querySelector("#following-count").textContent =
            data.following;

        document.querySelector("#github-link").href = data.html_url;

    } catch (error) {

        alert(error.message);

    }

});