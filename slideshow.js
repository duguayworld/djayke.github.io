
    const carousel = document.getElementById('carousel');

    // Function to fetch GitHub projects using GitHub API
    async function fetchGitHubProjects(username) {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        return data;
    }

    // Function to render GitHub projects in the carousel
    async function renderGitHubProjects(username) {
        const projects = await fetchGitHubProjects(username);
        const carouselDiv = document.getElementById('carousel');

        projects.forEach(project => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.images}</p>
                    <p>${project.description || 'No description available'}</p>
                    <a href="${project.html_url}" target="_blank">View on GitHub</a>
                `;
            carouselDiv.appendChild(slide);
        });
    }

    // Call the renderGitHubProjects function with your GitHub username
    renderGitHubProjects("djayke");
