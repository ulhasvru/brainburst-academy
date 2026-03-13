// =====================================================
// DATA
// =====================================================
const SUBJECTS = [
  { id:'math',     name:'Mathematics',   icon:'🔢', cls:'sc-math',     subtitle:'Numbers, Shapes & Problem Solving', desc:'Master 6-digit numbers, fractions, geometry & real-world maths!' },
  { id:'evs',      name:'EVS & Science', icon:'🌿', cls:'sc-evs',      subtitle:'Nature, India & Human Body',       desc:'Explore India, nature science & the amazing human body!' },
  { id:'english',  name:'English',       icon:'📚', cls:'sc-eng',      subtitle:'Grammar, Vocabulary & Reading',    desc:'Build grammar skills, expand vocabulary & read exciting stories!' },
  { id:'hindi',    name:'Hindi',         icon:'🪔', cls:'sc-hindi',    subtitle:'Hindi Grammar & Vocabulary',       desc:'Learn Hindi vyakaran, shabdkosh & improve your Hindi!' },
  { id:'kannada',  name:'Kannada',       icon:'🏛️', cls:'sc-kannada',  subtitle:'Namma Bhasha · Our Language',     desc:'Learn Kannada alphabets, words & explore Karnataka culture!' },
  { id:'computer', name:'Computers',     icon:'💻', cls:'sc-computer', subtitle:'Tech Literacy & Logical Thinking', desc:'Discover computers, internet safety & logical thinking!' }
];

const HERO_BGSRC = {
  math: 'linear-gradient(135deg,#FF6B6B,#FF9F1C)',
  evs: 'linear-gradient(135deg,#06D6A0,#4CC9F0)',
  english: 'linear-gradient(135deg,#4CC9F0,#7B2FBE)',
  hindi: 'linear-gradient(135deg,#FFD93D,#FF6B6B)',
  kannada: 'linear-gradient(135deg,#C77DFF,#FF4D6D)',
  computer: 'linear-gradient(135deg,#4CC9F0,#06D6A0)'
};

