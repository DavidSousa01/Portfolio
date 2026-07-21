import './style.css';

// Project Data with Technical Spec Sheets
const projects = [
    {
        id: 1,
        title: "InTempo",
        category: "unity-unreal",
        tags: "Unity 2D // VFX & Physics",
        engine: "Unity 2D (URP)",
        role: "Gameplay Physics & VFX Developer",
        tools: ["Unity URP", "C#", "Shader Graph", "Photoshop"],
        thumbnail: "assets/Intempo Logo.png",
        colorClass: "text-primary",
        bgClass: "bg-primary/10",
        shortDesc: "Rhythmic 2D platformer built in Unity where the world mechanics pulse to the music beat.",
        longDesc: "Developed for a university project, InTempo is a 2D rhythm platformer where environmental obstacles and movement mechanics synchronize with audio tracks. I programmed custom character physics (wall-jumping, dashing, double-jumping) and created visual feedback effects for rhythmic world events.",
        features: [
            "Programmed custom responsive 2D player physics",
            "Created rhythmic environment & player action VFX",
            "Designed and assembled rhythmic puzzle levels"
        ],
        visualColor: "bg-primary/10",
        gallery: [
            { type: 'image', content: 'assets/Intempo Logo.png' },
            { type: 'image', content: 'assets/Intempo Game.png' },
            { type: 'video', content: 'assets/InTempo Trailer.mp4' }
        ],
        link: "#"
    },
    {
        id: 2,
        title: "Saved State",
        category: "unity-unreal",
        tags: "Unreal Engine // UI & Systems",
        engine: "Unreal Engine 5",
        role: "UI & Game Systems Developer",
        tools: ["Unreal Engine 5", "Blueprints", "UMG UI", "Photoshop"],
        thumbnail: "assets/SaveState Logo.png",
        colorClass: "text-primary",
        bgClass: "bg-primary/10",
        shortDesc: "Cozy puzzle repair-shop game developed in Unreal Engine 5 using Blueprints.",
        longDesc: "Created during university as a first venture into Unreal Engine. Saved State puts players in the shoes of a tech repair shop owner. I focused on architecting the core interaction systems, UI menus, and object diagnostics workflow using UE5 Blueprints and UMG.",
        features: [
            "Architected complete UMG user interface logic",
            "Implemented object diagnostic & repair workflows",
            "Structured modular interaction systems in Blueprints"
        ],
        visualColor: "bg-primary/10",
        gallery: [
            { type: 'image', content: 'assets/SaveState Logo.png' },
            { type: 'image', content: 'assets/SaveStateGame1.png' },
            { type: 'video', content: 'assets/SaveStateUI.mp4' }
        ],
        link: "#"
    },
    {
        id: 3,
        title: "Nocturne Battlegrounds",
        category: "roblox",
        tags: "Roblox // Combat & Ability VFX",
        engine: "Roblox Studio",
        role: "Lead VFX & Ability Designer",
        tools: ["Roblox Studio", "Luau", "ParticleEmitter", "Beams & Trails", "Blender"],
        thumbnail: "assets/NocturneBattlegroundsLogo.png",
        colorClass: "text-accent",
        bgClass: "bg-accent/10",
        shortDesc: "Fast-paced 3D vampire battlegrounds game featuring high-impact combat ability visual effects.",
        longDesc: "Nocturne Battlegrounds is a supernatural 3D free-for-all arena game. Players wield vampire abilities requiring crisp hitboxes and instant visual feedback. I designed and implemented combat abilities using custom Roblox ParticleEmitters, beams, trails, and custom camera feedback.",
        features: [
            "Vampire-themed ability visual effects system",
            "Frame-accurate impact feedback and hitboxes",
            "Custom particle systems, beams, and dynamic lighting",
            "Stylized gothic UI and visual hierarchy"
        ],
        visualColor: "bg-accent/10",
        gallery: [
            { type: 'image', content: 'assets/NocturneBattlegroundsLogo.png' },
            { type: 'video', content: 'assets/NocturneBGClip1.mp4' }
        ],
        link: "#"
    },
    {
        id: 4,
        title: "Roblox VFX Showcase",
        category: "vfx",
        tags: "Roblox // Real-time VFX",
        engine: "Roblox Studio / Shaders",
        role: "VFX & Technical Artist",
        tools: ["Roblox Studio", "ParticleEmitter", "Beams", "Blender", "After Effects"],
        thumbnail: "assets/RobloxLogo.jpg",
        colorClass: "text-accent",
        bgClass: "bg-accent/10",
        shortDesc: "Personal laboratory of advanced real-time VFX experiments, elemental spells, and shader work.",
        longDesc: "A dedicated collection of real-time particle and shader experiments created in Roblox Studio. Projects include environmental atmospheric fog, elemental energy bursts (Rasengan, Solar Flare), explosion shocks, and stylized magic trails.",
        features: [
            "Advanced particle systems & custom texture sheets",
            "Real-time energy and elemental spell effects",
            "Environmental atmospheric fog and volumetric lighting",
            "Custom mesh distortion and trail behaviors"
        ],
        visualColor: "bg-accent/10",
        gallery: [
            { type: 'video', content: 'assets/Sewer.mp4' },
            { type: 'video', content: 'assets/Rasengan.mp4' },
            { type: 'video', content: 'assets/BOOM.mp4' },
            { type: 'video', content: 'assets/SunBurn.mp4' }
        ],
        link: "#"
    }
];

