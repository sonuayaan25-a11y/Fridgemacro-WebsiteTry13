// Fridges Macro storefront interactions — no build tools required.
const filterButtons = [...document.querySelectorAll(".filter-tab")];
const productCards = [...document.querySelectorAll(".product-card")];
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const productGrid = document.getElementById("productGrid");
let activeFilter = "all";

function updateProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  productCards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchable = `${card.dataset.search} ${card.innerText}`.toLowerCase();
    const matchesSearch = searchable.includes(query);
    const show = matchesFilter && matchesSearch;
    card.hidden = !show;
    if (show) visible++;
  });
  resultCount.textContent = `${visible} product${visible === 1 ? "" : "s"}`;
  emptyState.hidden = visible !== 0;
  productGrid.hidden = visible === 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    updateProducts();
  });
});
searchInput.addEventListener("input", updateProducts);

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Toggle navigation");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// IMPORTANT: replace all example.com payment URLs and Discord/Roblox placeholders
// in index.html with your own real URLs before launching the website.
updateProducts();