const SYLLABUS = {
  math:[
    {title:'📐 Large Numbers (5 & 6 Digit Numbers)',topics:['Place value up to 6 digits: Ones, Tens, Hundreds, Thousands, Ten-Thousands, Lakhs','Reading and writing numbers in words and figures','Comparing and ordering large numbers using >, <, =','Expanded form and standard form of numbers','Indian number system vs International number system','Rounding off numbers to nearest 10, 100, and 1000']},
    {title:'➕➖ Addition and Subtraction',topics:['Addition of 4 to 5 digit numbers with carrying','Subtraction of 4 to 5 digit numbers with borrowing','Word problems on addition and subtraction in daily life','Estimating sums and differences','Properties: Commutative, Associative, Identity property of zero']},
    {title:'✖️➗ Multiplication and Division',topics:['Multiplication tables up to 20','Multiplication of 3-digit numbers by 1 and 2 digit numbers','Long division with and without remainders','Relationship between multiplication and division','Word problems involving all four operations','Properties of multiplication: commutative, associative, distributive']},
    {title:'🍕 Fractions',topics:['Concept of fractions: numerator and denominator','Types: proper fractions, improper fractions, mixed numbers','Equivalent fractions using diagrams and pictures','Comparing fractions with the same denominator','Addition and subtraction of like fractions','Simple word problems on fractions']},
    {title:'📏 Geometry & Shapes',topics:['2D shapes: square, rectangle, triangle, circle, rhombus, parallelogram','3D shapes: cube, cuboid, cylinder, cone, sphere, prism','Perimeter of squares and rectangles using formulas','Area using square grids (counting unit squares)','Lines: straight, curved, parallel, perpendicular, intersecting','Angles: right angle, acute angle, obtuse angle','Symmetry: line of symmetry in shapes, patterns and figures']},
    {title:'⏰💰 Measurement & Money',topics:['Units of length: km, m, cm, mm – conversions between them','Units of weight: kg and g – conversions','Units of capacity: Litre and millilitre – conversions','Reading clocks: 12-hour and 24-hour (railway time) formats','AM and PM, calculating time intervals and elapsed time','Indian currency: rupees and paise, making change in shopping','Simple word problems involving money, weight, length, time']},
    {title:'📊 Data Handling',topics:['Collecting and recording data in tally marks and tables','Pictographs: reading and interpreting picture graphs','Bar graphs: reading and drawing simple bar graphs','Finding the most frequent (mode) and least common value in data']}
  ],
  evs:[
    {title:'🗺️ Our India',topics:['India as a country: location on globe, neighbouring countries','All states and union territories – names and capitals','Major rivers: Ganga, Yamuna, Godavari, Krishna, Cauvery','Mountain ranges: Himalayas, Western Ghats, Eastern Ghats, Vindhyas','Karnataka: Bengaluru capital, Mysuru Palace, Vidhana Soudha, Hampi','National symbols: flag, anthem, bird (Peacock), animal (Tiger), flower (Lotus)','Festivals of India and Karnataka: Dasara, Ugadi, Diwali, Eid, Christmas','Cultural diversity and unity in India']},
    {title:'🌱 Plants & Adaptation',topics:['Parts of a plant: roots, stem, leaves, flower, fruit, seed and their functions','Types of plants: herbs, shrubs, trees, creepers, climbers','Adaptation of plants: cactus in desert, lotus in water, mangroves in swamps','Photosynthesis: how plants make food using sunlight, water and CO₂','Importance of plants: food, oxygen, medicines, timber, rainfall']},
    {title:'🦁 Animals & Their Habitats',topics:['Types: domestic, wild, aquatic, aerial, terrestrial animals','Animal habitats: forest, desert, polar, ocean, grassland, wetland','Animal adaptations to survive in their environments','Food chains: producer → consumer → decomposer','Herbivores, carnivores and omnivores with examples','Endangered animals and importance of wildlife conservation']},
    {title:'💧 Water & Environment',topics:['Sources of water: rivers, lakes, ponds, groundwater, rain, oceans','The water cycle: evaporation, condensation, precipitation, collection','Uses of water at home, in agriculture, industries and daily life','Water conservation: methods like rainwater harvesting, drip irrigation','Types of pollution: air, water, land and noise pollution','Causes and harmful effects of pollution on living beings and environment','Ways to reduce pollution and protect our planet (reduce, reuse, recycle)']},
    {title:'🫁 The Human Body',topics:['Major systems: digestive, respiratory, excretory, skeletal, muscular','Digestive system organs: mouth, food pipe (oesophagus), stomach, small and large intestines','Types of teeth: incisors, canines, premolars, molars – functions of each','Milk teeth (20) vs permanent teeth (32)','Respiratory system: nasal cavity, windpipe (trachea), lungs','Excretory system: kidneys filter blood and remove waste as urine','Hygiene: washing hands, brushing teeth, bathing, eating clean food']},
    {title:'🚌 Transport & Communication',topics:['Modes of transport: road (car, bus, cycle, auto), rail, water (ship, boat), air (plane)','History of transport: bullock cart → steam engine → motor car → airplane','Traffic rules, road safety signs: stop, pedestrian crossing, no entry','Communication methods: telephone, mobile, internet, email, radio, TV, newspaper','Postal services: letters, postcards, speed post and their importance']}
  ],
  english:[
    {title:'📝 Parts of Speech',topics:['Nouns: common (book, city), proper (India, Rama), collective (herd, team), abstract (love, honesty)','Pronouns: personal (I, you, he, she, they), demonstrative (this, that, these, those)','Verbs: action verbs, helping verbs (is, am, are, was, were, has, have)','Verb tenses: simple past, present and future with examples','Adjectives: quality (sweet, heavy), quantity (some, few), number (one, many)','Degrees of comparison: positive, comparative, superlative (tall, taller, tallest)','Adverbs: manner (quickly), place (here), time (now), degree (very)','Prepositions: at, in, on, under, over, beside, between, through, across','Conjunctions: coordinating (and, but, or) and subordinating (because, when, although, so)']},
    {title:'📖 Reading Comprehension',topics:['Reading short passages and answering questions accurately','Identifying main idea and supporting details in a paragraph','Making inferences from the text – reading between the lines','Moral of stories: Panchatantra, Aesop\'s Fables, Tenali Rama tales','Understanding characters, events and plot sequence in stories','NCERT textbook passages: "Marigold" and "Looking Around" Grade 4']},
    {title:'✏️ Writing Skills',topics:['Sentence types: simple, compound, complex','Types by purpose: declarative, interrogative, exclamatory, imperative','Paragraph writing: My School, My Pet, My Favourite Festival','Informal letter writing: to friends and family','Story writing using picture prompts or given beginnings','Diary entry writing and notice writing']},
    {title:'🔤 Vocabulary',topics:['Synonyms: words with similar meanings (happy = joyful, big = large)','Antonyms: opposites (day ↔ night, love ↔ hate)','Homophones: words that sound alike (there/their/they\'re, to/two/too)','Compound words (football, sunflower), contractions (can\'t, isn\'t)','Prefixes: un- (unhappy), re- (redo), dis- (disagree)','Suffixes: -ful (careful), -less (careless), -ness (happiness), -ly (quickly)','Similes: as brave as a lion, as white as snow']}
  ],
  hindi:[
    {title:'📜 वर्णमाला और उच्चारण',topics:['Swar (vowels): अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ, अं, अः (13 swaras)','Vyanjan (consonants): क से ज्ञ तक – all 33 consonants in groups','Matras (vowel signs): आ की मात्रा ा, इ की ि, ई की ी, etc.','Sanyukt Akshar (conjunct consonants): क्ष, त्र, ज्ञ','Reading and writing clear Hindi sentences using correct matras']},
    {title:'📘 व्याकरण (Grammar)',topics:['Sangya (Noun): types – vyakti (person), sthaan (place), vastu (thing), bhaav (feeling)','Vachan (Number): singular (एकवचन) and plural (बहुवचन) forms','Ling (Gender): Pulling (masculine) and Striling (feminine) with examples','Sarvnam (Pronoun): मैं, तू, तुम, आप, वह, वे, यह, ये','Kriya (Verb): present tense, past tense, future tense with examples','Visheshan (Adjective): describing words – गुण, संख्या, परिमाण','Simple sentence construction following subject–verb–object pattern']},
    {title:'📗 शब्द भंडार (Vocabulary)',topics:['Paryayvachi Shabd (Synonyms): सूर्य=रवि=दिनकर, जल=नीर=पानी, घर=गृह','Vilom Shabd (Antonyms): दिन–रात, सुख–दुख, आना–जाना, सच–झूठ','Common words: body parts, animals, colors, days, months in Hindi','Muhavare (Idioms): नौ दो ग्यारह होना, आँखें चार होना','Counting in Hindi: एक to सौ (1 to 100)']},
    {title:'📕 पठन और लेखन',topics:['Reading comprehension of short Hindi paragraphs','Answering questions in complete Hindi sentences','Informal letter writing: मित्र को पत्र, माता-पिता को पत्र','Simple essay writing: मेरा विद्यालय, मेरा परिवार, मेरा प्रिय त्योहार','NCERT Grade 4 Hindi book: "Rimjhim" – poems and stories']}
  ],
  kannada:[
    {title:'🅰️ ಅಕ್ಷರಮಾಲೆ (Aksharamale)',topics:['Swaras (vowels): ಅ, ಆ, ಇ, ಈ, ಉ, ಊ, ಋ, ಎ, ಏ, ಐ, ಒ, ಓ, ಔ, ಅಂ, ಅಃ','Vyanjanas (consonants): ಕ, ಖ, ಗ, ಘ from Kavarga to Havarga – all groups','Gunita (vowel-consonant combination): ಕ + ಾ = ಕಾ, ಗ + ಿ = ಗಿ','Ottaksharas (half letters/conjunct): ಕ್ಕ, ತ್ತ, ಪ್ಪ, ಜ್ಞ','Reading simple Kannada words, sentences and short paragraphs']},
    {title:'📘 ವ್ಯಾಕರಣ (Vyakarana)',topics:['Naama (Noun): names of people, places and objects in Kannada','Linga (Gender): Pulling (masculine), Striling (feminine), Napunsaka (neuter)','Vacana (Number): singular (ಏಕವಚನ) and plural (ಬಹುವಚನ)','Common Kannada verbs: ಹೋಗು, ಬಾ, ತಿನ್ನು, ಕುಳಿತು, ಓದು','Question words: ಏನು (what), ಎಲ್ಲಿ (where), ಯಾರು (who), ಯಾಕೆ (why), ಹೇಗೆ (how)','Simple sentence formation in Kannada']},
    {title:'📗 ಪದ ಭಂಡಾರ (Vocabulary)',topics:['Family members: ಅಪ್ಪ, ಅಮ್ಮ, ಅಣ್ಣ, ಅಕ್ಕ, ತಮ್ಮ, ತಂಗಿ, ಅಜ್ಜ, ಅಜ್ಜಿ','Colors in Kannada: ಕೆಂಪು, ನೀಲಿ, ಹಳದಿ, ಹಸಿರು, ಬಿಳಿ, ಕಪ್ಪು','Numbers 1–20 in Kannada words: ಒಂದು, ಎರಡು, ಮೂರು...','Greetings: ನಮಸ್ಕಾರ (Namaskara), ಧನ್ಯವಾದ (Thank you), ಕ್ಷಮಿಸಿ (Sorry)','Days of the week and months of the year in Kannada']},
    {title:'🏛️ Karnataka Culture & Heritage',topics:['Karnataka founded November 1, 1956 – Rajyotsava Day celebration','Capital: Bengaluru (IT city of India) – Vidhana Soudha, Lalbagh, Cubbon Park','Famous monuments: Mysuru Palace, Hampi ruins (UNESCO), Badami caves, Aihole','State symbols: Kadamba tree (flower), Neelakantha/Indian Roller (bird), Elephant (animal)','Great Kannada poets: Pampa (Adikavi), Ranna, Ponnanna, Kuvempu (Rashtrakavi)','Folk arts: Yakshagana, Dollu Kunitha, Veeragase, Karaga festival','Festivals: Mysuru Dasara (10-day), Ugadi (New Year), Rajyotsava, Holi']}
  ],
  computer:[
    {title:'🖥️ Introduction to Computers',topics:['What is a computer? – An electronic machine that processes data','Types: desktop, laptop, tablet, smartphone, server','Parts: CPU (brain), Monitor (display), Keyboard (text input), Mouse (pointer), Printer, Speakers','Input devices: keyboard, mouse, microphone, scanner, webcam','Output devices: monitor, printer, speakers, projector','Storage devices: hard disk (internal), pen drive, SD card, CD/DVD','Booting: what happens step-by-step when you switch on a computer']},
    {title:'💿 Software & OS',topics:['Software: set of instructions that tell the computer what to do','System software: Operating System (Windows, Android, macOS, Linux)','Application software: MS Word, MS Paint, Calculator, Chrome, games','Desktop: icons, taskbar, start/home button, clock, system tray','File management: creating folders, renaming, copying, moving, deleting files','MS Word basics: typing, selecting, bold/italic/underline, saving as .docx','MS Paint: drawing, using brushes, fill colors, shapes and text tool']},
    {title:'🌐 Internet & Safety',topics:['Internet: global network connecting millions of computers worldwide','Uses: searching information, email, video calls, online learning, entertainment','Web browser: Google Chrome, Firefox, Safari – address bar, tabs, bookmarks','Search engine: Google, Bing – how to type effective search queries','Email: sender, receiver, subject, body, attachments – sending and receiving','Internet Safety Rules: never share password, full name, address or phone with strangers','Cyberbullying: recognize it, don\'t respond, tell a trusted adult immediately','Healthy screen time habits: take breaks, no devices during meals or bedtime']},
    {title:'🧩 Logical Thinking',topics:['Algorithm: step-by-step instructions to solve a problem (like a recipe)','Flowchart shapes: Start/End (oval), Process (rectangle), Decision (diamond)','Sequencing: why the order of steps matters in instructions','Pattern recognition: identify the rule and extend a visual or number pattern','Introduction to Scratch: sprites, costumes, backgrounds, Stage','Scratch blocks: Motion, Looks, Sound, Events, Control, Sensing categories','Simple programs: move a sprite, play a sound, change costume, repeat actions','Debugging: finding and fixing errors in a set of instructions']}
  ]
};

