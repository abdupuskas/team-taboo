const animals = [
  'elephant', 'giraffe', 'penguin', 'dolphin', 'kangaroo', 'octopus', 'cheetah',
  'flamingo', 'chameleon', 'porcupine', 'hippopotamus', 'rhinoceros', 'crocodile',
  'butterfly', 'scorpion', 'jellyfish', 'seahorse', 'peacock', 'pelican', 'vulture',
  'armadillo', 'chinchilla', 'iguana', 'salamander', 'platypus', 'wolverine',
  'buffalo', 'panther', 'cobra', 'falcon', 'parrot', 'toucan', 'hamster', 'ferret',
  'raccoon', 'squirrel', 'hedgehog', 'beaver', 'otter', 'walrus', 'moose', 'bison',
  'antelope', 'gazelle', 'lemur', 'gorilla', 'chimpanzee', 'orangutan',
  'jaguar', 'leopard', 'hyena', 'koala', 'sloth', 'panda', 'llama',
  'alpaca', 'camel', 'zebra', 'horse', 'donkey', 'goat', 'sheep', 'rooster',
  'turkey', 'pigeon', 'sparrow', 'eagle', 'hawk', 'owl', 'raven', 'crow',
  'salmon', 'shark', 'whale', 'stingray', 'lobster', 'crab', 'shrimp', 'clam',
  'starfish', 'turtle', 'tortoise', 'frog', 'toad', 'lizard', 'gecko', 'snake',
  'python', 'anaconda', 'grasshopper', 'beetle', 'ladybug', 'ant',
  'mosquito', 'caterpillar', 'moth', 'spider', 'tarantula', 'centipede',
];

const food = [
  'pizza', 'sushi', 'hamburger', 'pancake', 'waffle', 'croissant', 'burrito',
  'lasagna', 'ramen', 'dumpling', 'pretzel', 'bagel', 'donut', 'cupcake',
  'cheesecake', 'tiramisu', 'brownie', 'macaron', 'churro', 'crepe', 'fondue',
  'guacamole', 'hummus', 'falafel', 'kebab', 'paella', 'risotto', 'gnocchi',
  'ravioli', 'cannoli', 'gelato', 'sorbet', 'milkshake', 'smoothie', 'espresso',
  'cappuccino', 'lemonade', 'popcorn', 'nachos', 'quesadilla', 'taco',
  'empanada', 'ceviche', 'tempura', 'edamame', 'tofu', 'kimchi',
  'sourdough', 'brioche', 'baguette', 'focaccia', 'pesto', 'mozzarella',
  'parmesan', 'cheddar', 'brie', 'gouda', 'avocado', 'mango', 'pineapple',
  'coconut', 'pomegranate', 'blueberry', 'raspberry', 'strawberry', 'watermelon',
  'cantaloupe', 'kiwi', 'papaya', 'dragonfruit', 'lychee', 'passion fruit',
  'artichoke', 'asparagus', 'broccoli', 'cauliflower', 'zucchini', 'eggplant',
  'jalapeño', 'wasabi', 'sriracha', 'mustard', 'ketchup', 'mayonnaise',
  'vinegar', 'cinnamon', 'vanilla', 'nutmeg', 'truffle', 'caviar',
  'oyster', 'escargot', 'prosciutto', 'salami', 'pepperoni', 'bacon',
];

const countries = [
  'australia', 'brazil', 'canada', 'denmark', 'egypt', 'france', 'germany',
  'hungary', 'iceland', 'japan', 'kenya', 'lebanon', 'mexico', 'norway',
  'portugal', 'qatar', 'russia', 'sweden', 'thailand', 'ukraine', 'vietnam',
  'argentina', 'belgium', 'chile', 'colombia', 'croatia', 'cuba', 'finland',
  'greece', 'india', 'indonesia', 'ireland', 'italy', 'jamaica',
  'jordan', 'malaysia', 'morocco', 'netherlands', 'new zealand', 'nigeria',
  'pakistan', 'peru', 'philippines', 'poland', 'romania', 'saudi arabia',
  'singapore', 'south africa', 'south korea', 'spain', 'sri lanka', 'switzerland',
  'taiwan', 'tanzania', 'turkey', 'venezuela', 'zimbabwe', 'austria', 'bolivia',
  'cambodia', 'cameroon', 'costa rica', 'czech republic', 'dominican republic',
  'ecuador', 'el salvador', 'ethiopia', 'fiji', 'guatemala', 'haiti', 'honduras',
  'iran', 'iraq', 'ivory coast', 'kazakhstan', 'kuwait', 'libya',
  'madagascar', 'mongolia', 'nepal',
  'nicaragua', 'panama', 'paraguay', 'senegal', 'serbia', 'slovakia', 'slovenia',
  'somalia', 'sudan', 'syria', 'tunisia', 'uruguay', 'uzbekistan', 'zambia',
];

