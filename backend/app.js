const express = require("express");
const app = express();
const placesController = require("./controllers/placesController.js");

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/places", placesController);

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to the Travel App</h1>")
});

app.get("*", (req,res)=>{
    res.status(404).json({error: "Page not found"})
});

module.exports = app;