const QUESTIONS = {
  math:[
    {q:"What is the place value of 5 in the number 45,678?",opts:["50","500","5000","50000"],ans:2,diff:"easy"},
    {q:"Solve: 4000 + 300 + 20 + 1 =",opts:["40321","4321","400321","431"],ans:1,diff:"easy"},
    {q:"What is 15 multiplied by 8?",opts:["110","115","120","125"],ans:2,diff:"easy"},
    {q:"If you divide 100 by 4, what is the quotient?",opts:["20","25","30","50"],ans:1,diff:"easy"},
    {q:"What comes next in the pattern: 2, 4, 6, 8, ___?",opts:["9","10","11","12"],ans:1,diff:"easy"},
    {q:"Which fraction represents a half?",opts:["1/4","1/3","1/2","3/4"],ans:2,diff:"easy"},
    {q:"Which fraction is the largest?",opts:["1/4","2/4","3/4","1/8"],ans:2,diff:"medium"},
    {q:"What is the perimeter of a square with a side of 4 cm?",opts:["8 cm","12 cm","16 cm","20 cm"],ans:2,diff:"easy"},
    {q:"Which 2D shape has exactly 3 sides?",opts:["Square","Rectangle","Circle","Triangle"],ans:3,diff:"easy"},
    {q:"1 Kilogram (kg) is equal to how many grams (g)?",opts:["10 g","100 g","1000 g","10000 g"],ans:2,diff:"easy"},
    {q:"How many minutes are there in 2 hours?",opts:["60","90","120","150"],ans:2,diff:"medium"},
    {q:"Add ₹50.00 and ₹25.50.",opts:["₹70.50","₹75.00","₹75.50","₹80.00"],ans:2,diff:"easy"},
    {q:"What is 9999 + 1?",opts:["9990","10000","100000","1000"],ans:1,diff:"medium"},
    {q:"How many days are in a leap year?",opts:["364","365","366","367"],ans:2,diff:"medium"},
    {q:"What do we call a polygon with 5 sides?",opts:["Hexagon","Pentagon","Octagon","Rectangle"],ans:1,diff:"medium"}
  ],
  evs:[
    {q:"What is the process by which plants make their own food?",opts:["Respiration","Digestion","Photosynthesis","Evaporation"],ans:2,diff:"easy"},
    {q:"Which gas do plants absorb from the air to make food?",opts:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],ans:1,diff:"easy"},
    {q:"What do we call an animal that eats both plants and other animals?",opts:["Carnivore","Herbivore","Omnivore","Insectivore"],ans:2,diff:"easy"},
    {q:"Which is the largest sense organ in the human body?",opts:["Eyes","Ears","Tongue","Skin"],ans:3,diff:"easy"},
    {q:"How many bones are there in an adult human body?",opts:["200","206","210","215"],ans:1,diff:"medium"},
    {q:"At what temperature does water start to boil?",opts:["0°C","50°C","90°C","100°C"],ans:3,diff:"easy"},
    {q:"Which is the capital city of India?",opts:["Mumbai","New Delhi","Bengaluru","Kolkata"],ans:1,diff:"easy"},
    {q:"Which is the national animal of India?",opts:["Lion","Elephant","Tiger","Leopard"],ans:2,diff:"easy"},
    {q:"Which animal is known as the 'Ship of the Desert'?",opts:["Horse","Camel","Donkey","Elephant"],ans:1,diff:"easy"},
    {q:"Which Indian festival is known as the Festival of Lights?",opts:["Holi","Diwali","Eid","Christmas"],ans:1,diff:"easy"},
    {q:"Which planet is closest to the Sun?",opts:["Venus","Mars","Earth","Mercury"],ans:3,diff:"medium"},
    {q:"What instrument is used to measure body temperature?",opts:["Barometer","Thermometer","Speedometer","Stethoscope"],ans:1,diff:"easy"},
    {q:"What do we call a house made of solid snow blocks?",opts:["Tent","Caravan","Igloo","Hut"],ans:2,diff:"easy"},
    {q:"What is a baby frog called?",opts:["Cub","Tadpole","Kitten","Puppy"],ans:1,diff:"easy"},
    {q:"What is the primary source of solar energy?",opts:["The Moon","The Wind","The Sun","Water"],ans:2,diff:"easy"}
  ],
  english:[
    {q:"What is the plural form of the word 'Child'?",opts:["Childs","Childrens","Children","Childes"],ans:2,diff:"easy"},
    {q:"Identify the noun in the sentence: 'The blue bird sings.'",opts:["The","blue","bird","sings"],ans:2,diff:"easy"},
    {q:"Identify the adjective in the sentence: 'The blue bird sings.'",opts:["The","blue","bird","sings"],ans:1,diff:"easy"},
    {q:"What is the past tense of the verb 'Go'?",opts:["Goes","Going","Went","Gone"],ans:2,diff:"easy"},
    {q:"Which word is a synonym (similar meaning) for 'Happy'?",opts:["Sad","Angry","Joyful","Tired"],ans:2,diff:"easy"},
    {q:"Which word is an antonym (opposite meaning) for 'Hard'?",opts:["Solid","Soft","Heavy","Rough"],ans:1,diff:"easy"},
    {q:"Fill in the blank: The book is ___ the table.",opts:["on","in","between","through"],ans:0,diff:"easy"},
    {q:"Fill in the blank with the correct article: I saw ___ elephant at the zoo.",opts:["a","an","the","no article needed"],ans:1,diff:"medium"},
    {q:"Identify the pronoun in the sentence: 'She is reading a book.'",opts:["She","is","reading","book"],ans:0,diff:"easy"},
    {q:"Choose the correct conjunction: I like apples ___ bananas.",opts:["but","or","and","because"],ans:2,diff:"easy"},
    {q:"What is the plural form of 'Tooth'?",opts:["Tooths","Teeth","Teeths","Toothes"],ans:1,diff:"easy"},
    {q:"What is the opposite of the word 'Day'?",opts:["Morning","Afternoon","Night","Evening"],ans:2,diff:"easy"},
    {q:"Identify the verb in the sentence: 'The dog barks loudly.'",opts:["The","dog","barks","loudly"],ans:2,diff:"easy"},
    {q:"Which of these words is spelled correctly?",opts:["Recieve","Receive","Receeve","Riceive"],ans:1,diff:"medium"},
    {q:"Complete the sentence: A person who teaches students is called a ___.",opts:["Doctor","Engineer","Teacher","Pilot"],ans:2,diff:"easy"}
  ],
  hindi:[
    {q:"What is the Hindi word for 'Sun'?",opts:["Chaand (चाँद)","Suraj (सूरज)","Taara (तारा)","Baadal (बादल)"],ans:1,diff:"easy"},
    {q:"What is the opposite (Vilom Shabd) of 'Din' (दिन - Day)?",opts:["Subah (सुबह)","Shaam (शाम)","Raat (रात)","Dopahar (दोपहर)"],ans:2,diff:"easy"},
    {q:"What does 'Kitaab' (किताब) mean in English?",opts:["Pen","Bag","School","Book"],ans:3,diff:"easy"},
    {q:"How do you write the number '10' in Hindi words?",opts:["Ek (एक)","Panch (पाँच)","Dus (दस)","Bees (बीस)"],ans:2,diff:"easy"},
    {q:"What is the plural (Bahu Vachan) of 'Ladka' (लड़का - Boy)?",opts:["Ladki (लड़की)","Ladke (लड़के)","Ladko (लड़को)","Ladkapan (लड़कपन)"],ans:1,diff:"medium"},
    {q:"Which of these words represents the color 'Red'?",opts:["Kala (काला)","Peela (पीला)","Laal (लाल)","Hara (हरा)"],ans:2,diff:"easy"},
    {q:"What is the Hindi word for 'Water'?",opts:["Doodh (दूध)","Paani (पानी)","Chai (चाय)","Ras (रस)"],ans:1,diff:"easy"},
    {q:"What does 'Namaste' (नमस्ते) mean?",opts:["Thank you","Sorry","Hello / Greetings","Goodbye"],ans:2,diff:"easy"},
    {q:"What is the feminine gender (Striling) of 'Sher' (शेर - Lion)?",opts:["Sherni (शेरनी)","Bagh (बाघ)","Billi (बिल्ली)","Kutta (कुत्ता)"],ans:0,diff:"medium"},
    {q:"What is the Hindi word for 'Apple'?",opts:["Kela (केला)","Aam (आम)","Seb (सेब)","Angoor (अंगूर)"],ans:2,diff:"easy"},
    {q:"What is the opposite (Vilom Shabd) of 'Bada' (बड़ा - Big)?",opts:["Lamba (लंबा)","Chhota (छोटा)","Mota (मोटा)","Patla (पतला)"],ans:1,diff:"easy"},
    {q:"What does 'Ghar' (घर) mean?",opts:["Market","Hospital","House","Garden"],ans:2,diff:"easy"},
    {q:"Which of these means 'Mother' in Hindi?",opts:["Pita (पिता)","Bhai (भाई)","Maa / Mata (माँ / माता)","Bahen (बहन)"],ans:2,diff:"easy"},
    {q:"How do you say 'Tomorrow' or 'Yesterday' in Hindi?",opts:["Aaj (आज)","Abhi (अभी)","Kab (कब)","Kal (कल)"],ans:3,diff:"medium"},
    {q:"What is the Hindi word for 'Dog'?",opts:["Billi (बिल्ली)","Kutta (कुत्ता)","Ghodaa (घोड़ा)","Hathi (हाथी)"],ans:1,diff:"easy"}
  ],
  kannada:[
    {q:"What is the Kannada word for 'Water'?",opts:["Haalu (ಹಾಲು)","Neeru (ನೀರು)","Benne (ಬೆಣ್ಣೆ)","Anna (ಅನ್ನ)"],ans:1,diff:"easy"},
    {q:"What does the word 'Mane' (ಮನೆ) mean in English?",opts:["School","Market","Temple","House"],ans:3,diff:"easy"},
    {q:"How do you say 'Dog' in Kannada?",opts:["Bekku (ಬೆಕ್ಕು)","Hasu (ಹಸು)","Nayi (ನಾಯಿ)","Kuri (ಕುರಿ)"],ans:2,diff:"easy"},
    {q:"What is the number '5' called in Kannada?",opts:["Ondu (ಒಂದು)","Mooru (ಮೂರು)","Hattu (ಹತ್ತು)","Aidu (ಐದು)"],ans:3,diff:"easy"},
    {q:"What is the Kannada word for the color 'Red'?",opts:["Kempu (ಕೆಂಪು)","Hasiru (ಹಸಿರು)","Hadi (ಹಳದಿ)","Kappu (ಕಪ್ಪು)"],ans:0,diff:"easy"},
    {q:"What does 'Namaskara' (ನಮಸ್ಕಾರ) mean?",opts:["Goodbye","Hello / Greetings","Thank you","Sorry"],ans:1,diff:"easy"},
    {q:"How do you say 'Come here' in Kannada?",opts:["Illi baa (ಇಲ್ಲಿ ಬಾ)","Alli hogi (ಅಲ್ಲಿ ಹೋಗಿ)","Kutko (ಕುತ್ಕೊ)","Nillu (ನಿಲ್ಲು)"],ans:0,diff:"medium"},
    {q:"What is the Kannada word for 'Book'?",opts:["Pustaka (ಪುಸ್ತಕ)","Pen (ಪೆನ್)","Chila (ಚೀಲ)","Kagada (ಕಾಗದ)"],ans:0,diff:"easy"},
    {q:"Which of these means 'Mother' in Kannada?",opts:["Tande (ತಂದೆ)","Ajja (ಅಜ್ಜ)","Amma / Tayi (ಅಮ್ಮ / ತಾಯಿ)","Anna (ಅಣ್ಣ)"],ans:2,diff:"easy"},
    {q:"What does 'Oota' (ಊಟ) refer to?",opts:["Sleep","Meals / Food","Play","Study"],ans:1,diff:"easy"},
    {q:"What is the Kannada word for 'School'?",opts:["Angadi (ಅಂಗಡಿ)","Aaspatre (ಆಸ್ಪತ್ರೆ)","Shaale (ಶಾಲೆ)","Raste (ರಸ್ತೆ)"],ans:2,diff:"easy"},
    {q:"How do you say 'Thank you' in Kannada?",opts:["Shubhashaya (ಶುಭಾಶಯ)","Kshamisbidi (ಕ್ಷಮಿಸಿಬಿಡಿ)","Dhanyavadagalu (ಧನ್ಯವಾದಗಳು)","Sari (ಸರಿ)"],ans:2,diff:"easy"},
    {q:"What is 'Tree' called in Kannada?",opts:["Mara (ಮರ)","Gida (ಗಿಡ)","Hoovu (ಹೂವು)","Hannu (ಹಣ್ಣು)"],ans:0,diff:"easy"},
    {q:"What does the word 'Naale' (ನಾಳೆ) mean?",opts:["Yesterday","Today","Now","Tomorrow"],ans:3,diff:"medium"},
    {q:"How do you ask 'What is your name?' in Kannada?",opts:["Oota aaytha? (ಊಟ ಆಯ್ತಾ?)","Nin hesaru enu? (ನಿನ್ನ ಹೆಸರು ಏನು?)","Hegiddira? (ಹೇಗಿದ್ದೀರಾ?)","Yelli idira? (ಎಲ್ಲಿ ಇದ್ದೀರಾ?)"],ans:1,diff:"medium"}
  ],
  computer:[
    {q:"Which part is known as the 'brain' of the computer?",opts:["Monitor","Keyboard","CPU","Mouse"],ans:2,diff:"easy"},
    {q:"Which of the following is an input device?",opts:["Printer","Monitor","Speaker","Keyboard"],ans:3,diff:"easy"},
    {q:"Which of the following is an output device?",opts:["Mouse","Microphone","Monitor","Scanner"],ans:2,diff:"easy"},
    {q:"What do we call the physical parts of a computer that you can touch?",opts:["Software","Hardware","Data","Programs"],ans:1,diff:"easy"},
    {q:"What do we call the programs and applications that run on a computer?",opts:["Hardware","Software","Monitors","Keyboards"],ans:1,diff:"easy"},
    {q:"Which device is used to click, double-click, and drag items on the screen?",opts:["Keyboard","CPU","Mouse","Printer"],ans:2,diff:"easy"},
    {q:"What is the world's largest network of computers called?",opts:["Intranet","Internet","Webpage","Website"],ans:1,diff:"easy"},
    {q:"Which key is used to erase the character to the left of the cursor?",opts:["Enter","Shift","Spacebar","Backspace"],ans:3,diff:"easy"},
    {q:"Which key do you press to start a new line while typing?",opts:["Enter","Shift","Caps Lock","Alt"],ans:0,diff:"easy"},
    {q:"What does VDU stand for?",opts:["Video Display Unit","Visual Display Unit","Virtual Display Unit","Visual Data Unit"],ans:1,diff:"medium"},
    {q:"What does RAM stand for?",opts:["Read Access Memory","Random Access Memory","Run Access Memory","Real Access Memory"],ans:1,diff:"medium"},
    {q:"What is the short form for World Wide Web?",opts:["WEB","WWW","W3C","WOL"],ans:1,diff:"easy"},
    {q:"Which device is used to get a copy of your document on paper?",opts:["Scanner","Projector","Printer","Monitor"],ans:2,diff:"easy"},
    {q:"To turn on the computer, you first press the ___ button on the CPU cabinet.",opts:["Reset","Power","Volume","Eject"],ans:1,diff:"easy"},
    {q:"Which of these is a web browser used to search the internet?",opts:["MS Word","Paint","Google Chrome","Notepad"],ans:2,diff:"easy"}
  ]
};

