(function () {
    try {

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

    } catch (error) {

    }
})()
