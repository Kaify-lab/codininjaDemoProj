export default class ProductModel{
    constructor(id ,name, desc, price, imageURL){
        this.id = id
        this.name = name
        this.desc =desc
        this.price = price
        this.imageURL = imageURL
    }

    static getAll(){
        return products;
    }

   static add(obj){
    let newproduct = new ProductModel(
      products.id = products.length + 1,
      obj.name,
      obj.desc,
      obj.price,
      obj.imageURL
    ) ;
    products.push(newproduct);
   }
    
    

    static getById(id){
        return products.find((p) => p.id ==id);
    }
}

var products = [
  new ProductModel(
    1,
    'Product 1',
    'Description for Product 10',
    19.99,
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
  ),
  new ProductModel(
    2,
    'Product 2',
    'Description for Product 2',
    29.99,
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
  ),
  new ProductModel(
    3,
    'Product 3',
    'Description for Product 3',
    39.99,
    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
  ),
];
  