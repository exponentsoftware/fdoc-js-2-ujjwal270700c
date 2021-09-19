const express=require('express');
const app=express();

const port =process.env.PORT || 5000

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.use('/user',require('./routes/User'))

app.listen(port,()=>{
    console.log(`server running at port no:${port}`);
})