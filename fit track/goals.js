// goals.js

function updateValue(id) {
  const value = document.getElementById(id).value;
  document.getElementById(id + 'Val').innerText = value;
}

function saveBodyDetails() {
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  localStorage.setItem("bodyDetails", JSON.stringify({
    age,
    weight,
    height
  }));

  // Redirect to workout goals page
  window.location.href = "workout.html";
}
