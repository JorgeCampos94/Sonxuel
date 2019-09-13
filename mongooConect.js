 const mongoose = require('mongoose');
const URL_MONGO = 'mongodb+srv://JorgeCampos:J12345678@cluster0-ftyud.mongodb.net/Sonxuel?retryWrites=true&w=majority'

    mongoose.connect(URL_MONGO,{useNewUrlParser:true},(err)=>{
        if(!err){
    
            console.log('conexión existosa con MongoDB')
        }else{
            console.log(err)
        }
    })

module.exports={
    mongoose  
}
