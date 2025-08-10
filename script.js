// Sample data voor LifestealNL rankings
const players = [
    { rank: 1, name: "Admin", tier: "S", lastUpdated: "2023-11-15", skin: "Admin" },
    { rank: 2, name: "Moderator", tier: "A", lastUpdated: "2023-11-14", skin: "Moderator" },
    { rank: 3, name: "TopPlayer1", tier: "A", lastUpdated: "2023-11-14", skin: "TopPlayer1" },
    { rank: 4, name: "PVPKing", tier: "B", lastUpdated: "2023-11-13", skin: "PVPKing" },
    { rank: 5, name: "BuilderPro", tier: "B", lastUpdated: "2023-11-13", skin: "BuilderPro" },
    { rank: 6, name: "AverageJoe", tier: "C", lastUpdated: "2023-11-12", skin: "AverageJoe" },
    { rank: 7, name: "Newbie", tier: "D", lastUpdated: "2023-11-11", skin: "Newbie" },
    { rank: 8, name: "Noob", tier: "F", lastUpdated: "2023-11-10", skin: "Noob" }
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