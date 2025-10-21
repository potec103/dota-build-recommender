// Данные о героях Dota 2 (полный список)
const heroes = [
    { id: 'abaddon', name: 'Abaddon', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'alchemist', name: 'Alchemist', roles: ['carry'], counters: ['pudge', 'axe'] },
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
    const enemySelect = document.getElementById('enemy');

    heroes.forEach(hero => {
        const option = document.createElement('option');
        option.value = hero.id;
        option.textContent = hero.name;
        heroSelect.appendChild(option);

        const enemyOption = option.cloneNode(true);
        enemySelect.appendChild(enemyOption);
    });
}

// Логика рекомендаций билда
function getBuildRecommendation(heroId, role, enemyId) {
    const hero = heroes.find(h => h.id === heroId);
    const enemy = heroes.find(h => h.id === enemyId);

    if (!hero || !enemy) return 'Недостаточно данных для рекомендации.';

    let recommendation = `<h3>Рекомендация для ${hero.name} (${role}) против ${enemy.name}</h3>`;

    // Простая логика рекомендаций
    if (hero.counters.includes(enemyId)) {
        recommendation += '<p>Вы имеете преимущество! Этот герой хорошо контролит противника.</p>';
    } else if (enemy.counters.includes(heroId)) {
        recommendation += '<p>Будьте осторожны! Этот герой уязвим к противнику.</p>';
    } else {
        recommendation += '<p>Баланс сил. Играйте осторожно.</p>';
    }

    // Рекомендации по предметам (упрощенные)
    recommendation += '<h4>Рекомендуемые предметы:</h4><ul>';
    switch (role) {
        case 'carry':
            recommendation += '<li>Power Treads</li><li>Black King Bar</li><li>Butterfly</li>';
            break;
        case 'mid':
            recommendation += '<li>Blink Dagger</li><li>Force Staff</li><li>Scythe of Vyse</li>';
            break;
        case 'offlane':
            recommendation += '<li>Phase Boots</li><li>Blade Mail</li><li>Heart of Tarrasque</li>';
            break;
        case 'support':
            recommendation += '<li>Mekansm</li><li>Guardian Greaves</li><li>Force Staff</li>';
            break;
        case 'roaming':
            recommendation += '<li>Power Treads</li><li>Diffusal Blade</li><li>Manta Style</li>';
            break;
        default:
            recommendation += '<li>Общие предметы: Boots of Speed, Gloves of Haste</li>';
    }
    recommendation += '</ul>';

    return recommendation;
}

// Обработчик формы
document.getElementById('build-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const heroId = document.getElementById('hero').value;
    const role = document.getElementById('role').value;
    const enemyId = document.getElementById('enemy').value;

    if (!heroId || !role || !enemyId) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const recommendation = getBuildRecommendation(heroId, role, enemyId);
    document.getElementById('build-content').innerHTML = recommendation;
    document.getElementById('recommendation').classList.remove('hidden');
});

// Инициализация
document.addEventListener('DOMContentLoaded', populateHeroes);