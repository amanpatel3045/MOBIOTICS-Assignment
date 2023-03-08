const express = require('express');
const { default: mongoose } = require('mongoose');
const app=express();
app.use(express.json())
app.listen(5000,()=>{
    try{
mongoose.connect('mongodb+srv://Mobiotics123:Mobiotics123@cluster0.yui8xl9.mongodb.net/?retryWrites=true&w=majority');
console.log('Server is running on 5000')
    }catch(err){
        console.log(err);
    }
})

app.get('/',async(req,res)=>{
    res.send("HOME PAGE");
})

