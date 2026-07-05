import products from "./products-data.js";


export default function SearchBarcodeByCamera(){ 


 document.addEventListener("DOMContentLoaded",()=>{ 
// Search btn click event
 document.getElementById('search-barcode-btn').addEventListener('click',()=>{
   barcodeScanHandler();
 });

//  barcode-input-btn click event
 document.getElementById('barcode-input-btn').addEventListener('click',()=>{ 
  const input = document.getElementById('barcode-input');
   filterDataHandler(input.value); 
 });





// Barcode Scan Handler function
 function barcodeScanHandler(){
   function onScanSuccess(decodedText) {

    document.getElementById("result").innerText = "Scanned: " + decodedText;

    console.log("Scanned code:", decodedText);

    filterDataHandler(decodedText);

     html5QrCode.stop();


  }

  function onScanError(errorMessage) {
    // console.log(errorMessage);
  }


  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.start(

    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    onScanSuccess,
    onScanError
  );

} // barcodeScanHandler  

// -------------------------------------->
// filterDataHandler Function
const filterDataHandler = (barcodeNumber) =>{

  document.getElementById('barcode-camera-data-load').innerHTML = "";

 const filterProducts = products.filter((product,index)=> 
   product.barcode == barcodeNumber || 
   product.noon_barcode == barcodeNumber ? barcodeNumber : '0'+ barcodeNumber ||
   product.amazon_barcode == barcodeNumber ||
   product.partnerSku == barcodeNumber
 ); 

 if(filterProducts == ""){
   return document.getElementById('barcode-camera-data-load').innerHTML = `<div class="text-center red mt-30"><h1>No Product Found!</h1></div>`;
 }

 filterProducts.map((product,index)=> 

   document.getElementById('barcode-camera-data-load').innerHTML += `
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

 

 } // filterDataHandler end
// -------------------------------------->



}); // Dom Listener End

 return(`

<!--------------->
  <section> 
   <div class="w-90-pr flex gap-10 mx-auto m-20">
   <div class="flex">
    <input class="input" id="barcode-input" type="text" name="searchinput" placeholder="Barcode">
    <button id="barcode-input-btn" class="blue px-8 ml-3 border-none radius-5">OK</button>
   </div>
    <button class="btn-md danger ml-3" id="search-barcode-btn">Search Barcode Camera</button>
   </div>  
  </section> 

<!--------------->
  <section>
   <div class="w-90-pr mx-auto" id="barcode-camera-data-load"></div>
  </section>

<!--------------->
  <div id="reader" style="width:300px; margin:auto;"></div>
 <div id="result"></div>


 `);
} 
