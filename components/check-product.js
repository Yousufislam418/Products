import products from "../components/products-data.js"; 

// 6308338002 
// 65170842031

export default function checkProduct(){ 

     window.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('search-btn');
    btn.addEventListener('click',()=>{ 
 document.getElementById('check-product-data-load').innerHTML = '';
 
 const checkInput = document.getElementById('checkInput');
    
 const filterProducts = products.filter((product,index)=> product.barcode == checkInput.value);

 filterProducts.map((item,index)=> 
   document.getElementById('check-product-data-load').innerHTML += `
    <div>
     <h1>${item.product_name}</h1>
     <img class="w-100-pr mt-10" src="${item.image}">
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

    