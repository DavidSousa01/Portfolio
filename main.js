import './style.css';
import * as THREE from 'three';

// Tailwind Safelist (Ensures these classes are included in the bundle even if only used dynamically):
// bg-primary bg-secondary bg-accent


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
            { type: 'video', content: 'assets/InTempo Trailer.mp4' }
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
            { type: 'video', content: 'assets/SaveStateUI.mp4' }
        ]
    },
    {
        id: 3,
        title: "Nocturne Battlegrounds",
        tags: "Roblox",
        thumbnail: "assets/NocturneBattlegroundsLogo.png",
        colorClass: "text-accent",
        bgClass: "bg-accent/10",
        shortDesc: "A Battlegrounds Free-for-all game where you play as vampires with different abilities.",
        longDesc: "Nocturne Battlegrounds is a 3D combat experience developed in Roblox. Players enter a free-for-all arena as different types of vampires, managing supernatural abilities to unleash devastating attacks. The project emphasized fast-paced movement, hitbox precision, and accurate and appealing visual feedback through custom ParticleEmitters and beams.",
        features: [
            "Vampire-themed Ability System",
            "High-intensity Free-for-all Combat",
            "Custom Roblox VFX and Shaders",
            "Sleek Gothic UI Design"
        ],
        visualColor: "bg-accent/10",
        gallery: [
            { type: 'image', content: 'assets/NocturneBattlegroundsLogo.png' },
            { type: 'video', content: 'assets/NocturneBGClip1.mp4' }
        ]
    },
    {
        id: 4,
        title: "Roblox VFX",
        tags: "Roblox",
        thumbnail: "assets/RobloxLogo.jpg",
        colorClass: "text-accent",
        bgClass: "bg-accent/10",
        shortDesc: "Personal projects I either made for fun and experimenting.",
        longDesc: "A collection of personal VFX projects and experiments created in Roblox Studio. These include various particle systems, beams, trails and environmental effects.",
        features: [
            "Advanced Particle Systems",
            "Custom Shader Development",
            "Environmental VFX Experiments"
        ],
        visualColor: "bg-accent/10",
        gallery: [
            { type: 'video', content: 'assets/Rasengan.mp4' }
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
const galleryPreview = document.getElementById('modal-gallery-preview');

// Mobile Menu Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Fullscreen Viewer Elements
const fullscreenViewer = document.getElementById('fullscreen-viewer');
const fullscreenContent = document.getElementById('fullscreen-content');
const fullscreenClose = document.getElementById('fullscreen-close');

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
                    ? `<img src="${project.thumbnail}" class="w-full h-full object-contain opacity-60 transition-transform duration-700 group-hover:scale-105" alt="${project.title}" loading="lazy">`
                    : `<div class="w-3/4 h-3/4 ${project.visualColor} rounded-full blur-3xl"></div>`
                }
                </div>
                <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 md:opacity-90 transition-all duration-300">
                  <div class="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    <span class="${project.colorClass} font-mono text-[10px] md:text-xs uppercase tracking-wider mb-2 block">${project.tags}</span>
                    <h3 class="text-2xl md:text-3xl font-bold mb-2 text-white leading-tight">${project.title}</h3>
                    <p class="text-gray-400 text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-2 md:line-clamp-none">
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
        contentDiv.innerHTML = `<video src="${slide.content}" class="w-full h-full object-contain" autoplay loop muted playsinline></video>`;
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

    // Update Thumbnails Preview
    if (galleryPreview) {
        galleryPreview.innerHTML = currentProject.gallery.map((item, idx) => {
            const isActive = idx === currentSlideIndex;
            let content = '';

            if (item.type === 'color') {
                content = `<div class="w-full h-full ${item.content} rounded-sm"></div>`;
            } else if (item.type === 'image') {
                content = `<img src="${item.content}" class="w-full h-full object-cover">`;
            } else if (item.type === 'video') {
                // For video, we show a simplified preview or icon
                content = `
                    <div class="w-full h-full bg-black flex items-center justify-center relative">
                        <svg class="w-6 h-6 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                `;
            }

            return `
                <div 
                    onclick="event.stopPropagation(); goToSlide(${idx})"
                    class="flex-shrink-0 w-20 aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 ${isActive ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}"
                >
                    ${content}
                </div>
            `;
        }).join('');
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

// Handle clicking outside the modal content to close
if (modal) {
    modal.addEventListener('click', (e) => {
        // If the click is on the modal container itself or the scroll wrapper, but NOT inside the modal-content
        if (modalContent && !modalContent.contains(e.target)) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!fullscreenViewer.classList.contains('hidden')) {
            closeFullscreen();
        } else {
            closeModal();
        }
    }
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

// Fullscreen Logic
function openFullscreen() {
    if (!currentProject || !currentProject.gallery) return;
    const slide = currentProject.gallery[currentSlideIndex];

    fullscreenContent.innerHTML = '';
    if (slide.type === 'image') {
        const img = document.createElement('img');
        img.src = slide.content;
        img.className = 'max-w-full max-h-full object-contain';
        fullscreenContent.appendChild(img);
    } else if (slide.type === 'video') {
        const video = document.createElement('video');
        video.src = slide.content;
        video.className = 'max-w-full max-h-full';
        video.controls = true;
        video.autoplay = true;
        fullscreenContent.appendChild(video);
    } else {
        return; // Don't open for colors
    }

    fullscreenViewer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    fullscreenViewer.classList.add('hidden');
    fullscreenContent.innerHTML = '';
    // Only restore scroll if main modal is also closed
    if (modal && modal.classList.contains('hidden')) {
        document.body.style.overflow = '';
    }
}

if (carouselVisual) {
    carouselVisual.addEventListener('click', openFullscreen);
}

if (fullscreenClose) {
    fullscreenClose.addEventListener('click', closeFullscreen);
}

if (fullscreenViewer) {
    fullscreenViewer.addEventListener('click', (e) => {
        if (e.target === fullscreenViewer) closeFullscreen();
    });
}

// Mobile Menu Logic
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    if (isOpen) {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
    } else {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        // We don't necessarily want to lock background scroll if it's just a side nav
        // But for consistency with your previous request I'll keep it or let it scroll
    }
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
    });
});

