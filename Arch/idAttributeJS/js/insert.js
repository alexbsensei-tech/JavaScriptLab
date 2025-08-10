// Select the target element where the content will be inserted
let targetElement = document.getElementById('welcome');
// Fetch the external HTML file
fetch('./welcome.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch the HTML file');
        }
        return response.text(); // Parse the file as text
    })
    .then(htmlContent => {
        targetElement.innerHTML = htmlContent; // Insert the fetched content
        
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors
    });
    
    let targetElement2 = document.getElementById('secondwelcome');
    // Fetch the external HTML file
    fetch('./secondWelcome.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch the HTML file');
            }
            return response.text(); // Parse the file as text
        })
        .then(htmlContent => {
            targetElement2.innerHTML = htmlContent; // Insert the fetched
        })
        .catch(error => {
            console.error('Error:', error); // Handle errors
        });




