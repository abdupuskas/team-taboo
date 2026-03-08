const animals = [
  'elephant', 'giraffe', 'penguin', 'dolphin', 'kangaroo', 'octopus', 'cheetah',
  'flamingo', 'chameleon', 'porcupine', 'hippopotamus', 'rhinoceros', 'crocodile',
  'butterfly', 'scorpion', 'jellyfish', 'seahorse', 'peacock', 'pelican', 'vulture',
  'armadillo', 'chinchilla', 'iguana', 'salamander', 'platypus', 'wolverine',
  'buffalo', 'panther', 'cobra', 'falcon', 'parrot', 'toucan', 'hamster', 'ferret',
  'raccoon', 'squirrel', 'hedgehog', 'beaver', 'otter', 'walrus', 'moose', 'bison',
  'antelope', 'gazelle', 'meerkat', 'lemur', 'gorilla', 'chimpanzee', 'orangutan',
  'jaguar', 'leopard', 'hyena', 'warthog', 'koala', 'sloth', 'panda', 'llama',
  'alpaca', 'camel', 'zebra', 'horse', 'donkey', 'goat', 'sheep', 'rooster',
  'turkey', 'pigeon', 'sparrow', 'eagle', 'hawk', 'owl', 'raven', 'crow',
  'salmon', 'shark', 'whale', 'stingray', 'lobster', 'crab', 'shrimp', 'clam',
  'starfish', 'turtle', 'tortoise', 'frog', 'toad', 'lizard', 'gecko', 'snake',
  'python', 'anaconda', 'dragonfly', 'grasshopper', 'beetle', 'ladybug', 'ant',
  'mosquito', 'caterpillar', 'moth', 'spider', 'tarantula', 'centipede',
];

const food = [
  'pizza', 'sushi', 'hamburger', 'pancake', 'waffle', 'croissant', 'burrito',
  'lasagna', 'ramen', 'dumpling', 'pretzel', 'bagel', 'donut', 'cupcake',
  'cheesecake', 'tiramisu', 'brownie', 'macaron', 'churro', 'crepe', 'fondue',
  'guacamole', 'hummus', 'falafel', 'kebab', 'paella', 'risotto', 'gnocchi',
  'ravioli', 'cannoli', 'gelato', 'sorbet', 'milkshake', 'smoothie', 'espresso',
  'cappuccino', 'lemonade', 'popcorn', 'nachos', 'quesadilla', 'taco', 'enchilada',
  'empanada', 'ceviche', 'tempura', 'edamame', 'miso', 'tofu', 'kimchi',
  'sourdough', 'brioche', 'baguette', 'focaccia', 'pesto', 'mozzarella',
  'parmesan', 'cheddar', 'brie', 'gouda', 'avocado', 'mango', 'pineapple',
  'coconut', 'pomegranate', 'blueberry', 'raspberry', 'strawberry', 'watermelon',
  'cantaloupe', 'kiwi', 'papaya', 'dragonfruit', 'lychee', 'passion fruit',
  'artichoke', 'asparagus', 'broccoli', 'cauliflower', 'zucchini', 'eggplant',
  'jalapeño', 'habanero', 'wasabi', 'sriracha', 'mustard', 'ketchup', 'mayonnaise',
  'vinegar', 'cinnamon', 'vanilla', 'nutmeg', 'saffron', 'truffle', 'caviar',
  'oyster', 'escargot', 'prosciutto', 'salami', 'pepperoni', 'bacon',
];

const countries = [
  'australia', 'brazil', 'canada', 'denmark', 'egypt', 'france', 'germany',
  'hungary', 'iceland', 'japan', 'kenya', 'lebanon', 'mexico', 'norway',
  'portugal', 'qatar', 'russia', 'sweden', 'thailand', 'ukraine', 'vietnam',
  'argentina', 'belgium', 'chile', 'colombia', 'croatia', 'cuba', 'finland',
  'greece', 'india', 'indonesia', 'ireland', 'israel', 'italy', 'jamaica',
  'jordan', 'malaysia', 'morocco', 'netherlands', 'new zealand', 'nigeria',
  'pakistan', 'peru', 'philippines', 'poland', 'romania', 'saudi arabia',
  'singapore', 'south africa', 'south korea', 'spain', 'sri lanka', 'switzerland',
  'taiwan', 'tanzania', 'turkey', 'venezuela', 'zimbabwe', 'austria', 'bolivia',
  'cambodia', 'cameroon', 'costa rica', 'czech republic', 'dominican republic',
  'ecuador', 'el salvador', 'ethiopia', 'fiji', 'guatemala', 'haiti', 'honduras',
  'iran', 'iraq', 'ivory coast', 'kazakhstan', 'kuwait', 'laos', 'libya',
  'madagascar', 'mongolia', 'mozambique', 'myanmar', 'namibia', 'nepal',
  'nicaragua', 'panama', 'paraguay', 'senegal', 'serbia', 'slovakia', 'slovenia',
  'somalia', 'sudan', 'syria', 'tunisia', 'uruguay', 'uzbekistan', 'zambia',
];

