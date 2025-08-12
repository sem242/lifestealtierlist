document.addEventListener('DOMContentLoaded', function() {
    const playerData = [
        { rank: 1, name: "Player1", tier: "S", updated: "2023-07-15" },
        { rank: 2, name: "Player2", tier: "A", updated: "2023-07-14" },
        { rank: 3, name: "Player3", tier: "B", updated: "2023-07-13" },
        { rank: 4, name: "Player4", tier: "C", updated: "2023-07-12" },
        { rank: 5, name: "Player5", tier: "D", updated: "2023-07-11" }
    ];

    // DOM elementen
    const rankingTable = document.getElementById('ranking-data');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const playerModal = document.getElementById('player-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalSkin = document.getElementById('modal-skin');
    const modalName = document.getElementById('modal-name');
    const modalTier = document.getElementById('modal-tier');

    // Tier kleuren mapping
    const tierColors = {
        'S': 's-tier',
        'A': 'a-tier',
        'B': 'b-tier',
        'C': 'c-tier',
        'D': 'd-tier',
        'F': 'f-tier'
    };

    // Laad tabeldata
    function loadTableData(data) {
        rankingTable.innerHTML = '';
        
        data.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="rank-cell ${tierColors[player.tier] || 'unranked-tier'}">${player.rank}</td>
                <td>
                    <div class="player-cell">
                        <img src="https://mc-heads.net/avatar/${player.name}/32" 
                             alt="${player.name}" 
                             class="player-avatar"
                             onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/32'">
                        ${player.name}
                    </div>
                </td>
                <td><span class="tier-badge ${tierColors[player.tier] || 'unranked-tier'}">${player.tier}</span></td>
                <td>${formatDate(player.updated)}</td>
                <td><button class="view-player-btn" data-name="${player.name}">
                    <i class="fas fa-eye"></i> Bekijk
                </button></td>
            `;
            rankingTable.appendChild(row);
        });

        // Voeg event listeners toe aan knoppen
        document.querySelectorAll('.view-player-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const playerName = this.getAttribute('data-name');
                showPlayerModal(playerName);
            });
        });
    }

    // Formatteer datum
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('nl-NL', options);
    }

    // Zoek functionaliteit
    function searchPlayers() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm === '') {
            loadTableData(playerData);
            return;
        }

        const filteredPlayers = playerData.filter(player => 
            player.name.toLowerCase().includes(searchTerm) ||
            player.tier.toLowerCase().includes(searchTerm)
        );
        
        if (filteredPlayers.length === 0) {
            rankingTable.innerHTML = `<tr><td colspan="5" class="no-results">Geen spelers gevonden voor "${searchTerm}"</td></tr>`;
        } else {
            loadTableData(filteredPlayers);
        }
    }

    // Toon player modal
    function showPlayerModal(playerName) {
        const player = playerData.find(p => p.name === playerName);
        if (!player) return;

        // Basis info
        modalName.textContent = player.name;
        modalTier.textContent = player.tier;
        modalTier.className = `tier-badge ${tierColors[player.tier] || 'unranked-tier'}`;
        modalSkin.src = `https://mc-heads.net/body/${player.name}`;
        modalSkin.alt = `${player.name}'s skin`;

        playerModal.style.display = 'block';
    }

    // Sluit modal
    function closePlayerModal() {
        playerModal.style.display = 'none';
    }

    // Event listeners
    searchButton.addEventListener('click', searchPlayers);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') searchPlayers();
    });
    closeModal.addEventListener('click', closePlayerModal);
    window.addEventListener('click', function(e) {
        if (e.target === playerModal) closePlayerModal();
    });

    // Laad initiële data
    loadTableData(playerData);

    // Voeg een kleine delay toe voor de animatie
    setTimeout(() => {
        document.querySelectorAll('tr').forEach((row, index) => {
            row.style.opacity = '0';
            row.style.animation = `fadeIn 0.3s ${index * 0.1}s forwards`;
        });
    }, 100);
});