const objects = [
  'umbrella', 'telescope', 'microscope', 'binoculars', 'compass', 'thermometer',
  'calculator', 'typewriter', 'chandelier', 'trampoline', 'hammock',
  'skateboard', 'surfboard', 'snowboard', 'parachute', 'submarine',
  'helicopter', 'bulldozer', 'treadmill', 'hourglass',
  'boomerang', 'slingshot', 'catapult', 'lighthouse', 'windmill',
  'scarecrow', 'mailbox', 'doorbell', 'handcuffs', 'megaphone',
  'saxophone', 'harmonica', 'xylophone',
  'speedometer', 'barometer', 'stopwatch',
  'lantern', 'flashlight', 'matchstick', 'firecracker', 'dynamite',
  'magnifying glass', 'monocle', 'spectacles', 'hearing aid', 'wheelchair',
  'crutch', 'bandage', 'syringe', 'stroller', 'cradle', 'rocking chair',
  'beanbag', 'ottoman', 'bunkbed', 'wardrobe', 'bookshelf', 'aquarium',
  'terrarium', 'birdcage', 'doghouse', 'mousetrap', 'corkscrew',
  'bottle opener', 'nutcracker', 'rolling pin', 'whisk', 'chopsticks',
  'spatula', 'ladle', 'tongs', 'grater', 'peeler', 'blender',
  'toaster', 'kettle', 'waffle iron', 'pressure cooker',
];

const professions = [
  'astronaut', 'archaeologist', 'architect', 'bartender', 'blacksmith', 'butcher',
  'carpenter', 'chemist', 'chiropractor', 'comedian', 'conductor', 'detective',
  'diplomat', 'electrician', 'firefighter', 'florist', 'geologist', 'jeweler',
  'journalist', 'librarian', 'lifeguard', 'locksmith', 'magician', 'mechanic',
  'midwife', 'navigator', 'optician', 'paramedic', 'pharmacist', 'photographer',
  'pilot', 'plumber', 'poet', 'politician', 'professor', 'psychiatrist',
  'receptionist', 'referee', 'sailor', 'sculptor', 'sheriff',
  'sommelier', 'surgeon', 'tailor', 'therapist', 'translator', 'veterinarian',
  'zookeeper', 'auctioneer', 'beekeeper', 'bodyguard', 'bouncer', 'cashier',
  'choreographer', 'curator', 'dentist', 'dermatologist', 'dispatcher',
  'diver', 'editor', 'engineer',
  'fisherman', 'forester', 'guide', 'herbalist',
  'illustrator', 'inspector', 'interpreter', 'janitor', 'jockey', 'judge',
];

const sports = [
  'basketball', 'volleyball', 'badminton', 'gymnastics', 'wrestling', 'fencing',
  'archery', 'bowling', 'billiards', 'darts', 'cricket', 'rugby', 'lacrosse',
  'handball', 'water polo', 'synchronized swimming', 'figure skating', 'curling',
  'bobsled', 'biathlon', 'triathlon', 'decathlon', 'marathon', 'hurdles',
  'pole vault', 'long jump', 'high jump', 'javelin', 'discus', 'shot put',
  'skateboarding', 'snowboarding', 'surfing', 'windsurfing', 'kayaking', 'canoeing',
  'rowing', 'sailing', 'parasailing', 'skydiving', 'bungee jumping', 'rock climbing',
  'zipline', 'parkour', 'motocross', 'go-karting',
  'horse racing', 'polo', 'rodeo', 'bullfighting', 'sumo wrestling', 'kickboxing',
  'taekwondo', 'karate', 'judo', 'capoeira', 'boxing', 'arm wrestling',
  'table tennis', 'squash', 'racquetball', 'pickleball', 'bocce ball',
  'frisbee', 'dodgeball', 'kickball', 'tug of war',
];

const places = [
  'hospital', 'library', 'museum', 'aquarium', 'planetarium', 'observatory',
  'cathedral', 'monastery', 'synagogue', 'mosque', 'temple', 'pyramid',
  'colosseum', 'stadium', 'arena', 'casino', 'nightclub',
  'restaurant', 'cafeteria', 'bakery', 'brewery', 'winery', 'distillery',
  'pharmacy', 'laundromat', 'barbershop', 'salon', 'spa', 'gym', 'dojo',
  'greenhouse', 'vineyard', 'plantation', 'ranch', 'barn',
  'warehouse', 'factory', 'refinery', 'mine', 'dam', 'reservoir',
  'aqueduct', 'canal', 'harbor', 'marina', 'pier', 'dock',
  'boulevard', 'highway', 'tunnel', 'bridge',
  'skyscraper', 'penthouse', 'basement', 'attic', 'balcony', 'terrace',
  'courtyard', 'garden', 'fountain', 'gazebo', 'pavilion',
  'cemetery', 'crypt', 'dungeon', 'fortress', 'citadel',
  'watchtower', 'bunker', 'treehouse', 'igloo', 'cabin', 'chalet',
  'cottage', 'mansion', 'palace', 'castle', 'chateau', 'villa',
];

