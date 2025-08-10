fetch('menu.json')
    .then(response => response.json()) // Parse the JSON file
    .then(data => {
        const menuContainer = document.getElementById('menu'); // Get the menu container element
        const menuItems = data.menuItems; // Access the menu items array

        menuItems.forEach(item => {
            const menuItem = document.createElement('li'); // Create a list item for the menu
            const link = document.createElement('a'); // Create a link for the menu item
            link.textContent = item.name; // Set the text of the link
            link.href = item.link; // Set the href of the link
            menuItem.appendChild(link); // Append the link to the list item

            // Check if the menu item has a submenu
            if (item.submenu && item.submenu.length > 0) {
                const submenu = document.createElement('ul'); // Create a sublist for the submenu
                item.submenu.forEach(subItem => {
                    const subMenuItem = document.createElement('li'); // Create a list item for the submenu
                    const subLink = document.createElement('a'); // Create a link for the submenu item
                    subLink.textContent = subItem.name; // Set the text of the link
                    subLink.href = subItem.link; // Set the href of the link
                    subMenuItem.appendChild(subLink); // Append the link to the submenu item
                    submenu.appendChild(subMenuItem); // Append the submenu item to the sublist
                });
                menuItem.appendChild(submenu); // Append the submenu to the main menu item
            }

            menuContainer.appendChild(menuItem); // Append the menu item to the menu container
        });
    })
    .catch(error => console.error('Error loading menu:', error)); // Handle errors