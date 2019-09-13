//librerías
const express = require ('express');
const bodyparser = require('body-parser');
const cors=require('cors');

//entre llaves tomo directamente nombre de la constante
const {Producto}= require('./Modelos/Productos');
const app=express();

//para que body lea cosas encadenadas
app.use(bodyparser.urlencoded({extended:true}));
//parsea el body
app.use(bodyparser.json());
//Seguridad entre servidores
app.use(cors());

//const PORT = 2000;
const PORT = process.env.PORT || 2000;

app.listen(PORT,() => {
    console.log(`Server inicializado en puerto ${PORT}`)
});
//endpoint de entrada
app.get('/',(request,response)=>{
    response.send({message:"Bienvenido a mi API"})
})


//post para publicar
app.post('/create/Producto',(request,response)=>{
    const {nombre, talla, color, modelo, precio} = request.body;
    //todo el objeto
    const OProducto=request.body

    const newGProducto= Producto({
        nombre,
        talla,
        color,
        modelo,
        precio,
        //Todo el bojeto
        //OProducto
    })
    //Guarda el modelo en la base conectada
    newGProducto.save((err,productoP)=>{
        !err
        ? response.status(201).send(Producto)
        : response.status(400).send(err)
    })

})

app.get('/all/Productos',(req,res)=>{
    Producto.find().exec()
        .then( prod => {
            res.send(prod)  
             console.log(prod)
            } )
        .catch( err => {
            res.send(err) 
            console.log(err)
        })
});



