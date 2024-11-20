// Asynchronous function to fetch GitHub user data
async function fetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    console.log(userData);
    return userData;
}

async function displayGitHubUser(username) {
    const user = await fetchGitHubUser(username);
    if (user) {
        console.log(`Name: ${user.name}`);
        console.log(`Bio: ${user.bio}`);
        console.log(`Public Repos: ${user.public_repos}`);
        console.log(`Followers: ${user.followers}`);
        console.log(`Following: ${user.following}`);
    }
}

// Fetch and display data for a GitHub user
displayGitHubUser('keyursaradva');  