const movies = [
  'titanic', 'avatar', 'inception', 'gladiator', 'braveheart', 'jaws',
  'rocky', 'rambo', 'terminator', 'predator', 'alien', 'ghostbusters',
  'beetlejuice', 'karate kid', 'top gun', 'footloose',
  'grease', 'dirty dancing', 'flashdance', 'scarface', 'goodfellas', 'casino',
  'godfather', 'godmother', 'psycho', 'vertigo', 'jigsaw', 'scream',
  'halloween', 'nightmare', 'exorcist', 'dracula', 'frankenstein',
  'mummy', 'wolfman', 'godzilla', 'king kong', 'jurassic park', 'matrix',
  'blade runner', 'robocop', 'transformers', 'avengers', 'batman', 'superman',
  'spider-man', 'wolverine', 'deadpool', 'thor', 'hulk', 'iron man',
  'captain america', 'black panther', 'wonder woman', 'aquaman', 'joker',
  'shrek', 'frozen', 'moana', 'coco', 'ratatouille', 'wall-e', 'finding nemo',
  'toy story', 'monsters inc', 'incredibles', 'up', 'inside out', 'brave',
  'tangled', 'aladdin', 'mulan', 'pocahontas', 'hercules', 'tarzan',
  'bambi', 'dumbo', 'pinocchio', 'cinderella', 'sleeping beauty', 'lion king',
  'beauty and the beast', 'little mermaid', 'jungle book', 'peter pan',
  'mary poppins', 'wizard of oz', 'charlie and the chocolate factory',
  'home alone', 'elf', 'grinch', 'polar express', 'die hard',
  'interstellar', 'dunkirk', 'saving private ryan', 'forrest gump',
  'pulp fiction', 'fight club', 'the shining', 'back to the future',
  'indiana jones', 'star wars', 'lord of the rings', 'harry potter',
  'hunger games', 'twilight', 'fast and furious', 'mission impossible',
  'john wick', 'guardians of the galaxy', 'doctor strange', 'ant-man',
];

const tvShows = [
  'friends', 'seinfeld', 'simpsons', 'family guy', 'south park',
  'office', 'parks and recreation', 'brooklyn nine-nine', 'community',
  'breaking bad', 'better call saul', 'sopranos', 'wire', 'mad men',
  'game of thrones', 'walking dead', 'stranger things', 'black mirror',
  'westworld', 'lost', 'prison break', 'dexter', 'homeland',
  'house of cards', 'narcos', 'ozark', 'peaky blinders', 'vikings',
  'mandalorian', 'witcher', 'squid game', 'money heist', 'dark',
  'chernobyl', 'band of brothers', 'true detective', 'fargo', 'mindhunter',
  'hannibal', 'sherlock', 'doctor who', 'downton abbey', 'crown',
  'bridgerton', 'queen\'s gambit', 'ted lasso', 'succession', 'yellowstone',
  'euphoria', 'white lotus', 'bear', 'shogun', 'house of the dragon',
  'rings of power', 'wheel of time', 'sandman', 'boys', 'invincible',
  'arcane', 'attack on titan', 'one piece', 'demon slayer',
  'naruto', 'dragon ball', 'pokemon', 'avatar the last airbender',
  'spongebob', 'adventure time', 'rick and morty', 'bojack horseman',
];

const celebrities = [
  'beyonce', 'drake', 'taylor swift', 'kanye west', 'rihanna', 'eminem',
  'adele', 'ed sheeran', 'billie eilish', 'bad bunny', 'weeknd', 'dua lipa',
  'harry styles', 'ariana grande', 'justin bieber', 'lady gaga', 'bruno mars',
  'post malone', 'travis scott', 'kendrick lamar', 'cardi b', 'doja cat',
  'olivia rodrigo', 'sza', 'lizzo', 'megan thee stallion',
  'tom hanks', 'leonardo dicaprio', 'brad pitt', 'johnny depp', 'will smith',
  'denzel washington', 'morgan freeman', 'samuel l jackson', 'ryan reynolds',
  'dwayne johnson', 'keanu reeves', 'robert downey jr', 'chris hemsworth',
  'scarlett johansson', 'jennifer lawrence', 'meryl streep', 'emma stone',
  'margot robbie', 'zendaya', 'florence pugh', 'timothee chalamet',
  'oprah winfrey', 'ellen degeneres', 'jimmy fallon', 'jimmy kimmel',
  'conan obrien', 'trevor noah', 'john oliver', 'james corden',
  'elon musk', 'jeff bezos', 'mark zuckerberg', 'bill gates', 'steve jobs',
  'lionel messi', 'cristiano ronaldo', 'lebron james', 'michael jordan',
  'serena williams', 'usain bolt', 'muhammad ali', 'mike tyson', 'tiger woods',
  'tom brady', 'kobe bryant', 'stephen curry', 'connor mcgregor',
  'jack nicholson', 'al pacino', 'robert de niro', 'tom cruise', 'matt damon',
  'angelina jolie', 'jennifer aniston', 'anne hathaway', 'natalie portman',
  'chris pratt', 'adam sandler', 'jim carrey', 'eddie murphy', 'jackie chan',
  'mr beast', 'kim kardashian', 'gordon ramsay', 'david letterman',
  'shakira', 'nicki minaj',
];