const objects = [
  'umbrella', 'telescope', 'microscope', 'binoculars', 'compass', 'thermometer',
  'calculator', 'typewriter', 'gramophone', 'chandelier', 'trampoline', 'hammock',
  'skateboard', 'surfboard', 'snowboard', 'toboggan', 'parachute', 'submarine',
  'helicopter', 'bulldozer', 'treadmill', 'stethoscope', 'hourglass', 'kaleidoscope',
  'boomerang', 'slingshot', 'catapult', 'drawbridge', 'lighthouse', 'windmill',
  'scarecrow', 'mailbox', 'doorbell', 'padlock', 'handcuffs', 'megaphone',
  'saxophone', 'accordion', 'harmonica', 'tambourine', 'xylophone', 'metronome',
  'pendulum', 'periscope', 'speedometer', 'barometer', 'stopwatch', 'sundial',
  'candelabra', 'lantern', 'flashlight', 'matchstick', 'firecracker', 'dynamite',
  'magnifying glass', 'monocle', 'spectacles', 'hearing aid', 'wheelchair',
  'crutch', 'bandage', 'syringe', 'stroller', 'cradle', 'rocking chair',
  'beanbag', 'ottoman', 'futon', 'bunkbed', 'wardrobe', 'bookshelf', 'aquarium',
  'terrarium', 'birdcage', 'doghouse', 'mousetrap', 'flyswatter', 'corkscrew',
  'bottle opener', 'nutcracker', 'rolling pin', 'whisk', 'colander', 'chopsticks',
  'spatula', 'ladle', 'tongs', 'cleaver', 'grater', 'peeler', 'blender',
  'toaster', 'kettle', 'waffle iron', 'crockpot', 'pressure cooker',
];

const professions = [
  'astronaut', 'archaeologist', 'architect', 'bartender', 'blacksmith', 'butcher',
  'carpenter', 'chemist', 'chiropractor', 'comedian', 'conductor', 'detective',
  'diplomat', 'electrician', 'firefighter', 'florist', 'geologist', 'jeweler',
  'journalist', 'librarian', 'lifeguard', 'locksmith', 'magician', 'mechanic',
  'midwife', 'navigator', 'optician', 'paramedic', 'pharmacist', 'photographer',
  'pilot', 'plumber', 'poet', 'politician', 'professor', 'psychiatrist',
  'ranger', 'receptionist', 'referee', 'sailor', 'sculptor', 'sheriff',
  'sommelier', 'surgeon', 'tailor', 'therapist', 'translator', 'veterinarian',
  'zookeeper', 'auctioneer', 'beekeeper', 'bodyguard', 'bouncer', 'cashier',
  'choreographer', 'coroner', 'curator', 'dentist', 'dermatologist', 'dispatcher',
  'diver', 'editor', 'engineer', 'entomologist', 'epidemiologist', 'farrier',
  'fisherman', 'forester', 'glazier', 'groundskeeper', 'guide', 'herbalist',
  'illustrator', 'inspector', 'interpreter', 'janitor', 'jockey', 'judge',
];

