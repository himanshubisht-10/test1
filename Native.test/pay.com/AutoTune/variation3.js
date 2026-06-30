(function () {
  try {
    var debug = 0;
    var variation_name = "";

    function waitForElement(selector, trigger, delayInterval = 50, delayTimeout = 15000) {
      var interval = setInterval(function () {
        if (document.querySelector(selector)) {
          clearInterval(interval);
          trigger(document.querySelector(selector));
        }
      }, delayInterval);

      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    waitForElement(".oxy-pro-accordion", function (accordionContainer) {

      if (document.querySelector(".abtest-accordion-item")) return;

      const items = accordionContainer.querySelectorAll(".oxy-pro-accordion_item");
      const lastItem = items[items.length - 1];

      const newItemHTML = `
        <div class="oxy-pro-accordion_item abtest-accordion-item">
          <button class="oxy-pro-accordion_header abtest-header" type="button">
            <h4 class="oxy-pro-accordion_title">
              Vets love pet insurance
            </h4>
            <span class="oxy-pro-accordion_icon">+</span>
          </button>

          <div class="oxy-pro-accordion_body" style="display:none;">
            <div class="oxy-pro-accordion_content">
              <p>
                Pet insurance helps veterinarians recommend the best treatment
                without cost being the deciding factor.
              </p>
            </div>
          </div>
        </div>
      `;

      lastItem.insertAdjacentHTML("afterend", newItemHTML);

      // NOW SELECT INSERTED ITEM
      const newItem = accordionContainer.querySelector(".abtest-accordion-item");
      const header = newItem.querySelector(".abtest-header");
      const body = newItem.querySelector(".oxy-pro-accordion_body");
      const icon = newItem.querySelector(".oxy-pro-accordion_icon");

      header.addEventListener("click", function () {

        const isOpen = newItem.classList.contains("active");

        // close all items
        accordionContainer.querySelectorAll(".oxy-pro-accordion_item").forEach(function (item) {
          item.classList.remove("active");

          const itemBody = item.querySelector(".oxy-pro-accordion_body");
          const itemIcon = item.querySelector(".oxy-pro-accordion_icon");

          if (itemBody) itemBody.style.display = "none";
          if (itemIcon) itemIcon.textContent = "+";
        });

        // open clicked item
        if (!isOpen) {
          newItem.classList.add("active");
          body.style.display = "block";
          icon.textContent = "×";
        }
      });

    });

  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();