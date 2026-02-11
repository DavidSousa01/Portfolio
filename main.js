import './style.css';

// Project Data
const projects = [
    {
        id: 1,
        title: "🎵InTempo🎵",
        tags: "Unity",
        thumbnail: "assets/Intempo Logo.png",
        colorClass: "text-primary",
        bgClass: "bg-primary/10",
        shortDesc: "Game made for a University Project. A 2D Platformer with a rhytmatic world system.",
        longDesc: "This game was made for a class in University. It is a 2D Platformer where the world moves to the beat of the music. It was a fun project made by a small group that allowed me to experiment with different game mechanics and features. I was personally in charge of making the basic physics of the character such as wall jumping, wall sliding, double jumping, dashing etc... I also helped with level design, building and applying VFX for the entire game.",
        features: [
            "Programming player physics and mechanics",
            "VFX for player actions and world events",
            "Level designing and building"
        ],
        visualColor: "bg-primary/10",
        gallery: [
            { type: 'image', content: 'assets/Intempo Logo.png' },
            { type: 'image', content: 'assets/Intempo Game.png' },
            { type: 'image', content: 'assets/Intempo Game.png' }
        ]
    },
    {
        id: 2,
        title: "Saved State",
        tags: "Unreal Engine",
        thumbnail: "assets/SaveState Logo.png",
        colorClass: "text-primary",
        bgClass: "bg-primary/10",
        shortDesc: "Game made for a University Project. A Puzzle Comfort game where you are the owner of a repair shop.",
        longDesc: "This game was made for a class in University. First time trying out Unreal Engine and its Blueprints system. Personally I was in charge of programming UI and planning the game systems.",
        features: [
            "Programming UI",
            "Planning game systems"
        ],
        visualColor: "bg-primary/10",
        gallery: [
            { type: 'image', content: 'assets/SaveState Logo.png' },
            { type: 'image', content: 'assets/SaveStateGame1.png' },
            { type: 'image', content: 'assets/Saved State Game.png' }
        ]
    },
    {
        id: 3,
        title: "Nocturne Battlegrounds",
        tags: "Roblox",
        thumbnail: "assets/NocturneBattlegroundsLogo.png",
        colorClass: "text-secondary",
        bgClass: "bg-secondary/10",
        shortDesc: "A Battlegrounds Free-for-all game where you play as vampires with different abilities.",
        longDesc: "Nocturne Battlegrounds is a 3D combat experience developed in Roblox. Players enter a free-for-all arena as different types of vampires, managing supernatural abilities to unleash devastating attacks. The project emphasized fast-paced movement, hitbox precision, and accurate and appealing visual feedback through custom ParticleEmitters and beams.",
        features: [
            "Vampire-themed Ability System",
            "High-intensity Free-for-all Combat",
            "Custom Roblox VFX and Shaders",
            "Sleek Gothic UI Design"
        ],
        visualColor: "bg-secondary/10",
        gallery: [
            { type: 'image', content: 'assets/NocturneBattlegroundsLogo.png' },
            { type: 'image', content: 'assets/NocturneBattlegroundsGame.png' }
        ]
    }
];

// Game Jams Data
const gameJams = [
    {
        title: "Bubble Trouble",
        event: "Global Game Jam 2025",
        role: "SFX / VFX",
        desc: "A pixelated classic Arcade Beat 'Em Up with a unique bubble-based combat system.",
        longDesc: "Built in 48 hours for the Global Game Jam, Bubble Trouble is a 2D Beat 'Em Up game where players fight off enemies using bubbles. This was my first time trying Sound Design with no prior experience. I do have a small background in music so creating an 8bit track and effects for actions was quite entertaining.",
        features: [
            "8bit Arcade Soundtrack",
            "Complenting VFX for visual feedback"
        ],
        tags: ["GODOT", "GDScript"],
        modalTags: "GODOT / GDScript",
        color: "text-primary",
        bgClass: "bg-primary/10",
        visualColor: "bg-primary/20",
        gallery: [
            { type: 'color', content: 'bg-primary/20' },
            { type: 'color', content: 'bg-primary/40' }
        ],
        link: "#"
    }
];

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
const jamsContainer = document.getElementById('jams-container');
const modal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const modalCloseBtn = document.getElementById('modal-close');

// Carousel Elements
const carouselVisual = document.getElementById('modal-visual');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselDots = document.getElementById('carousel-dots');

let currentProject = null;
let currentSlideIndex = 0;