const sports = [
  'basketball', 'volleyball', 'badminton', 'gymnastics', 'wrestling', 'fencing',
  'archery', 'bowling', 'billiards', 'darts', 'cricket', 'rugby', 'lacrosse',
  'handball', 'water polo', 'synchronized swimming', 'figure skating', 'curling',
  'bobsled', 'luge', 'biathlon', 'triathlon', 'decathlon', 'marathon', 'hurdles',
  'pole vault', 'long jump', 'high jump', 'javelin', 'discus', 'shot put',
  'skateboarding', 'snowboarding', 'surfing', 'windsurfing', 'kayaking', 'canoeing',
  'rowing', 'sailing', 'parasailing', 'skydiving', 'bungee jumping', 'rock climbing',
  'mountaineering', 'rappelling', 'zipline', 'parkour', 'motocross', 'go-karting',
  'horse racing', 'polo', 'rodeo', 'bullfighting', 'sumo wrestling', 'kickboxing',
  'taekwondo', 'karate', 'judo', 'aikido', 'capoeira', 'boxing', 'arm wrestling',
  'table tennis', 'squash', 'racquetball', 'pickleball', 'croquet', 'bocce ball',
  'shuffleboard', 'cornhole', 'frisbee', 'dodgeball', 'kickball', 'tug of war',
];

const places = [
  'hospital', 'library', 'museum', 'aquarium', 'planetarium', 'observatory',
  'cathedral', 'monastery', 'synagogue', 'mosque', 'temple', 'pagoda', 'pyramid',
  'colosseum', 'amphitheater', 'stadium', 'arena', 'casino', 'nightclub',
  'restaurant', 'cafeteria', 'bakery', 'brewery', 'winery', 'distillery',
  'pharmacy', 'laundromat', 'barbershop', 'salon', 'spa', 'gym', 'dojo',
  'greenhouse', 'orchard', 'vineyard', 'plantation', 'ranch', 'barn', 'silo',
  'warehouse', 'factory', 'refinery', 'quarry', 'mine', 'dam', 'reservoir',
  'aqueduct', 'canal', 'harbor', 'marina', 'pier', 'dock', 'boardwalk',
  'promenade', 'boulevard', 'highway', 'tunnel', 'bridge', 'overpass',
  'skyscraper', 'penthouse', 'basement', 'attic', 'balcony', 'terrace',
  'courtyard', 'garden', 'fountain', 'gazebo', 'pavilion', 'bandstand',
  'cemetery', 'mausoleum', 'crypt', 'dungeon', 'fortress', 'citadel',
  'watchtower', 'bunker', 'treehouse', 'igloo', 'teepee', 'cabin', 'chalet',
  'cottage', 'mansion', 'palace', 'castle', 'chateau', 'villa',
];

const movies = [
  'titanic', 'avatar', 'inception', 'gladiator', 'braveheart', 'jaws',
  'rocky', 'rambo', 'terminator', 'predator', 'alien', 'ghostbusters',
  'beetlejuice', 'gremlins', 'goonies', 'karate kid', 'top gun', 'footloose',
  'grease', 'dirty dancing', 'flashdance', 'scarface', 'goodfellas', 'casino',
  'godfather', 'godmother', 'psycho', 'vertigo', 'jigsaw', 'scream',
  'halloween', 'nightmare', 'poltergeist', 'exorcist', 'dracula', 'frankenstein',
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
];

const tvShows = [
  'friends', 'seinfeld', 'simpsons', 'family guy', 'south park', 'futurama',
  'office', 'parks and recreation', 'brooklyn nine-nine', 'community',
  'arrested development', 'curb your enthusiasm', 'its always sunny',
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
  'arcane', 'attack on titan', 'one piece', 'demon slayer', 'jujutsu kaisen',
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
];

const music = [
  'guitar', 'piano', 'drums', 'violin', 'trumpet', 'flute', 'cello',
  'banjo', 'ukulele', 'harp', 'organ', 'synthesizer', 'turntable',
  'microphone', 'amplifier', 'speaker', 'headphones', 'concert', 'festival',
  'orchestra', 'choir', 'band', 'solo', 'duet', 'quartet', 'symphony',
  'opera', 'musical', 'ballad', 'anthem', 'lullaby', 'serenade', 'remix',
  'mashup', 'freestyle', 'karaoke', 'jukebox', 'playlist', 'album',
  'vinyl', 'cassette', 'boombox', 'disco', 'rave', 'mosh pit', 'encore',
  'backstage', 'roadie', 'groupie', 'rockstar', 'diva', 'maestro',
  'hip hop', 'jazz', 'blues', 'reggae', 'country', 'punk', 'metal',
  'grunge', 'techno', 'dubstep', 'gospel', 'soul', 'funk', 'salsa',
  'tango', 'waltz', 'polka', 'samba', 'mambo', 'rumba', 'cha-cha',
  'breakdance', 'moonwalk', 'headbang', 'air guitar',
];

