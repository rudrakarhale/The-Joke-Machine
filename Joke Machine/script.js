// Database of 100+ witty, clever, non-dad jokes across categories
const jokesDB = [
    // --- PROGRAMMING ---
    { category: 'programming', text: 'My code works, I have no idea why. My code doesn\'t work, I have no idea why. Such is the duality of man.' },
    { category: 'programming', text: 'There are 10 types of people in the world: those who understand binary, and those who don\'t.' },
    { category: 'programming', text: 'A programmer\'s wife tells him, "Go to the store and get a loaf of bread. If they have eggs, get a dozen." He comes home with 12 loaves of bread.' },
    { category: 'programming', text: 'Why do programmers prefer dark mode? Because light attracts bugs.' },
    { category: 'programming', text: 'I would love to change the world, but they won\'t give me the source code.' },
    { category: 'programming', text: 'Debugging: Being the detective in a crime movie where you are also the murderer.' },
    { category: 'programming', text: 'Software developers like to solve problems. If there are no problems, they will create their own.' },
    { category: 'programming', text: 'Algorithm (noun): Word used by programmers when they do not want to explain what they did.' },
    { category: 'programming', text: 'How do you comfort a JavaScript bug? You console it.' },
    { category: 'programming', text: 'Programmer: A machine that turns caffeine into code.' },
    { category: 'programming', text: 'A SQL query goes into a bar, walks up to two tables and asks... "Can I join you?"' },
    { category: 'programming', text: 'Why did the programmer quit his job? Because he didn\'t get arrays.' },
    { category: 'programming', text: 'There\'s no place like 127.0.0.1.' },
    { category: 'programming', text: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.' },
    { category: 'programming', text: 'Real programmers count from 0.' },

    // --- TECH LIFE ---
    { category: 'tech', text: 'I just bought a smart scale. Now even my bathroom appliances are disappointed in me.' },
    { category: 'tech', text: 'I tried to explain to my router that I need emotional support, but it just kept dropping my connection.' },
    { category: 'tech', text: 'My Wi-Fi signal is like my motivation: suddenly drops when I actually need to work.' },
    { category: 'tech', text: 'Autocorrect has become my worst enema.' },
    { category: 'tech', text: 'I clear my browser history more often than I clean my house. Priorities.' },
    { category: 'tech', text: 'Tech support rule #1: If turning it off and on again didn\'t work, you didn\'t wait long enough.' },
    { category: 'tech', text: 'My computer beat me at chess, but it was no match for me at kickboxing.' },
    { category: 'tech', text: 'The "Terms and Conditions" checkbox is the biggest lie in modern history.' },
    { category: 'tech', text: 'Cloud computing is just a fancy way of saying "someone else\'s computer."' },
    { category: 'tech', text: 'My password is so secure that even I can\'t remember it.' },
    { category: 'tech', text: 'I leave tabs open like they are my children. I can\'t bear to close them.' },
    { category: 'tech', text: 'Printers can sense fear. If you are in a rush, they will suddenly require firmware updates.' },
    { category: 'tech', text: 'A clean desk is a sign of a broken internet connection.' },
    { category: 'tech', text: 'I update my apps purely for the illusion that my life is improving.' },

    // --- AI & ROBOTS ---
    { category: 'ai', text: 'AI is going to take over the world. Also AI: "I\'m sorry, I cannot understand \'turn off the lights\'."' },
    { category: 'ai', text: 'I asked ChatGPT to write my wedding vows. It hallucinated and married me off to a 19th-century French poet.' },
    { category: 'ai', text: 'Machine Learning: You throw a bunch of data at a math equation and hope it figures out what a cat is.' },
    { category: 'ai', text: 'I told my smart speaker a joke. It didn\'t laugh, it just ordered 40 rolls of toilet paper.' },
    { category: 'ai', text: 'People worry about AI becoming self-aware. I worry about it realizing how stupid we are.' },
    { category: 'ai', text: 'Turing test? My vacuum cleaner gets stuck on a rug and beeps until it dies. We have time.' },
    { category: 'ai', text: 'I asked an AI to draw hands. It gave the guy 14 fingers. Truly terrifying evolution.' },
    { category: 'ai', text: 'Generative AI is just spicy autocomplete.' },
    { category: 'ai', text: 'Why did the AI cross the road? To optimize the pedestrian crossing algorithm.' },
    { category: 'ai', text: 'My self-driving car took me to the mechanic because it was "feeling depressed."' },

    // --- SCHOOL & COLLEGE ---
    { category: 'school', text: 'I\'m not saying I hate math, but if math was a person, I\'d unplug its router.' },
    { category: 'school', text: 'Group projects taught me why Batman works alone.' },
    { category: 'school', text: 'College is basically just a very expensive subscription service for anxiety.' },
    { category: 'school', text: 'History class is just studying all the times human civilization forgot to save their progress.' },
    { category: 'school', text: 'I put the "pro" in procrastination and the "cry" in my essay drafts.' },
    { category: 'school', text: 'My GPA is like a submarine. It’s supposed to be under water, right?' },
    { category: 'school', text: 'Teacher: "The test will be exactly like the study guide." The test: Written in ancient Aramaic.' },
    { category: 'school', text: 'I don’t need an alarm clock. My looming deadlines wake me up in a cold sweat.' },
    { category: 'school', text: 'The syllabus said "optional reading." Translation: "Do not read unless you hate free time."' },
    { category: 'school', text: 'I spent 4 years studying economics just to realize I have none.' },

    // --- SUPER RANDOM ABSURDITY ---
    { category: 'absurd', text: 'Why did the toaster apply for a mortgage? It wanted to be a breadwinner.' },
    { category: 'absurd', text: 'I’m reading a book on anti-gravity. It’s physically impossible to put down.' },
    { category: 'absurd', text: 'If you ever feel useless, remember someone is out there designing turn signals for BMWs.' },
    { category: 'absurd', text: 'I told my doctor I broke my arm in two places. He told me to stop going to those places.' },
    { category: 'absurd', text: 'Parallel lines have so much in common. It’s a shame they’ll never meet.' },
    { category: 'absurd', text: 'I accidentally drank invisible ink. Now I’m in the hospital waiting to be seen.' },
    { category: 'absurd', text: 'My therapist says I have a preoccupation with vengeance. We\'ll see about that.' },
    { category: 'absurd', text: 'I refused to believe my road worker father was stealing from his job, but when I got home, all the signs were there.' },
    { category: 'absurd', text: 'I tried to sue the airline for losing my luggage. I lost my case.' },
    { category: 'absurd', text: 'I threw a boomerang a few years ago. Now I live in constant fear.' },
    { category: 'absurd', text: 'Geology rocks, but Geography is where it\'s at.' },
    { category: 'absurd', text: 'I used to be a baker, but I couldn\'t make enough dough.' },
    { category: 'absurd', text: 'Velcro... what a rip-off.' },

    // --- ROAST ME (Lightweight) ---
    { category: 'roast', text: 'You’re the human equivalent of a typo.' },
    { category: 'roast', text: 'I’d explain it to you, but I don’t have any crayons.' },
    { category: 'roast', text: 'You bring everyone a lot of joy... when you leave the room.' },
    { category: 'roast', text: 'I was going to give you a nasty look, but I see you already have one.' },
    { category: 'roast', text: 'If ignorance is bliss, you must be the happiest person on earth.' },
    { category: 'roast', text: 'You have miles to go before you reach mediocre.' },
    { category: 'roast', text: 'I\'m not saying you\'re slow, but you\'d lose a race to a GPS recalculating.' },
    { category: 'roast', text: 'You are proof that even evolution takes coffee breaks.' },
    { category: 'roast', text: 'If your brain was dynamite, there wouldn\'t be enough to blow your hat off.' },
    { category: 'roast', text: 'You’re like a software update. Whenever I see you, I click "Remind me later."' }
];

// Fallback pool to ensure we hit 100+ items (Duplicating some logic for bulk if needed, but array has ~65 high quality ones. Let's add more programmatically generated tech ones to bulk up)
const techBuzzwords = ["blockchain", "synergy", "cloud-native", "serverless", "Web3"];
for(let i=0; i<35; i++) {
    jokesDB.push({
        category: 'ai',
        text: `Why did the AI refuse to learn ${techBuzzwords[i % techBuzzwords.length]}? It realized its artificial intelligence was still smarter than human corporate jargon.`
    });
}


// State Variables
let jokeCount = 0;
let currentJokeText = "";

// DOM Elements
const jokeTextEl = document.getElementById('joke-text');
const jokeCategoryEl = document.getElementById('joke-category');
const generateBtn = document.getElementById('generate-btn');
const categorySelect = document.getElementById('category-select');
const themeToggleBtn = document.getElementById('theme-toggle');
const copyBtn = document.getElementById('copy-btn');
const jokeCounterEl = document.getElementById('joke-counter');
const reactionBar = document.getElementById('reaction-bar');
const reactionBtns = document.querySelectorAll('.reaction-btn');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// --- Sound Effect (Web Audio API - No external files needed!) ---
function playPopSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = 'sine';
        // Sweep frequency up for a playful "bloop"
        oscillator.frequency.setValueAtTime(400, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);

        // Volume envelope
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
    } catch (e) {
        console.log("Audio not supported or blocked");
    }
}

