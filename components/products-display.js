import products from "./products-data.js";


export default function productsDisplay(){

 return(`
    <section>
     <div class="container w-100-pr mx-auto" id="product-display">
    ${
      products.map((product,index)=> `
      <div class="content m-10 shadow-10 p-10 radius-10">
       <h3 class="mb-10">${product.product_name}</h3>
       <img class="w-100-pr radius-5" src="${product.image}">
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.barcode}</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.partnerSku}</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.sku}</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.packing}</p>
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