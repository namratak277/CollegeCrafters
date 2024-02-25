document.getElementById('change-password-btn').addEventListener('click', function() {
  // Redirect to the change password page
  window.location.href = 'change-password.html';
});

document.getElementById('logout-btn').addEventListener('click', function() {
  // Perform logout operation
  alert('Logged out successfully!');
  // Redirect to the login page
  window.location.href = 'index.html';
});