const music = [
  'guitar', 'piano', 'drums', 'violin', 'trumpet', 'flute', 'cello',
  'banjo', 'ukulele', 'harp', 'organ', 'synthesizer', 'turntable',
  'microphone', 'amplifier', 'speaker', 'headphones', 'concert', 'festival',
  'orchestra', 'choir', 'band', 'solo', 'duet', 'symphony',
  'opera', 'musical', 'anthem', 'lullaby', 'remix',
  'mashup', 'freestyle', 'karaoke', 'jukebox', 'playlist', 'album',
  'vinyl', 'cassette', 'boombox', 'disco', 'rave', 'mosh pit', 'encore',
  'backstage', 'groupie', 'rockstar', 'diva', 'maestro',
  'hip hop', 'jazz', 'blues', 'reggae', 'country', 'punk', 'metal',
  'techno', 'gospel', 'soul', 'funk', 'salsa',
  'tango', 'polka', 'samba', 'mambo', 'rumba', 'cha-cha',
  'breakdance', 'moonwalk', 'air guitar',
];

const videoGames = [
  'minecraft', 'fortnite', 'tetris', 'pac-man', 'mario', 'zelda', 'pokemon',
  'sonic', 'donkey kong', 'kirby', 'mega man',
  'final fantasy', 'kingdom hearts', 'dragon quest',
  'street fighter', 'mortal kombat', 'tekken', 'smash bros',
  'call of duty', 'halo', 'gears of war', 'destiny', 'overwatch', 'valorant',
  'counter-strike', 'rainbow six', 'apex legends', 'pubg', 'warzone',
  'grand theft auto', 'red dead redemption', 'assassins creed', 'far cry',
  'skyrim', 'witcher', 'elden ring', 'dark souls', 'bloodborne', 'sekiro',
  'god of war', 'last of us', 'uncharted', 'horizon', 'ghost of tsushima',
  'spider-man', 'batman arkham', 'portal',
  'world of warcraft', 'league of legends', 'diablo',
  'among us', 'fall guys', 'rocket league', 'fifa',
  'madden', 'nba 2k', 'gran turismo', 'mario kart', 'animal crossing',
  'stardew valley', 'terraria', 'roblox', 'sims', 'civilization',
  'age of empires', 'sim city', 'roller coaster tycoon', 'candy crush',
];

const actions = [
  'swimming', 'climbing', 'juggling', 'whistling', 'yawning', 'sneezing',
  'hiccupping', 'stretching', 'crawling', 'tiptoeing', 'leapfrog', 'somersault',
  'cartwheeling', 'handstand', 'backflip', 'diving', 'surfing', 'skiing',
  'sledding', 'snowball fight', 'sandcastle', 'jump rope',
  'hula hoop', 'limbo', 'tightrope walking', 'bungee jumping', 'skydiving',
  'paragliding', 'horseback riding', 'bullfighting',
  'sword fighting', 'arm wrestling', 'thumb war', 'pillow fight', 'food fight',
  'hide and seek', 'tag', 'capture the flag', 'scavenger hunt', 'treasure hunt',
  'bird watching', 'stargazing', 'cloud watching', 'people watching',
  'window shopping', 'dumpster diving', 'couch surfing',
  'speed dating', 'blind date', 'photobomb', 'moonwalking', 'crowd surfing',
  'stage diving', 'mosh pit', 'flash mob', 'mannequin challenge',
  'ice bucket challenge', 'bottle flip', 'planking', 'dabbing', 'flossing',
  'sleepwalking', 'daydreaming', 'brainstorming', 'procrastinating', 'multitasking',
  'improvising', 'meditating', 'eavesdropping', 'gossiping', 'whispering',
  'screaming', 'mumbling', 'ranting',
];

const history = [
  'gladiator', 'samurai', 'viking', 'knight', 'pharaoh', 'emperor', 'czar',
  'sultan', 'shogun', 'spartan', 'centurion', 'musketeer', 'crusader', 'pirate',
  'buccaneer', 'conquistador', 'explorer', 'pilgrim', 'pioneer', 'settler',
  'revolution', 'rebellion', 'uprising', 'civil war', 'cold war',
  'treaty', 'alliance', 'blockade', 'embargo', 'siege', 'invasion', 'occupation',
  'liberation', 'independence', 'constitution', 'declaration', 'amendment',
  'monarchy', 'democracy', 'republic', 'empire', 'dynasty',
  'colonialism', 'communism', 'capitalism', 'socialism',
  'renaissance', 'enlightenment', 'industrial revolution',
  'inquisition', 'prohibition', 'great depression', 'gold rush', 'silk road',
  'underground railroad', 'berlin wall', 'iron curtain', 'apollo', 'manhattan project',
  'hieroglyphics', 'rosetta stone', 'dead sea scrolls', 'magna carta',
  'guillotine', 'catapult', 'chariot', 'longbow', 'crossbow',
  'cannon', 'musket', 'cavalry', 'infantry',
];

