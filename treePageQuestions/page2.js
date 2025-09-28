// page2.js
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const answer = document.querySelector('input[name="answer"]:checked');
  if (!answer) return alert("Please select an answer");

  const answers = JSON.parse(localStorage.getItem("questionAnswers") || "[]");
  answers[1] = answer.value;
  localStorage.setItem("questionAnswers", JSON.stringify(answers));
  window.location.href = "page3.html";
});