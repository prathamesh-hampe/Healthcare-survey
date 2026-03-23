// SIGNUP
async function signup() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  const res = await fetch("/api/signup", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({username, password})
  });

  const data = await res.json();
  alert(data.success ? "Signup success" : data.message);
  if(data.success) window.location.href="index.html";
}

// LOGIN
async function login(role) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/api/login", {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({username,password,role})
  });

  const data = await res.json();
  if(data.success) window.location.href=data.redirect;
  else alert("Login failed");
}

// SUBMIT SURVEY
async function submitSurvey() {
  const survey = {
    name: name.value,
    email: email.value,
    age: age.value,
    gender: gender.value,
    rating: rating.value,
    q1:q1.value,q2:q2.value,q3:q3.value,q4:q4.value,q5:q5.value,
    q6:q6.value,q7:q7.value,q8:q8.value,q9:q9.value,q10:q10.value
  };

  const res = await fetch("/api/survey", {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(survey)
  });

  const data = await res.json();
  alert(data.message);
}

// LOAD ADMIN DATA
window.onload = async () => {
  const table = document.querySelector("#resultsTable tbody");
  if(!table) return;

  const res = await fetch("/api/responses");
  const data = await res.json();

  data.data.forEach(r=>{
    table.innerHTML += `<tr>
    <td>${r.name}</td><td>${r.email}</td><td>${r.age}</td>
    <td>${r.gender}</td><td>${r.rating}</td>
    <td>${r.q1}</td><td>${r.q2}</td><td>${r.q3}</td>
    <td>${r.q4}</td><td>${r.q5}</td>
    <td>${r.q6}</td><td>${r.q7}</td><td>${r.q8}</td>
    <td>${r.q9}</td><td>${r.q10}</td>
    </tr>`;
  });
};
