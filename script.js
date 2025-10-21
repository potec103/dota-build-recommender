// Данные о героях Dota 2 (полный список)
const heroes = [
    { id: 'abaddon', name: 'Abaddon', icon: 'https://cdn.dota2.com/apps/dota2/images/heroes/abaddon_icon.png', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'alchemist', name: 'Alchemist', icon: 'https://cdn.dota2.com/apps/dota2/images/heroes/alchemist_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'ancient_apparition', name: 'Ancient Apparition', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'antimage', name: 'Anti-Mage', roles: ['carry'], counters: ['axe', 'pudge'] },
    { id: 'arc_warden', name: 'Arc Warden', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'axe', name: 'Axe', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'bane', name: 'Bane', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'batrider', name: 'Batrider', roles: ['mid', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'beastmaster', name: 'Beastmaster', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'bloodseeker', name: 'Bloodseeker', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'bounty_hunter', name: 'Bounty Hunter', roles: ['support', 'roaming'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'brewmaster', name: 'Brewmaster', roles: ['offlane', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'bristleback', name: 'Bristleback', roles: ['carry', 'offlane'], counters: ['pudge', 'axe'] },
    { id: 'broodmother', name: 'Broodmother', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'centaur_warrunner', name: 'Centaur Warrunner', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'chaos_knight', name: 'Chaos Knight', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'chen', name: 'Chen', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'clinkz', name: 'Clinkz', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'clockwerk', name: 'Clockwerk', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'crystal_maiden', name: 'Crystal Maiden', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dark_seer', name: 'Dark Seer', roles: ['mid', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dark_willow', name: 'Dark Willow', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dawnbreaker', name: 'Dawnbreaker', roles: ['offlane', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dazzle', name: 'Dazzle', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'death_prophet', name: 'Death Prophet', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'disruptor', name: 'Disruptor', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'doom', name: 'Doom', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dragon_knight', name: 'Dragon Knight', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'drow_ranger', name: 'Drow Ranger', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'earth_spirit', name: 'Earth Spirit', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'earthshaker', name: 'Earthshaker', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'elder_titan', name: 'Elder Titan', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'ember_spirit', name: 'Ember Spirit', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'enchantress', name: 'Enchantress', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'enigma', name: 'Enigma', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'faceless_void', name: 'Faceless Void', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'grimstroke', name: 'Grimstroke', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'gyrocopter', name: 'Gyrocopter', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'hoodwink', name: 'Hoodwink', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'huskar', name: 'Huskar', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'invoker', name: 'Invoker', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'io', name: 'Io', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'jakiro', name: 'Jakiro', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'juggernaut', name: 'Juggernaut', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'keeper_of_the_light', name: 'Keeper of the Light', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'kunkka', name: 'Kunkka', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'legion_commander', name: 'Legion Commander', roles: ['carry', 'offlane'], counters: ['pudge', 'axe'] },
    { id: 'leshrac', name: 'Leshrac', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'lich', name: 'Lich', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'lifestealer', name: 'Lifestealer', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'lina', name: 'Lina', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'lion', name: 'Lion', roles: ['mid', 'support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'lone_druid', name: 'Lone Druid', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'luna', name: 'Luna', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'lycan', name: 'Lycan', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'magnus', name: 'Magnus', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'marci', name: 'Marci', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'mars', name: 'Mars', roles: ['offlane', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'medusa', name: 'Medusa', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'meepo', name: 'Meepo', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'mirana', name: 'Mirana', roles: ['carry', 'support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'monkey_king', name: 'Monkey King', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'morphling', name: 'Morphling', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'muerta', name: 'Muerta', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'naga_siren', name: 'Naga Siren', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'nature_prophet', name: 'Nature\'s Prophet', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'necrophos', name: 'Necrophos', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'night_stalker', name: 'Night Stalker', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'nyx_assassin', name: 'Nyx Assassin', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'ogre_magi', name: 'Ogre Magi', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'omniknight', name: 'Omniknight', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'oracle', name: 'Oracle', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'outworld_destroyer', name: 'Outworld Destroyer', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'pangolier', name: 'Pangolier', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'phantom_assassin', name: 'Phantom Assassin', roles: ['carry'], counters: ['axe', 'slardar'] },
    { id: 'phantom_lancer', name: 'Phantom Lancer', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'phoenix', name: 'Phoenix', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'primal_beast', name: 'Primal Beast', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'puck', name: 'Puck', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'pudge', name: 'Pudge', roles: ['support', 'offlane'], counters: ['windranger', 'sniper'] },
    { id: 'pugna', name: 'Pugna', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'queen_of_pain', name: 'Queen of Pain', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'razor', name: 'Razor', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'riki', name: 'Riki', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'rubick', name: 'Rubick', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'sand_king', name: 'Sand King', roles: ['offlane', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'shadow_demon', name: 'Shadow Demon', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'shadow_fiend', name: 'Shadow Fiend', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'shadow_shaman', name: 'Shadow Shaman', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'silencer', name: 'Silencer', roles: ['mid', 'support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'skywrath_mage', name: 'Skywrath Mage', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'slardar', name: 'Slardar', roles: ['offlane', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'slark', name: 'Slark', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'snapfire', name: 'Snapfire', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'sniper', name: 'Sniper', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'spectre', name: 'Spectre', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'spirit_breaker', name: 'Spirit Breaker', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'storm_spirit', name: 'Storm Spirit', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'sven', name: 'Sven', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'techies', name: 'Techies', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'templar_assassin', name: 'Templar Assassin', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'terrorblade', name: 'Terrorblade', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'tidehunter', name: 'Tidehunter', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'timbersaw', name: 'Timbersaw', roles: ['offlane', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'tinker', name: 'Tinker', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'tiny', name: 'Tiny', roles: ['carry', 'offlane'], counters: ['pudge', 'axe'] },
    { id: 'treant_protector', name: 'Treant Protector', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'troll_warlord', name: 'Troll Warlord', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'tusk', name: 'Tusk', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'underlord', name: 'Underlord', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'undying', name: 'Undying', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'ursa', name: 'Ursa', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'vengeful_spirit', name: 'Vengeful Spirit', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'venomancer', name: 'Venomancer', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'viper', name: 'Viper', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'visage', name: 'Visage', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'void_spirit', name: 'Void Spirit', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'warlock', name: 'Warlock', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'weaver', name: 'Weaver', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'windranger', name: 'Windranger', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'winter_wyvern', name: 'Winter Wyvern', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'witch_doctor', name: 'Witch Doctor', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'wraith_king', name: 'Wraith King', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'zeus', name: 'Zeus', roles: ['mid'], counters: ['pudge', 'axe'] }
];

// Заполнение селекторов героями
function populateHeroes() {
    const heroSelect = document.getElementById('hero');
    const enemySelects = ['enemy-carry', 'enemy-mid', 'enemy-offlane', 'enemy-support1', 'enemy-support2'];

    // Очищаем селекторы перед заполнением
    heroSelect.innerHTML = '<option value="">-- Выберите героя --</option>';
    enemySelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        select.innerHTML = '<option value="">-- Выберите --</option>';
    });

    heroes.forEach(hero => {
        const option = document.createElement('option');
        option.value = hero.id;
        option.innerHTML = `<img src="${hero.icon}" alt="${hero.name}" style="width: 20px; height: 20px; margin-right: 5px;"> ${hero.name}`;
        heroSelect.appendChild(option);

        enemySelects.forEach(selectId => {
            const enemyOption = option.cloneNode(true);
            document.getElementById(selectId).appendChild(enemyOption);
        });
    });
}

// Логика рекомендаций билда
function getBuildRecommendation(heroId, role, enemyIds) {
    const hero = heroes.find(h => h.id === heroId);
    const enemies = enemyIds.map(id => heroes.find(h => h.id === id)).filter(Boolean);

    if (!hero || enemies.length === 0) return 'Недостаточно данных для рекомендации.';

    let recommendation = `<h3>Рекомендация для ${hero.name} (${role})</h3>`;
    recommendation += '<p>Противники: ' + enemies.map(e => e.name).join(', ') + '</p>';

    // Анализ контрпиков
    const counters = enemies.filter(enemy => hero.counters.includes(enemy.id));
    const counteredBy = enemies.filter(enemy => enemy.counters.includes(hero.id));

    if (counters.length > 0) {
        recommendation += '<p>Преимущество против: ' + counters.map(e => e.name).join(', ') + '</p>';
    }
    if (counteredBy.length > 0) {
        recommendation += '<p>Будьте осторожны с: ' + counteredBy.map(e => e.name).join(', ') + '</p>';
    }
    if (counters.length === 0 && counteredBy.length === 0) {
        recommendation += '<p>Баланс сил. Играйте осторожно.</p>';
    }

    // Рекомендации по предметам (расширенные с пошаговым объяснением и иконками)
    recommendation += '<h4>Рекомендуемые предметы:</h4><ol>';
    switch (role) {
        case 'carry':
            recommendation += '<li><strong>Ранние предметы:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/power_treads_lg.png" alt="Power Treads" style="width: 30px; height: 20px;"> Power Treads (для мобильности и урона), <img src="https://cdn.dota2.com/apps/dota2/images/items/wraith_band_lg.png" alt="Wraith Band" style="width: 30px; height: 20px;"> Wraith Band (для урона и атрибутов)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/black_king_bar_lg.png" alt="Black King Bar" style="width: 30px; height: 20px;"> Black King Bar (для танкования магии), <img src="https://cdn.dota2.com/apps/dota2/images/items/manta_lg.png" alt="Manta Style" style="width: 30px; height: 20px;"> Manta Style (для иллюзий и скорости)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/butterfly_lg.png" alt="Butterfly" style="width: 30px; height: 20px;"> Butterfly (для уклонения и урона), <img src="https://cdn.dota2.com/apps/dota2/images/items/monkey_king_bar_lg.png" alt="Monkey King Bar" style="width: 30px; height: 20px;"> Monkey King Bar (против иллюзий), <img src="https://cdn.dota2.com/apps/dota2/images/items/abyssal_blade_lg.png" alt="Abyssal Blade" style="width: 30px; height: 20px;"> Abyssal Blade (для контроля)</li>';
            break;
        case 'mid':
            recommendation += '<li><strong>Ранние предметы:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/blink_lg.png" alt="Blink Dagger" style="width: 30px; height: 20px;"> Blink Dagger (для мобильности), <img src="https://cdn.dota2.com/apps/dota2/images/items/force_staff_lg.png" alt="Force Staff" style="width: 30px; height: 20px;"> Force Staff (для контроля)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/sheepstick_lg.png" alt="Scythe of Vyse" style="width: 30px; height: 20px;"> Scythe of Vyse (для отключения), <img src="https://cdn.dota2.com/apps/dota2/images/items/aether_lens_lg.png" alt="Aether Lens" style="width: 30px; height: 20px;"> Aether Lens (для маны)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/nullifier_lg.png" alt="Nullifier" style="width: 30px; height: 20px;"> Nullifier (против предметов), <img src="https://cdn.dota2.com/apps/dota2/images/items/sphere_lg.png" alt="Linken\'s Sphere" style="width: 30px; height: 20px;"> Linken\'s Sphere (защита от заклинаний)</li>';
            break;
        case 'offlane':
            recommendation += '<li><strong>Ранние предметы:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/phase_boots_lg.png" alt="Phase Boots" style="width: 30px; height: 20px;"> Phase Boots (для скорости), <img src="https://cdn.dota2.com/apps/dota2/images/items/blade_mail_lg.png" alt="Blade Mail" style="width: 30px; height: 20px;"> Blade Mail (для отражения урона)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/heart_lg.png" alt="Heart of Tarrasque" style="width: 30px; height: 20px;"> Heart of Tarrasque (для здоровья), <img src="https://cdn.dota2.com/apps/dota2/images/items/assault_lg.png" alt="Assault Cuirass" style="width: 30px; height: 20px;"> Assault Cuirass (для урона команде)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/shivas_guard_lg.png" alt="Shiva\'s Guard" style="width: 30px; height: 20px;"> Shiva\'s Guard (для замедления), <img src="https://cdn.dota2.com/apps/dota2/images/items/crimson_guard_lg.png" alt="Crimson Guard" style="width: 30px; height: 20px;"> Crimson Guard (для танкования)</li>';
            break;
        case 'support':
            recommendation += '<li><strong>Ранние предметы:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/mekansm_lg.png" alt="Mekansm" style="width: 30px; height: 20px;"> Mekansm (для лечения), <img src="https://cdn.dota2.com/apps/dota2/images/items/ward_observer_lg.png" alt="Observer Ward" style="width: 30px; height: 20px;"> Observer Ward (для зрения)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/guardian_greaves_lg.png" alt="Guardian Greaves" style="width: 30px; height: 20px;"> Guardian Greaves (для лечения и маны), <img src="https://cdn.dota2.com/apps/dota2/images/items/force_staff_lg.png" alt="Force Staff" style="width: 30px; height: 20px;"> Force Staff (для контроля)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/glimmer_cape_lg.png" alt="Glimmer Cape" style="width: 30px; height: 20px;"> Glimmer Cape (для невидимости), <img src="https://cdn.dota2.com/apps/dota2/images/items/lotus_orb_lg.png" alt="Lotus Orb" style="width: 30px; height: 20px;"> Lotus Orb (для отражения)</li>';
            break;
        case 'roaming':
            recommendation += '<li><strong>Ранние предметы:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/power_treads_lg.png" alt="Power Treads" style="width: 30px; height: 20px;"> Power Treads (для мобильности), <img src="https://cdn.dota2.com/apps/dota2/images/items/diffusal_blade_lg.png" alt="Diffusal Blade" style="width: 30px; height: 20px;"> Diffusal Blade (для замедления)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/manta_lg.png" alt="Manta Style" style="width: 30px; height: 20px;"> Manta Style (для иллюзий), <img src="https://cdn.dota2.com/apps/dota2/images/items/cyclone_lg.png" alt="Eul\'s Scepter" style="width: 30px; height: 20px;"> Eul\'s Scepter (для контроля)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> <img src="https://cdn.dota2.com/apps/dota2/images/items/desolator_lg.png" alt="Desolator" style="width: 30px; height: 20px;"> Desolator (для урона), <img src="https://cdn.dota2.com/apps/dota2/images/items/skadi_lg.png" alt="Eye of Skadi" style="width: 30px; height: 20px;"> Eye of Skadi (для замедления)</li>';
            break;
        default:
            recommendation += '<li>Общие предметы: <img src="https://cdn.dota2.com/apps/dota2/images/items/boots_lg.png" alt="Boots of Speed" style="width: 30px; height: 20px;"> Boots of Speed, <img src="https://cdn.dota2.com/apps/dota2/images/items/gloves_lg.png" alt="Gloves of Haste" style="width: 30px; height: 20px;"> Gloves of Haste, <img src="https://cdn.dota2.com/apps/dota2/images/items/hand_of_midas_lg.png" alt="Hand of Midas" style="width: 30px; height: 20px;"> Hand of Midas</li>';
    }
    recommendation += '</ol>';

    // Дополнительные рекомендации
    recommendation += '<h4>Дополнительные советы:</h4><ul>';
    if (counters.length > counteredBy.length) {
        recommendation += '<li>Агрессивная игра: используйте преимущество для раннего давления.</li>';
        recommendation += '<li>Фокус на фарме: собирайте ресурсы для доминирования в поздней игре.</li>';
    } else if (counteredBy.length > counters.length) {
        recommendation += '<li>Оборонительная стратегия: избегайте прямых столкновений.</li>';
        recommendation += '<li>Командная игра: полагайтесь на союзников для поддержки.</li>';
    } else {
        recommendation += '<li>Баланс: чередуйте агрессию и оборону в зависимости от ситуации.</li>';
        recommendation += '<li>Адаптация: следите за пиками противника и корректируйте билд.</li>';
    }
    recommendation += '<li>Варды: контролируйте карту для предотвращения засад.</li>';
    recommendation += '<li>Коммуникация: координируйте действия с командой.</li>';
    recommendation += '</ul>';

    return recommendation;
}

// Обработчик формы
document.getElementById('build-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const heroId = document.getElementById('hero').value;
    const role = document.getElementById('role').value;
    const enemyIds = ['enemy-carry', 'enemy-mid', 'enemy-offlane', 'enemy-support1', 'enemy-support2']
        .map(id => document.getElementById(id).value)
        .filter(id => id); // Убираем пустые значения

    if (!heroId || !role || enemyIds.length === 0) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const recommendation = getBuildRecommendation(heroId, role, enemyIds);
    document.getElementById('build-content').innerHTML = recommendation;
    document.getElementById('recommendation').classList.remove('hidden');
});

// Инициализация
document.addEventListener('DOMContentLoaded', populateHeroes);