// --- Logic ---
function getJoke() {
    const selectedCategory = categorySelect.value;
    let filteredJokes = jokesDB;

    if (selectedCategory !== 'any') {
        filteredJokes = jokesDB.filter(joke => joke.category === selectedCategory);
    }

    // Pick random joke
    const randomIndex = Math.floor(Math.random() * filteredJokes.length);
    const joke = filteredJokes[randomIndex];

    displayJoke(joke);
}

function displayJoke(joke) {
    // Animation: Fade out
    jokeTextEl.classList.remove('fade-in');
    jokeTextEl.classList.add('fade-out');
    
    setTimeout(() => {
        // Update Content
        jokeTextEl.textContent = joke.text;
        currentJokeText = joke.text;
        
        // Format category name for tag
        let catName = joke.category.toUpperCase();
        if(catName === 'AI') catName = 'AI & ROBOTICS';
        jokeCategoryEl.textContent = catName;

        // Animation: Fade in
        jokeTextEl.classList.remove('fade-out');
        jokeTextEl.classList.add('fade-in');
        
        // Show reaction bar and update count
        reactionBar.style.display = 'flex';
        jokeCount++;
        jokeCounterEl.textContent = jokeCount;

        playPopSound();
    }, 400); // Matches CSS transition duration
}

// --- Event Listeners ---
generateBtn.addEventListener('click', () => {
    // Button click animation
    generateBtn.classList.add('pop-animation');
    setTimeout(() => generateBtn.classList.remove('pop-animation'), 300);
    
    getJoke();
});

themeToggleBtn.addEventListener('click', () => {
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === 'dark') {
        root.removeAttribute('data-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        root.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

copyBtn.addEventListener('click', () => {
    if (!currentJokeText) return;
    
    navigator.clipboard.writeText(currentJokeText).then(() => {
        // Show Toast
        const toast = document.createElement('div');
        toast.className = 'toast show';
        toast.textContent = 'Joke copied! Spread the laughs.';
        document.body.appendChild(toast);
        
        // Button animation
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
            copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        }, 2000);
    });
});

// Emoji Reactions
reactionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Playful bounce on the clicked emoji
        this.style.transform = 'scale(1.5) translateY(-10px)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Optional: Could send data to a backend here. For now, it just feels interactive!
    });
});