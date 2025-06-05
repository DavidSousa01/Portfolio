function showSection(sectionId) {
  const sections = document.querySelectorAll("main > section");
  sections.forEach(section => {
    section.classList.toggle("hidden", section.id !== sectionId);
  });
}

function openDetailView({ title, description, image, video, tech }) {
  document.body.classList.add("overflow-hidden"); // ❗ Prevent background scrolling

  document.getElementById("detailTitle").innerText = title;
  document.getElementById("detailDescription").innerText = description;

  const img = document.getElementById("detailImage");
  const vid = document.getElementById("detailVideo");

  if (image) {
    img.src = image;
    img.classList.remove("hidden");
  } else {
    img.classList.add("hidden");
  }

  if (video) {
    vid.src = video;
    vid.classList.remove("hidden");
  } else {
    vid.classList.add("hidden");
  }

  const techContainer = document.getElementById("detailTech");
  techContainer.innerHTML = "";
  if (tech && tech.length) {
    tech.forEach(t => {
      const span = document.createElement("span");
      span.className = "bg-teal-600 px-2 py-1 rounded-full";
      span.innerText = t;
      techContainer.appendChild(span);
    });
  }

  document.getElementById("detailOverlay").classList.remove("hidden");
}

function closeDetailView() {
  document.body.classList.remove("overflow-hidden"); // ❗ Restore background scroll
  document.getElementById("detailOverlay").classList.add("hidden");
}

function handleOverlayClick(event) {
  // Click outside modal content
  closeDetailView();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById("detailOverlay");
    if (!overlay.classList.contains("hidden")) {
      closeDetailView();
    }
  }
});
