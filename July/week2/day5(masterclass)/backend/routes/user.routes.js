const express = require("express");
const { Registration,Login ,GetAllUser} = require("../controllers/user.controller");
const userRoutes = express.Router();
const{isAdmin}=require("../middlewares/isAdmin");


userRoutes.post("/registration", Registration)
userRoutes.post("/login",Login);
userRoutes.get("/",isAdmin,GetAllUser);



module.exports = userRoutes;