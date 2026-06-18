import products from "./products-data.js";

export default function productsDisplay(){

 products.map((product)=>{
   const productName = product.product_name;

     });

 

 return(`
    <section>
     <div class="container">
      <div class="content">
       <h1>Product name : ${productName}</h1>
       <img class="w-300" src="../images/Laundry basket with Lid.jpg">
      </div>
     </div>
    </section>
  `);


}