// Game Jams Data
const gameJams = [
    {
        id: 5,
        title: "Bubble Trouble",
        category: "jams",
        tags: "Godot // Global Game Jam 2025",
        engine: "Godot Engine 4",
        role: "SFX & VFX Designer",
        tools: ["Godot Engine", "GDScript", "8-Bit Audio", "Photoshop"],
        event: "Global Game Jam 2025",
        thumbnail: "assets/BubbleTroubleGame.png",
        shortDesc: "Arcade Beat 'Em Up featuring a bubble combat mechanic, built in 48 hours for GGJ 2025.",
        longDesc: "Built in 48 hours for the Global Game Jam 2025, Bubble Trouble is a 2D pixel arcade Beat 'Em Up. I handled Sound Design and created complementary retro visual effects to enhance combat feedback and impact feel.",
        features: [
            "Custom 8-bit arcade soundtrack & impact SFX",
            "Pixel-art combat visual effects",
            "48-hour rapid game jam workflow"
        ],
        colorClass: "text-primary",
        bgClass: "bg-primary/10",
        visualColor: "bg-primary/20",
        gallery: [
            { type: 'image', content: 'assets/BubbleTroubleGame.png' }
        ],
        link: "#"
    },
    {
        id: 6,
        title: "Esc.",
        category: "jams",
        tags: "Godot // Mad Game Jam 2026",
        engine: "Godot Engine 4",
        role: "VFX / Programmer / SFX",
        tools: ["Godot Engine", "GDScript", "Pattern Recognition", "Sound Design"],
        event: "Mad Game Jam 2026",
        thumbnail: "assets/EscGame.png",
        shortDesc: "Reflex-based arcade game where players draw sigils to escape pursuing enemies.",
        longDesc: "Developed in 48 hours for Mad Game Jam 2026 under the theme 'Escape'. Esc is a fast-paced reflex arcade game where players draw magical sigils to repel enemy waves. I programmed the gesture/pattern recognition code, designed spell VFX, and authored audio assets.",
        features: [
            "Custom gesture & pattern recognition algorithm",
            "Magical sigil drawing particle effects",
            "Animation integration and audio design"
        ],
        colorClass: "text-accent",
        bgClass: "bg-accent/10",
        visualColor: "bg-accent/20",
        gallery: [
            { type: 'image', content: 'assets/EscGame.png' },
            { type: 'image', content: 'assets/Esc1.jpg' },
            { type: 'image', content: 'assets/Esc2.jpg' }
        ],
        link: "https://davidsousa01.itch.io/esc"
    }
];

// All portfolio items combined for filtering
const allPortfolioItems = [...projects, ...gameJams];

