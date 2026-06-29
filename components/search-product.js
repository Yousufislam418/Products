import products from "./products-data.js"; 

export default function searchProduct(){  

 window.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('search-btn');

// ---------------------------------------------->

// Search btn Listener
 btn.addEventListener('click',()=>{ 
 document.getElementById('search-product-data-load').innerHTML = "";
const searchInput = document.getElementById('searchInput');
  
 if(!searchInput.value){ return; }

dataFunction(searchInput.value);
 }); // add listener end


const dataFunction = (barcodeNumber) =>{
    
 const filterProducts = products.filter((product,index)=> 
   product.barcode == barcodeNumber || 
   product.noon_barcode == barcodeNumber ||
   product.amazon_barcode == barcodeNumber ||
   product.partnerSku == barcodeNumber
 ); 

 if(filterProducts == ""){
   return document.getElementById('search-product-data-load').innerHTML = `<div class="text-center red mt-30"><h1>No Product Found!</h1></div>`;
 }

 filterProducts.map((product,index)=> 

   document.getElementById('search-product-data-load').innerHTML += `
    <div>
       <h2 class="p-10 m-3 radius-3">Product no: ${product.product_id}</h2>
       <!------------->
       <img class="w-100-pr radius-5" src="${product.image}">
       <!------------->
       <p class="sky ml-5 mt-5">Product Name:</p>
       <h3 class="p-10 m-3 radius-3">${product.product_name}</h3>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Barcode:</p>
       <h2 class="p-10 m-3 navy radius-3">${product.barcode}</h2>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Partner SKU:</p>
       <p class="p-10 m-3 radius-3">${product.partnerSku}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">SKU:</p>
       <p class="p-10 m-3 radius-3">${product.sku}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Product Packing Type:</p>
       <p class="p-10 m-3 radius-3">${product.packing}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Color:</p>
       <p class="p-10 m-3 radius-3">${product.color}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">noon barcode:</p>
       <h2 class="p-10 m-3 radius-3 navy">${product.noon_barcode}</h2>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Amazon barcode:</p>
       <p class="p-10 m-3 radius-3">${product.amazon_barcode}</p>
       <!------------->
       <p class="sky ml-5 mt-5">Description:</p>
       <p class="p-10 m-3 radius-3">${product.description}</p>
    </div>
 `);

  searchInput.value = ''; 

 } // dataFunction end

 }); // DOM end




 return(`
  <section> 
   <div class="w-90-pr flex gap-10 mx-auto m-20">
    <input class="input" id="searchInput" type="text" name="searchinput" placeholder="Barcode">
    <button class="btn-md danger ml-3" id="search-btn">Search</button>
   </div>  
  </section> 

  <section>
   <div class="w-90-pr mx-auto" id="search-product-data-load"></div>
  </section>

 `);

}

    