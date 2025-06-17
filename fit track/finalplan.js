const goal = (localStorage.getItem("selectedGoal") || "").toLowerCase().trim();
const planType = localStorage.getItem("planType") || "diet";
const title = document.getElementById("plan-title");
const content = document.getElementById("plan-details");

title.textContent = `${planType === 'diet' ? 'Diet Plan' : 'Workout Plan'} for "${goal.charAt(0).toUpperCase() + goal.slice(1)}"`;

// Only "weight loss" diet is included below — I’ll add the rest if you want.
const plans = {
  
  "weight loss": {
    diet: [
      {
        title: "🥣 Morning (7–8 AM)",
        description: "Warm Water + Lemon or Apple Cider Vinegar",
        calories: "5 kcal",
        protein: "0g"
      },
      {
        title: "🍳 Breakfast (8–9 AM)",
        description: "2 boiled eggs or paneer scramble + 1 multigrain toast or ½ cup oats with chia seeds + 1 fruit",
        calories: "300–350 kcal",
        protein: "20g"
      },
      {
        title: "🍓 Mid-Morning Snack (11 AM)",
        description: "5–6 almonds or walnuts + green tea/black coffee (no sugar)",
        calories: "100 kcal",
        protein: "3g"
      },
      {
        title: "🍛 Lunch (1–2 PM)",
        description: "1 cup brown rice/quinoa or 2 chapatis + dal/chicken/paneer + sabzi + salad",
        calories: "400–500 kcal",
        protein: "25g"
      },
      {
        title: "🏋 Pre-Workout (4–5 PM)",
        description: "1 banana or handful of raisins or black coffee",
        calories: "90 kcal",
        protein: "1g"
      },
      {
        title: "🍽 Post-Workout (6–7 PM)",
        description: "Whey protein shake or Boiled eggs/Sprouts/Tofu",
        calories: "180 kcal",
        protein: "20g"
      },
      {
        title: "🍲 Dinner (7–8 PM)",
        description: "Soup + grilled veggies + 1 chapati + paneer/tofu/lentils",
        calories: "300 kcal",
        protein: "20g"
      },
      {
        title: "🥛 Bedtime (Optional)",
        description: "Warm turmeric milk or chamomile tea",
        calories: "80 kcal",
        protein: "6g"
      }
    ],
     tips: [
      "💧 Drink 3L water/day",
      "⏰ Don’t skip meals or workouts",
      "📏 Track weight and inches weekly"
    ],
    workout: [
      {
        title: "🏃 Cardio Warm-up",
        description: "Jumping jacks or 10-min treadmill run",
        frequency: "Daily, 10 minutes",
        image: "images/cardio_warmup.png",
        video: "https://www.youtube.com/embed/ml6cT4AZdqI"
      },
      {
        title: "🏋 HIIT Circuit",
        description: "Bodyweight squats, burpees, mountain climbers",
        frequency: "3× per week, 3 rounds",
        image: "images/hiit.png",
        video: "https://www.youtube.com/embed/ml6cT4AZdqI"
      },
      {
        title: "🧘 Cool Down",
        description: "Stretching or yoga post workout",
        frequency: "Every session, 10 mins",
        image: "images/stretch.png",
        video: "https://www.youtube.com/embed/v7AYKMP6rOE"
      }
    ]
   
  },

"muscle gain": {
  diet: [
    {
      title: "🥣 Morning (6:30–7 AM)",
      description: "Warm water + soaked almonds (5–6)",
      calories: "50 kcal",
      protein: "2g"
    },
    {
      title: "🍳 Breakfast (8 AM)",
      description: "4 boiled eggs (2 full + 2 whites) + 2 multigrain toasts + banana + peanut butter (1 tbsp)",
      calories: "450–500 kcal",
      protein: "30g"
    },
    {
      title: "🍓 Mid-Morning Snack (11 AM)",
      description: "Greek yogurt (1 cup) + honey + walnuts (4 halves)",
      calories: "200 kcal",
      protein: "10g"
    },
    {
      title: "🍛 Lunch (1 PM)",
      description: "Grilled chicken (150g) or paneer + brown rice/quinoa (1 cup) + salad + dal/sabzi",
      calories: "500–600 kcal",
      protein: "35g"
    },
    {
      title: "🏋 Pre-Workout (4 PM)",
      description: "Banana + black coffee",
      calories: "100 kcal",
      protein: "1g"
    },
    {
      title: "🍽 Post-Workout (6 PM)",
      description: "Whey protein shake with water or milk",
      calories: "150–200 kcal",
      protein: "25g"
    },
    {
      title: "🍲 Dinner (8 PM)",
      description: "Paneer/tofu curry + roti (2) or brown rice + steamed veggies",
      calories: "400 kcal",
      protein: "25g"
    },
    {
      title: "🥛 Bedtime (10 PM)",
      description: "Glass of milk or casein shake",
      calories: "120 kcal",
      protein: "8g"
    }
  ],
  tips: [
    "💪 Eat every 2.5–3 hours",
    "🥩 Prioritize protein in every meal",
    "💧 Stay hydrated and get quality sleep",
    "🧠 Progressive overload + nutrition = muscle gain"
  ],
workout: [
      {
        title: "🏋 Bench Press",
        description: "Flat bench press with barbell",
        frequency: "3 sets × 8–10 reps, 3× per week",
        image: "images/bench_press.png",
        video: "https://www.youtube.com/embed/gRVjAtPip0Y"
      },
      {
        title: "💪 Bicep Curls",
        description: "Standing barbell curls",
        frequency: "3 sets × 12 reps",
        image: "images/bicep_curls.png",
        video: "https://www.youtube.com/embed/kwG2ipFRgfo"
      },
      {
        title: "🏋 Deadlifts",
        description: "Compound lift for strength",
        frequency: "3 sets × 5 reps, 2× per week",
        image: "images/deadlift.png",
        video: "https://www.youtube.com/embed/op9kVnSso6Q"
      }
    ],
    tips: [
      "🍗 Prioritize protein in every meal",
      "💪 Train heavy, progressive overload",
      "💤 Ensure 8 hours sleep for recovery"
    ]


},
"strong legs": {
  diet: [
    {
      title: "🌅 Morning",
      description: "Warm water + honey + lemon",
      calories: "10 kcal",
      protein: "0g"
    },
    {
      title: "🍳 Breakfast",
      description: "Oats + milk + banana + 2 boiled eggs",
      calories: "350 kcal",
      protein: "18g"
    },
    {
      title: "🍓 Mid-Morning Snack",
      description: "Sprouts or chana salad with lemon",
      calories: "150 kcal",
      protein: "10g"
    },
    {
      title: "🍛 Lunch",
      description: "Quinoa/brown rice + dal + sabzi + grilled chicken or tofu",
      calories: "500 kcal",
      protein: "30g"
    },
    {
      title: "🏋 Pre-Workout",
      description: "Banana + coffee or raisins",
      calories: "120 kcal",
      protein: "1g"
    },
    {
      title: "🍽 Post-Workout",
      description: "Protein shake or eggs/paneer + salad",
      calories: "200 kcal",
      protein: "25g"
    },
    {
      title: "🍲 Dinner",
      description: "Chapati + tofu curry + vegetables + soup",
      calories: "350 kcal",
      protein: "20g"
    },
    {
      title: "🥛 Bedtime",
      description: "Low-fat milk or curd",
      calories: "80 kcal",
      protein: "6g"
    }
  ],
  tips: [
    "🦵 Eat a high-carb meal before leg day",
    "💧 Keep electrolytes balanced",
    "🥩 Protein post-leg workout is essential",
    "🍴 Chew slowly, aid digestion"
  ],
workout: [
      {
        title: "🦵 Squats",
        description: "Barbell back squats",
        frequency: "4 sets × 8 reps, 2× per week",
        image: "images/squats.png",
        video: "https://www.youtube.com/embed/UXJrBgI2RxA"
      },
      {
        title: "🏋 Leg Press",
        description: "Weighted leg press machine",
        frequency: "3 sets × 12 reps",
        image: "images/leg_press.png",
        video: "https://www.youtube.com/embed/IZxyjW7MPJQ"
      },
      {
        title: "🦵 Lunges",
        description: "Walking lunges with dumbbells",
        frequency: "3 sets × 10 reps per leg",
        image: "images/lunges.png",
        video: "https://www.youtube.com/embed/QF0BQS2W80k"
      }
    ],
    tips: [
      "🏋 Train legs 2× per week minimum",
      "🍠 Fuel well before and after leg day",
      "📈 Track PRs in squats and leg press"
    ]
 },
"6 pack abs": {
  diet: [
    {
      title: "🌅 Morning",
      description: "Warm lemon water + chia seeds",
      calories: "10 kcal",
      protein: "0g"
    },
    {
      title: "🍳 Breakfast",
      description: "3 boiled egg whites + 1 whole egg + oats with flax seeds + apple",
      calories: "350 kcal",
      protein: "25g"
    },
    {
      title: "🍓 Mid-Morning Snack",
      description: "Cucumber + green tea + almonds (4–5)",
      calories: "100 kcal",
      protein: "3g"
    },
    {
      title: "🍛 Lunch",
      description: "Grilled chicken/paneer + quinoa + salad (lettuce, tomato, bell peppers)",
      calories: "400 kcal",
      protein: "30g"
    },
    {
      title: "🏋 Pre-Workout",
      description: "Half banana or black coffee",
      calories: "60 kcal",
      protein: "1g"
    },
    {
      title: "🍽 Post-Workout",
      description: "Whey protein shake + boiled sprouts",
      calories: "180 kcal",
      protein: "25g"
    },
    {
      title: "🍲 Dinner",
      description: "Clear soup + tofu stir fry + small roti",
      calories: "250 kcal",
      protein: "20g"
    },
    {
      title: "🥛 Bedtime",
      description: "Chamomile tea or turmeric milk",
      calories: "80 kcal",
      protein: "6g"
    }
  ],
  workout: [
    {
      title:"Planks",
      description: "Strengthens your core, improves posture, and reduces belly fat. Maintain a flat back and tight core.",
      frequency: "3 sets, hold 45 seconds",
      image: "images/plank.jpg",
      video: "https://www.youtube.com/embed/pSHjTRCQxIw"
    },
    {
      title: "Russian Twists",
      description: "Targets obliques and improves rotational core strength. Use a medicine ball for added resistance.",
      frequency: "3 sets x 20 reps",
      image: "images/russian_twist.jpg",
      video: "https://www.youtube.com/embed/wkD8rjkodUI"
    },
    {
      title: "Mountain Climbers",
      description: "Burns fat and activates your core and lower abs. Keep your pace steady and knees close to chest.",
      frequency: "3 sets x 30 seconds",
      image: "images/mountain_climbers.jpg",
      video: "https://www.youtube.com/embed/cnyTQDSE884"
    },
    {
      title: "Hanging Leg Raises",
      description: "Isolates the lower abs effectively. Ensure controlled motion and avoid swinging.",
      frequency: "3 sets x 10–12 reps",
      image: "images/hanging_leg_raise.jpg",
      video: "https://www.youtube.com/embed/Q_8No4kN3GE"
    }
  ],
  tips: [
    "⚖️ Maintain calorie deficit with high protein",
    "🚱 Avoid sugar, soda, fried food",
    "📊 Track macronutrients daily",
    "⏰ No late-night eating, dinner before 8 PM"
  ]
},
"big shoulder": {
  diet: [
    {
      title: "🌅 Morning",
      description: "Warm water + soaked raisins",
      calories: "30 kcal",
      protein: "1g"
    },
    {
      title: "🍳 Breakfast",
      description: "4 egg whites + 2 whole eggs + avocado toast + black coffee",
      calories: "400 kcal",
      protein: "28g"
    },
    {
      title: "🍓 Mid-Morning Snack",
      description: "Greek yogurt + berries + almonds",
      calories: "200 kcal",
      protein: "15g"
    },
    {
      title: "🍛 Lunch",
      description: "Grilled chicken breast/paneer + brown rice + broccoli + salad",
      calories: "500 kcal",
      protein: "35g"
    },
    {
      title: "🏋 Pre-Workout",
      description: "Banana or dates + water",
      calories: "100 kcal",
      protein: "1g"
    },
    {
      title: "🍽 Post-Workout",
      description: "Whey protein shake or tofu scramble",
      calories: "180 kcal",
      protein: "25g"
    },
    {
      title: "🍲 Dinner",
      description: "Chapati + lentils + stir-fried veggies",
      calories: "300 kcal",
      protein: "20g"
    },
    {
      title: "🥛 Bedtime",
      description: "Casein protein or milk + turmeric",
      calories: "100 kcal",
      protein: "8g"
    }
  ],
  tips: [
    "🧠 Protein-rich meals after shoulder workouts",
    "🥬 Include Omega-3 (flax, walnuts)",
    "🏋 Focus on form + diet for growth",
    "📅 Stay consistent with meal timing"
  ],
workout: [
    {
      title: "💪 Overhead Press",
      description: "Builds overall shoulder strength and targets the deltoids.",
      frequency: "4 sets x 8 reps",
      image: "images/overhead_press.jpg",
      video: "https://www.youtube.com/embed/qEwKCR5JCog"
    },
    {
      title: "🏋️ Lateral Raises",
      description: "Focuses on the side delts for broader shoulders.",
      frequency: "3 sets x 12 reps",
      image: "images/lateral_raise.jpg",
      video: "https://www.youtube.com/embed/3VcKaXpzqRo"
    },
    {
      title: "🏋️‍♂️ Front Raises",
      description:" Targets the front deltoids for improved definition.",
      frequency: "3 sets x 12 reps",
      image: "images/front_raise.jpg",
      video: "https://www.youtube.com/embed/-t7fuZ0KhDA"
    },
    {
      title: "🤷‍♂️ Barbell Shrugs",
      description: "Isolates the trapezius muscles to build upper shoulder mass and improve posture.",
      frequency: "3 sets x 15 reps",
      image: "images/shrugs.jpg",
      video: "https://www.youtube.com/embed/NFzTWykxC2E"
    }
  ],
tips: [
    "🧠 Protein-rich meals after shoulder workouts",
    "🥬 Include Omega-3 (flax, walnuts)",
    "🏋 Focus on form + diet for growth",
    "📅 Stay consistent with meal timing"
  ]
},
"yoga": {
  diet: [
    {
      title: "🌞 Morning",
      description: "Glass of lukewarm water + honey + lemon",
      calories: "10 kcal",
      protein: "0g"
    },
    {
      title: "🍎 Breakfast",
      description: "Fruit bowl (papaya, banana, apple) + sprouts or 1 small upma/poha",
      calories: "250 kcal",
      protein: "8g"
    },
    {
      title: "☕ Mid-Morning Snack",
      description: "Green tea + handful of almonds",
      calories: "100 kcal",
      protein: "4g"
    },
    {
      title: "🥗 Lunch",
      description: "Vegetable khichdi or chapati + sabzi + salad + curd",
      calories: "400 kcal",
      protein: "18g"
    },
    {
      title: "🍵 Evening",
      description: "Herbal tea + fruit (pear or orange)",
      calories: "100 kcal",
      protein: "2g"
    },
    {
      title: "🍲 Dinner",
      description: "Lentil soup or vegetable stew + small roti or brown rice",
      calories: "300 kcal",
      protein: "15g"
    },
    {
      title: "🌙 Bedtime",
      description: "Warm milk with nutmeg or chamomile tea",
      calories: "80 kcal",
      protein: "6g"
    }
  ],
  tips: [
    "🧘‍♀️ Prefer sattvic, light, plant-based foods",
    "🥗 Avoid overly spicy/oily items",
    "💧 Drink warm water frequently",
    "🌿 Include herbs like tulsi, ginger, turmeric"
  ],
  workout: [
    {
      title: "🌞 Surya Namaskar",
      description: "Full-body warm-up that improves circulation and strength.",
      frequency: "12 rounds daily",
      image: "images/surya_namaskar.jpg",
      video: "https://www.youtube.com/embed/6IUyY9Dyr5w"
    },
    {
      title: "🧘 Pranayama",
      description: "A breathing practice that calms the mind, reduces stress, and enhances lung capacity.",


      frequency: "10 minutes",
      image: "images/pranayama.jpg",
      video: "https://www.youtube.com/embed/I77hh5I69gA"
    },
    {
      title: "🐍 Cobra Pose (Bhujangasana)",
      description: "Opens the chest and stretches abdominal muscles.",
      frequency: "3 reps, hold for 30 seconds",
      image: "images/cobra_pose.jpg",
      video: "https://www.youtube.com/embed/fOdrW7nf9gw"
    },
    {
      title: "🔺 Triangle Pose (Trikonasana)",
      description: "A standing yoga pose that stretches the legs, hips, and spine while improving balance and flexibility.",
      
      frequency: "2 reps per side, hold for 30 sec",
      image: "images/triangle_pose.jpg",
      video: "https://www.youtube.com/embed/upFYlxZHif0"
    }
  ],
tips: [
    "🧘‍♀️ Prefer sattvic, light, plant-based foods",
    "🥗 Avoid overly spicy/oily items",
    "💧 Drink warm water frequently",
    "🌿 Include herbs like tulsi, ginger, turmeric"
  ]
},
"perfect butt": {
  diet: [
    {
      title: "🌅 Morning",
      description: "Warm lemon water + soaked almonds (5–6)",
      calories: "60 kcal",
      protein: "2g"
    },
    {
      title: "🍳 Breakfast",
      description: "Oats + peanut butter + banana + 3 egg whites",
      calories: "400 kcal",
      protein: "20g"
    },
    {
      title: "🥜 Snack",
      description: "Protein bar or handful of mixed nuts",
      calories: "150 kcal",
      protein: "8g"
    },
    {
      title: "🍛 Lunch",
      description: "Grilled salmon/tofu + sweet potatoes + green salad",
      calories: "500 kcal",
      protein: "30g"
    },
    {
      title: "🏋 Pre-Workout",
      description: "1 banana + peanut butter",
      calories: "150 kcal",
      protein: "3g"
    },
    {
      title: "🍽 Post-Workout",
      description: "Whey protein shake + boiled egg",
      calories: "180 kcal",
      protein: "25g"
    },
    {
      title: "🍲 Dinner",
      description: "Stir-fried veggies + roti + paneer/cottage cheese",
      calories: "350 kcal",
      protein: "20g"
    }
  ],
  tips: [
    "🍑 Include complex carbs and protein in every meal",
    "🥬 Eat fiber-rich foods to avoid bloating",
    "💧 Stay hydrated (3L/day)",
    "🧘‍♀️ Post-workout meal is key for muscle recovery"
  ],
workout: [
    {
      title: "🧍 Squats",
      description:" Builds glutes, quads, and hamstrings.",
      frequency: "4 sets x 12 reps",
      image: "images/squats.jpg",
      video: "https://www.youtube.com/embed/aclHkVaku9U"
    },
    {
      title: "🌉 Glute Bridges",
      description: "Isolates and activates the glute muscles.",
      frequency: "3 sets x 15 reps",
      image: "images/glute_bridge.jpg",
      video: "https://www.youtube.com/embed/wPM8icPu6H8"
    },
    {
      title: "🚶‍♀️ Lunges",
      frequency: "3 sets x 10 reps per leg",
      description: "Strengthens glutes and enhances hip flexibility.",
      image: "images/lunges.jpg",
      video: "https://www.youtube.com/embed/QOVaHwm-Q6U"
    },
    {
      title: "🏃 Resistance Band Side Steps",
      description: "Place a resistance band just above your knees or around your ankles. Stand with feet hip-width apart, slightly bend your knees into a half squat, and step side-to-side while keeping tension on the band. This exercise activates and strengthens the glutes, hips, and thighs.",

      frequency: "2 sets x 20 steps",
      image: "images/resistance_band_side_steps.jpg",
      video: "https://www.youtube.com/embed/YD8_YyrvaYA"
    }
  ]
},
"sculpted body": {
  diet: [
    {
      title: "🌅 Morning",
      description: "Warm detox water (ginger + lemon)",
      calories: "5 kcal",
      protein: "0g"
    },
    {
      title: "🍳 Breakfast",
      description: "Oats with seeds + almond milk + berries",
      calories: "350 kcal",
      protein: "15g"
    },
    {
      title: "🥜 Snack",
      description: "Greek yogurt + flax seeds",
      calories: "150 kcal",
      protein: "10g"
    },
    {
      title: "🍛 Lunch",
      description: "Grilled chicken/tofu + quinoa + steamed veggies",
      calories: "450 kcal",
      protein: "30g"
    },
    {
      title: "🍊 Evening",
      description: "Coconut water + fruit bowl",
      calories: "100 kcal",
      protein: "2g"
    },
    {
      title: "🍲 Dinner",
      description: "Light soup + 1 chapati + boiled lentils or paneer",
      calories: "300 kcal",
      protein: "20g"
    }
  ],
  tips: [
    "🥦 Avoid heavy foods at night",
    "🧃 Prefer whole foods over processed",
    "⏰ Maintain meal timings strictly",
    "💤 Get 7–8 hours of sleep"
  ],
workout: [
    {
      title: "🏃 HIIT Training (Bodyweight)",
      description: "Full-body fat-burning cardio movement.",
      frequency: "20 mins, 3x/week",
      image: "images/hiit.jpg",
      video: "https://www.youtube.com/embed/ml6cT4AZdqI"
    },
    {
      title: "💪 Dumbbell Circuit",
      description: "A full-body strength workout using dumbbells, including squats, shoulder presses, lunges, bent-over rows, and bicep curls. Perform each move for 10–12 reps back-to-back with minimal rest between exercises. Great for muscle building and calorie burn.",

      frequency: "Full body x 3 rounds",
      image: "images/dumbbell_circuit.jpg",
       video: "https://www.youtube.com/embed/l9_SoClAO5g"
    },
    {
      title: "🔥 Core & Abs Combo",
      description: "A mix of crunches, leg raises, bicycle kicks, and planks designed to strengthen the core muscles. Focus on form and controlled movement. Ideal for building abdominal definition and stability.",

      frequency: "3x/week",
      image: "images/core_abs.jpg",
      video: "https://www.youtube.com/embed/gMaB-fG4u4g"
    },
    {
      title: "🧘‍♀️ Yoga Stretch (Cooldown)",
      description: "A series of gentle yoga poses like child’s pose, downward dog, and seated forward bends to relax the body and improve flexibility. Helps in reducing muscle soreness and promoting recovery after workouts.",

      frequency: "Daily 10 mins",
      image: "images/stretch.jpg",
      video: "https://www.youtube.com/embed/MvdEGzBPndk"
    }
  ]

},
"postpartum recovery": {
  diet: [
    {
      title: "🌅 Morning",
      description: "Ajwain water + 2 soaked almonds + dry dates",
      calories: "100 kcal",
      protein: "3g"
    },
    {
      title: "🍳 Breakfast",
      description: "Ragi porridge or idli + chutney + milk",
      calories: "350 kcal",
      protein: "15g"
    },
    {
      title: "🍵 Mid-Morning",
      description: "Dry fruit laddoo or herbal tea",
      calories: "150 kcal",
      protein: "4g"
    },
    {
      title: "🍛 Lunch",
      description: "Dal khichdi + ghee + beetroot salad + curd",
      calories: "450 kcal",
      protein: "20g"
    },
    {
      title: "🥛 Evening",
      description: "Turmeric milk + roasted nuts",
      calories: "200 kcal",
      protein: "10g"
    },
    {
      title: "🍲 Dinner",
      description: "Chapati + vegetable curry + lentils",
      calories: "300 kcal",
      protein: "18g"
    }
  ],
  tips: [
    "🤱 Prioritize iron, calcium, and protein-rich foods",
    "⏰ Eat on time and don’t skip meals",
    "🧘‍♀️ Start light foods after delivery, avoid spicy",
    "📞 Always follow up with your doctor"
  ],
 workout: [
    {
      title: "🧎‍♀️ Pelvic Tilts",
      description: "Helps realign the pelvis and relieve back pain.",
      frequency: "2 sets x 10 reps",
      image: "images/pelvic_tilt.jpg",
      video: "https://www.youtube.com/embed/7qgTYFZrGBE"
    },
    {
      title: "🌉 Bridges",
      description: "Rebuilds glute and core strength safely.",
      frequency: "2 sets x 12 reps",
      image: "images/postpartum_bridge.jpg",
      video: "https://www.youtube.com/embed/_leI4qFfPVw"
    },
    {
      title: "🐈‍⬛ Cat-Cow Pose",
      description: "Gentle spine mobilization for flexibility and pain relief.",
      frequency: "2 sets x 10 reps",
      image: "images/cat_cow.jpg",
      video: "https://www.youtube.com/embed/y39PrKY_4JM"
    },
    {
      title: "🚶 Walking",
      description: "A low-impact aerobic exercise that improves cardiovascular health, aids in weight management, and boosts mood. Brisk walking for 30–45 minutes daily helps burn calories, strengthen leg muscles, and enhance endurance.",
      frequency: "20–30 mins daily",
      image: "images/postpartum_walk.jpg",
      video: "https://www.youtube.com/embed/-jRoXcmjVUs"
    }
  ]

},
"big shoulder": {
  diet: [
    {
      title: "🍳 Breakfast (8–9 AM)",
      description: "3 eggs (boiled/scrambled) + 1 multigrain toast + 1 banana",
      calories: "350 kcal",
      protein: "20g"
    },
    {
      title: "🍓 Mid-Morning Snack (11 AM)",
      description: "Handful of almonds + green tea",
      calories: "150 kcal",
      protein: "5g"
    },
    {
      title: "🍛 Lunch (1–2 PM)",
      description: "Grilled chicken (100g) + 1 cup brown rice + mixed veggies + salad",
      calories: "500 kcal",
      protein: "30g"
    },
    {
      title: "🏋 Pre-Workout (4–5 PM)",
      description: "1 apple + black coffee or 1 tbsp peanut butter on toast",
      calories: "150 kcal",
      protein: "4g"
    },
    {
      title: "🍽 Post-Workout (6–7 PM)",
      description: "Whey protein shake or paneer (100g) + 1 boiled egg",
      calories: "200 kcal",
      protein: "25g"
    },
    {
      title: "🍲 Dinner (8 PM)",
      description: "Paneer curry (100g) + 1 chapati + grilled vegetables",
      calories: "400 kcal",
      protein: "22g"
    },
    {
      title: "🥛 Bedtime",
      description: "Warm milk (200ml) with turmeric",
      calories: "120 kcal",
      protein: "6g"
    }
  ],
  tips: [
    "💪 Protein is key: Eat at least 1.5g protein per kg of your body weight",
    "🥦 Add veggies to every meal for fiber and vitamins",
    "🕒 Don’t skip post-workout protein for muscle repair",
    "💤 Sleep 7–8 hrs daily for proper muscle recovery"
  ],
   workout: [
    {
      title: "💪 Overhead Press",
      description: "Builds overall shoulder strength and targets the deltoids.",
      frequency: "4 sets x 8 reps",
      image: "images/overhead_press.jpg",
      video: "https://www.youtube.com/embed/qEwKCR5JCog"
    },
    {
      title: "🏋️ Lateral Raises",
      description: "Focuses on the side delts for broader shoulders.",
      frequency: "3 sets x 12 reps",
      image: "images/lateral_raise.jpg",
      video: "https://www.youtube.com/embed/3VcKaXpzqRo"
    },
    {
      title: "🏋️‍♂️ Front Raises",
      description: "Targets the front deltoids for improved definition.",
      frequency: "3 sets x 12 reps",
      image: "images/front_raise.jpg",
      video: "https://www.youtube.com/embed/-t7fuZ0KhDA"
    },
    {
      title: "🤷‍♂️ Barbell Shrugs",
      description: "Isolates the trapezius muscles to build upper shoulder mass and improve      posture.",
      frequency: "3 sets x 15 reps",
      image: "images/shrugs.jpg",
      video: "https://www.youtube.com/embed/larn3Asl6oM"
    }
  ]


}









  // Add 11 more goals (both male/female variants) here similarly...
};

const plan = plans[goal];

if (plan) {
  let html = "";

  // Diet Plan
  if (planType === "diet" || planType === "combined") {
    html += `<div class="section"><h2>🍽 Diet Plan</h2>`;
    html += plan.diet.map(item => `
      <div class="plan-section">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><strong>Calories:</strong> ${item.calories} | <strong>Protein:</strong> ${item.protein}</p>
      </div>
    `).join("");
    html += `</div>`;
  }

  // Workout Plan
  if (planType === "workout" || planType === "combined") {
    html += `<div class="section"><h2>🏋️ Workout Plan</h2>`;
    html += plan.workout.map(item => `
      <div class="plan-section workout">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><strong>Frequency:</strong> ${item.frequency}</p>
        <div class="media-box">
          <div class="video-container">
            <iframe src="${item.video}" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    `).join("");
    html += `</div>`;
  }

  // Tips Section
  html += `<div class="section tips"><h2>💡 Tips</h2>`;
  html += plan.tips.map(tip => `<p>${tip}</p>`).join("");
  html += `</div>`;

  content.innerHTML = html;
} else {
  content.innerHTML = `<p style="color:red;">❌ No plan found for "${goal}".</p>`;
}