const mythical = [
  'dragon', 'unicorn', 'phoenix', 'griffin', 'centaur', 'minotaur', 'medusa',
  'cyclops', 'hydra', 'pegasus', 'sphinx', 'mermaid', 'siren',
  'kraken', 'behemoth',
  'gargoyle', 'golem', 'genie', 'leprechaun', 'fairy', 'elf', 'dwarf',
  'troll', 'ogre', 'goblin', 'orc', 'werewolf', 'vampire', 'zombie',
  'ghost', 'wraith', 'specter', 'phantom',
  'demon', 'angel', 'valkyrie', 'titan', 'demigod',
  'oracle', 'prophet', 'shaman', 'witch', 'warlock', 'wizard', 'sorcerer',
  'paladin', 'ranger', 'assassin', 'rogue',
  'holy grail', 'pandoras box', 'fountain of youth', 'philosophers stone',
  'el dorado', 'atlantis', 'valhalla', 'olympus', 'underworld', 'nirvana',
  'thunderbolt', 'trident', 'lasso of truth', 'infinity gauntlet',
  'lightsaber', 'elder wand', 'one ring', 'deathly hallows', 'horcrux',
];

const miscellaneous = [
  'birthday party', 'wedding', 'graduation', 'funeral', 'baby shower',
  'halloween', 'christmas', 'thanksgiving', 'new years eve', 'valentines day',
  'april fools', 'black friday', 'super bowl', 'world cup', 'olympics',
  'carnival', 'parade', 'fireworks', 'bonfire', 'campfire', 'barbecue',
  'picnic', 'road trip', 'camping', 'hiking', 'fishing', 'hunting',
  'gardening', 'painting', 'sculpting', 'pottery', 'origami', 'knitting',
  'sewing', 'calligraphy', 'photography', 'filmmaking',
  'animation', 'podcast', 'blog', 'vlog', 'livestream', 'tutorial',
  'interview', 'audition', 'rehearsal', 'performance', 'standing ovation',
  'red carpet', 'press conference', 'debate', 'election',
  'inauguration', 'ceremony', 'ritual', 'tradition', 'superstition',
  'conspiracy theory', 'urban legend', 'fairy tale', 'bedtime story',
  'tongue twister', 'riddle', 'crossword', 'jigsaw puzzle', 'rubiks cube',
  'chess', 'checkers', 'dominoes', 'jenga', 'monopoly', 'scrabble',
  'charades', 'pictionary', 'trivial pursuit', 'poker', 'blackjack', 'roulette',
  'slot machine', 'jackpot', 'lottery', 'treasure chest', 'piggy bank',
  'stock market', 'cryptocurrency', 'blockchain', 'artificial intelligence',
  'virtual reality', 'augmented reality', 'hologram', 'teleportation',
  'time travel', 'parallel universe', 'simulation', 'matrix', 'metaverse',
  'robot', 'cyborg', 'android', 'clone', 'alien', 'spaceship',
  'force field', 'cloaking device', 'death ray', 'freeze ray',
  'shrink ray', 'jetpack', 'hoverboard', 'flying car', 'time machine',
  'invisibility cloak', 'magic carpet', 'crystal ball', 'magic wand',
  'love potion', 'elixir', 'talisman', 'dreamcatcher',
  'voodoo doll', 'ouija board', 'tarot cards', 'fortune cookie',
  'four leaf clover', 'rabbits foot', 'horseshoe', 'wishing well',
  'shooting star', 'northern lights', 'rainbow', 'double rainbow',
  'solar eclipse', 'lunar eclipse', 'blood moon',
  'midnight sun', 'déjà vu', 'karma', 'zen', 'yin yang', 'mantra',
];

const fashion = [
  'tuxedo', 'kimono', 'sombrero', 'turban', 'beret', 'fedora', 'top hat',
  'crown', 'tiara', 'monocle', 'bow tie', 'suspenders', 'cufflinks',
  'earrings', 'necklace', 'bracelet', 'anklet', 'ring', 'wristwatch',
  'sunglasses', 'goggles', 'scarf', 'shawl', 'poncho', 'cape',
  'trench coat', 'leather jacket', 'fur coat', 'raincoat', 'blazer',
  'cardigan', 'hoodie', 'sweater', 'vest', 'corset', 'tutu',
  'toga', 'overalls', 'jumpsuit', 'wetsuit', 'spacesuit', 'armor',
  'high heels', 'boots', 'sandals', 'flip flops', 'sneakers',
  'slippers', 'loafers', 'moccasins', 'ballet flats', 'cowboy boots',
  'roller skates', 'ice skates', 'snowshoes', 'cleats',
  'backpack', 'briefcase', 'suitcase', 'handbag', 'clutch', 'fanny pack',
  'wallet', 'lunchbox', 'toolbox', 'treasure map', 'compass rose',
];

const bodyAndHealth = [
  'skeleton', 'skull', 'ribcage', 'spine', 'collarbone', 'kneecap',
  'funny bone', 'wisdom tooth', 'appendix', 'tonsils', 'adam\'s apple',
  'goosebumps', 'freckles', 'dimples', 'wrinkles', 'birthmark', 'scar',
  'bruise', 'blister', 'splinter', 'hiccups', 'snoring', 'sleepwalking',
  'amnesia', 'insomnia', 'vertigo', 'migraine', 'allergy', 'sunburn',
  'frostbite', 'dehydration', 'adrenaline', 'dopamine', 'serotonin',
  'metabolism', 'immune system', 'blood pressure', 'heart rate', 'pulse',
  'reflex', 'instinct', 'muscle memory', 'growing pains', 'jet lag',
  'brain freeze', 'butterflies in stomach', 'cold feet', 'second wind',
];

