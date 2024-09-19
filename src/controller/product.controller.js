import ProductModel from "../model/product.model.js";


export default class ProductController {
    getProducts(req,res){
        let products = ProductModel.getAll();
        //console.log(products);
        res.render("products",{products:products});

    }
    getAddForm(req,res){
        return res.render("new-product");
    }

    addProduct(req,res){
        
        console.log(req.body);
       ProductModel.add(req.body);
       let products = ProductModel.getAll();
       return res.render('products',{products});
    }
}