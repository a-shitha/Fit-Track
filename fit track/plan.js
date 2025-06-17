// plan.js
function goTo(type) {
  localStorage.setItem("planType", type);
  window.location.href = "finalplan.html"; // Go to detailed plan
}