const nature = [
  'waterfall', 'geyser', 'hot spring', 'coral reef', 'tide pool', 'whirlpool',
  'sandstorm', 'blizzard', 'thunderstorm', 'lightning', 'hailstorm', 'fog',
  'mist', 'dew', 'frost', 'icicle', 'snowflake', 'avalanche', 'landslide',
  'quicksand', 'sinkhole', 'cave', 'canyon',
  'cliff', 'plateau', 'mesa', 'valley',
  'archipelago', 'peninsula', 'delta', 'oasis', 'mirage',
  'tundra', 'savanna', 'prairie', 'swamp',
  'rainforest', 'jungle', 'desert', 'sand dune', 'iceberg', 'glacier',
  'volcano', 'crater', 'lava', 'magma', 'geyser',
  'amber', 'crystal', 'obsidian', 'quartz',
  'sapphire', 'emerald', 'ruby', 'diamond', 'pearl', 'topaz',
  'limestone', 'granite', 'marble', 'sandstone',
];

const transportation = [
  'bicycle', 'tricycle', 'unicycle', 'motorcycle', 'scooter', 'segway',
  'skateboard', 'longboard', 'rollerblade', 'wagon', 'stroller', 'wheelchair',
  'ambulance', 'fire truck', 'police car', 'taxi', 'limousine', 'convertible',
  'minivan', 'pickup truck', 'monster truck', 'dump truck', 'cement mixer',
  'bulldozer', 'forklift', 'tractor',
  'school bus', 'double decker bus', 'trolley', 'cable car', 'gondola',
  'monorail', 'bullet train', 'steam locomotive', 'freight train', 'subway',
  'sailboat', 'speedboat', 'canoe', 'kayak', 'yacht', 'cruise ship',
  'ferry', 'aircraft carrier', 'submarine', 'hovercraft',
  'hot air balloon', 'blimp', 'zeppelin', 'glider', 'jet',
  'helicopter', 'drone', 'rocket', 'space shuttle', 'sled',
  'dogsled', 'chariot', 'stagecoach',
];

const foodAndDrink2 = [
  'soufflé', 'crème brûlée', 'baklava', 'mochi',
  'pad thai', 'tikka masala', 'biryani', 'samosa',
  'spring roll', 'gyoza', 'wonton', 'dim sum', 'sashimi', 'maki roll',
  'fish and chips', 'shepherd\'s pie',
  'goulash', 'schnitzel', 'pretzel', 'strudel',
  'couscous', 'jollof rice', 'poutine', 'maple syrup',
  'corn dog', 'funnel cake', 'cotton candy', 'candy apple', 'snow cone',
  'egg nog', 'hot chocolate', 'chai latte', 'matcha',
  'boba tea', 'kombucha', 'sangria', 'margarita', 'mojito', 'piña colada',
  'daiquiri', 'cosmopolitan', 'martini', 'champagne', 'prosecco',
  'absinthe', 'sake',
];

const occupationsAndRoles = [
  'babysitter', 'crossing guard', 'toll booth operator', 'food critic',
  'stunt double', 'voice actor', 'mime', 'puppeteer',
  'ringmaster', 'lion tamer', 'acrobat', 'trapeze artist', 'sword swallower',
  'fire breather', 'snake charmer', 'fortune teller', 'palm reader',
  'ghostbuster', 'bounty hunter', 'treasure hunter', 'storm chaser',
  'deep sea diver', 'astronomer', 'archaeologist',
  'paleontologist', 'volcanologist', 'meteorologist',
  'undertaker', 'gravedigger', 'chimney sweep', 'lamplighter',
  'messenger', 'scribe', 'food taster',
  'royal guard', 'secret agent', 'spy', 'hacker', 'whistleblower',
  'influencer', 'streamer', 'youtuber', 'podcaster', 'blogger',
];

const technology = [
  'smartphone', 'tablet', 'laptop', 'desktop', 'smartwatch', 'airpods',
  'bluetooth', 'wifi', 'hotspot', 'firewall', 'password', 'encryption',
  'algorithm', 'database', 'server', 'cloud computing', 'machine learning',
  'neural network', 'deep fake', 'chatbot', 'dark web',
  'bitcoin', 'nft', 'streaming', 'download', 'upload', 'screenshot',
  'selfie', 'emoji', 'hashtag', 'viral', 'trending', 'clickbait',
  'paywall', 'popup', 'cookie', 'cache', 'browser', 'search engine',
  'social media', 'dating app', 'ride share', 'food delivery',
  'smart home', 'voice assistant', 'face recognition', 'fingerprint scanner',
  'three d printer', 'electric car', 'self driving car', 'solar panel',
  'wind turbine', 'nuclear reactor', 'quantum computer',
];

