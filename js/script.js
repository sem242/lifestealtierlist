document.addEventListener('DOMContentLoaded', function() {
    // Eerst controleren of de tabel bestaat
    const rankingTable = document.getElementById('ranking-data');
    if (!rankingTable) {
        console.error('Tabel element niet gevonden');
        return;
    }

    // Complete spelerdata
    const playerData = [
        // Geteste spelers
        { name: "Hidspot", tier: "S", tested: true },
        { name: "banzy_", tier: "S", tested: true },
        { name: "Hlppo", tier: "S", tested: true },
        { name: "MimiBoy15", tier: "A", tested: true },
        { name: "crxnsio", tier: "A", tested: true },
        { name: "Druxiz", tier: "A", tested: true },        
        { name: "Doevie", tier: "B", tested: true },
        { name: "ToonDrone", tier: "B", tested: true },
        { name: "Kuspim", tier: "B", tested: true },
        { name: "Broodkaas", tier: "C", tested: true },
        { name: "Mettix", tier: "C", tested: true },
        { name: "BADPAKonTT", tier: "C", tested: true },
        { name: "zaylz", tier: "C", tested: true },
        { name: "sm75851", tier: "C", tested: true },
        { name: "Gamer_xd_pro_200", tier: "C", tested: true },
        { name: "llynix", tier: "C", tested: true },
        { name: "ItzTrazyyy", tier: "D", tested: true },
        { name: "mexz", tier: "D", tested: true },
        { name: "oEntityz", tier: "D", tested: true },
        { name: "Skibidi_diogo", tier: "D", tested: true },
        { name: "Ems3y", tier: "F", tested: true },
        { name: "Chickenfighter50", tier: "F", tested: true },
        
        // Ongeteste spelers
        "Fla3m", "Jurreflorisrobi", "Zenderlink", "flob1n_", 
        "jthpower", "404Mat", "Smotserela", "Extra_Me", 
        "Xenoary", "LukasMan2", "TIBOWWW_", "Wekko_", "Demistic", 
        "MrPaketJup", "Danoontjuhhh", "MathiasXD_", "Availqble_", "Freakyfreaker", 
        "1xVoidz", "SK_Milo123", "Bl1kje", "FlobiZ15", "Rxiq", 
        "Daanbas7", "VINCE043", "Robbie_1234", "bestdutchperson", "qu1ck3d", 
        "DinobeastYT", "babber_", "JJaden2024", "3746", "SWIPEEEEE", 
        "Fletiofrags", "Cleonekuh12", "Kloas_Tossel", "xmandv", "Wickedfire75", 
        "S_vdn_", "frost658", "Jason12379", "vLuca_", "Poplolsa", 
        "Rqspect", "GGin01", "zNixls_", "Magicify", "Tijd_Teveel", 
        "TippieToepie", "FS_Straid", "Insane_guy957", "xzpricklyzx", "JSTRED", 
        "Enfuindhdd", "Snellephilip", "romigkoenkie", "GrasSprietjuh", 
        "FW_Teru", "FlyingDutchy2", "Noudddddino", "Molberts1", "_Lebrontheking_", 
        "Egirlstarzy", "MoaningMan69", "Matthiezzz", "Leonekuh12", "wrapSD", 
        "pxraiso", "MiDeathhh", "Vogelkak", "Angelotijger", "emmer_water", "Vicious_kiwi"
    ].map((player, index) => {
        if (typeof player === 'object') {
            return {
                ...player,
                rank: index + 1,
                updated: new Date().toISOString().split('T')[0]
            };
        } else {
            return {
                name: player,
                tier: "UNRANKED",
                tested: false,
                rank: index + 1,
                updated: new Date().toISOString().split('T')[0]
            };
        }
    });

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

    // Vul de tabel met data
    function fillTable() {
        rankingTable.innerHTML = playerData.map(player => `
            <tr>
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
                <td>${new Date(player.updated).toLocaleDateString('nl-NL')}</td>
                <td><button class="view-player-btn" data-name="${player.name}">
                    <i class="fas fa-eye"></i> Bekijk
                </button></td>
            </tr>
        `).join('');

        // Voeg event listeners toe voor de modal knoppen
        document.querySelectorAll('.view-player-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const playerName = this.getAttribute('data-name');
                const player = playerData.find(p => p.name === playerName);
                if (!player) return;

                const modal = document.getElementById('player-modal');
                if (!modal) return;

                // Vul modal met data
                document.getElementById('modal-name').textContent = player.name;
                document.getElementById('modal-tier').textContent = player.tier;
                document.getElementById('modal-tier').className = `tier-badge ${tierColors[player.tier]}`;
                document.getElementById('modal-skin').src = `https://mc-heads.net/body/${player.name}`;
                
                const testInfo = document.getElementById('modal-test-info');
                testInfo.innerHTML = player.tested ? `
                    <div class="tested-info">
                        <h4>Geteste Speler</h4>
                        <p>Deze speler heeft een officiële tier ranking.</p>
                    </div>
                ` : `
                    <div class="untested-info">
                        <h4>Nog niet getest</h4>
                        <p>Deze speler heeft nog geen officiële tier ranking.</p>
                    </div>
                `;

                modal.style.display = 'block';
            });
        });
    }

    // Sluit modal functionaliteit
    document.querySelector('.close-modal')?.addEventListener('click', function() {
        document.getElementById('player-modal').style.display = 'none';
    });

    // Vul de tabel bij laden
    fillTable();
});