const videoGames = [
  'minecraft', 'fortnite', 'tetris', 'pac-man', 'mario', 'zelda', 'pokemon',
  'sonic', 'donkey kong', 'kirby', 'metroid', 'mega man', 'castlevania',
  'final fantasy', 'kingdom hearts', 'dragon quest', 'chrono trigger',
  'street fighter', 'mortal kombat', 'tekken', 'smash bros', 'soul calibur',
  'call of duty', 'halo', 'gears of war', 'destiny', 'overwatch', 'valorant',
  'counter-strike', 'rainbow six', 'apex legends', 'pubg', 'warzone',
  'grand theft auto', 'red dead redemption', 'assassins creed', 'far cry',
  'skyrim', 'witcher', 'elden ring', 'dark souls', 'bloodborne', 'sekiro',
  'god of war', 'last of us', 'uncharted', 'horizon', 'ghost of tsushima',
  'spider-man', 'batman arkham', 'bioshock', 'portal', 'half-life',
  'world of warcraft', 'league of legends', 'dota', 'starcraft', 'diablo',
  'hearthstone', 'among us', 'fall guys', 'rocket league', 'fifa',
  'madden', 'nba 2k', 'gran turismo', 'mario kart', 'animal crossing',
  'stardew valley', 'terraria', 'roblox', 'sims', 'civilization',
  'age of empires', 'sim city', 'roller coaster tycoon', 'candy crush',
];

const actions = [
  'swimming', 'climbing', 'juggling', 'whistling', 'yawning', 'sneezing',
  'hiccupping', 'stretching', 'crawling', 'tiptoeing', 'leapfrog', 'somersault',
  'cartwheeling', 'handstand', 'backflip', 'diving', 'surfing', 'skiing',
  'sledding', 'snowball fight', 'sandcastle', 'hopscotch', 'jump rope',
  'hula hoop', 'limbo', 'tightrope walking', 'bungee jumping', 'skydiving',
  'paragliding', 'hang gliding', 'horseback riding', 'bullfighting', 'jousting',
  'sword fighting', 'arm wrestling', 'thumb war', 'pillow fight', 'food fight',
  'hide and seek', 'tag', 'capture the flag', 'scavenger hunt', 'treasure hunt',
  'bird watching', 'stargazing', 'cloud watching', 'people watching',
  'window shopping', 'bargain hunting', 'dumpster diving', 'couch surfing',
  'speed dating', 'blind date', 'photobomb', 'moonwalking', 'crowd surfing',
  'stage diving', 'mosh pit', 'conga line', 'flash mob', 'mannequin challenge',
  'ice bucket challenge', 'bottle flip', 'planking', 'dabbing', 'flossing',
  'sleepwalking', 'daydreaming', 'brainstorming', 'procrastinating', 'multitasking',
  'improvising', 'meditating', 'eavesdropping', 'gossiping', 'whispering',
  'screaming', 'stammering', 'mumbling', 'rambling', 'ranting',
];

const science = [
  'gravity', 'magnetism', 'electricity', 'radiation', 'photosynthesis', 'evolution',
  'mutation', 'chromosome', 'molecule', 'atom', 'neutron', 'proton', 'electron',
  'nucleus', 'orbit', 'galaxy', 'constellation', 'supernova', 'black hole',
  'asteroid', 'meteor', 'comet', 'nebula', 'quasar', 'pulsar', 'dark matter',
  'antimatter', 'wormhole', 'spacetime', 'relativity', 'quantum', 'entropy',
  'thermodynamics', 'velocity', 'acceleration', 'momentum', 'friction', 'inertia',
  'wavelength', 'frequency', 'amplitude', 'resonance', 'vibration', 'oscillation',
  'ecosystem', 'biodiversity', 'extinction', 'fossil', 'dinosaur', 'mammoth',
  'glacier', 'volcano', 'earthquake', 'tsunami', 'tornado', 'hurricane',
  'avalanche', 'drought', 'flood', 'erosion', 'sediment', 'tectonic',
  'bacteria', 'virus', 'parasite', 'fungus', 'algae', 'amoeba', 'microbe',
  'vaccine', 'antibiotic', 'antidote', 'placebo', 'diagnosis', 'prognosis',
  'telescope', 'satellite', 'rocket', 'space station', 'mars rover',
];

