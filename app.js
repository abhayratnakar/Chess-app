const express = require("express");
const path = require("path");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "W";

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,"public")));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
});

server.listen(3000, function(){
    console.log("listening on port 3000");
});

