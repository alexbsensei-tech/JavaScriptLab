document.getElementById("form").addEventListener("submit", function (e) { // Add event listener for form submission
    e.preventDefault(); // Prevent form submission
    const answer = document.querySelector('input[name="answer"]:checked'); // Get the selected answer
    if (!answer) return alert("Please select an answer"); // Validate that an answer is selected
    const answers = JSON.parse(localStorage.getItem("questionAnswers") || "[]"); // Retrieve existing answers or initialize an empty array
    answers[0] = answer.value; // Store the answer for question 1 in the first position of the array
    localStorage.setItem("questionAnswers", JSON.stringify(answers)); // Save updated answers back to localStorage
    window.location.href = "page2.html"; // Redirect to the next question page
});