const history = [
  'gladiator', 'samurai', 'viking', 'knight', 'pharaoh', 'emperor', 'czar',
  'sultan', 'shogun', 'spartan', 'centurion', 'musketeer', 'crusader', 'pirate',
  'buccaneer', 'conquistador', 'explorer', 'pilgrim', 'pioneer', 'settler',
  'revolution', 'rebellion', 'uprising', 'civil war', 'cold war', 'armistice',
  'treaty', 'alliance', 'blockade', 'embargo', 'siege', 'invasion', 'occupation',
  'liberation', 'independence', 'constitution', 'declaration', 'amendment',
  'monarchy', 'democracy', 'republic', 'empire', 'dynasty', 'feudalism',
  'colonialism', 'imperialism', 'communism', 'capitalism', 'socialism',
  'renaissance', 'enlightenment', 'industrial revolution', 'reformation',
  'inquisition', 'prohibition', 'great depression', 'gold rush', 'silk road',
  'underground railroad', 'berlin wall', 'iron curtain', 'apollo', 'manhattan project',
  'hieroglyphics', 'rosetta stone', 'dead sea scrolls', 'magna carta',
  'guillotine', 'catapult', 'trebuchet', 'chariot', 'longbow', 'crossbow',
  'cannon', 'musket', 'bayonet', 'cavalry', 'infantry', 'armada',
];

const mythical = [
  'dragon', 'unicorn', 'phoenix', 'griffin', 'centaur', 'minotaur', 'medusa',
  'cyclops', 'hydra', 'cerberus', 'pegasus', 'sphinx', 'mermaid', 'siren',
  'kraken', 'leviathan', 'behemoth', 'chimera', 'basilisk', 'manticore',
  'gargoyle', 'golem', 'genie', 'leprechaun', 'fairy', 'elf', 'dwarf',
  'troll', 'ogre', 'goblin', 'orc', 'werewolf', 'vampire', 'zombie',
  'ghost', 'banshee', 'poltergeist', 'wraith', 'specter', 'phantom',
  'demon', 'angel', 'cherub', 'seraph', 'valkyrie', 'titan', 'demigod',
  'oracle', 'prophet', 'shaman', 'witch', 'warlock', 'wizard', 'sorcerer',
  'necromancer', 'druid', 'paladin', 'ranger', 'assassin', 'rogue', 'bard',
  'excalibur', 'holy grail', 'pandoras box', 'fountain of youth', 'philosophers stone',
  'el dorado', 'atlantis', 'valhalla', 'olympus', 'underworld', 'nirvana',
  'thunderbolt', 'trident', 'mjolnir', 'lasso of truth', 'infinity gauntlet',
  'lightsaber', 'elder wand', 'one ring', 'deathly hallows', 'horcrux',
];

const miscellaneous = [
  'birthday party', 'wedding', 'graduation', 'funeral', 'baby shower',
  'halloween', 'christmas', 'thanksgiving', 'new years eve', 'valentines day',
  'april fools', 'black friday', 'super bowl', 'world cup', 'olympics',
  'carnival', 'parade', 'fireworks', 'bonfire', 'campfire', 'barbecue',
  'picnic', 'road trip', 'camping', 'hiking', 'fishing', 'hunting',
  'gardening', 'painting', 'sculpting', 'pottery', 'origami', 'knitting',
  'sewing', 'quilting', 'embroidery', 'calligraphy', 'photography', 'filmmaking',
  'animation', 'podcast', 'blog', 'vlog', 'livestream', 'tutorial',
  'interview', 'audition', 'rehearsal', 'performance', 'standing ovation',
  'curtain call', 'red carpet', 'press conference', 'debate', 'election',
  'inauguration', 'ceremony', 'ritual', 'tradition', 'superstition',
  'conspiracy theory', 'urban legend', 'fairy tale', 'bedtime story',
  'tongue twister', 'riddle', 'crossword', 'jigsaw puzzle', 'rubiks cube',
  'chess', 'checkers', 'dominoes', 'jenga', 'monopoly', 'scrabble',
  'charades', 'pictionary', 'trivial pursuit', 'poker', 'blackjack', 'roulette',
  'slot machine', 'jackpot', 'lottery', 'treasure chest', 'piggy bank',
  'stock market', 'cryptocurrency', 'blockchain', 'artificial intelligence',
  'virtual reality', 'augmented reality', 'hologram', 'teleportation',
  'time travel', 'parallel universe', 'simulation', 'matrix', 'metaverse',
  'robot', 'cyborg', 'android', 'clone', 'alien', 'spaceship', 'warp drive',
  'tractor beam', 'force field', 'cloaking device', 'death ray', 'freeze ray',
  'shrink ray', 'jetpack', 'hoverboard', 'flying car', 'time machine',
  'invisibility cloak', 'magic carpet', 'crystal ball', 'magic wand',
  'love potion', 'elixir', 'amulet', 'talisman', 'dreamcatcher',
  'voodoo doll', 'ouija board', 'tarot cards', 'fortune cookie',
  'four leaf clover', 'rabbits foot', 'horseshoe', 'wishing well',
  'shooting star', 'northern lights', 'rainbow', 'double rainbow',
  'solar eclipse', 'lunar eclipse', 'blood moon', 'harvest moon',
  'summer solstice', 'winter solstice', 'equinox', 'midnight sun',
  'déjà vu', 'karma', 'zen', 'yin yang', 'feng shui', 'chakra', 'mantra',
];

