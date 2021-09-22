function tablet(x) {
    if (x.matches) { // If media query matches
        document.getElementsByClassName(".web-end").remove();
        document.getElementsByClassName(".nav-links").remove();
    } else {}
}

var x = window.matchMedia("(max-width: 769px)")
tablet(x) // Call listener function at run time
x.addListener(tablet) // Attach listener function on state changes


function mobile(x) {
    if (x.matches) { // If media query matches
        console.log(document.getElementsByClassName(".middle"))
        document.getElementsByClassName(".top-header").remove();
        document.getElementsByClassName(".middle").remove();
    } else {}
}

var x = window.matchMedia("(max-width: 430px)")
mobile(x) // Call listener function at run time
x.addListener(mobile) // Attach listener function on state changes