const ALL_BADGES = [
  {id:'math_done',    icon:'🔢', name:'Math Magician',    desc:'Complete Maths Quiz',      subjId:'math',     minScore:0},
  {id:'math_ace',     icon:'🧮', name:'Number Ninja',     desc:'Score 80%+ in Maths',      subjId:'math',     minScore:80},
  {id:'evs_done',     icon:'🌿', name:'Eco Warrior',      desc:'Complete EVS Quiz',         subjId:'evs',      minScore:0},
  {id:'evs_ace',      icon:'🦁', name:'Nature Champion',  desc:'Score 80%+ in EVS',         subjId:'evs',      minScore:80},
  {id:'eng_done',     icon:'📚', name:'Grammar Guru',     desc:'Complete English Quiz',     subjId:'english',  minScore:0},
  {id:'eng_ace',      icon:'✏️', name:'Word Wizard',      desc:'Score 80%+ in English',     subjId:'english',  minScore:80},
  {id:'hindi_done',   icon:'🪔', name:'Hindi Hero',       desc:'Complete Hindi Quiz',       subjId:'hindi',    minScore:0},
  {id:'hindi_ace',    icon:'🌸', name:'Hindi Master',     desc:'Score 80%+ in Hindi',       subjId:'hindi',    minScore:80},
  {id:'kan_done',     icon:'🏛️', name:'Kannada Kalavi',   desc:'Complete Kannada Quiz',     subjId:'kannada',  minScore:0},
  {id:'kan_ace',      icon:'💜', name:'Karnataka Star',   desc:'Score 80%+ in Kannada',     subjId:'kannada',  minScore:80},
  {id:'comp_done',    icon:'💻', name:'Tech Whiz',        desc:'Complete Computers Quiz',   subjId:'computer', minScore:0},
  {id:'comp_ace',     icon:'🖥️', name:'Digital Champion', desc:'Score 80%+ in Computers',  subjId:'computer', minScore:80},
  {id:'all_done',     icon:'🏆', name:'Supreme Scholar',  desc:'Complete ALL 6 subjects!',  subjId:null,       minScore:0},
  {id:'perfect',      icon:'⭐', name:'Perfect Legend',   desc:'Score 100% in any subject', subjId:null,       minScore:100}
];