const sportsAndGames2 = [
  'chess clock', 'checkmate', 'stalemate',
  'full house', 'royal flush', 'bluff', 'all in', 'ante', 'jackpot',
  'hat trick', 'grand slam', 'hole in one', 'buzzer beater', 'hail mary',
  'slam dunk', 'alley oop', 'three pointer', 'free throw', 'penalty kick',
  'corner kick', 'offside', 'red card', 'yellow card', 'overtime',
  'sudden death', 'tiebreaker', 'championship', 'playoffs', 'draft pick',
  'rookie', 'veteran', 'captain', 'coach', 'referee', 'cheerleader',
  'mascot', 'halftime show', 'victory lap', 'podium', 'gold medal',
  'silver medal', 'bronze medal', 'world record', 'personal best',
  'photo finish', 'false start', 'disqualified', 'handicap', 'underdog',
];

const everyday = [
  'alarm clock', 'snooze button', 'pillow fight',
  'bubble bath', 'rubber duck', 'toothbrush', 'dental floss', 'mouthwash',
  'shower curtain', 'bath robe', 'nightlight', 'lava lamp',
  'bean bag chair', 'remote control', 'couch cushion', 'throw pillow',
  'welcome mat', 'doorstep', 'mailman', 'package delivery', 'door knocker',
  'peephole', 'garage door', 'sprinkler', 'garden hose',
  'lawn mower', 'leaf blower', 'snow shovel', 'ice scraper', 'windshield wiper',
  'traffic light', 'speed bump', 'roundabout', 'parking meter', 'toll booth',
  'gas station', 'car wash', 'flat tire', 'spare tire', 'jumper cables',
  'road rage', 'fender bender', 'carpool', 'rush hour', 'jaywalking',
  'crosswalk', 'sidewalk', 'fire hydrant', 'street light', 'manhole cover',
  'park bench', 'water fountain', 'playground', 'sandbox',
  'monkey bars', 'seesaw', 'slide', 'merry go round', 'jungle gym',
  'tree house', 'pillow fort', 'fort building',
];

const brands = [
  'big mac', 'happy meal', 'whopper', 'subway sandwich', 'pizza hut',
  'coca cola', 'pepsi', 'red bull', 'gatorade', 'mountain dew',
  'oreo', 'kitkat', 'skittles', 'snickers', 'twix', 'reeses',
  'gummy bear', 'jawbreaker', 'lollipop', 'bubblegum', 'candy cane',
  'cotton candy', 'rock candy', 'taffy', 'licorice', 'jelly bean',
  'popsicle', 'drumstick', 'ice cream sandwich', 'banana split', 'sundae',
  // General brands
  'mcdonalds', 'burger king', 'starbucks', 'nike', 'adidas', 'apple', 'samsung',
  'netflix', 'disney', 'google', 'amazon', 'tesla', 'uber', 'airbnb', 'spotify',
  'tiktok', 'instagram', 'snapchat', 'youtube', 'twitter', 'playstation', 'xbox',
  'nintendo', 'lego', 'ikea',
  // Fashion brands
  'gucci', 'louis vuitton', 'chanel', 'prada', 'versace', 'balenciaga', 'dior',
  'hermes', 'zara', 'supreme', 'jordan brand', 'ralph lauren', 'calvin klein',
  'tommy hilfiger', 'rolex',
  // Car brands
  'audi', 'toyota', 'lexus', 'ford', 'chevrolet', 'dodge', 'jeep', 'land rover',
  'cadillac', 'mini cooper', 'alfa romeo', 'subaru', 'volvo', 'range rover',
  'pagani', 'mercedes', 'bmw', 'porsche', 'lamborghini', 'bugatti', 'rolls royce',
  'bentley', 'aston martin', 'maserati', 'corvette',
];

