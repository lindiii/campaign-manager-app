const coreValues = [
  'Authenticity',
  'Achievement',
  'Adventure',
  'Authority',
  'Autonomy',
  'Balance',
  'Beauty',
  'Boldness',
  'Compassion',
  'Challenge',
  'Citizenship',
  'Community',
  'Competency',
  'Contribution',
  'Creativity',
  'Curiosity',
  'Determination',
  'Fairness',
  'Faith',
  'Fame',
  'Friendships',
  'Fun',
  'Growth',
  'Happiness',
  'Honesty',
  'Power',
  'Humor',
  'Influence',
  'Inner Harmony',
  'Justice',
  'Kindness',
  'Knowledge',
  'Leadership',
  'Learning',
  'Love',
  'Loyalty',
  'Meaningful Work',
  'Openness',
  'Optimism',
  'Peace',
  'Pleasure',
  'Poise',
  'Popularity',
  'Recognition',
  'Religion',
  'Reputation',
  'Respect',
  'Responsibility',
  'Security',
  'Self-Respect',
  'Service',
  'Spirituality',
  'Stability',
  'Success',
  'Status',
  'Trustworthiness',
  'Wealth',
  'Wisdom'
];
const alignments = [
  'Lawful Good',
  'Lawful Neutral',
  'Lawful Evil',
  'Neutral Good',
  'Neutral',
  'Neutral Evil',
  'Chaotic Good',
  'Chaotic Neutral',
  'Chaotic Evil'
];
const quirks = [
  'Will not ever drink alcohol.',
  'Can’t leave a bar without having a drink.',
  'Treats his weapon like the love of his life.',
  'Treats his steed or animal companion better than people.',
  'Will not ride an animal.',
  'Always makes religious gestures when leaving a temple even though he is not religious.',
  'Fear of small creatures (mice/frogs/squirrels/birds/etc.).',
  'Always answers questions with questions.',
  'Prefers to sleep outside over sleepin inside buildings.',
  'Only eats raw meat not cooked meat.',
  'Takes trophies from all of his kills.',
  'B.A. Baracus Syndrome – Refuses to fly via any means (flying creature/flying spell/flying vehicle/etc.).',
  'Occasionally speaks in another language that no one understands (since it doesn’t truly exist).',
  'Walks barefoot everywhere, does not use footwear.',
  'Wears an excessive amount of gaudy jewelry.',
  'Only wears one specific color of clothing.',
  'Devotes intense study to a mundane topic (bird feathers/density of various liquids/temperature of caves/etc.).',
  'Requires being pampered whenever available (hot baths at inns/massages while in town/fancy meals in restaurants/etc.).',
  'Obsessed with creating a written chronicle of his journeys.',
  'Obsessed with creating songs about his journeys.',
  'Always sings songs when traveling from one destination to another.',
  'Doesn’t like children and is incredibly awkward when dealing with them.',
  'Doesn’t like to enter holy buildings (churches/holy temples/religious monasteries/etc.).',
  'A specific weather condition (rain/snow/wind/etc.) incites the character to fight.',
  'Can’t sleep in total darkness, needs some kind of lighting.',
  'Excessively tips everyone (waitresses/bartenders/musicians/etc.).',
  'Adds tattoos to his body for every new place he visits.',
  'Will only ride one specific type of animal (horse/donkey/elephant/etc.).',
  'Constantly murmurs religious incantations.',
  'Doesn’t ever carry money on his person.',
  'Leaves emergency stashes of supplies in every major area he goes to.',
  'Doesn’t trust people who don’t remember his name.',
  'Believes vegetables (or some other type of food) are poisonous.',
  'Carves a scar or tattoos himself when he commits a major sin against his deity.',
  'His laughter always sounds incredibly devious and evil (regardless of alignment).',
  'Fond of headbutting anyone he gets in an argument with.',
  'Meticulously collects a certain type of item (daggers/gems/old coins/scrolls/etc.).',
  'Unusually short (or tall) for his race.',
  'Unnatural eye or hair color for his race.',
  'Denies the existence of a force of nature (wind/earthquakes/floods/etc.) and always explains it away as something else.',
  'Accent that seems to change on a consistent basis.',
  'Believes he has animal empathy but in reality has no special powers with animals.',
  'Prays for every corpse, friend or foe, that he comes across.',
  'Must apologize to anything, person or animal, before he kills it.',
  'Carries a mundane item (spoon/shoelace/broken key/etc.) in his pocket at the ready, “Just in case…”.',
  'Strongly believes some famous dead individual (setting’s version of Elvis) is still alive.',
  'When time allows, always paints his face with “the colors of war” prior to combat.',
  'Has a very odd nickname (Potato/Fingernail/Bub/etc.).',
  'Looks incredibly awkward when fighting (always shoots gangster style/swings a sword funny/throws grenades “like a girl”/etc.).',
  'Always breaks out in a dance when he wins, whether it is an argument, a fight, or a game of cards.',
  'Constantly mixes up proverbs and sayings.',
  'Cannot admit to being wrong even when shown proof of being wrong.',
  'Constantly has a toothpick in his mouth, even when fighting.',
  'Often smells of (his favorite food/cologne/something bad/etc.).',
  'Always finishes his food first and asks other party members, “Are you going to finish that?”',
  'Has a non-combat pet with him (mouse/ferret/small dog/etc.).',
  'Uncomfortable in crowds of people.',
  'Is constantly playing with something (yoyo/deck of cards/Rubik’s cube/etc.) when going about his daily business.',
  'Carries a special coin with him everywhere that he uses to help him make decisions (heads or tails?).',
  'Incredibly afraid of mirrors and will do anything to avoid them.',
  'Always refers to himself in the third person.',
  'Refuses to allow anyone to touch his smoking pipe, refuses to explain why, but will fight to the death over it.',
  'Always speaks in a seductive voice (may or may not be aware of this).',
  'Insists on being fashionable, even at times that it is extremely difficult to do so (fighting/sleeping/climbing a tree/crawling through mud/etc.).',
  'Has nightmares about some very unusual thing (leprechauns/fireflies/koala bears/etc.).',
  'Uses the services of prostitutes but insists afterward that they pay him.',
  'Believes that he is the reincarnation of some famous person that died long ago.',
  'Marty McFly Complex – Will take unnecessary risks or do dangerous acts if his courage is questioned, such as being called a chicken or coward.',
  'No sense of humor – Responds to all jokes as if they’re serious statements.',
  'Always blames an accident on someone else in the party.',
  'Always refers to himself as “The Amazing _____!”',
  'Cannot physically part with his primary weapon, or armor, or both.',
  'Eats only with his hands, will not use utensils.',
  'Constantly talks about his homeland and often relates everything being talked about back to something in his homeland.',
  'Has an imaginary friend that he occasionally talks to.',
  'Has a voice that doesn’t fit his body or personality (aka Mike Tyson’s voice).',
  'Is very easily swayed by food (aka Scooby Doo).',
  'Never curses or uses any deity’s name in vain and disapproves of those who do so.',
  'Chews tobacco and has a habit of spitting everywhere he goes.',
  'Can speak, but prefers to talk through innuendo or sign language.',
  'Prays to whatever god he thinks fits the situation and will help him out.',
  'Feels it is necessary to taunt all of his enemies, regardless of the situation or how dangerous the enemy is.',
  'Only drinks one specific type of alcohol, believes all others are worthless.',
  'Refers to his deity as “The Great One” and threatens violence to anyone who utters its name.',
  'Was once horribly wronged by someone with a distinctive physical trait (blond hair/facial scar/green eyes/etc.) and now hates/suspects anyone with a similar trait.',
  'Is really bad at lying.',
  'Carves his name into something at every major location he goes to.',
  'The Crocodile Hunter – Obsessed with the “beauty” of something that most people recoil in horror from (undead/dragons/werewolves/etc.).',
  'Gives everyone he meets a nickname and calls them by that name. EVERYONE.',
  'Has names for all of his pieces of equipment and speaks to them often.',
  'Always wears a hat or a helmet, no matter what.',
  'Makes his own sound effects while fighting.',
  'Always finds an excuse to charge into a dangerous situation regardless of the consequences.',
  'Uses circular logic for everything.',
  'Is not religious, but suddenly becomes religious in life-threatening situations, only to revert back afterward to not being religious.',
  'Obsessive about polishing, cleaning, and maintaining their gear.',
  'Ends nearly every conversation with the phrase, “I should go now.”',
  'Plays an instrument often and very poorly, but believes he is good at playing it.',
  'Uses nautical terms freely and inaccurately throughout his conversations, even though he has never been to sea (or only a few times).',
  'Allergic to something very unusual (undead/gryphons/baby powder/etc.) and begins to sneeze uncontrollably when he is within a short distance it.',
  'Very sarcastic, especially when in life or death situations.'
];
const genders = ['Male', 'Female', 'Other', 'Not Applicable', 'Fluid'];
const races = [
  'Aasimar',
  'Aetherborn',
  'Aven',
  'Bugbear',
  'Changeling',
  'Dragonborn',
  'Dwarf',
  'Elf',
  'Firbolg',
  'Genasi',
  'Gith',
  'Gnome',
  'Goblin',
  'Goliath',
  'Half-elf',
  'Half-orc',
  'Halfling',
  'Hobgoblin',
  'Human',
  'Kalashtar',
  'Kenku',
  'Khenra',
  'Kobold',
  'Kor',
  'Lizardfolk',
  'Merfolk',
  'Orc',
  'Revenant',
  'Shifter',
  'Siren',
  'Tabaxi',
  'Tiefling',
  'Tortle',
  'Triton',
  'Vampire',
  'Vedalken',
  'Warforged',
  'Yuan-Ti Pureblood',
  'Aarakocra',
  'Aboleth',
  'Angel',
  'Animated Object',
  'Ankheg',
  'Azer',
  'Banshee',
  'Basilisk',
  'Behir',
  'Beholder',
  'Blight',
  'Bulette',
  'Bullywug',
  'Cambion',
  'Carrion Crawler',
  'Centaur',
  'Chimera',
  'Chuul',
  'Cloaker',
  'Cockatrice',
  'Couatl',
  'Crawling Claw',
  'Cyclop',
  'Darkmantle',
  'Death Knight',
  'Demilich',
  'Demon',
  'Devil',
  'Dinosaur',
  'Displacer Beast',
  'Doppelganger',
  'Dracolich',
  'Dragon Shadow',
  'Dragon',
  'Dragon Turtle',
  'Drider',
  'Dryad',
  'Elemental',
  'Empyrean',
  'Ettercap',
  'Ettin',
  'Faerie Dragon',
  'Flameskull',
  'Flumph',
  'Fomorian',
  'Fungi',
  'Galeb Duhr',
  'Gargoyle',
  'Genie',
  'Ghoul',
  'Giant',
  'Gibbering Mouther',
  'Gnoll',
  'Golem',
  'Gorgon',
  'Grell',
  'Grick',
  'Griffon',
  'Grimlock',
  'Hag',
  'Half-Dragon',
  'Harpy',
  'Hell Hound',
  'Helmed Horror',
  'Hippogriff',
  'Homunculu',
  'Hook Horror',
  'Hydra',
  'Intellect Devourer',
  'Invisible Stalker',
  'Jackalwere',
  'Kraken',
  'Kuo-Toa',
  'Lamia',
  'Lich',
  'Lycanthrope',
  'Magmin',
  'Manticore',
  'Medusa',
  'Mephit',
  'Merrow',
  'Mimic',
  'Mind Flayer',
  'Minotaur',
  'Modron',
  'Mummy',
  'Myconid',
  'Myconid Spore Servant',
  'Naga',
  'Nightmare',
  'Nothic',
  'Ogre',
  'Oni',
  'Ooze',
  'Otyugh',
  'Owlbear',
  'Pegasus',
  'Peryton',
  'Piercer',
  'Pixie',
  'Pseudodragon',
  'Purple Worm',
  'Quaggoth',
  'Rakshasa',
  'Remorhaze',
  'Roc',
  'Roper',
  'Rust Monster',
  'Sahuagin',
  'Salamander',
  'Satyr',
  'Scarecrow',
  'Shadow',
  'Shambling Mound',
  'Shield Guardian',
  'Skeleton',
  'Slaadi',
  'Specter',
  'Sphinx',
  'Sprite',
  'Stirge',
  'Succubus/Incubus',
  'Tarrasque',
  'Thri-Kreen',
  'Treant',
  'Troglodyte',
  'Troll',
  'Umber Hulk',
  'Unicorn',
  'Water Weird',
  'Wight',
  'Will-o’-Wisp',
  'Wraith',
  'Wyvern',
  'Xorn',
  'Yeti',
  'Yuan-ti',
  'Yugoloth',
  'Zombie',
  'Ape',
  'Awakened Shrub',
  'Awakened Tree',
  'Axe Beak',
  'Baboon',
  'Badger',
  'Bat',
  'Black bear',
  'Blink Dog',
  'Blood Hawk',
  'Boar',
  'Brown Bear',
  'Camel',
  'Cat',
  'Constrictor Snake',
  'Crab',
  'Crocodile',
  'Death Dog',
  'Deer',
  'Dire Wolf',
  'Draft Horse',
  'Eagle',
  'Elephant',
  'Elk',
  'Flying Snake',
  'Frog',
  'Giant Ape',
  'Giant Badger',
  'Giant Bat',
  'Giant Boar',
  'Giant Centipede',
  'Giant Constrictor Snake',
  'Giant Crab',
  'Giant Crocodile',
  'Giant Eagle',
  'Giant Elk',
  'Giant Fire Beetle',
  'Giant Frog',
  'Giant Goat',
  'Giant Hyena',
  'Giant Lizard',
  'Giant Octopus',
  'Giant Owl',
  'Giant Poisonous Snake',
  'Giant Rat',
  'Giant Scorpion',
  'Giant Sea Horse',
  'Giant Shark',
  'Giant Spider',
  'Giant Toad',
  'Giant Vulture',
  'Giant Wasp',
  'Giant Weasel',
  'Giant Wolf Spider',
  'Goat',
  'Hawk',
  'Hunter Shark',
  'Hyena',
  'Jackal',
  'Killer Whale',
  'Lion',
  'Lizard',
  'Mammoth',
  'Mastiff',
  'Mule',
  'Octopus',
  'Owl',
  'Panther',
  'Phase Spider',
  'Poisonous Snake',
  'Polar Bear',
  'Pony',
  'Quipper',
  'Rat',
  'Raven',
  'Reef Shark',
  'Rhinoceros',
  'Riding Horse',
  'Saber-Toothed Tiger',
  'Scorpion',
  'Sea Horse',
  'Spider',
  'Tiger',
  'Vulture',
  'Warhorse',
  'Weasel',
  'Winter Wolf',
  'Wolf',
  'Worg'
];
const occupations = [
  'Actor',
  'Advocate (Lawyer)',
  'Alchemist',
  'Animal Handler',
  'Apothecary',
  'Architect',
  'Archer',
  'Archivist',
  'Aristocrat',
  'Armorer',
  'Artisan',
  'Artist',
  'Astrologer',
  'Baker',
  'Banker',
  'Barbarian',
  'Barber',
  'Bard',
  'Barkeep',
  'Barmaid',
  'Beekeeper',
  'Beer Seller',
  'Beggar',
  'Blacksmith',
  'Boatman',
  'Bookbinder',
  'Bookseller',
  'Brewer',
  'Bricklayer',
  'Brick Maker',
  'Brigand',
  'Brothel Keeper',
  'Buckle Maker',
  'Builder',
  'Butcher',
  'Caravan Leader',
  'Carpenter',
  'Cartographer',
  'Chandler',
  'Charioteer',
  'Chatelaine',
  'Chef',
  'Chieftain',
  'Chirurgeon',
  'Clergyman',
  'Clerk',
  'Clock Maker',
  'Clothworker',
  'Cobbler',
  'Commander',
  'Concubine',
  'Cook',
  'Cooper',
  'Copyist',
  'Costermonger',
  'Counselor',
  'Courtesan',
  'Courtier',
  'Cowherd',
  'Crossbowman',
  'Cutler',
  'Daimyo',
  'Dairymaid',
  'Dancer',
  'Dictator',
  'Diplomat',
  'Distiller',
  'Diver',
  'Diviner',
  'Doctor',
  'Domestic Servant',
  'Emperor/Empress',
  'Eunuch',
  'Explorer',
  'Farmer',
  'Fighter',
  'Fisherman',
  'Fishmonger',
  'Footman',
  'Furrier',
  'Galley Slave',
  'Gardener',
  'Geisha',
  'General',
  'Gladiator',
  'Glovemaker',
  'Goldsmith',
  'Grocer',
  'Groom',
  'Guardsman',
  'Guildmaster',
  'Harness maker',
  'Hatmaker',
  'Hay merchant',
  'Healer',
  'Hearthwitch',
  'Herald',
  'Herbalist',
  'Herder',
  'Hermit',
  'Highwayman',
  'Historian',
  'Housemaid',
  'Hunter',
  'Illuminator',
  'Infantryman',
  'Innkeeper',
  'Interpreter',
  'Inventor',
  'Jailer',
  'Jester',
  'Jeweler',
  'Jongleur',
  'Judge',
  'King',
  'Kitchen drudge',
  'Knight',
  'Laborer',
  'Lady',
  'Lady in Waiting',
  'Leatherworker',
  'Librarian',
  'Linguist',
  'Locksmith',
  'Longbowman',
  'Longshoreman',
  'Lord',
  'Maidservant',
  'Majordomo',
  'Man at Arms',
  'Mason',
  'Masseur',
  'Mayor',
  'Mercer',
  'Merchant',
  'Messenger',
  'Midwife',
  'Miller',
  'Miner',
  'Minister',
  'Minstrel',
  'Monk',
  'Mortician',
  'Mourner',
  'Musician',
  'Necromancer',
  'Noble',
  'Nun',
  'Nurse',
  'Old-clothes seller',
  'Page',
  'Painter',
  'Pariah',
  'Pastry cook',
  'Peasant',
  'Perfumer',
  'Philosopher',
  'Physician',
  'Pigkeeper',
  'Pilgrim',
  'Pirate',
  'Plasterer',
  'Potter',
  'Priest/ess',
  'Prince/ss',
  'Privateer',
  'Professor',
  'Prostitute',
  'Pursemaker',
  'Queen',
  'Ranger',
  'Ratcatcher',
  'Reeve',
  'Ronin',
  'Roofer',
  'Ropemaker',
  'Royal Adviser',
  'Rugmaker',
  'Ruler',
  'Saddler',
  'Sailor',
  'Samurai',
  'Scabbard maker',
  'Sculptor',
  'Scavenger',
  'Scholar',
  'Scrivener',
  'Seamstress',
  'Servant',
  'Shaman',
  'Shepherd',
  "Ship's captain",
  'Shoemaker',
  'Silversmith',
  'Slave',
  'Slaver',
  'Smith',
  'Soldier',
  'Sorcerer/Sorceress',
  'Spice Merchant',
  'Squire',
  'Stablehand',
  'Stevedore',
  'Stonemason',
  'Storyteller',
  'Steward',
  'Street kid',
  'Street seller',
  'Street sweeper',
  'Student',
  'Surgeon',
  'Surveyor',
  'Swordsman',
  'Sycophant',
  'Tailor',
  'Tanner',
  'Tavernkeeper',
  'Tax collector',
  'Teacher',
  'Teamster',
  'Thatcher',
  'Thief',
  'Tinker',
  'Torturer',
  'Town crier',
  'Toymaker',
  'Trapper',
  'Vendor',
  'Vermin catcher',
  'Veterinarian',
  'Village chief',
  'Vintner',
  'Viking',
  'Warlock',
  'Warrior',
  'Water carrier',
  'Weaver',
  'Wetnurse',
  'Wine seller',
  'Witch',
  'Wizard',
  'Woodcarver',
  'Woodcutter',
  'Wood seller',
  'Wrestler',
  'Writer'
];