const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (navbar) {
                if (lastScrollY > 50) {
                    navbar.classList.add('shadow-lg', 'bg-void/95', 'backdrop-blur-md');
                } else {
                    navbar.classList.remove('shadow-lg', 'bg-void/95', 'backdrop-blur-md');
                }
            }
            ticking = false;
        });
        ticking = true;
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
        el.classList.add('transition-[opacity,transform]', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
}

// Typewriter Effect
const phrases = ["VFX Artist", "Technical Artist"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

let isTypewriterVisible = true;
const typewriterObserver = new IntersectionObserver((entries) => {
    isTypewriterVisible = entries[0].isIntersecting;
}, { threshold: 0.1 });

function type() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) {
        setTimeout(type, 100);
        return;
    }

    typewriterObserver.observe(typewriterElement);

    if (!isTypewriterVisible) {
        setTimeout(type, 500);
        return;
    }

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

// Hero Light Pillar Effect (Advanced Raymarching Implementation)
function initLightPillar() {
    const container = document.getElementById('light-pillar-container');
    if (!container) return;

    // Configuration from provided spec
    const props = {
        topColor: '#bdebff',
        bottomColor: '#22009e',
        intensity: 0.3,
        rotationSpeed: 0.1,
        interactive: false,
        glowAmount: 0.002,
        pillarWidth: 5.3,
        pillarHeight: 0.6,
        noiseIntensity: 0.5,
        pillarRotation: 91,
        mixBlendMode: 'screen',
        quality: 'high'
    };

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: props.quality === 'high' ? 'high-performance' : 'low-power',
        stencil: false,
        depth: false
    });

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEndDevice = isMobile || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

    let effectiveQuality = props.quality;
    if (isLowEndDevice && props.quality === 'high') effectiveQuality = 'medium';
    if (isMobile && props.quality !== 'low') effectiveQuality = 'low';

    const qualitySettings = {
        low: { iterations: 24, waveIterations: 1, pixelRatio: 0.5, precision: 'mediump', stepMultiplier: 1.5 },
        medium: { iterations: 40, waveIterations: 2, pixelRatio: 0.65, precision: 'mediump', stepMultiplier: 1.2 },
        high: {
            iterations: 80,
            waveIterations: 4,
            pixelRatio: Math.min(window.devicePixelRatio, 2),
            precision: 'highp',
            stepMultiplier: 1.0
        }
    };

    const settings = qualitySettings[effectiveQuality] || qualitySettings.medium;

    renderer.setPixelRatio(settings.pixelRatio);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.mixBlendMode = props.mixBlendMode;
    container.appendChild(renderer.domElement);

    const parseColor = hex => {
        const color = new THREE.Color(hex);
        return new THREE.Vector3(color.r, color.g, color.b);
    };

    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        precision ${settings.precision} float;

        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform float uIntensity;
        uniform bool uInteractive;
        uniform float uGlowAmount;
        uniform float uPillarWidth;
        uniform float uPillarHeight;
        uniform float uNoiseIntensity;
        uniform float uRotCos;
        uniform float uRotSin;
        uniform float uPillarRotCos;
        uniform float uPillarRotSin;
        uniform float uWaveSin;
        uniform float uWaveCos;
        varying vec2 vUv;

        const float STEP_MULT = ${settings.stepMultiplier.toFixed(1)};
        const int MAX_ITER = ${settings.iterations};
        const int WAVE_ITER = ${settings.waveIterations};

        void main() {
            vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
            uv = vec2(uPillarRotCos * uv.x - uPillarRotSin * uv.y, uPillarRotSin * uv.x + uPillarRotCos * uv.y);

            vec3 ro = vec3(0.0, 0.0, -10.0);
            vec3 rd = normalize(vec3(uv, 1.0));

            float rotC = uRotCos;
            float rotS = uRotSin;
            
            vec3 col = vec3(0.0);
            float t = 0.1;
            
            for(int i = 0; i < MAX_ITER; i++) {
                vec3 p = ro + rd * t;
                p.xz = vec2(rotC * p.x - rotS * p.z, rotS * p.x + rotC * p.z);

                vec3 q = p;
                q.y = p.y * uPillarHeight + uTime;
                
                float freq = 1.0;
                float amp = 1.0;
                for(int j = 0; j < WAVE_ITER; j++) {
                    q.xz = vec2(uWaveCos * q.x - uWaveSin * q.z, uWaveSin * q.x + uWaveCos * q.z);
                    q += cos(q.zxy * freq - uTime * float(j) * 2.0) * amp;
                    freq *= 2.0;
                    amp *= 0.5;
                }
                
                float d = length(cos(q.xz)) - 0.2;
                float bound = length(p.xz) - uPillarWidth;
                float k = 4.0;
                float h = max(k - abs(d - bound), 0.0);
                d = max(d, bound) + h * h * 0.0625 / k;
                d = abs(d) * 0.15 + 0.01;

                float grad = clamp((15.0 - p.y) / 30.0, 0.0, 1.0);
                col += mix(uBottomColor, uTopColor, grad) / d;

                t += d * STEP_MULT;
                if(t > 50.0) break;
            }

            float widthNorm = uPillarWidth / 3.0;
            col = tanh(col * uGlowAmount / widthNorm);
            
            col -= fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) / 15.0 * uNoiseIntensity;
            
            gl_FragColor = vec4(col * uIntensity, 1.0);
        }
    `;

    const pillarRotRad = (props.pillarRotation * Math.PI) / 180;
    const waveSin = Math.sin(0.4);
    const waveCos = Math.cos(0.4);

    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uTopColor: { value: parseColor(props.topColor) },
            uBottomColor: { value: parseColor(props.bottomColor) },
            uIntensity: { value: props.intensity },
            uInteractive: { value: props.interactive },
            uGlowAmount: { value: props.glowAmount },
            uPillarWidth: { value: props.pillarWidth },
            uPillarHeight: { value: props.pillarHeight },
            uNoiseIntensity: { value: props.noiseIntensity },
            uRotCos: { value: 1.0 },
            uRotSin: { value: 0.0 },
            uPillarRotCos: { value: Math.cos(pillarRotRad) },
            uPillarRotSin: { value: Math.sin(pillarRotRad) },
            uWaveSin: { value: waveSin },
            uWaveCos: { value: waveCos }
        },
        transparent: true,
        depthWrite: false,
        depthTest: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function onWindowResize() {
        if (!container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        material.uniforms.uResolution.value.set(width, height);
    }

    let time = 0;
    let lastTime = performance.now();
    const targetFPS = effectiveQuality === 'low' ? 30 : 60;
    const frameTime = 1000 / targetFPS;

    let isPillarVisible = true;
    const pillarObserver = new IntersectionObserver((entries) => {
        isPillarVisible = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    pillarObserver.observe(container);

    function animate(currentTime) {
        requestAnimationFrame(animate);

        if (!isPillarVisible) return;

        const deltaTime = currentTime - lastTime;
        if (deltaTime >= frameTime) {
            time += 0.016 * props.rotationSpeed;
            material.uniforms.uTime.value = time;
            material.uniforms.uRotCos.value = Math.cos(time * 0.3);
            material.uniforms.uRotSin.value = Math.sin(time * 0.3);
            renderer.render(scene, camera);
            lastTime = currentTime - (deltaTime % frameTime);
        }
    }

    window.addEventListener('resize', onWindowResize, { passive: true });
    onWindowResize();
    requestAnimationFrame(animate);
}

// Initial Render
renderProjects();
type();
initLightPillar();

console.log('Portfolio initialized');
