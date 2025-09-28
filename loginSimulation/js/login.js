// login.js
const users = {
  alex: "secure123",
  sam: "pass456",
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (users[username] && users[username] === password) {
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "profile.html";
  } else {
    alert("Invalid credentials");
  }
});