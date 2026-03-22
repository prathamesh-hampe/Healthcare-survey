async function login(role) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Enter username & password");
    return;
  }

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password, role })
  });

  const data = await res.json();

  if (data.success) {
    window.location.href = data.redirect;
  } else {
    alert("Invalid login!");
  }
}

// survey
const form = document.getElementById("surveyForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      name: name.value,
      email: email.value,
      age: age.value,
      gender: gender.value,
      rating: rating.value,
      q1: q1.value, q2: q2.value, q3: q3.value,
      q4: q4.value, q5: q5.value,
      q6: q6.value, q7: q7.value,
      q8: q8.value, q9: q9.value, q10: q10.value
    };

    const res = await fetch("/api/survey", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    alert(data.message);
    if (data.success) form.reset();
  });
}

// load data
async function loadResults() {
  const tbody = document.querySelector("#resultsTable tbody");
  if (!tbody) return;

  const res = await fetch("/api/responses");
  const data = await res.json();

  data.data.forEach(d => {
    tbody.innerHTML += `<tr>
      <td>${d.name}</td>
      <td>${d.email}</td>
      <td>${d.age}</td>
      <td>${d.gender}</td>
      <td>${d.rating}</td>
      <td>${d.q1}</td><td>${d.q2}</td><td>${d.q3}</td>
      <td>${d.q4}</td><td>${d.q5}</td><td>${d.q6}</td>
      <td>${d.q7}</td><td>${d.q8}</td><td>${d.q9}</td><td>${d.q10}</td>
    </tr>`;
  });
}
loadResults();
