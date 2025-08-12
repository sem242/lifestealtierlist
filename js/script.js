document.addEventListener('DOMContentLoaded', function() {
    // Alle Minecraft namen uit de Discord chat + geteste spelers
    const allPlayers = [
        // Geteste spelers met hun tiers
        { name: "Hidspot", tier: "S" },
        { name: "banzy_", tier: "S" },
        { name: "MimiBoy15", tier: "A" },
        { name: "crxnsio", tier: "A" },
        { name: "Doevie", tier: "B" },
        { name: "ToonDrone", tier: "B" },
        { name: "Mettix", tier: "C" },
        { name: "BADPAKonTT", tier: "C" },
        { name: "zaylz", tier: "C" },
        { name: "ItzTrazyyy", tier: "D" },
        { name: "mexz", tier: "D" },
        { name: "oEntityz", tier: "D" },
        { name: "Skibidi_diogo", tier: "D" },
        { name: "Chickenfighter50", tier: "F" },
        
        // Overige spelers (unranked)
        "Fla3m", "Jurreflorisrobi", "Zenderlink", "Druxiz", "flob1n_", 
        "Ems3y", "jthpower", "404Mat", "Broodkaas", "Smotserela", 
        "Extra_Me", "Xenoary", "LukasMan2", "TIBOWWW_", "Wekko_", 
        "Demistic", "MrPaketJup", "Danoontjuhhh", "MathiasXD_", "Availqble_", 
        "Freakyfreaker", "1xVoidz", "SK_Milo123", "Bl1kje", "FlobiZ15", 
        "Rxiq", "Daanbas7", "Gamer_xd_pro_200", "VINCE043", "Robbie_1234", 
        "bestdutchperson", "qu1ck3d", "DinobeastYT", "babber_", "JJaden2024", 
        "3746", "SWIPEEEEE", "Fletiofrags", "Cleonekuh12", "Kloas_Tossel", 
        "xmandv", "Wickedfire75", "S_vdn_", "frost658", "Jason12379", 
        "vLuca_", "Poplolsa", "Rqspect", "GGin01", "zNixls_", 
        "Magicify", "Tijd_Teveel", "TippieToepie", "FS_Straid", "Insane_guy957", 
        "xzpricklyzx", "JSTRED", "Enfuindhdd", "Snellephilip", "romigkoenkie", 
        "llynix", "GrasSprietjuh", "FW_Teru", "FlyingDutchy2", "Noudddddino", 
        "sm75851", "Molberts1", "_Lebrontheking_", "Egirlstarzy", "MoaningMan69", 
        "Matthiezzz", "Leonekuh12", "wrapSD", "pxraiso", "MiDeathhh", 
        "Kuspim", "Vogelkak"
    ];

    // Maak playerData array met ranks en tiers
    const playerData = allPlayers.map((player, index) => {
        if (typeof player === 'object') {
            // Dit is een geteste speler met tier info
            return {
                rank: index + 1,
                name: player.name,
                tier: player.tier,
                updated: new Date().toISOString().split('T')[0],
                tested: true
            };
        } else {
            // Dit is een unranked speler
            return {
                rank: index + 1,
                name: player,
                tier: "UNRANKED",
                updated: new Date().toISOString().split('T')[0],
                tested: false
            };
        }
    });

    // DOM elementen
    const rankingTable = document.getElementById('ranking-data');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const playerModal = document.getElementById('player-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalSkin = document.getElementById('modal-skin');
    const modalName = document.getElementById('modal-name');
    const modalTier = document.getElementById('modal-tier');
    const modalTestInfo = document.getElementById('modal-test-info');

    // Tier kleuren mapping
    const tierColors = {
        'S': 's-tier',
        'A': 'a-tier',
        'B': 'b-tier',
        'C': 'c-tier',
        'D': 'd-tier',
        'F': 'f-tier',
        'UNRANKED': 'unranked-tier'
    };

    // Laad tabeldata
    function loadTableData(data) {
        rankingTable.innerHTML = '';
        
        data.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="rank-cell ${tierColors[player.tier]}">${player.rank}</td>
                <td>
                    <div class="player-cell">
                        <img src="https://mc-heads.net/avatar/${player.name}/32" 
                             alt="${player.name}" 
                             class="player-avatar"
                             onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/32'">
                        ${player.name}
                    </div>
                </td>
                <td><span class="tier-badge ${tierColors[player.tier]}">${player.tier}</span></td>
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
        modalTier.className = `tier-badge ${tierColors[player.tier]}`;
        modalSkin.src = `https://mc-heads.net/body/${player.name}`;
        modalSkin.alt = `${player.name}'s skin`;

        // Extra info voor geteste spelers
        if (player.tested) {
            modalTestInfo.innerHTML = `
                <div class="tested-info">
                    <h4>Geteste Speler</h4>
                    <p>Deze speler heeft een officiële tier ranking.</p>
                </div>
            `;
        } else {
            modalTestInfo.innerHTML = `
                <div class="untested-info">
                    <h4>Nog niet getest</h4>
                    <p>Deze speler heeft nog geen officiële tier ranking.</p>
                </div>
            `;
        }

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
            row.style.animation = `fadeIn 0.3s ${index * 0.05}s forwards`;
        });
    }, 100);
});