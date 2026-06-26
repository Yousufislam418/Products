import products from "./products-data.js"; 

// 6308338002 
// 65170842031

export default function searchProduct(){ 

 window.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('search-btn');

  
  // Scan btn Listener ------------------------------------------------->
  const scanBtn = document.getElementById('scan-btn');
 scanBtn.addEventListener('click',()=>{
   
 

  function onScanSuccess(decodedText) {
    document.getElementById("result").innerText = "Scanned: " + decodedText;
    console.log("Scanned code:", decodedText);
    
     html5QrCode.stop();

    dataFunction(decodedText);

  }

  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.start(
    { facingMode: "environment" }, 
    { fps: 10, qrbox: 250 },      
    onScanSuccess,
  );
 });


// Search btn Listener
 btn.addEventListener('click',()=>{ 
const searchInput = document.getElementById('searchInput');
  
 if(!searchInput.value){ return; }

dataFunction(searchInput.value);
 }); // add listener end


const dataFunction = (barcodeNumber) =>{
 document.getElementById('search-product-data-load').innerHTML = '';
    
 const filterProducts = products.filter((product,index)=> 
   product.barcode == barcodeNumber || 
 product.product_barcode == barcodeNumber ||
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
       <h3 class="p-10 m-3 radius-3 ">${product.product_name}</h3>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Product Barcode:</p>
       <h2 class="p-10 m-3 navy radius-3">${product.barcode}</h2>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Partner SKU:</p>
       <p class="p-10 m-3 radius-3 ">${product.partnerSku}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">SKU:</p>
       <p class="p-10 m-3 radius-3 ">${product.sku}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Product Packing Type:</p>
       <p class="p-10 m-3 radius-3 ">${product.packing}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Color:</p>
       <p class="p-10 m-3 radius-3 ">${product.color}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Product Barcode:</p>
       <p class="p-10 m-3 radius-3 ">${product.product_barcode}</p>
       <p class="border-1 -blue-4"></p>
       <!------------->
       <p class="sky ml-5 mt-5">Description:</p>
       <p class="p-10 m-3 radius-3 ">${product.description}</p>
    </div>
 `);

  searchInput.value = ''; 

 } // dataFunction end

 }); // DOM end




 return(`
  <section> 
   <div class="w-80-pr mx-auto flex m-20">
    <input class="input" id="searchInput" type="text" name="searchinput" placeholder="Barcode">
    <button class="btn-md danger ml-3" id="search-btn">Search</button>
    <button class="btn-md primary ml-3" id="scan-btn">Scan</button>
   </div>  
  </section> 

  <section>
   <div class="w-90-pr mx-auto" id="search-product-data-load"></div>
  </section>


  <section>
   <div id="reader" style="width:300px; margin:auto;"></div>
   <div id="result"></div>


  </section>


 `);
}

    