// =====================================================
// STATE
// =====================================================
const S = {
  name:'', totalScore:0, subjectId:null,
  questions:[], qIdx:0, qScore:0, correct:0,
  badges:[], subjScores:{}
};

// =====================================================
// BOOT
// =====================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  syncUI();
  if(id==='screen-badges') renderBadgesWall();
  if(id==='screen-home') updateHomeProgress();
}
function syncUI() {
  const n=S.name||'Explorer', sc=S.totalScore;
  document.querySelectorAll('#header-name').forEach(e=>e.textContent=n);
  document.querySelectorAll('#header-score,#quiz-hdr-score,#bdg-score').forEach(e=>e.textContent=sc);
  document.querySelectorAll('.dyn-score').forEach(e=>e.textContent=sc);
}
function startApp() {
  const inp=document.getElementById('student-name-input');
  const nm=inp.value.trim();
  if(!nm){document.getElementById('name-error').style.display='block';inp.focus();return;}
  document.getElementById('name-error').style.display='none';
  S.name=nm;
  document.getElementById('greeting-name').textContent=nm;
  renderSubjectsGrid();
  syncUI();
  showScreen('screen-home');
  toast(`🦁 Roar! Welcome ${nm}! Your adventure begins NOW!`);
}

// =====================================================
// HOME
// =====================================================
function renderSubjectsGrid() {
  const g=document.getElementById('subjects-grid');
  g.innerHTML=SUBJECTS.map(s=>{
    const done=S.subjScores[s.id]!==undefined;
    const pct=done?S.subjScores[s.id]:null;
    return `<div class="subj-card ${s.cls}${done?' completed':''}" onclick="selectSubject('${s.id}')">
      <span class="sc-done">✅</span>
      <span class="sc-icon">${s.icon}</span>
      <h3>${s.name}</h3>
      <p>${s.subtitle}</p>
      <span class="sc-tag">${done?'✅ Done: '+pct+'%':'Tap to explore!'}</span>
    </div>`;
  }).join('');
}
function updateHomeProgress() {
  const done=Object.keys(S.subjScores).length;
  const pct=Math.round((done/6)*100);
  document.getElementById('home-prog-bar').style.width=pct+'%';
  document.getElementById('home-prog-count').textContent=done+' / 6 subjects';
}

