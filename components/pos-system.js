import products from "./products-data.js";

// Main Funtion this Page
export default function PosSystem(){
//------------------------------>
// DOM Listener Function
 document.addEventListener("DOMContentLoaded",()=>{  
// Get Document ID
 const barcode_pos_system_data_display = document.getElementById('barcode-pos-system-data-load');
 const input = document.getElementById('pos-barcode-input'); 
 const posBarcodeInputBtn = document.getElementById('pos-barcode-input-btn');

// Pos barcode-input-btn click event
 posBarcodeInputBtn.addEventListener('click',()=>{ 
  barcode_pos_system_data_display.innerHTML = '';
   if(input.value == ''){ return; } 
   filterDataHandler(input.value); 
 });

// Barcode Scan Handler function
 function barcodeScanHandler(){
// ------------------------------>
input.addEventListener("keydown", function(e) {
 if(e.key === "Enter") {  // scanner enter দিলে 
   input.value = '';
  let code = input.value.trim();
  if (code) {
 document.getElementById("result").innerText = "Scanned: " + code; 
   input.value = code;
  filterDataHandler(code);
    }
  }
});
// ------------------------------>
} // barcodeScanHandler  

// -------------------------------------->
// filterDataHandler Function
const filterDataHandler = (barcodeNumber) =>{
 const filterProducts = products.filter((product,index)=> 
   product.product_id == barcodeNumber || 
   product.barcode == barcodeNumber || 
   product.noon_barcode == barcodeNumber ||
   product.amazon_barcode == barcodeNumber ||
   product.partnerSku == barcodeNumber ||
   barcodeNumber == '0'+ product.noon_barcode
 ); 

 if(filterProducts == ""){
   return barcode_pos_system_data_display.innerHTML = `<div class="text-center red mt-30"><h1>No Product Found!</h1></div>`;
 }

 input.value = '';

 filterProducts.map((product,index)=> 
  barcode_pos_system_data_display.innerHTML += `
    <div class="lg-flex gap-15">
    <!------------->
     <div class="w-100-pr">
       <h2 class="p-10 m-3 radius-3">Product no: ${product.product_id}</h2>
       <img class="w-100-pr radius-5" src="${product.image}">
     </div>
    <!------------->
     <div class="w-100-pr fs-18">
       <p class="sky ml-5 mt-5">Product Name:</p>
       <h3 class="p-10 lg-fs-25 m-3 radius-3">${product.product_name}</h3>
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
    </div>
 `);

 } // filterDataHandler end

}); // Dom Listener End

 return(`
<!--------------->
  <section> 
   <div class="w-95-pr flex gap-10 justify-between m-20">
   <div class="flex w-100-pr gap-3">
    <input class="input" id="pos-barcode-input" type="text" name="searchinput" placeholder="Barcode">
    <button id="pos-barcode-input-btn" class="btn-sm h-40">OK</button>
   </div>
   </div>  
  </section> 

<!--------------->
  <section>
   <div class="w-90-pr mx-auto" id="barcode-pos-system-data-load"></div>
  </section>

<!--------------->
 <section class="mb-50 mt-10">
  <div class="m-20">
   <p id="result"></p>
  </div>
 </section>

  `);
}