// Complete players list
const players = [
    // Ranked players
    { rank: 1, name: "Banzy_", tier: "S", lastUpdated: "10-8-2025", skin: "Banzy_", tester: "Wickedfire75", result: "3-1" },
    { rank: 2, name: "Hidspot", tier: "S", lastUpdated: "10-8-2025", skin: "Hidspot", tester: "Wickedfire75", result: "3-0" },
    { rank: 3, name: "MimiBoy15", tier: "A", lastUpdated: "10-8-2025", skin: "MimiBoy15", tester: "Wickedfire75", result: "3-0" },
    { rank: 4, name: "Crxnsio", tier: "A", lastUpdated: "10-8-2025", skin: "crxnsio", tester: "Wickedfire75", result: "3-0" },
    { rank: 5, name: "Doevie", tier: "B", lastUpdated: "10-8-2025", skin: "Doevie", tester: "Wickedfire75", result: "3-0" },
    { rank: 6, name: "ToonDrone", tier: "B", lastUpdated: "10-8-2025", skin: "ToonDrone", tester: "Wickedfire75", result: "3-0" },
    { rank: 7, name: "Zaylz", tier: "C", lastUpdated: "10-8-2025", skin: "zaylz", tester: "Wickedfire75", result: "3-0" },
    { rank: 8, name: "Mettix", tier: "C", lastUpdated: "10-8-2025", skin: "Mettix", tester: "Wickedfire75", result: "3-0" },
    { rank: 9, name: "BADPAKonTT", tier: "C", lastUpdated: "10-8-2025", skin: "BADPAKonTT", tester: "404Mat", result: "3-0" },
    { rank: 10, name: "Mexz", tier: "D", lastUpdated: "10-8-2025", skin: "Mexz", tester: "Wickedfire75", result: "3-0" },
    { rank: 11, name: "ItzTrazyyy", tier: "D", lastUpdated: "10-8-2025", skin: "ItzTrazyyy", tester: "Wickedfire75", result: "3-0" },
    { rank: 12, name: "oEntityz", tier: "D", lastUpdated: "10-8-2025", skin: "oEntityz", tester: "404Mat", result: "3-0" },
    { rank: 13, name: "Chickenfighter50", tier: "F", lastUpdated: "10-8-2025", skin: "Chickenfighter50", tester: "Wickedfire75", result: "3-0" },

    // Unranked players
    { rank: "-", name: "Availqble_", tier: "-", lastUpdated: "-", skin: "Availqble_" },
    { rank: "-", name: "Bl1kje", tier: "-", lastUpdated: "-", skin: "Bl1kje" },
    { rank: "-", name: "Broodkaas", tier: "-", lastUpdated: "-", skin: "Broodkaas" },
    { rank: "-", name: "Cleonekuh12", tier: "-", lastUpdated: "-", skin: "Cleonekuh12" },
    { rank: "-", name: "Daanbas7", tier: "-", lastUpdated: "-", skin: "Daanbas7" },
    { rank: "-", name: "Danoontjuhhh", tier: "-", lastUpdated: "-", skin: "Danoontjuhhh" },
    { rank: "-", name: "Demistic", tier: "-", lastUpdated: "-", skin: "Demistic" },
    { rank: "-", name: "DinobeastYT", tier: "-", lastUpdated: "-", skin: "DinobeastYT" },
    { rank: "-", name: "Egirlstarzy", tier: "-", lastUpdated: "-", skin: "Egirlstarzy" },
    { rank: "-", name: "Ems3y", tier: "-", lastUpdated: "-", skin: "Ems3y" },
    { rank: "-", name: "Enfuindhdd", tier: "-", lastUpdated: "-", skin: "Enfuindhdd" },
    { rank: "-", name: "Extra_Me", tier: "-", lastUpdated: "-", skin: "Extra_Me" },
    { rank: "-", name: "FlobiZ15", tier: "-", lastUpdated: "-", skin: "FlobiZ15" },
    { rank: "-", name: "Fla3m", tier: "-", lastUpdated: "-", skin: "Fla3m" },
    { rank: "-", name: "Fletiofrags", tier: "-", lastUpdated: "-", skin: "Fletiofrags" },
    { rank: "-", name: "Flob1n_", tier: "-", lastUpdated: "-", skin: "Flob1n_" },
    { rank: "-", name: "Freakyfreaker", tier: "-", lastUpdated: "-", skin: "Freakyfreaker" },
    { rank: "-", name: "Frost658", tier: "-", lastUpdated: "-", skin: "Frost658" },
    { rank: "-", name: "FS_Straid", tier: "-", lastUpdated: "-", skin: "FS_Straid" },
    { rank: "-", name: "FW_Teru", tier: "-", lastUpdated: "-", skin: "FW_Teru" },
    { rank: "-", name: "Gamer_xd_pro_200", tier: "-", lastUpdated: "-", skin: "Gamer_xd_pro_200" },
    { rank: "-", name: "GGin01", tier: "-", lastUpdated: "-", skin: "GGin01" },
    { rank: "-", name: "GrasSprietjuh", tier: "-", lastUpdated: "-", skin: "GrasSprietjuh" },
    { rank: "-", name: "Insane_guy957", tier: "-", lastUpdated: "-", skin: "Insane_guy957" },
    { rank: "-", name: "ItzTrazyyy", tier: "-", lastUpdated: "-", skin: "ItzTrazyyy" },
    { rank: "-", name: "Jason12379", tier: "-", lastUpdated: "-", skin: "Jason12379" },
    { rank: "-", name: "JJaden2024", tier: "-", lastUpdated: "-", skin: "JJaden2024" },
    { rank: "-", name: "jthpower", tier: "-", lastUpdated: "-", skin: "jthpower" },
    { rank: "-", name: "JSTRED", tier: "-", lastUpdated: "-", skin: "JSTRED" },
    { rank: "-", name: "Jurreflorisrobi", tier: "-", lastUpdated: "-", skin: "Jurreflorisrobi" },
    { rank: "-", name: "Just_Kqy", tier: "-", lastUpdated: "-", skin: "Just_Kqy" },
    { rank: "-", name: "Kloas_Tossel", tier: "-", lastUpdated: "-", skin: "Kloas_Tossel" },
    { rank: "-", name: "LukasMan2", tier: "-", lastUpdated: "-", skin: "LukasMan2" },
    { rank: "-", name: "llynix", tier: "-", lastUpdated: "-", skin: "llynix" },
    { rank: "-", name: "Magicify", tier: "-", lastUpdated: "-", skin: "Magicify" },
    { rank: "-", name: "MathiasXD_", tier: "-", lastUpdated: "-", skin: "MathiasXD_" },
    { rank: "-", name: "Matthiezzz", tier: "-", lastUpdated: "-", skin: "Matthiezzz" },
    { rank: "-", name: "Molberts1", tier: "-", lastUpdated: "-", skin: "Molberts1" },
    { rank: "-", name: "MrPaketJup", tier: "-", lastUpdated: "-", skin: "MrPaketJup" },
    { rank: "-", name: "Noudddddino", tier: "-", lastUpdated: "-", skin: "Noudddddino" },
    { rank: "-", name: "Poplolsa", tier: "-", lastUpdated: "-", skin: "Poplolsa" },
    { rank: "-", name: "qu1ck3d", tier: "-", lastUpdated: "-", skin: "qu1ck3d" },
    { rank: "-", name: "Rqspect", tier: "-", lastUpdated: "-", skin: "Rqspect" },
    { rank: "-", name: "Rxiq", tier: "-", lastUpdated: "-", skin: "Rxiq" },
    { rank: "-", name: "SK_Milo123", tier: "-", lastUpdated: "-", skin: "SK_Milo123" },
    { rank: "-", name: "Smotserela", tier: "-", lastUpdated: "-", skin: "Smotserela" },
    { rank: "-", name: "Snellephilip", tier: "-", lastUpdated: "-", skin: "Snellephilip" },
    { rank: "-", name: "SWIPEEEEE", tier: "-", lastUpdated: "-", skin: "SWIPEEEEE" },
    { rank: "-", name: "TIBOWWW_", tier: "-", lastUpdated: "-", skin: "TIBOWWW_" },
    { rank: "-", name: "Tijd_Teveel", tier: "-", lastUpdated: "-", skin: "Tijd_Teveel" },
    { rank: "-", name: "TippieToepie", tier: "-", lastUpdated: "-", skin: "TippieToepie" },
    { rank: "-", name: "VINCE043", tier: "-", lastUpdated: "-", skin: "VINCE043" },
    { rank: "-", name: "vLuca_", tier: "-", lastUpdated: "-", skin: "vLuca_" },
    { rank: "-", name: "Wekko_", tier: "-", lastUpdated: "-", skin: "Wekko_" },
    { rank: "-", name: "Wickedfire75", tier: "-", lastUpdated: "-", skin: "Wickedfire75" },
    { rank: "-", name: "Xenoary", tier: "-", lastUpdated: "-", skin: "Xenoary" },
    { rank: "-", name: "Xmandv", tier: "-", lastUpdated: "-", skin: "Xmandv" },
    { rank: "-", name: "Zenderlink", tier: "-", lastUpdated: "-", skin: "Zenderlink" },
    { rank: "-", name: "zNixls_", tier: "-", lastUpdated: "-", skin: "zNixls_" },
    { rank: "-", name: "3746", tier: "-", lastUpdated: "-", skin: "3746" },
    { rank: "-", name: "babber_", tier: "-", lastUpdated: "-", skin: "babber_" },
    { rank: "-", name: "bestdutchperson", tier: "-", lastUpdated: "-", skin: "bestdutchperson" },
    { rank: "-", name: "_Lebrontheking_", tier: "-", lastUpdated: "-", skin: "_Lebrontheking_" },
    { rank: "-", name: "_MoaningMan69_", tier: "-", lastUpdated: "-", skin: "_MoaningMan69_" }
];

