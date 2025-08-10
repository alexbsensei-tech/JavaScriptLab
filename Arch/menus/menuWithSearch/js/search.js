function Search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch"); // Get the search input element
    filter = input.value.toUpperCase(); // Convert the search input to uppercase for case-insensitive comparison
    ul = document.getElementById("myMenu"); // Get the menu list element
    li = ul.getElementsByTagName("li"); // Get all list items within the menu
    // Loop through all list items and hide those that don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0]; // Get the anchor tag within the current list item
            // Check if the anchor tag's text content matches the search query
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = ""; // Show the list item if it matches the search query
            }   
                else {
                    li[i].style.display = "none"; // Hide the list item if it doesn't match the search query
                }
        }
    }