// =====================================================
// SUBJECT → CHOICE
// =====================================================
function selectSubject(id) {
  S.subjectId=id;
  const s=SUBJECTS.find(x=>x.id===id);
  document.getElementById('subj-hero-bg').style.background=HERO_BGSRC[id];
  document.getElementById('hero-icon').textContent=s.icon;
  document.getElementById('hero-name').textContent=s.name;
  document.getElementById('hero-desc').textContent=s.desc;
  showScreen('screen-subject');
}

// =====================================================
// SYLLABUS
// =====================================================
function showSyllabus() {
  const s=SUBJECTS.find(x=>x.id===S.subjectId);
  document.getElementById('syl-title').textContent=s.icon+' '+s.name+' — Complete Grade 4 Syllabus';
  document.getElementById('syl-body').innerHTML=SYLLABUS[S.subjectId].map(ch=>`
    <div class="syllabus-card">
      <h3>${ch.title}</h3>
      <ul>${ch.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
    </div>
  `).join('');
  showScreen('screen-syllabus');
}

// =====================================================
// QUIZ ENGINE
// =====================================================
function startQuiz() {
  S.questions=[...QUESTIONS[S.subjectId]].sort(()=>Math.random()-0.5).slice(0,12);
  S.qIdx=0; S.qScore=0; S.correct=0;
  showScreen('screen-quiz');
  renderQ();
}
function renderQ() {
  const q=S.questions[S.qIdx];
  const tot=S.questions.length;
  document.getElementById('q-progress').style.width=(S.qIdx/tot*100)+'%';
  document.getElementById('q-counter').textContent='Question '+(S.qIdx+1)+' of '+tot;
  document.getElementById('q-live').textContent=S.qScore;
  document.getElementById('quiz-hdr-score').textContent=S.totalScore;
  const db=document.getElementById('q-diff');
  db.textContent=q.diff==='easy'?'Easy ⭐':'Medium 🔥';
  db.className='diff-badge '+(q.diff==='easy'?'diff-easy':'diff-medium');
  document.getElementById('q-text').textContent=q.q;
  const labels=['A','B','C','D'];
  document.getElementById('q-opts').innerHTML=q.opts.map((o,i)=>`
    <button class="opt-btn" onclick="pick(${i})" id="opt${i}">
      <span class="opt-label">${labels[i]}</span>${o}
    </button>`).join('');
  const fb=document.getElementById('q-fb');
  fb.className='feedback-area'; fb.innerHTML='';
  const nb=document.getElementById('next-btn');
  nb.className='next-q-btn';
  nb.textContent=S.qIdx+1<tot?'Next Question →':'🎉 See My Results!';
}
function pick(idx) {
  const q=S.questions[S.qIdx];
  document.querySelectorAll('.opt-btn').forEach(b=>b.disabled=true);
  document.getElementById('opt'+q.ans).classList.add('correct');
  const fb=document.getElementById('q-fb');
  if(idx===q.ans) {
    document.getElementById('opt'+idx).classList.add('correct');
    const pts=q.diff==='easy'?10:15;
    S.qScore+=pts; S.totalScore+=pts; S.correct++;
    document.getElementById('q-live').textContent=S.qScore;
    document.getElementById('quiz-hdr-score').textContent=S.totalScore;
    syncUI();
    fb.innerHTML='🎉 Brilliant! That\'s correct! <strong>+'+pts+' points earned!</strong>';
    fb.className='feedback-area show fb-correct';
  } else {
    document.getElementById('opt'+idx).classList.add('wrong');
    fb.innerHTML='❌ Not quite! The right answer: <strong>'+q.opts[q.ans]+'</strong> — you\'ve got this! 💪';
    fb.className='feedback-area show fb-wrong';
  }
  document.getElementById('next-btn').classList.add('show');
}
function nextQuestion() {
  S.qIdx++;
  if(S.qIdx>=S.questions.length) showResults();
  else renderQ();
}

