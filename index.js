const mongoose = require('mongoose');
const User = require('./models/User');
const express = require('express');

const app = express();


app.get('/:nick',(req,res)=>{
    User.findOne({"nick":req.params.nick}).then(function(userFinded){
        res.send(userFinded);


        /*userFinded.pass = 'abcabc';
        userFinded.perro = 'Jony';
        
        userFinded.save().then(function(userUpdated){
            console.log("|||||||||||||||||||||||");
            console.log(userUpdated);
            console.log("|||||||||||||||||||||||");
            res.send(userFinded);
        })*/
    });
})

app.get('/buscar/:id',(req,res)=>{
    User.find({"_id":req.params.id}).then(function(userFinded){
        res.send(userFinded);


        /*userFinded.pass = 'abcabc';
        userFinded.perro = 'Jony';
        
        userFinded.save().then(function(userUpdated){
            console.log("|||||||||||||||||||||||");
            console.log(userUpdated);
            console.log("|||||||||||||||||||||||");
            res.send(userFinded);
        })*/
    });
})



mongoose.connect('mongodb+srv://root:toor@cluster0.ucpao.mongodb.net/users_admin?retryWrites=true&w=majority', function(err){
    if(err){
        console.log("ALGO SALIO MAL AL ESTABLECER LA CONEXION");
    }else{
        
        /*
        
        let pancho = new User({
            "nick":"FYbarra",
            "legajo":4321,
            "email":"fybarra_2020_aguante_bokita@gmail.com",
            "pass":"0987654321"
        })

        pancho.save().then(function(userCreated){
            console.log("*************")
            console.log(userCreated);
            console.log("*************")
        })




        console.log("-------------")
        console.log(pancho)
        console.log("-------------")
        */

      
        app.listen('4200',(err)=>{
            console.log("Server Up & Running")
        })



        console.log("Conexion Satisfactoria");
    }
});

//console.log("Hola desde index.js");