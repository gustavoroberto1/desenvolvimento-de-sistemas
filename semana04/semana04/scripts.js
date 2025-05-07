async function loadProfile() {
    const usename = document.getElementById("username").value;
    if (!usename) {
        alert("VOCÊ PRECISA DIGITAR UM USUÁRIO!!!");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${usename}`);
    const user = await response.json();

    const profileElement = document.createElement("div");
    profileElement.classList.add("profile-item");
    profileElement.innerHTML = `
    <img src="${user.avatar_url}" />
    <h2>${user.name || user.login}</h2>    
    <h2>${user.public_repos}</h2>    
    <h2>${user.followers}</h2>    
    <h2>${user.following}</h2> 
    <p>${user.bio}<\p>   
    `;

    const profiles = document.getElementById("profiles");
    profiles.appendChild(profileElement);
}