// Render Projects
function renderProjects() {
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const article = document.createElement('article');
            article.className = 'group relative aspect-video bg-surface rounded-2xl overflow-hidden cursor-pointer';
            article.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-br from-surface-highlight to-black"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                   ${project.thumbnail
                    ? `<img src="${project.thumbnail}" class="w-full h-full object-contain opacity-60 transition-transform duration-700 group-hover:scale-105" alt="${project.title}">`
                    : `<div class="w-3/4 h-3/4 ${project.visualColor} rounded-full blur-3xl"></div>`
                }
                </div>
                <div class="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-all duration-300">
                  <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span class="${project.colorClass} font-mono text-xs uppercase tracking-wider mb-2 block">${project.tags}</span>
                    <h3 class="text-3xl font-bold mb-2 text-white">${project.title}</h3>
                    <p class="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      ${project.shortDesc}
                    </p>
                  </div>
                </div>
            `;
            article.addEventListener('click', () => openModal(project));
            projectsContainer.appendChild(article);
        });
    }

    if (jamsContainer) {
        jamsContainer.innerHTML = '';
        gameJams.forEach(jam => {
            const div = document.createElement('div');
            div.className = 'bg-surface/50 border border-white/5 p-6 rounded-xl hover:bg-surface hover:border-white/10 transition-all group cursor-pointer';
            div.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <span class="text-xs font-mono text-gray-500 uppercase tracking-widest">${jam.event}</span>
                    <a href="${jam.link}" class="text-white hover:text-primary transition-colors" onclick="event.stopPropagation()">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">${jam.title}</h3>
                <p class="text-gray-400 text-sm mb-4 leading-relaxed">${jam.desc}</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span class="text-xs font-bold ${jam.color}">${jam.role}</span>
                    <div class="flex gap-2">
                        ${jam.tags.map(tag => `<span class="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            div.addEventListener('click', () => openModal({
                ...jam,
                colorClass: jam.color
            }));
            jamsContainer.appendChild(div);
        });
    }

    observeElements();
}

// Modal Logic
function openModal(project) {
    currentProject = project;
    currentSlideIndex = 0;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tags').textContent = project.modalTags || project.tags;
    document.getElementById('modal-tags').className = `${project.colorClass} font-mono text-xs uppercase tracking-wider mb-3 block`;
    document.getElementById('modal-description').textContent = project.longDesc;

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = project.features.map(feat =>
        `<li class="flex items-center gap-2"><div class="w-1.5 h-1.5 ${project.bgClass.replace('/10', '')} rounded-full"></div>${feat}</li>`
    ).join('');

    updateCarousel();

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    });

    document.body.style.overflow = 'hidden';
}

function updateCarousel() {
    if (!currentProject || !currentProject.gallery) return;

    const slide = currentProject.gallery[currentSlideIndex];
    const totalSlides = currentProject.gallery.length;

    carouselVisual.innerHTML = '';
    const contentDiv = document.createElement('div');
    contentDiv.className = 'w-full h-full flex items-center justify-center';

    if (slide.type === 'color') {
        contentDiv.innerHTML = `<div class="w-3/4 h-3/4 ${slide.content} rounded-full blur-3xl"></div>`;
    } else if (slide.type === 'image') {
        contentDiv.innerHTML = `<img src="${slide.content}" class="w-full h-full object-contain" alt="Project Screenshot">`;
    } else if (slide.type === 'video') {
        contentDiv.innerHTML = `<video src="${slide.content}" class="w-full h-full object-cover" autoplay loop muted playsinline></video>`;
    }

    carouselVisual.appendChild(contentDiv);

    carouselDots.innerHTML = currentProject.gallery.map((_, idx) => `
        <button onclick="goToSlide(${idx})" class="w-2 h-2 rounded-full transition-all ${idx === currentSlideIndex ? 'bg-white w-4' : 'bg-white/30 hover:bg-white/60'}"></button>
    `).join('');

    if (totalSlides > 1) {
        carouselPrev.style.opacity = '1';
        carouselNext.style.opacity = '1';
        carouselPrev.disabled = false;
        carouselNext.disabled = false;
    } else {
        carouselPrev.style.opacity = '0';
        carouselNext.style.opacity = '0';
        carouselPrev.disabled = true;
        carouselNext.disabled = true;
    }
}

function nextSlide() {
    if (!currentProject) return;
    currentSlideIndex = (currentSlideIndex + 1) % currentProject.gallery.length;
    updateCarousel();
}

function prevSlide() {
    if (!currentProject) return;
    currentSlideIndex = (currentSlideIndex - 1 + currentProject.gallery.length) % currentProject.gallery.length;
    updateCarousel();
}

window.goToSlide = function (index) {
    currentSlideIndex = index;
    updateCarousel();
}

function closeModal() {
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        carouselVisual.innerHTML = '';
    }, 300);
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (modal && !modal.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    }
});

if (carouselNext) carouselNext.addEventListener('click', (e) => {
    e.stopPropagation();
    nextSlide();
});

if (carouselPrev) carouselPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    prevSlide();
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-void/95');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-void/95');
        }
    }
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function observeElements() {
    document.querySelectorAll('section h2, section > div > p, article, .glass-panel').forEach((el) => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
}

// Typewriter Effect
const typewriterElement = document.getElementById('typewriter');
const phrases = ["VFX Artist", "Technical Artist"];
let phraseIndex = 0;
let charIndex = phrases[0].length;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        charIndex--;
        typeSpeed = 50;
    } else {
        charIndex++;
        typeSpeed = 150;
    }

    typewriterElement.textContent = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
}

// Initial Render
renderProjects();
type();

console.log('Portfolio initialized');