// DOM Elements
const projectsContainer = document.getElementById('projects-container');
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

// Active filter state
let currentFilter = 'all';
let currentProject = null;
let currentSlideIndex = 0;

// Render Projects Grid with Filter Support
function renderProjects(filterCategory = 'all') {
    if (!projectsContainer) return;
    
    currentFilter = filterCategory;
    projectsContainer.innerHTML = '';

    const filteredItems = filterCategory === 'all'
        ? allPortfolioItems
        : allPortfolioItems.filter(item => item.category === filterCategory);

    if (filteredItems.length === 0) {
        projectsContainer.innerHTML = `
            <div class="col-span-full py-16 text-center text-gray-500 font-mono text-sm">
                No projects found in this category.
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const article = document.createElement('article');
        article.className = 'group relative aspect-video bg-surface rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-xl';
        article.innerHTML = `
            <div class="absolute inset-0 bg-gradient-to-br from-surface-highlight to-black"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
               ${item.thumbnail
                ? `<img src="${item.thumbnail}" class="w-full h-full object-contain p-4 opacity-70 transition-transform duration-700 group-hover:scale-105" alt="${item.title}" loading="lazy">`
                : `<div class="w-3/4 h-3/4 ${item.visualColor} rounded-full blur-3xl"></div>`
            }
            </div>
            <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 transition-all duration-300">
              <div class="transform translate-y-0 transition-transform duration-300">
                <div class="flex items-center gap-2 mb-2">
                    <span class="${item.colorClass || 'text-primary'} font-mono text-[10px] md:text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                        ${item.tags}
                    </span>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-2 text-white leading-tight font-sans group-hover:text-primary transition-colors">${item.title}</h3>
                <p class="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  ${item.shortDesc}
                </p>
                <div class="mt-4 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ${(item.tools || []).slice(0, 3).map(t => `<span class="text-[10px] font-mono text-gray-400 bg-void/80 px-2 py-0.5 rounded border border-white/10">${t}</span>`).join('')}
                </div>
              </div>
            </div>
        `;
        article.addEventListener('click', () => openModal(item));
        projectsContainer.appendChild(article);
    });

    observeElements();
}

// Category Filter Event Listeners
function initFilterTabs() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-void', 'border-primary');
                b.classList.add('bg-void', 'text-gray-400', 'border-white/10');
            });
            btn.classList.remove('bg-void', 'text-gray-400', 'border-white/10');
            btn.classList.add('bg-primary', 'text-void', 'border-primary');

            const category = btn.getAttribute('data-filter');
            renderProjects(category);
        });
    });
}

// Modal Logic with Technical Spec Sheet Render
function openModal(project) {
    currentProject = project;
    currentSlideIndex = 0;

    // Header Details
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tags').textContent = project.tags;
    document.getElementById('modal-tags').className = `${project.colorClass || 'text-primary'} font-mono text-xs uppercase tracking-wider mb-2 block`;
    document.getElementById('modal-description').textContent = project.longDesc;

    // Tech Spec Sidebar
    const engineEl = document.getElementById('modal-engine');
    if (engineEl) engineEl.textContent = project.engine || 'Real-time Engine';

    const roleEl = document.getElementById('modal-role');
    if (roleEl) roleEl.textContent = project.role || 'VFX / Technical Artist';

    const toolsEl = document.getElementById('modal-tools');
    if (toolsEl) {
        toolsEl.innerHTML = (project.tools || []).map(t => 
            `<span class="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 rounded text-xs font-mono">${t}</span>`
        ).join('');
    }

    // Key Features / Spec Highlights
    const featuresList = document.getElementById('modal-features');
    if (featuresList) {
        featuresList.innerHTML = (project.features || []).map(feat =>
            `<li class="flex items-start gap-2 text-xs md:text-sm text-gray-300 leading-relaxed"><div class="w-1.5 h-1.5 ${project.colorClass ? project.colorClass.replace('text-', 'bg-') : 'bg-primary'} rounded-full mt-1.5 flex-shrink-0"></div><span>${feat}</span></li>`
        ).join('');
    }

    // External Link Button
    const existingLink = document.getElementById('modal-external-link');
    if (existingLink) existingLink.remove();

    if (project.link && project.link !== '#') {
        const linkBtn = document.createElement('a');
        linkBtn.id = 'modal-external-link';
        linkBtn.href = project.link;
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
        linkBtn.className = 'inline-flex items-center gap-2 px-4 py-2 bg-primary text-void rounded-full font-bold text-xs hover:bg-white transition-all';
        linkBtn.innerHTML = `
            <span>Play / View Project</span>
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        `;
        const actionContainer = document.getElementById('modal-actions');
        if (actionContainer) actionContainer.appendChild(linkBtn);
    }

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
        contentDiv.innerHTML = `<img src="${slide.content}" class="w-full h-full object-contain" alt="${currentProject.title}">`;
    } else if (slide.type === 'video') {
        contentDiv.innerHTML = `<video src="${slide.content}" class="w-full h-full object-contain" autoplay loop muted playsinline controls></video>`;
    }

    carouselVisual.appendChild(contentDiv);

    carouselDots.innerHTML = currentProject.gallery.map((_, idx) => `
        <button onclick="goToSlide(${idx})" class="w-2 h-2 rounded-full transition-all ${idx === currentSlideIndex ? 'bg-primary w-5' : 'bg-white/30 hover:bg-white/60'}"></button>
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

    // Thumbnails Preview
    if (galleryPreview) {
        galleryPreview.innerHTML = currentProject.gallery.map((item, idx) => {
            const isActive = idx === currentSlideIndex;
            let content = '';

            if (item.type === 'color') {
                content = `<div class="w-full h-full ${item.content} rounded-sm"></div>`;
            } else if (item.type === 'image') {
                content = `<img src="${item.content}" class="w-full h-full object-cover">`;
            } else if (item.type === 'video') {
                content = `
                    <div class="w-full h-full bg-black flex items-center justify-center relative">
                        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
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
};

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

if (modal) {
    modal.addEventListener('click', (e) => {
        if (modalContent && !modalContent.contains(e.target)) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (fullscreenViewer && !fullscreenViewer.classList.contains('hidden')) {
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

// Fullscreen Viewer Logic
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
        return;
    }

    fullscreenViewer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    fullscreenViewer.classList.add('hidden');
    fullscreenContent.innerHTML = '';
    if (modal && modal.classList.contains('hidden')) {
        document.body.style.overflow = '';
    }
}

if (carouselVisual) carouselVisual.addEventListener('click', openFullscreen);
if (fullscreenClose) fullscreenClose.addEventListener('click', closeFullscreen);
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
    }
}

if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
    });
});

// Scroll Navbar Effect
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

// IntersectionObserver Animation Trigger
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

// Typewriter Effect for Roles
const phrases = ["VFX Artist", "Technical Artist", "QA Tester"];
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
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Ultra-Lightweight Ambient 2D Canvas Background (Replaces Heavy WebGL Raymarching Shader)
function initAmbientParticles() {
    const container = document.getElementById('light-pillar-container');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'w-full h-full absolute inset-0 pointer-events-none opacity-40';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let isVisible = true;

    function resize() {
        width = canvas.width = container.clientWidth;
        height = canvas.height = container.clientHeight;
        createParticles();
    }

    function createParticles() {
        particles = [];
        const count = Math.min(Math.floor((width * height) / 35000), 30);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? '#00d4ff' : '#ff0055',
                alpha: Math.random() * 0.4 + 0.1,
                vx: (Math.random() - 0.5) * 0.3,
                vy: -Math.random() * 0.4 - 0.1
            });
        }
    }

    const heroObserver = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });

    heroObserver.observe(container);

    function animate() {
        if (isVisible) {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.y < 0) {
                    p.y = height + 10;
                    p.x = Math.random() * width;
                }
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.shadowBlur = 12;
                ctx.shadowColor = p.color;
                ctx.fill();
            });
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    initFilterTabs();
    type();
    initAmbientParticles();
});
