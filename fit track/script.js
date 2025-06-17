// script.js

function signUp() {
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();

  if (!name || !contact) {
    alert("Please fill all fields.");
    return;
  }

  // Save user temporarily in localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('contact', contact);

  // Redirect to next page
  window.location.href = "details.html";
}

function login() {
  // In real apps, check stored user data — here we simulate it
  const name = localStorage.getItem('name');
  const contact = localStorage.getItem('contact');

  if (name && contact) {
    alert("Login successful!");
    window.location.href = "details.html";
  } else {
    alert("No account found. Please sign up first.");
  }
}
