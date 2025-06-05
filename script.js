function showSection(sectionId) {
  const sections = document.querySelectorAll("main > section");
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.remove("hidden");
    } else if (section.id !== "") {
      section.classList.add("hidden");
    }
  });
}

function openModal(title, description, imageSrc) {
  const modal = document.getElementById("projectModal");
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  const modalImg = document.getElementById("modalImage");
  if (imageSrc) {
    modalImg.src = imageSrc;
    modalImg.classList.remove("hidden");
  } else {
    modalImg.classList.add("hidden");
  }
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("projectModal").classList.add("hidden");
}

// Optional: Close modal when clicking outside content
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");
  if (!modal.classList.contains("hidden") && !content.contains(e.target)) {
    closeModal();
  }
});
