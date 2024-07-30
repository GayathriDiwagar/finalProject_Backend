const express=require('express');
const app=express();
const mongoose=require('mongoose');
const routerurl=require('./routes/routes'); //router.js
const cors =require('cors');//supporting middleware package

app.use(express.urlencoded({ extended: true }));
app.use(express.json());//middleware
app.use(cors());

app.use("/app",routerurl);

if(mongoose.connect('mongodb+srv://gayueie:Jesus%40123@cluster0.4zzx6mf.mongodb.net/final-db?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log("Database is connected");
    }


app.listen(4005,()=>
    {
        console.log("server is up and running");
    })


    // 1.Create db
    // 2.Create table structure
    // 3.Connect router with the concerned table
    // 4.Connect router in server.js