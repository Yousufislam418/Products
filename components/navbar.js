export default function navbar(){
 return(`
    <section class="sticky top-0">
     <div class="bg-blue m-5 shadow-5">
      <ul class="flex justify-evenly fs-18 p-8 bold">
       <li><a href="home.html" class="white">Home</a></li>
       <li><a href="check-product.html" class="white">Check Product</a></li>
       <li><a href="#" class="white">Add Product</a></li>
      </ul>
     </div>
    </section>
  `);
}