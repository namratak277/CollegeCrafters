document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Your login logic here
  // For demonstration purposes, log the username and password to the console
  console.log("Username:", username);
  console.log("Password:", password);

  // Redirect to the home page after successful login
  window.location.href = "home.html";
});
