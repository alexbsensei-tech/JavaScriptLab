function generateMenu() {
    const menu = document.getElementById("headerContent"); // ID должен совпадать с тем что в HTML
    menu.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-blue-600">My Website</h1>
        <ul class="flex space-x-6">
          <li><a href="#" class="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#" class="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="#" class="text-gray-700 hover:text-blue-500">Contact</a></li>
          <button onclick="loginMessage()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Log In</button>
        </ul>
      </div>
  `;
};

// Styled modal utilities (uses Tailwind classes — Tailwind is already loaded in your page)
function escapeHtml(str) { // Simple HTML escape to prevent XSS
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showModal(title = "Notice", message = "", options = { html: false }) {
    // Remove any existing modal
    const existing = document.getElementById("customModal");
    if (existing) existing.remove(); // Ensure only one modal at a time

    // Create modal elements
    const modal = document.createElement("div");
    modal.id = "customModal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center";

    modal.innerHTML = `
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-white rounded-lg shadow-lg z-10 max-w-lg w-full mx-4 overflow-hidden">
        <div class="px-6 py-4 border-b flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">${escapeHtml(title)}</h3>
          <button id="modalClose" class="text-gray-500 hover:text-gray-800 text-2xl leading-none">&times;</button>
        </div>
        <div class="px-6 py-6 text-sm text-gray-700">${options.html ? message : escapeHtml(message)}</div>
        <div class="px-6 py-4 flex justify-end space-x-2 border-t">
          <button id="modalOk" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalOk").addEventListener("click", closeModal);

    function closeModal() {
        const el = document.getElementById("customModal");
        if (el) el.remove();
    }
}

// Replace simple alerts with styled modal
function loginMessage() {
    // If you want to pass raw HTML (e.g. "<h1>..."), set html: true.
    showModal("Login", "<div class='text-lg font-medium'>Login button clicked!</div>", { html: true });
}

function getStarted() {
    showModal("Get Started", "Get Started button clicked!");
}