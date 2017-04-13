const bcrypt=require("bcrypt");

var password="aslam123!";

bcrypt.genSalt(10,(err,salt)=>{
     bcrypt.hash(password,salt,(err,hash)=>{
         console.log(hash);
     })
});