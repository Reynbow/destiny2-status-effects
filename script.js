document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = '212bbcdd1fc946ba8fa0e6da3e96ceb5';
    const effectDescriptionElement = document.getElementById('effect-description');

    async function fetchRestorationEffect() {
        try {
            const response = await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/DestinySandboxPerkDefinition/2488607140/', {
                headers: {
                    'X-API-Key': API_KEY
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const description = data.Response.displayProperties.description;
            effectDescriptionElement.textContent = description;
        } catch (error) {
            console.error('Error fetching data:', error);
            effectDescriptionElement.textContent = 'Failed to load data.';
        }
    }

    fetchRestorationEffect();
});
