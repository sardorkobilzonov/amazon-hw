// / Sidebar functionality
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeSidebar.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});

// Modal functionality
const deliverBtn = document.getElementById("deliver-btn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

deliverBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
