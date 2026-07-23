import products from "./products-data.js"; 

export default function searchProduct(){  

 window.addEventListener('DOMContentLoaded',()=>{ 
  const search_product_data_load = document.getElementById('search-product-data-load');
  const btn = document.getElementById('search-btn');

// ---------------------------------------------->

// Search btn Listener
 btn.addEventListener('click',()=>{ 
  search_product_data_load.innerHTML = "";
 const searchInput = document.getElementById('searchInput');
  
 if(!searchInput.value){ return; }

dataFunction(searchInput.value);
 }); // add listener end


const dataFunction = (barcodeNumber) =>{
    
 const filterProducts = products.filter((product,index)=> 
   product.product_id == barcodeNumber || 
   product.barcode == barcodeNumber || 
   product.noon_barcode == barcodeNumber ||
   product.amazon_barcode == barcodeNumber ||
   product.partnerSku == barcodeNumber || 
   barcodeNumber == '0'+ product.noon_barcode
 ); 

 if(filterProducts == ""){
   return search_product_data_load.innerHTML = `<div class="text-center red mt-30"><h1>No Product Found!</h1></div>`;
 }

 if(filterProducts.length > 1){
   search_product_data_load.innerHTML += `
   <div class="mb-15 text-center">
    <h3 class="green inline bg-pink-3 px-10 py-5 radius-20">Total Show Product: 
     <span class="blue fs-20">${filterProducts.length}</span>
    </h3>
   </div>`;
 }

 filterProducts.map((product,index)=> 

  search_product_data_load.innerHTML += `
    <div class="lg-flex p-10 radius-3 mb-20 shadow-5 gap-10">
     <div class="w-100-pr">
       <h2 class="p-10 m-3 radius-3">Product no: ${product.product_id}</h2>
       <!------------->
       <img class="w-100-pr radius-5" src="${product.image}">
     </div>
     <div class="w-100-pr fs-18">
       <!------------->
       <p class="sky ml-5 mt-5">Product Name:</p>
       <h2 class="p-10 lg-fs-25 m-3 radius-3">${product.product_name}</h2>
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
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Description:</p>
       <p class="p-10 m-3 radius-3">${product.description}</p>
     </div>
    </div>
 `);

  searchInput.value = ''; 

 } // dataFunction end

 }); // DOM end




 return(`
  <section> 
   <div class="w-90-pr flex gap-10 mx-auto m-20">
    <input class="input" id="searchInput" type="text" name="searchinput" placeholder="Barcode" autofocus>
    <button class="btn-md danger ml-3" id="search-btn">Search</button>
   </div>  
  </section> 

  <section class="mb-50">
   <div class="w-95-pr mx-auto" id="search-product-data-load"></div>
  </section>

 `);

}

    