const fashion = [
  'tuxedo', 'kimono', 'sombrero', 'turban', 'beret', 'fedora', 'top hat',
  'crown', 'tiara', 'monocle', 'bow tie', 'suspenders', 'cufflinks', 'brooch',
  'earrings', 'necklace', 'bracelet', 'anklet', 'ring', 'wristwatch',
  'sunglasses', 'aviators', 'goggles', 'scarf', 'shawl', 'poncho', 'cape',
  'trench coat', 'leather jacket', 'fur coat', 'raincoat', 'parka', 'blazer',
  'cardigan', 'hoodie', 'sweater', 'vest', 'corset', 'tutu', 'kilt',
  'sarong', 'toga', 'overalls', 'jumpsuit', 'wetsuit', 'spacesuit', 'armor',
  'high heels', 'stilettos', 'boots', 'sandals', 'flip flops', 'sneakers',
  'slippers', 'clogs', 'loafers', 'moccasins', 'ballet flats', 'cowboy boots',
  'roller skates', 'ice skates', 'snowshoes', 'flippers', 'cleats',
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
  'quicksand', 'sinkhole', 'cave', 'stalactite', 'stalagmite', 'canyon',
  'cliff', 'plateau', 'mesa', 'valley', 'ravine', 'gorge', 'fjord',
  'archipelago', 'peninsula', 'isthmus', 'delta', 'oasis', 'mirage',
  'tundra', 'taiga', 'savanna', 'prairie', 'marsh', 'swamp', 'mangrove',
  'rainforest', 'jungle', 'desert', 'sand dune', 'iceberg', 'glacier',
  'volcano', 'crater', 'lava', 'magma', 'geyser', 'fumarole',
  'petrified wood', 'amber', 'crystal', 'geode', 'obsidian', 'quartz',
  'sapphire', 'emerald', 'ruby', 'diamond', 'pearl', 'amethyst', 'topaz',
  'limestone', 'granite', 'marble', 'sandstone', 'slate', 'basalt',
];

const transportation = [
  'bicycle', 'tricycle', 'unicycle', 'motorcycle', 'scooter', 'segway',
  'skateboard', 'longboard', 'rollerblade', 'wagon', 'stroller', 'wheelchair',
  'ambulance', 'fire truck', 'police car', 'taxi', 'limousine', 'convertible',
  'minivan', 'pickup truck', 'monster truck', 'dump truck', 'cement mixer',
  'bulldozer', 'excavator', 'forklift', 'tractor', 'combine harvester',
  'school bus', 'double decker bus', 'trolley', 'cable car', 'gondola',
  'monorail', 'bullet train', 'steam locomotive', 'freight train', 'subway',
  'sailboat', 'speedboat', 'canoe', 'kayak', 'yacht', 'cruise ship',
  'ferry', 'tugboat', 'aircraft carrier', 'submarine', 'hovercraft',
  'hot air balloon', 'blimp', 'zeppelin', 'glider', 'biplane', 'jet',
  'helicopter', 'drone', 'rocket', 'space shuttle', 'sled', 'toboggan',
  'dogsled', 'rickshaw', 'chariot', 'stagecoach', 'covered wagon',
];

