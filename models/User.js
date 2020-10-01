/*CRUD

Create
Read
Update
Delete


*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nick:String,
    legajo:Number,
    email:String,
    pass:String,
    perro:String
});

//PAra exportar, para poder usarlo en otro archivo. 
//Si no hago esto, No podria acceder al modelo desde el index.js!!!
// PEro todavia faltaria IMPORTARLO en el index.js. :) 
module.exports = mongoose.model('User',userSchema);