// =====================================================
// RESULTS
// =====================================================
function showResults() {
  const tot=S.questions.length;
  const pct=Math.round((S.correct/tot)*100);
  S.subjScores[S.subjectId]=pct;
  renderSubjectsGrid();

  const newBadges=[];
  ALL_BADGES.forEach(b=>{
    if(S.badges.includes(b.id)) return;
    if(b.id==='all_done'){
      if(SUBJECTS.every(s=>S.subjScores[s.id]!==undefined)){S.badges.push(b.id);newBadges.push(b);}
    } else if(b.id==='perfect') {
      if(pct===100){S.badges.push(b.id);newBadges.push(b);}
    } else if(b.subjId===S.subjectId && pct>=b.minScore) {
      S.badges.push(b.id);newBadges.push(b);
    }
  });

  const sv=SUBJECTS.find(x=>x.id===S.subjectId);
  let trophy,verdict;
  if(pct===100){trophy='🏆';verdict='⭐ PERFECT SCORE! You\'re a Legend!';}
  else if(pct>=80){trophy='🥇';verdict='🎉 Superstar Performance!';}
  else if(pct>=60){trophy='🥈';verdict='😊 Great Effort! Keep Going!';}
  else if(pct>=40){trophy='🥉';verdict='💪 Good Try! Practice Makes Perfect!';}
  else {trophy='📚';verdict='🌟 Keep Learning! You\'re Getting Better!';}

  document.getElementById('res-trophy').textContent=trophy;
  document.getElementById('res-subj').textContent=S.name+' · '+sv.name+' Quiz';
  document.getElementById('res-pct').textContent=pct+'%';
  document.getElementById('res-verdict').textContent=verdict;
  document.getElementById('rs-correct').textContent=S.correct+'/'+tot;
  document.getElementById('rs-qpts').textContent=S.qScore;
  document.getElementById('rs-total').textContent=S.totalScore;

  const ba=document.getElementById('new-badges-area');
  if(newBadges.length) {
    ba.innerHTML='<div class="nb-title">🏅 New Badges Unlocked!</div><div class="badges-row">'+
      newBadges.map((b,i)=>`<div class="earned-badge-card" style="animation-delay:${i*0.15+0.2}s">
        <div class="eb-icon">${b.icon}</div><div class="eb-name">${b.name}</div>
      </div>`).join('')+'</div>';
    launchConfetti();
  } else ba.innerHTML='';

  showScreen('screen-result');
  if(newBadges.length) setTimeout(()=>toast('🏅 You just earned '+newBadges.length+' new badge'+(newBadges.length>1?'s':'')+'! Amazing!'),700);
}

