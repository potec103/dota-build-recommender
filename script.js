// Данные о героях Dota 2 (полный список)
const heroes = [
    { id: 'abaddon', name: 'Abaddon', icon: 'images/heroes/abaddon_icon.png', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'alchemist', name: 'Alchemist', icon: 'images/heroes/alchemist_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'ancient_apparition', name: 'Ancient Apparition', icon: 'images/heroes/ancient_apparition_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'antimage', name: 'Anti-Mage', icon: 'images/heroes/antimage_icon.png', roles: ['carry'], counters: ['axe', 'pudge'] },
    { id: 'arc_warden', name: 'Arc Warden', icon: 'images/heroes/arc_warden_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'axe', name: 'Axe', icon: 'images/heroes/axe_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'bane', name: 'Bane', icon: 'images/heroes/bane_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'batrider', name: 'Batrider', icon: 'images/heroes/batrider_icon.png', roles: ['mid', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'beastmaster', name: 'Beastmaster', icon: 'images/heroes/beastmaster_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'bloodseeker', name: 'Bloodseeker', icon: 'images/heroes/bloodseeker_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'bounty_hunter', name: 'Bounty Hunter', icon: 'images/heroes/bounty_hunter_icon.png', roles: ['support', 'roaming'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'brewmaster', name: 'Brewmaster', icon: 'images/heroes/brewmaster_icon.png', roles: ['offlane', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'bristleback', name: 'Bristleback', icon: 'images/heroes/bristleback_icon.png', roles: ['carry', 'offlane'], counters: ['pudge', 'axe'] },
    { id: 'broodmother', name: 'Broodmother', icon: 'images/heroes/broodmother_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'centaur_warrunner', name: 'Centaur Warrunner', icon: 'images/heroes/centaur_warrunner_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'chaos_knight', name: 'Chaos Knight', icon: 'images/heroes/chaos_knight_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'chen', name: 'Chen', icon: 'images/heroes/chen_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'clinkz', name: 'Clinkz', icon: 'images/heroes/clinkz_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'clockwerk', name: 'Clockwerk', icon: 'images/heroes/clockwerk_icon.png', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'crystal_maiden', name: 'Crystal Maiden', icon: 'images/heroes/crystal_maiden_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dark_seer', name: 'Dark Seer', icon: 'images/heroes/dark_seer_icon.png', roles: ['mid', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dark_willow', name: 'Dark Willow', icon: 'images/heroes/dark_willow_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dawnbreaker', name: 'Dawnbreaker', icon: 'images/heroes/dawnbreaker_icon.png', roles: ['offlane', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dazzle', name: 'Dazzle', icon: 'images/heroes/dazzle_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'death_prophet', name: 'Death Prophet', icon: 'images/heroes/death_prophet_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'disruptor', name: 'Disruptor', icon: 'images/heroes/disruptor_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'doom', name: 'Doom', icon: 'images/heroes/doom_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'dragon_knight', name: 'Dragon Knight', icon: 'images/heroes/dragon_knight_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'drow_ranger', name: 'Drow Ranger', icon: 'images/heroes/drow_ranger_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'earth_spirit', name: 'Earth Spirit', icon: 'images/heroes/earth_spirit_icon.png', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'earthshaker', name: 'Earthshaker', icon: 'images/heroes/earthshaker_icon.png', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'elder_titan', name: 'Elder Titan', icon: 'images/heroes/elder_titan_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'ember_spirit', name: 'Ember Spirit', icon: 'images/heroes/ember_spirit_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'enchantress', name: 'Enchantress', icon: 'images/heroes/enchantress_icon.png', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'enigma', name: 'Enigma', icon: 'images/heroes/enigma_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'faceless_void', name: 'Faceless Void', icon: 'images/heroes/faceless_void_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'grimstroke', name: 'Grimstroke', icon: 'images/heroes/grimstroke_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'gyrocopter', name: 'Gyrocopter', icon: 'images/heroes/gyrocopter_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'hoodwink', name: 'Hoodwink', icon: 'images/heroes/hoodwink_icon.png', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'huskar', name: 'Huskar', icon: 'images/heroes/huskar_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'invoker', name: 'Invoker', icon: 'images/heroes/invoker_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'io', name: 'Io', icon: 'images/heroes/io_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'jakiro', name: 'Jakiro', icon: 'images/heroes/jakiro_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'juggernaut', name: 'Juggernaut', icon: 'images/heroes/juggernaut_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'keeper_of_the_light', name: 'Keeper of the Light', icon: 'images/heroes/keeper_of_the_light_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'kunkka', name: 'Kunkka', icon: 'images/heroes/kunkka_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'legion_commander', name: 'Legion Commander', icon: 'images/heroes/legion_commander_icon.png', roles: ['carry', 'offlane'], counters: ['pudge', 'axe'] },
    { id: 'leshrac', name: 'Leshrac', icon: 'images/heroes/leshrac_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'lich', name: 'Lich', icon: 'images/heroes/lich_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'lifestealer', name: 'Lifestealer', icon: 'images/heroes/lifestealer_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'lina', name: 'Lina', icon: 'images/heroes/lina_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'lion', name: 'Lion', icon: 'images/heroes/lion_icon.png', roles: ['mid', 'support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'lone_druid', name: 'Lone Druid', icon: 'images/heroes/lone_druid_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'luna', name: 'Luna', icon: 'images/heroes/luna_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'lycan', name: 'Lycan', icon: 'images/heroes/lycan_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'magnus', name: 'Magnus', icon: 'images/heroes/magnus_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'marci', name: 'Marci', icon: 'images/heroes/marci_icon.png', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'mars', name: 'Mars', icon: 'images/heroes/mars_icon.png', roles: ['offlane', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'medusa', name: 'Medusa', icon: 'images/heroes/medusa_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'meepo', name: 'Meepo', icon: 'images/heroes/meepo_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'mirana', name: 'Mirana', icon: 'images/heroes/mirana_icon.png', roles: ['carry', 'support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'monkey_king', name: 'Monkey King', icon: 'images/heroes/monkey_king_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'morphling', name: 'Morphling', icon: 'images/heroes/morphling_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'muerta', name: 'Muerta', icon: 'images/heroes/muerta_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'naga_siren', name: 'Naga Siren', icon: 'images/heroes/naga_siren_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'nature_prophet', name: 'Nature\'s Prophet', icon: 'images/heroes/nature_prophet_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'necrophos', name: 'Necrophos', icon: 'images/heroes/necrophos_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'night_stalker', name: 'Night Stalker', icon: 'images/heroes/night_stalker_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'nyx_assassin', name: 'Nyx Assassin', icon: 'images/heroes/nyx_assassin_icon.png', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'ogre_magi', name: 'Ogre Magi', icon: 'images/heroes/ogre_magi_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'omniknight', name: 'Omniknight', icon: 'images/heroes/omniknight_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'oracle', name: 'Oracle', icon: 'images/heroes/oracle_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'outworld_destroyer', name: 'Outworld Destroyer', icon: 'images/heroes/outworld_destroyer_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'pangolier', name: 'Pangolier', icon: 'images/heroes/pangolier_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'phantom_assassin', name: 'Phantom Assassin', icon: 'images/heroes/phantom_assassin_icon.png', roles: ['carry'], counters: ['axe', 'slardar'] },
    { id: 'phantom_lancer', name: 'Phantom Lancer', icon: 'images/heroes/phantom_lancer_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'phoenix', name: 'Phoenix', icon: 'images/heroes/phoenix_icon.png', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'primal_beast', name: 'Primal Beast', icon: 'images/heroes/primal_beast_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'puck', name: 'Puck', icon: 'images/heroes/puck_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'pudge', name: 'Pudge', icon: 'images/heroes/pudge_icon.png', roles: ['support', 'offlane'], counters: ['windranger', 'sniper'] },
    { id: 'pugna', name: 'Pugna', icon: 'images/heroes/pugna_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'queen_of_pain', name: 'Queen of Pain', icon: 'images/heroes/queen_of_pain_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'razor', name: 'Razor', icon: 'images/heroes/razor_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'riki', name: 'Riki', icon: 'images/heroes/riki_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'rubick', name: 'Rubick', icon: 'images/heroes/rubick_icon.png', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'sand_king', name: 'Sand King', icon: 'images/heroes/sand_king_icon.png', roles: ['offlane', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'shadow_demon', name: 'Shadow Demon', icon: 'images/heroes/shadow_demon_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'shadow_fiend', name: 'Shadow Fiend', icon: 'images/heroes/shadow_fiend_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'shadow_shaman', name: 'Shadow Shaman', icon: 'images/heroes/shadow_shaman_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'silencer', name: 'Silencer', icon: 'images/heroes/silencer_icon.png', roles: ['mid', 'support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'skywrath_mage', name: 'Skywrath Mage', icon: 'images/heroes/skywrath_mage_icon.png', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'slardar', name: 'Slardar', icon: 'images/heroes/slardar_icon.png', roles: ['offlane', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'slark', name: 'Slark', icon: 'images/heroes/slark_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'snapfire', name: 'Snapfire', icon: 'images/heroes/snapfire_icon.png', roles: ['support', 'carry'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'sniper', name: 'Sniper', icon: 'images/heroes/sniper_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'spectre', name: 'Spectre', icon: 'images/heroes/spectre_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'spirit_breaker', name: 'Spirit Breaker', icon: 'images/heroes/spirit_breaker_icon.png', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'storm_spirit', name: 'Storm Spirit', icon: 'images/heroes/storm_spirit_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'sven', name: 'Sven', icon: 'images/heroes/sven_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'techies', name: 'Techies', icon: 'images/heroes/techies_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'templar_assassin', name: 'Templar Assassin', icon: 'images/heroes/templar_assassin_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'terrorblade', name: 'Terrorblade', icon: 'images/heroes/terrorblade_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'tidehunter', name: 'Tidehunter', icon: 'images/heroes/tidehunter_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'timbersaw', name: 'Timbersaw', icon: 'images/heroes/timbersaw_icon.png', roles: ['offlane', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'tinker', name: 'Tinker', icon: 'images/heroes/tinker_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] },
    { id: 'tiny', name: 'Tiny', icon: 'images/heroes/tiny_icon.png', roles: ['carry', 'offlane'], counters: ['pudge', 'axe'] },
    { id: 'treant_protector', name: 'Treant Protector', icon: 'images/heroes/treant_protector_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'troll_warlord', name: 'Troll Warlord', icon: 'images/heroes/troll_warlord_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'tusk', name: 'Tusk', icon: 'images/heroes/tusk_icon.png', roles: ['support', 'offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'underlord', name: 'Underlord', icon: 'images/heroes/underlord_icon.png', roles: ['offlane'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'undying', name: 'Undying', icon: 'images/heroes/undying_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'ursa', name: 'Ursa', icon: 'images/heroes/ursa_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'vengeful_spirit', name: 'Vengeful Spirit', icon: 'images/heroes/vengeful_spirit_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'venomancer', name: 'Venomancer', icon: 'images/heroes/venomancer_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'viper', name: 'Viper', icon: 'images/heroes/viper_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'visage', name: 'Visage', icon: 'images/heroes/visage_icon.png', roles: ['support', 'mid'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'void_spirit', name: 'Void Spirit', icon: 'images/heroes/void_spirit_icon.png', roles: ['mid', 'carry'], counters: ['pudge', 'axe'] },
    { id: 'warlock', name: 'Warlock', icon: 'images/heroes/warlock_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'weaver', name: 'Weaver', icon: 'images/heroes/weaver_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'windranger', name: 'Windranger', icon: 'images/heroes/windranger_icon.png', roles: ['carry', 'mid'], counters: ['pudge', 'axe'] },
    { id: 'winter_wyvern', name: 'Winter Wyvern', icon: 'images/heroes/winter_wyvern_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'witch_doctor', name: 'Witch Doctor', icon: 'images/heroes/witch_doctor_icon.png', roles: ['support'], counters: ['phantom_assassin', 'juggernaut'] },
    { id: 'wraith_king', name: 'Wraith King', icon: 'images/heroes/wraith_king_icon.png', roles: ['carry'], counters: ['pudge', 'axe'] },
    { id: 'zeus', name: 'Zeus', icon: 'images/heroes/zeus_icon.png', roles: ['mid'], counters: ['pudge', 'axe'] }
];

// Заполнение селекторов героями
function populateHeroes() {
    const heroList = document.getElementById('hero-list');
    const heroSearch = document.getElementById('hero-search');
    const enemySelects = ['enemy-carry', 'enemy-mid', 'enemy-offlane', 'enemy-support1', 'enemy-support2'];

    // Очищаем селекторы перед заполнением
    heroList.innerHTML = '';
    enemySelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        select.innerHTML = '<option value="">-- Выберите --</option>';
    });

    let selectedHero = null;
    let allHeroItems = [];

    heroes.forEach(hero => {
        // Создаем элемент для списка героев
        const heroItem = document.createElement('div');
        heroItem.className = 'hero-item';
        heroItem.innerHTML = `
            <img src="${hero.icon || 'https://via.placeholder.com/30x30?text=?'} " alt="${hero.name}" class="hero-icon">
            <span class="hero-name">${hero.name}</span>
        `;
        heroItem.addEventListener('click', () => {
            // Убираем выделение с предыдущего
            if (selectedHero) {
                selectedHero.classList.remove('selected');
            }
            // Выделяем текущего
            heroItem.classList.add('selected');
            selectedHero = heroItem;
            // Сохраняем выбранного героя
            document.getElementById('hero').value = hero.id;
        });
        heroList.appendChild(heroItem);
        allHeroItems.push(heroItem);

        // Создаем опции для селекторов противника с иконками
        const option = document.createElement('option');
        option.value = hero.id;
        option.textContent = hero.name;
        // Добавляем иконку в data атрибут для возможного использования
        option.setAttribute('data-icon', hero.icon);
        enemySelects.forEach(selectId => {
            const enemyOption = option.cloneNode(true);
            document.getElementById(selectId).appendChild(enemyOption);
        });
    });

    // Функция фильтрации героев
    function filterHeroes(searchTerm) {
        const term = searchTerm.toLowerCase();
        allHeroItems.forEach(item => {
            const heroName = item.querySelector('.hero-name').textContent.toLowerCase();
            if (heroName.includes(term)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Функция выбора героя по имени
    function selectHeroByName(name) {
        const hero = heroes.find(h => h.name.toLowerCase() === name.toLowerCase());
        if (hero) {
            // Находим элемент героя
            const heroItem = allHeroItems.find(item =>
                item.querySelector('.hero-name').textContent === hero.name
            );
            if (heroItem) {
                // Убираем выделение с предыдущего
                if (selectedHero) {
                    selectedHero.classList.remove('selected');
                }
                // Выделяем найденного героя
                heroItem.classList.add('selected');
                selectedHero = heroItem;
                // Сохраняем выбранного героя
                document.getElementById('hero').value = hero.id;
                // Прокручиваем к выбранному герою
                heroItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // Обработчик поиска
    heroSearch.addEventListener('input', (e) => {
        filterHeroes(e.target.value);
    });

    // Обработчик выбора героя по Enter
    heroSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const heroName = e.target.value.trim();
            if (heroName) {
                selectHeroByName(heroName);
                // Очищаем поле поиска после выбора
                e.target.value = '';
                filterHeroes(''); // Показываем всех героев
            }
        }
    });

    // Скрытый input для героя
    const hiddenHeroInput = document.createElement('input');
    hiddenHeroInput.type = 'hidden';
    hiddenHeroInput.id = 'hero';
    hiddenHeroInput.required = true;
    heroList.appendChild(hiddenHeroInput);
}

// Логика рекомендаций билда
function getBuildRecommendation(heroId, role, enemyIds) {
    const hero = heroes.find(h => h.id === heroId);
    const enemies = enemyIds.map(id => heroes.find(h => h.id === id)).filter(Boolean);

    if (!hero || enemies.length === 0) return 'Недостаточно данных для рекомендации.';

    let recommendation = `<h3>Рекомендация для <img src="${hero.icon}" alt="${hero.name}" class="hero-icon-small"> ${hero.name} (${role})</h3>`;
    recommendation += '<p>Противники: ' + enemies.map(e => `<img src="${e.icon}" alt="${e.name}" class="hero-icon-small"> ${e.name}`).join(', ') + '</p>';

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

    // Рекомендации по предметам (расширенные с пошаговым объяснением)
    recommendation += '<h4>Рекомендуемые предметы:</h4><ol>';
    switch (role) {
        case 'carry':
            recommendation += '<li><strong>Ранние предметы:</strong> Power Treads (для мобильности и урона), Wraith Band (для урона и атрибутов)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> Black King Bar (для танкования магии), Manta Style (для иллюзий и скорости)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> Butterfly (для уклонения и урона), Monkey King Bar (против иллюзий), Abyssal Blade (для контроля)</li>';
            break;
        case 'mid':
            recommendation += '<li><strong>Ранние предметы:</strong> Blink Dagger (для мобильности), Force Staff (для контроля)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> Scythe of Vyse (для отключения), Aether Lens (для маны)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> Nullifier (против предметов), Linken\'s Sphere (защита от заклинаний)</li>';
            break;
        case 'offlane':
            recommendation += '<li><strong>Ранние предметы:</strong> Phase Boots (для скорости), Blade Mail (для отражения урона)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> Heart of Tarrasque (для здоровья), Assault Cuirass (для урона команде)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> Shiva\'s Guard (для замедления), Crimson Guard (для танкования)</li>';
            break;
        case 'support':
            recommendation += '<li><strong>Ранние предметы:</strong> Mekansm (для лечения), Observer Ward (для зрения)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> Guardian Greaves (для лечения и маны), Force Staff (для контроля)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> Glimmer Cape (для невидимости), Lotus Orb (для отражения)</li>';
            break;
        case 'roaming':
            recommendation += '<li><strong>Ранние предметы:</strong> Power Treads (для мобильности), Diffusal Blade (для замедления)</li>';
            recommendation += '<li><strong>Средняя игра:</strong> Manta Style (для иллюзий), Eul\'s Scepter (для контроля)</li>';
            recommendation += '<li><strong>Поздняя игра:</strong> Desolator (для урона), Eye of Skadi (для замедления)</li>';
            break;
        default:
            recommendation += '<li>Общие предметы: Boots of Speed, Gloves of Haste, Hand of Midas</li>';
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