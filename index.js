import express from'express';
import ProductController from './src/controller/product.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';


const server = express();
server.use(ejsLayouts);
server.use(express.urlencoded({extended:true}));

// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views'));



const productController = new ProductController();

server.get('/',productController.getProducts);
server.get('/new',productController.getAddForm);
server.post('/',productController.addProduct);


server.listen(3202,() => {
    console.log('server is running at port 3202')
})