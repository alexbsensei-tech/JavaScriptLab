async function loadMenu() {
  try {
    // When used as a module, import.meta.url points to this JS file.
    const menuUrl = new URL('./menu.json', import.meta.url); // meta.url is module-specific and works with file:// it's needed for local files
    const response = await fetch(menuUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${menuUrl} — ${response.status} ${response.statusText}`); // handle fetch errors
    const data = await response.json();
    const menuElement = document.getElementById('menu');
    if (!menuElement) return;
    menuElement.innerHTML = ''; // clear before append
    data.menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.name; // safer than innerHTML
      a.href = item.url; // safer than innerHTML
      li.appendChild(a);
      menuElement.appendChild(li);
    });
  } catch (error) {
    console.error('Failed to load menu:', error);
    const menuElement = document.getElementById('menu');
    if (menuElement) menuElement.innerHTML = '<li class="text-red-500">Menu failed to load</li>';
  }
}
document.addEventListener('DOMContentLoaded', loadMenu);
