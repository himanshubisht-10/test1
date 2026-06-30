(function(){
    try{
    var debug = 1;
    var variation_name ='';
    const navsection = `
<div id="shirt-popup-overlay">
    <div class="shirt-popup">
        <span id="close-popup">✖</span>
          <h2>Shirt Collection</h2>
          <div id="products">
            loading content
          </div>
    </div>
</div>`;
    function waitForElement(selector, trigger) {
          var interval = setInterval(function () {
            if (
              document &&
              document.querySelector(selector) &&
              document.querySelectorAll(selector).length > 0
            ) {
              clearInterval(interval);
              trigger();
            }
          }, 50);
          setTimeout(function () {
            clearInterval(interval);
          }, 15000);
        }
       waitForElement("body", function() {
document.body.insertAdjacentHTML(
  "beforeend",navsection);
      // STEP 3: NOW ELEMENTS EXIST
      
      const overlay = document.getElementById("shirt-popup-overlay");
      const closeBtn = document.getElementById("close-popup");

      // CLOSE BUTTON
      closeBtn.addEventListener("click", function() {
        overlay.remove();
      });

      // CLICK OUTSIDE CLOSE
      overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
     
       fetch("https://shop.autotune.com/collections/shirts-1/products.json?limit=6")
  .then(res => res.json())
  .then(data => {

    let html = "";
    data.products.forEach(product => {
      const img = product.images[0]?.src || "";
      const price = product.variants[0]?.price || "";
      html += `
        <div class="card">
          <img src="${img}" width="150">
          <h3>${product.title}</h3>
          <p>$${price}</p>
          <button onclick="window.open('/products/${product.handle}','_blank')">
                 choose options
                </button>
        </div>
      `;
    });

    document.querySelector("#products").innerHTML = html;
  });
    
       })


    } catch (error) {
        if (debug) console.log(error, "error in Test " + variation_name);
    }
})();
