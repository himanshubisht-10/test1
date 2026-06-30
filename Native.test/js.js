(function() {
  try {
    var debug = 0; 
    var variation_name = ""; 

    
    function waitForElement(selector, trigger, delayInterval = 50, delayTimeout = 15000) {
      var interval = setInterval(function() {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger(document.querySelector(selector));
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }

    function init() {
      console.log("Test initialized. Please check if functionality is triggering correctly.");
    }
    /* Initialize variation */
    waitForElement("body", init);
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();