// DOM elements
const rankingData = document.getElementById('ranking-data');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const modal = document.getElementById('player-modal');
const modalName = document.getElementById('modal-name');
const modalSkin = document.getElementById('modal-skin');
const modalTier = document.getElementById('modal-tier');
const modalTestInfo = document.getElementById('modal-test-info');

// Tier classes
const tierClasses = {
    "S": "s-tier",
    "A": "a-tier",
    "B": "b-tier",
    "C": "c-tier",
    "D": "d-tier",
    "F": "f-tier",
    "-": "unranked-tier"
};

// Render table with View Player buttons
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
            <td><button class="view-player-btn" data-player="${player.name}">View Player</button></td>
        `;
        
        rankingData.appendChild(row);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.view-player-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const playerName = this.getAttribute('data-player');
            const player = players.find(p => p.name === playerName);
            if (player) openPlayerModal(player);
        });
    });
}

// Open modal with player info
function openPlayerModal(player) {
    modalName.textContent = player.name;
    modalSkin.src = `https://mc-heads.net/body/${player.skin}`;
    modalTier.textContent = player.tier;
    modalTier.className = `tier-badge ${tierClasses[player.tier]}`;
    
    if (player.tester) {
        modalTestInfo.innerHTML = `
            <p>Test: ${player.result}</p>
            <p>Tester: ${player.tester}</p>
            <p>Date: ${player.lastUpdated}</p>
        `;
    } else {
        modalTestInfo.innerHTML = '';
    }
    
    modal.style.display = "block";
}

// Close modal
function closeModal() {
    modal.style.display = "none";
}

// Event listeners
document.querySelector('.close-modal').addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(searchTerm)
    );
    renderTable(filteredPlayers.length > 0 ? filteredPlayers : players);
}

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTable(players);
});