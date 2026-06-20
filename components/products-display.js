import products from "./products-data.js";

export default function productsDisplay(){ 
 return(` 
    <section>
     <div class="container w-100-pr mx-auto" id="product-display">
    ${
  products.map((product,index)=>
     `<div class="content m-10 shadow-10 p-10 radius-10">
       <h3 class="p-10 m-3 radius-3 border-1 -sky-1">Product no: ${index + 1}</h3>
       <img class="w-100-pr radius-5" src="${product.image}">
       <p class="sky ml-5 mt-5">Product Name:</p>
       <h3 class="p-10 m-3 radius-3 border-1 -sky-1">${product.product_name}</h3>
       <p class="sky ml-5 mt-5">Product Barcode:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.barcode}</p>
       <p class="sky ml-5 mt-5">Partner SKU:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.partnerSku}</p>
       <p class="sky ml-5 mt-5">SKU:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.sku}</p>
       <p class="sky ml-5 mt-5">Product Packing Type:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.packing}</p>
       <p class="sky ml-5 mt-5">Description:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.description}</p>
      </div>`).join('')
    }
     </div>
    </section>
  `);



}

    // <div class="content">
    //    <h1>Product name : ${productName ? productName : ''}</h1>
    //    <img class="w-300" src="${image}">
    //   </div>