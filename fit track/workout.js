window.onload = function () {
  const gender = localStorage.getItem("userGender");
  const goalDiv = document.getElementById("goal-options");

  let goals = [];

  if (gender === "Male") {
    goals = [
      { name: "Weight Loss", image: "images/weight_loss_male.jpg" },
      { name: "Muscle Gain", image: "images/muscle_gain.jpg" },
      { name: "Strong Legs", image: "images/strong_legs.jpg" },
      { name: "6 Pack Abs", image: "images/abs_male.jpg" },
      { name: "Big Shoulder", image: "images/big_shoulders.jpg" },
      { name: "Yoga", image: "images/yoga_male.jpg" } // ✅ fixed here
    ];
  } else if (gender === "Female") {
    goals = [
      { name: "Weight Loss", image: "images/weight_loss_female.jpg" },
      { name: "Sculpted Body", image: "images/sculpted.jpg" },
      { name: "6 Pack Abs", image: "images/abs_female.jpg" },
      { name: "Postpartum Recovery", image: "images/recovery.jpg" },
      { name: "Perfect Butt", image: "images/perfect_butt.jpg" },
      { name: "Yoga", image: "images/yoga_female.jpg" }
    ];
  } else {
    goalDiv.innerHTML = "<p style='color:red;'>Gender not selected. Please restart.</p>";
    return;
  }

  goals.forEach(goal => {
    const box = document.createElement("div");
    box.classList.add("goal-box");
    box.style.backgroundImage = `url('${goal.image}')`;
    box.innerHTML = `<span>${goal.name}</span>`;
    box.onclick = () => {
      document.querySelectorAll('.goal-box').forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
      localStorage.setItem("selectedGoal", goal.name);
    };
    goalDiv.appendChild(box);
  });
};

function saveGoal() {
  const selected = localStorage.getItem("selectedGoal");
  if (!selected) {
    alert("Please select a goal");
    return;
  }
  window.location.href = "plan.html";
}

