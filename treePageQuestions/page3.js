// page3.js
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const answer = document.querySelector('input[name="answer"]:checked');
  if (!answer) return alert("Please select an answer");

  const answers = JSON.parse(localStorage.getItem("questionAnswers") || "[]");
  answers[2] = answer.value;
  localStorage.setItem("questionAnswers", JSON.stringify(answers));

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p><strong>Q1:</strong> Do you like JavaScript? → ${answers[0] || "Not answered"}</p>
    <p><strong>Q2:</strong> Do you use TailwindCSS? → ${answers[1] || "Not answered"}</p>
    <p><strong>Q3:</strong> Do you enjoy debugging? → ${answers[2]}</p>
  `;
});