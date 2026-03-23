const express = require("express");
const fs = require("fs-extra");
const path = require("path");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// FILE PATHS
const USERS = path.join(__dirname, "data", "users.json");
const RESP = path.join(__dirname, "data", "responses.json");

// ENSURE FILES EXIST
fs.ensureFileSync(USERS);
fs.ensureFileSync(RESP);

// HOME ROUTE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// ================= SIGNUP =================
app.post("/api/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.json({ success: false, message: "Fill all fields" });
    }

    const users = await fs.readJson(USERS).catch(() => []);

    // CHECK DUPLICATE USER
    const exists = users.find(u => u.username === username);
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    users.push({ username, password });
    await fs.writeJson(USERS, users);

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: "Signup error" });
  }
});


// ================= LOGIN =================
app.post("/api/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // ADMIN LOGIN
    if (role === "admin") {
      if (username === "admin" && password === "admin123") {
        return res.json({ success: true, redirect: "admin-dashboard.html" });
      } else {
        return res.json({ success: false, message: "Invalid admin credentials" });
      }
    }

    const users = await fs.readJson(USERS).catch(() => []);

    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      return res.json({ success: true, redirect: "survey.html" });
    }

    res.json({ success: false, message: "Invalid username or password" });

  } catch (err) {
    res.json({ success: false, message: "Login error" });
  }
});


// ================= SAVE SURVEY =================
app.post("/api/survey", async (req, res) => {
  try {
    const surveyData = req.body;

    const data = await fs.readJson(RESP).catch(() => []);

    data.push(surveyData);
    await fs.writeJson(RESP, data);

    res.json({ success: true, message: "Survey submitted successfully!" });
  } catch (err) {
    res.json({ success: false, message: "Error saving survey" });
  }
});


// ================= GET RESPONSES =================
app.get("/api/responses", async (req, res) => {
  try {
    const data = await fs.readJson(RESP).catch(() => []);
    res.json({ success: true, data });
  } catch (err) {
    res.json({ success: false, message: "Error fetching data" });
  }
});


// ================= START SERVER =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});T,()=>console.log("Server running"));ORT,()=>console.log("Server running"));le.log("Server running"));;
