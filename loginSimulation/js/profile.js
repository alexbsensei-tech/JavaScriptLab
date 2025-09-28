// profile.js
const user = sessionStorage.getItem("loggedInUser");
if (!user) {
  window.location.href = "index.html"; // redirect to login
} else {
  document.body.innerHTML = `<h1>Welcome, ${user}!</h1>`;
}