const foodAndDrink2 = [
  'soufflé', 'crème brûlée', 'profiterole', 'baklava', 'mochi',
  'bibimbap', 'pad thai', 'pho', 'tikka masala', 'biryani', 'samosa',
  'spring roll', 'gyoza', 'wonton', 'dim sum', 'sashimi', 'maki roll',
  'fish and chips', 'bangers and mash', 'shepherd\'s pie', 'haggis',
  'pierogi', 'goulash', 'schnitzel', 'bratwurst', 'pretzel', 'strudel',
  'couscous', 'tagine', 'jollof rice', 'injera', 'poutine', 'maple syrup',
  'corn dog', 'funnel cake', 'cotton candy', 'candy apple', 'snow cone',
  'root beer float', 'egg nog', 'hot chocolate', 'chai latte', 'matcha',
  'boba tea', 'kombucha', 'sangria', 'margarita', 'mojito', 'piña colada',
  'daiquiri', 'cosmopolitan', 'martini', 'champagne', 'prosecco',
  'moonshine', 'absinthe', 'sake', 'mead', 'grog', 'butterbeer',
];

const occupationsAndRoles = [
  'babysitter', 'crossing guard', 'toll booth operator', 'food critic',
  'stunt double', 'voice actor', 'mime', 'ventriloquist', 'puppeteer',
  'ringmaster', 'lion tamer', 'acrobat', 'trapeze artist', 'sword swallower',
  'fire breather', 'snake charmer', 'fortune teller', 'palm reader',
  'ghostbuster', 'bounty hunter', 'treasure hunter', 'storm chaser',
  'deep sea diver', 'astronomer', 'cryptographer', 'archaeologist',
  'paleontologist', 'volcanologist', 'meteorologist', 'cartographer',
  'taxidermist', 'undertaker', 'gravedigger', 'chimney sweep', 'lamplighter',
  'town crier', 'messenger', 'scribe', 'court jester', 'food taster',
  'royal guard', 'secret agent', 'spy', 'hacker', 'whistleblower',
  'influencer', 'streamer', 'youtuber', 'podcaster', 'blogger',
];

const expressions = [
  'break a leg', 'piece of cake', 'cost an arm and a leg', 'hit the nail on the head',
  'spill the beans', 'let the cat out of the bag', 'bite the bullet',
  'burn the midnight oil', 'beat around the bush', 'cry over spilled milk',
  'kill two birds with one stone', 'raining cats and dogs', 'elephant in the room',
  'skeleton in the closet', 'can of worms', 'tip of the iceberg',
  'needle in a haystack', 'blessing in disguise', 'back to square one',
  'ball is in your court', 'barking up the wrong tree', 'pulling your leg',
  'cold shoulder', 'crocodile tears', 'dark horse', 'devils advocate',
  'eye of the storm', 'fish out of water', 'fly on the wall',
  'green thumb', 'hot potato', 'loose cannon', 'wild goose chase',
  'red herring', 'silver lining', 'slippery slope', 'smoking gun',
  'couch potato', 'party animal', 'social butterfly', 'night owl',
  'early bird', 'black sheep', 'lone wolf', 'copycat', 'guinea pig',
  'sacred cow', 'trojan horse', 'achilles heel', 'pandora\'s box',
];

const technology = [
  'smartphone', 'tablet', 'laptop', 'desktop', 'smartwatch', 'airpods',
  'bluetooth', 'wifi', 'hotspot', 'firewall', 'password', 'encryption',
  'algorithm', 'database', 'server', 'cloud computing', 'machine learning',
  'neural network', 'deep fake', 'chatbot', 'spam filter', 'dark web',
  'bitcoin', 'nft', 'streaming', 'download', 'upload', 'screenshot',
  'selfie', 'emoji', 'hashtag', 'viral', 'trending', 'clickbait',
  'paywall', 'popup', 'cookie', 'cache', 'browser', 'search engine',
  'social media', 'dating app', 'ride share', 'food delivery',
  'smart home', 'voice assistant', 'face recognition', 'fingerprint scanner',
  'three d printer', 'electric car', 'self driving car', 'solar panel',
  'wind turbine', 'nuclear reactor', 'space elevator', 'quantum computer',
];

