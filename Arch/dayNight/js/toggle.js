const body = document.body; // Get the body element
const button = document.getElementById("themeButton"); // Get the button element with the ID "themeButton"
const text = document.getElementById("text"); // Get the text element with the ID "text"

// Add an event listener to the button for the "click" event
button.addEventListener("click", () => {
  // Check if the body element has the class "night"
  if (body.classList.contains("night")) {
    body.classList.remove("night"); // Remove the "night" class from the body element
    button.textContent = "Toggle Day/Night"; // Change the button text to "Toggle Day/Night"
    button.style.color = ""; // Change the button text color to black
  } 
  else {
    body.classList.add("night"); // Add the "night" class to the body element
    button.textContent = "Back to Day Mode"; // Change the button text to "Back to Day Mode"
    button.style.color = "black"; // Change the button text color to white
  }
});

// Add an event listener to the document for the "DOMContentLoaded" event
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style"); // Create a new <style> element
  style.textContent = `
    body.night {
      background-color: black; 
      color: white; 
    }
  `; 
  // Define the CSS styles for the "night" class
  document.head.appendChild(style); // Append the <style> element to the <head> of the document
});