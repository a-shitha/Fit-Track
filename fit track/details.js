// details.js

function saveGender() {
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  // Save gender to localStorage
  localStorage.setItem("userGender", gender.value);

  // Redirect to goals page
  window.location.href = "goals.html";
}