// =====================================================
// BADGES WALL
// =====================================================
function renderBadgesWall() {
  const earned=S.badges;
  document.getElementById('bdg-earned').textContent=earned.length;
  document.getElementById('bdg-total').textContent=ALL_BADGES.length;
  document.getElementById('bdg-score').textContent=S.totalScore;
  document.getElementById('badges-grid').innerHTML=ALL_BADGES.map(b=>{
    const e=earned.includes(b.id);
    return `<div class="badge-tile ${e?'earned':'locked'}">
      <div class="bt-icon">${b.icon}</div>
      <div class="bt-name">${b.name}</div>
      <div class="bt-desc">${b.desc}</div>
      ${e?'<span class="bt-earned-tag">✅ EARNED!</span>':''}
    </div>`;
  }).join('');
}

// =====================================================
// CONFETTI
// =====================================================
function launchConfetti() {
  const layer=document.getElementById('confetti-layer');
  const cols=['#FF6B6B','#FFD93D','#06D6A0','#4CC9F0','#C77DFF','#FF9F1C','#FF4D6D','#80ED99'];
  for(let i=0;i<100;i++){
    const c=document.createElement('div');
    c.className='cp';
    c.style.cssText=`left:${Math.random()*100}%;background:${cols[Math.floor(Math.random()*cols.length)]};`+
      `animation-delay:${Math.random()*1.8}s;animation-duration:${2.5+Math.random()*2}s;`+
      `width:${7+Math.random()*9}px;height:${7+Math.random()*9}px;`+
      `border-radius:${Math.random()>0.5?'50%':'3px'};`;
    layer.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}

// =====================================================
// TOAST
// =====================================================
function toast(msg,ms=3200) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.style.display='block';
  setTimeout(()=>t.style.display='none',ms);
}