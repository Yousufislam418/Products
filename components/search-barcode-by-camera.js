import products from "./products-data.js";

// Root Function
export default function SearchBarcodeByCamera(){ 
// DOM Listener Function
 document.addEventListener("DOMContentLoaded",()=>{  
// Get Document ID
 const barcode_camera_data_display = document.getElementById('barcode-camera-data-load');
 const input = document.getElementById('barcode-input'); 
 const tone = document.getElementById('tone');

// Search btn click event
 document.getElementById('search-barcode-btn').addEventListener('click',()=>{ 
  barcode_camera_data_display.innerHTML = '';
   barcodeScanHandler();
 });

//  barcode-input-btn click event
 document.getElementById('barcode-input-btn').addEventListener('click',()=>{ 
  barcode_camera_data_display.innerHTML = '';
   if(input.value == ''){ return; } 
   filterDataHandler(input.value); 
 });

// Barcode Scan Handler function
 function barcodeScanHandler(){
   function onScanSuccess(decodedText) {

   document.getElementById("result").innerText = "Scanned: " + decodedText;
    filterDataHandler(decodedText);
     input.value = decodedText;
     tone.play();
     html5QrCode.stop();
  }

  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.start(

    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    onScanSuccess,
  );

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
   return barcode_camera_data_display.innerHTML = `<div class="text-center red mt-30"><h1>No Product Found!</h1></div>`;
 }

 filterProducts.map((product,index)=> 

  barcode_camera_data_display.innerHTML += `
    <div class="lg-flex gap-20">
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
   <div class="w-90-pr flex gap-10 justify-between m-20">
   <div class="flex w-90-pr gap-3">
    <input class="input" id="barcode-input" type="text" name="searchinput" placeholder="Barcode">
    <button id="barcode-input-btn" class="btn-sm h-40">OK</button>
   </div>
   <div>
    <button class="btn-sm danger ml-3" id="search-barcode-btn">Scan Camera</button>
    <audio id="tone" src="../audio/silent-beep.mp3">
   </div>
   </div>  
  </section> 

<!--------------->
  <section class="mb-50">
   <div class="w-90-pr mx-auto" id="barcode-camera-data-load"></div>
  </section>

<!--------------->
 <section>
  <div id="reader" class="w-300 m-auto"></div>
  <div id="result"></div>
 </section>

 `);
} 

