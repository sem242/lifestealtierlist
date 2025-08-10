// Sample data voor LifestealNL rankings
const players = [
    { rank: 1, name: "Banzy_", tier: "S", lastUpdated: "8-11-2025", skin: "Banzy_" },
    { rank: 2, name: "Hidspot", tier: "S", lastUpdated: "8-11-2025", skin: "Hidspot" },
    { rank: 3, name: "Doevie", tier: "B", lastUpdated: "8-11-2025", skin: "Doevie" },
    { rank: 4, name: "Chickenfighter50", tier: "F", lastUpdated: "8-11-2025", skin: "Chickenfighter50" }
];

// DOM elements
const rankingData = document.getElementById('ranking-data');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Tier class mapping
const tierClasses = {
    "S": "s-tier",
    "A": "a-tier",
    "B": "b-tier",
    "C": "c-tier",
    "D": "d-tier",
    "F": "f-tier"
};

// Render de tabel met speler data
function renderTable(data) {
    rankingData.innerHTML = '';
    
    data.forEach(player => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${player.rank}</td>
            <td class="player-cell">
                <div class="player-avatar" style="background-image: url('https://mc-heads.net/avatar/${player.skin}/36')"></div>
                ${player.name}
            </td>
            <td><span class="tier-badge ${tierClasses[player.tier]}">${player.tier}</span></td>
            <td>${player.lastUpdated}</td>
        `;
        
        rankingData.appendChild(row);
    });
}

// Zoekfunctionaliteit
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(searchTerm)
    );
    
    renderTable(filteredPlayers.length > 0 ? filteredPlayers : players);
}

// Event listeners
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Initialiseer de pagina
document.addEventListener('DOMContentLoaded', () => {
    renderTable(players);
});