function loadSection(section) {
    fetch(`pages/${section}.php`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
            initializeEffects(); // Re-initialize effects for new content
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("main-content").innerHTML = `
                <h1 class='glitch-text'>Bozo Error!</h1>
                <p>Failed to load ${section}. Refresh or try again later.</p>
            `;
        });
}

// Initialize effects after content load
function initializeEffects() {
    // Re-apply glitch/floating effects here
}

document.addEventListener("DOMContentLoaded", () => loadSection("home"));