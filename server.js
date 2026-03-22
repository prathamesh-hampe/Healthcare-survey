const express = require("express");
const fs = require("fs-extra");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"));
});

const FILE = path.join(__dirname,"data","responses.json");

app.post("/api/login",(req,res)=>{
  const {role,username,password} = req.body;

  if(role==="admin" && username==="admin" && password==="admin123")
    return res.json({success:true,redirect:"admin-dashboard.html"});

  if(role==="user")
    return res.json({success:true,redirect:"survey.html"});

  res.json({success:false});
});

app.post("/api/survey", async(req,res)=>{
  const data = await fs.readJson(FILE).catch(()=>[]);
  data.push(req.body);
  await fs.writeJson(FILE,data);
  res.json({success:true,message:"Saved!"});
});

app.get("/api/responses", async(req,res)=>{
  const data = await fs.readJson(FILE).catch(()=>[]);
  res.json({success:true,data});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log("Server running"));
