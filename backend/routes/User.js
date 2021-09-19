const express=require('express');
const users = require('../Data/Users');
const router = express.Router();


router.get('/filterbyScore',(req,res)=>{
    const result = users.filter(item => item.scores > 85)
    console.log(result);
    res.json({
        status:"Success",
        result:result

    })
})

router.post('/addUser',(req,res)=>{
    console.log(req.body);
    const {name,scores,skills,age}=req.body;
    const found =users.find(item=> item.name === name)

    if(found) {
        res.status(400).json({
            status:"Failed",
            message:"User already exist"
        })
    }else{
        const newUser={
            name,
            scores,
            skills,
            age
        }
        users.push(newUser)
        res.status(200).json({status:"Success",message:"User Added Sucessfully",data:newUser})
    }

})

router.put('/editUser',(req,res)=>{
    const {name,scores,skills,age}=req.body;
    const found =users.find(item=> item.name === name)
    if(found) {
       users.map((item)=>{
           if(item.name=== name){
               item.name=name;
               item.scores=scores;
               item.skills=skills;
               item.age=age;
           }
       })
        res.status(200).json({status:"Success",message:"User Edited Sucessfully",data:users})
    }else{
       
        res.status(400).json({
            status:"Failed",
            message:"User Not Found"
        })
    }
})

router.put('/editSkill',(req,res)=>{
   const {name,skills}=req.body
   const found =users.find(item=> item.name === name)

   if(found){
      users.map((item)=>{
          if(item.name=== name){
              skills.map((skill)=>{
                  const find=item.skills.find(item => item ===skill)
                  if(!find){
                      item.skills.push(skill)
                  }
              })
          }
      })
      res.status(200).json({status:"Success",message:"Skills Added Sucessfully",data:users})
   }else{
    res.status(400).json({
        status:"Failed",
        message:"User Not Found"
    })
   }
})

module.exports = router;