const sportsAndGames2 = [
  'chess clock', 'checkmate', 'stalemate', 'castling', 'en passant',
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
  'alarm clock', 'snooze button', 'pillow fight', 'blanket fort',
  'bubble bath', 'rubber duck', 'toothbrush', 'dental floss', 'mouthwash',
  'shower curtain', 'bath robe', 'fuzzy slippers', 'nightlight', 'lava lamp',
  'bean bag chair', 'remote control', 'couch cushion', 'throw pillow',
  'welcome mat', 'doorstep', 'mailman', 'package delivery', 'door knocker',
  'peephole', 'deadbolt', 'garage door', 'sprinkler', 'garden hose',
  'lawn mower', 'leaf blower', 'snow shovel', 'ice scraper', 'windshield wiper',
  'traffic light', 'speed bump', 'roundabout', 'parking meter', 'toll booth',
  'gas station', 'car wash', 'flat tire', 'spare tire', 'jumper cables',
  'road rage', 'fender bender', 'carpool', 'rush hour', 'jaywalking',
  'crosswalk', 'sidewalk', 'fire hydrant', 'street light', 'manhole cover',
  'park bench', 'water fountain', 'playground', 'sandbox', 'swing set',
  'monkey bars', 'seesaw', 'slide', 'merry go round', 'jungle gym',
  'tree house', 'pillow fort', 'blanket cave', 'fort building',
];

const brands = [
  'big mac', 'happy meal', 'whopper', 'subway sandwich', 'pizza hut',
  'coca cola', 'pepsi', 'red bull', 'gatorade', 'mountain dew',
  'oreo', 'kitkat', 'skittles', 'snickers', 'twix', 'reeses',
  'gummy bear', 'jawbreaker', 'lollipop', 'bubblegum', 'candy cane',
  'cotton candy', 'rock candy', 'taffy', 'licorice', 'jelly bean',
  'popsicle', 'drumstick', 'ice cream sandwich', 'banana split', 'sundae',
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
];

const weird = [
  'crop circles', 'bermuda triangle', 'loch ness monster', 'bigfoot',
  'yeti', 'chupacabra', 'mothman', 'area 51', 'roswell', 'ufo',
  'flat earth', 'moon landing', 'time capsule', 'buried treasure',
  'message in a bottle', 'message in a bottle', 'genie lamp',
  'monkey paw', 'voodoo', 'séance', 'haunted house', 'escape room',
  'mystery box', 'secret passage', 'trapdoor', 'hidden room',
  'panic room', 'bunker', 'safe room', 'vault', 'panic button',
  'ejection seat', 'emergency exit', 'fire escape', 'lifeboat',
  'life jacket', 'parachute', 'emergency flare', 'smoke signal',
  'morse code', 'carrier pigeon', 'telegram', 'message in a bottle',
  'ransom note', 'anonymous tip', 'cold case', 'alibi', 'red handed',
  'fingerprint', 'dna evidence', 'lie detector', 'interrogation',
  'lineup', 'witness protection', 'most wanted', 'fugitive',
];

const seasonalAndWeather = [
  'spring cleaning', 'cherry blossom', 'april showers', 'may flowers',
  'beach day', 'sunburn', 'tan line', 'sandcastle', 'pool party',
  'cannonball', 'belly flop', 'marco polo', 'water balloon',
  'back to school', 'school bus', 'field trip', 'recess', 'detention',
  'homework', 'pop quiz', 'report card', 'prom night', 'yearbook',
  'halloween costume', 'trick or treat', 'jack o lantern', 'haunted house',
  'costume party', 'bobbing for apples', 'mummy wrap', 'skeleton key',
  'turkey dinner', 'black friday', 'cyber monday', 'gift wrapping',
  'stocking stuffer', 'candy cane', 'gingerbread house', 'snowman',
  'snow angel', 'ice skating', 'hot cocoa', 'ugly sweater', 'mistletoe',
  'countdown', 'ball drop', 'new years resolution', 'hangover',
];

export const ALL_WORDS: string[] = [...new Set([
  ...animals, ...food, ...countries, ...objects, ...professions, ...sports,
  ...places, ...movies, ...tvShows, ...celebrities, ...music, ...videoGames,
  ...actions, ...science, ...history, ...mythical,
  ...miscellaneous, ...fashion, ...bodyAndHealth, ...nature, ...transportation,
  ...foodAndDrink2, ...occupationsAndRoles, ...expressions,
  ...technology, ...sportsAndGames2, ...everyday, ...brands,
  ...weird, ...seasonalAndWeather, ...sportsStars,
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
