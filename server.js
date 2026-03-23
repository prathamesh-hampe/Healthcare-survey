const express = require("express");
const fs = require("fs-extra");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const RESP_FILE = "./data/responses.json";
const USER_FILE = "./data/users.json";

// LOGIN
app.post("/api/login", async (req, res) => {
  const { role, username, password } = req.body;

  if (role === "admin" && username === "admin" && password === "admin123")
    return res.json({ success: true, redirect: "admin-dashboard.html" });

  if (role === "user") {
    const users = await fs.readJson(USER_FILE).catch(() => []);
    const user = users.find(u => u.username === username && u.password === password);

    if (user) return res.json({ success: true, redirect: "survey.html" });
  }

  res.json({ success: false });
});

// SIGNUP
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  let users = await fs.readJson(USER_FILE).catch(() => []);

  if (users.find(u => u.username === username)) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ username, password });
  await fs.writeJson(USER_FILE, users);

  res.json({ success: true, message: "Signup successful" });
});

// SURVEY
app.post("/api/survey", async (req, res) => {
  const data = await fs.readJson(RESP_FILE).catch(() => []);
  data.push(req.body);
  await fs.writeJson(RESP_FILE, data);
  res.json({ success: true, message: "Saved!" });
});

// GET RESPONSES
app.get("/api/responses", async (req, res) => {
  const data = await fs.readJson(RESP_FILE).catch(() => []);
  res.json({ success: true, data });
});

app.listen(3000, () => console.log("Server running"));
