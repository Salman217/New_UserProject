const express = require("express");
const UserRoute = express.Router();


const User = require("../Model/Schema");


UserRoute.route("/create").post(async (req,res) => {
            userData = {
                "UserName" : req.body.Email,
                "Password" : req.body.Password
            }
            User.create(userData, (error,data) => {
                if(error){
                    res.json({Status : "error"})
                }else {
                    res.json({Status : "Data Inserted"})
                }
            } )
                  
    
})

module.exports = UserRoute;








