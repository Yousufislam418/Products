import products from "./products-data.js";

export default function productsDisplay(){ 
 return(` 
  <section>
   <div class="container w-100-pr mx-auto" id="product-display"> 
  ${ 
   `<div class="mt-11">
     <h2 class="ml-10 px-20 fs-25 py-5 radius-5 bg-red navy inline">Total Products: ${products.length}</h2>
    </div>`
  +
  products.map((product,index)=>
     `<div class="content m-10 shadow-10 p-10 radius-10">
       <h3 class="p-10 m-3 radius-3">Product no: ${index + 1}</h3>
       <!------------>
       <img class="w-100-pr radius-5" src="${product.image}">
       <!------------>
       <p class="green ml-5 mt-5">Product Name:</p>
       <h3 class="p-10 m-3 radius-3">${product.product_name}</h3>
       <!------------>
       <p class="green ml-5 mt-5">Barcode:</p>
       <h2 class="p-10 m-3 navy radius-3">${product.barcode}</h2>
       <!------------>
       <p class="green ml-5 mt-5">Partner SKU:</p>
       <p class="p-10 m-3 radius-3">${product.partnerSku}</p>
       <!------------>
       <p class="green ml-5 mt-5">SKU:</p>
       <p class="p-10 m-3 radius-3">${product.sku}</p>
       <!------------>
       <p class="green ml-5 mt-5">Product Packing Type:</p>
       <p class="p-10 m-3 radius-3">${product.packing}</p>
       <!------------>
       <p class="green ml-5 mt-5">Color:</p>
       <p class="p-10 m-3 radius-3">${product.color}</p>
       <!------------>
       <p class="green ml-5 mt-5">Product Barcode:</p>
       <p class="p-10 m-3 radius-3">${product.product_barcode}</p>
       <!------------>
       <p class="green ml-5 mt-5">Description:</p>
       <p class="p-10 m-3 radius-3 -1 -green-1">${product.description}</p>
      </div>`).join('')
    }
     </div>
    </section>
  `);



}
