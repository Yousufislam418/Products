import products from "../components/products-data.js"; 

// 6308338002 
// 65170842031

export default function checkProduct(){ 

     window.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('search-btn');
    btn.addEventListener('click',()=>{ 
 document.getElementById('check-product-data-load').innerHTML = '';
 
 const checkInput = document.getElementById('checkInput');
    
 const filterProducts = products.filter((product,index)=> product.barcode == checkInput.value || product.product_barcode == checkInput.value); 

 if(filterProducts == ""){
  
  //  return  console.log('no product found'); 
  document.getElementById('check-product-data-load').innerHTML = `<div><h1>No Product Found!</h1></div>`;
 }


 filterProducts.map((product,index)=> 

   document.getElementById('check-product-data-load').innerHTML += `
    <div>
       <h3 class="p-10 m-3 radius-3 border-1 -sky-1">Product no: ${product.product_id}</h3>
       <img class="w-100-pr radius-5" src="${product.image}">
       <p class="sky ml-5 mt-5">Product Name:</p>
       <h3 class="p-10 m-3 radius-3 border-1 -sky-1">${product.product_name}</h3>
       <p class="sky ml-5 mt-5">Product Barcode:</p>
       <h2 class="p-10 m-3 blue radius-3 border-1 -sky-1">${product.barcode}</h2>
       <p class="sky ml-5 mt-5">Partner SKU:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.partnerSku}</p>
       <p class="sky ml-5 mt-5">SKU:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.sku}</p>
       <p class="sky ml-5 mt-5">Product Packing Type:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.packing}</p>
       <p class="sky ml-5 mt-5">Color:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.color}</p>
       <p class="sky ml-5 mt-5">Product Barcode:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.product_barcode}</p>
       <p class="sky ml-5 mt-5">Description:</p>
       <p class="p-10 m-3 radius-3 border-1 -sky-1">${product.description}</p>
    </div>
 `);

  checkInput.value = '';

    }); // add listener end
 }); // DOM end




 return(`
  <section> 
   <div class="w-80-pr mx-auto flex m-20">
    <input class="input" id="checkInput" type="text" placeholder="Barcode" required>
    <button class="btn-md danger ml-3" id="search-btn">Search</button>
   </div>  
  </section> 

  <section>
   <div class="w-90-pr mx-auto" id="check-product-data-load"></div>
  </section>
    `);



}

    