const  {mongoose} = require ("../mongooConect")

const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre:String,
    talla: String,
    color: String,
    modelo:String,
    precio:Number,
    store:{
        type:Schema.Types.ObjectId,
        ref:'Tienda'
    }

},{timestamps:true});

const Producto = mongoose.model('Productos',ProductosSchema);
module.exports= {
    Producto
}
