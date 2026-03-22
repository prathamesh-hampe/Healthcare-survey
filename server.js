const express = require("express");
const fs = require("fs-extra");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"));
});

const USERS_FILE = path.join(__dirname,"data","users.json");
const RESP_FILE = path.join(__dirname,"data","responses.json");

app.post("/api/signup", async(req,res)=>{
  const users = await fs.readJson(USERS_FILE).catch(()=>[]);
  users.push(req.body);
  await fs.writeJson(USERS_FILE,users);
  res.json({success:true});
});

app.post("/api/login", async(req,res)=>{
  const {username,password,role}=req.body;

  if(role==="admin" && username==="admin" && password==="admin123")
    return res.json({success:true,redirect:"admin-dashboard.html"});

  const users = await fs.readJson(USERS_FILE).catch(()=>[]);
  const user = users.find(u=>u.username===username && u.password===password);

  if(user) return res.json({success:true,redirect:"survey.html"});

  res.json({success:false});
});

app.post("/api/survey", async(req,res)=>{
  const data = await fs.readJson(RESP_FILE).catch(()=>[]);
  data.push(req.body);
  await fs.writeJson(RESP_FILE,data);
  res.json({success:true,message:"Saved!"});
});

app.get("/api/responses", async(req,res)=>{
  const data = await fs.readJson(RESP_FILE).catch(()=>[]);
  res.json({success:true,data});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log("Server running"));;