const sportsStars = [
  // Athletes
  'Lionel Messi', 'Cristiano Ronaldo', 'LeBron James', 'Michael Jordan',
  'Serena Williams', 'Usain Bolt', 'Muhammad Ali', 'Tiger Woods',
  'Tom Brady', 'Kobe Bryant', 'Neymar', 'Kylian Mbappe',
  'Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Mike Tyson',
  'Floyd Mayweather', 'Simone Biles', 'Michael Phelps', 'Wayne Gretzky',
  'David Beckham', 'Zinedine Zidane', 'Pele', 'Maradona',
  'Shaquille O\'Neal', 'Stephen Curry', 'Kevin Durant', 'Giannis Antetokounmpo',
  'Lewis Hamilton', 'Max Verstappen', 'Conor McGregor', 'The Rock',
  'John Cena', 'Virat Kohli', 'Sachin Tendulkar', 'Naomi Osaka',
  'Venus Williams', 'Ronaldinho', 'Zlatan Ibrahimovic', 'Mohamed Salah',
  'Erling Haaland', 'Luka Modric', 'Thierry Henry', 'Ronaldo Nazario',
  'Shohei Ohtani', 'Derek Jeter', 'Babe Ruth', 'Michael Schumacher',
  // Teams
  'Real Madrid', 'Barcelona', 'Manchester United', 'Liverpool',
  'Bayern Munich', 'Paris Saint-Germain', 'Juventus', 'AC Milan',
  'Chelsea', 'Arsenal', 'Manchester City', 'Borussia Dortmund',
  'Los Angeles Lakers', 'Golden State Warriors', 'Chicago Bulls',
  'Boston Celtics', 'Miami Heat', 'New York Knicks',
  'New York Yankees', 'Dallas Cowboys', 'New England Patriots',
  'Green Bay Packers', 'All Blacks', 'Springboks',
  'Ferrari', 'Red Bull Racing', 'Mercedes F1',
  'Al Ahly', 'Flamengo', 'Boca Juniors', 'River Plate',
  // New athletes
  'Lamine Yamal', 'Jude Bellingham', 'Kyrie Irving', 'Patrick Mahomes',
  'Canelo Alvarez', 'Tyson Fury', 'Dustin Poirier', 'Maria Sharapova',
  'Andriy Shevchenko', 'Didier Drogba', 'Roberto Carlos', 'Karim Benzema',
  'Vinicius Jr', 'Bukayo Saka', 'Robert Lewandowski', 'Andres Iniesta',
  'Xavi', 'Paolo Maldini', 'Kaka', 'Samuel Eto\'o', 'Sadio Mane',
  'Luka Doncic', 'Nikola Jokic', 'James Harden', 'Magic Johnson',
  'Larry Bird', 'Allen Iverson', 'Tim Duncan', 'Manny Pacquiao',
  'Khabib Nurmagomedov', 'Anthony Joshua', 'Carlos Alcaraz', 'Andre Agassi',
  'Peyton Manning', 'Travis Kelce',
  // New teams
  'Inter Milan', 'Atletico Madrid', 'Tottenham Hotspur', 'San Antonio Spurs',
  'Toronto Raptors', 'Napoli', 'Ajax', 'Benfica', 'Porto', 'Galatasaray',
  'Celtic FC', 'Al Hilal', 'Brooklyn Nets', 'Phoenix Suns', 'Milwaukee Bucks',
  'Denver Nuggets', 'Kansas City Chiefs', 'San Francisco 49ers',
  'Las Vegas Raiders', 'LA Dodgers', 'Boston Red Sox', 'Chicago Cubs', 'McLaren F1',
];

const weird = [
  'bermuda triangle', 'loch ness monster', 'bigfoot',
  'yeti', 'area 51', 'ufo',
  'flat earth', 'moon landing', 'time capsule', 'buried treasure',
  'genie lamp',
  'monkey paw', 'voodoo', 'haunted house', 'escape room',
  'mystery box', 'secret passage', 'trapdoor', 'hidden room',
  'panic room', 'bunker', 'safe room', 'vault', 'panic button',
  'ejection seat', 'emergency exit', 'fire escape', 'lifeboat',
  'life jacket', 'parachute', 'emergency flare', 'smoke signal',
  'morse code', 'carrier pigeon', 'telegram',
  'ransom note', 'anonymous tip', 'cold case', 'alibi', 'red handed',
  'fingerprint', 'dna evidence', 'lie detector', 'interrogation',
  'lineup', 'witness protection', 'most wanted', 'fugitive',
];

const politicalFigures = [
  'barack obama', 'donald trump', 'joe biden', 'hillary clinton', 'bernie sanders',
  'abraham lincoln', 'george washington', 'john f kennedy', 'martin luther king',
  'nelson mandela', 'winston churchill', 'queen elizabeth', 'king charles',
  'princess diana', 'vladimir putin', 'angela merkel', 'emmanuel macron',
  'justin trudeau', 'xi jinping', 'margaret thatcher', 'cleopatra',
  'julius caesar', 'napoleon', 'gandhi', 'fidel castro', 'dalai lama',
  'pope francis', 'malala',
];

const famousCities = [
  'new york', 'los angeles', 'london', 'paris', 'tokyo', 'dubai', 'rome',
  'berlin', 'moscow', 'sydney', 'rio de janeiro', 'buenos aires', 'cairo',
  'istanbul', 'mumbai', 'beijing', 'shanghai', 'hong kong', 'singapore',
  'bangkok', 'seoul', 'las vegas', 'miami', 'chicago', 'san francisco',
  'toronto', 'vancouver', 'barcelona', 'amsterdam', 'prague', 'vienna',
  'zurich', 'cape town', 'marrakech', 'nairobi', 'havana', 'jerusalem',
  'mecca', 'athens', 'venice', 'florence', 'lisbon', 'edinburgh', 'dublin',
  'stockholm', 'copenhagen', 'oslo', 'helsinki',
];

export const ALL_WORDS: string[] = [...new Set([
  ...animals, ...food, ...countries, ...objects, ...professions, ...sports,
  ...places, ...movies, ...tvShows, ...celebrities, ...music, ...videoGames,
  ...actions, ...history, ...mythical,
  ...miscellaneous, ...fashion, ...bodyAndHealth, ...nature, ...transportation,
  ...foodAndDrink2, ...occupationsAndRoles,
  ...technology, ...sportsAndGames2, ...everyday, ...brands,
  ...weird, ...sportsStars, ...politicalFigures, ...famousCities,
])];

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getWords(count: number, usedWords: Set<string>): string[] {
  const available = ALL_WORDS.filter((w) => !usedWords.has(w));

  // If we've used most words, reset
  if (available.length < count) {
    usedWords.clear();
    return getWords(count, usedWords);
  }

  const shuffled = shuffle(available);
  const selected = shuffled.slice(0, count);
  selected.forEach((w) => usedWords.add(w));
  return selected;
}
