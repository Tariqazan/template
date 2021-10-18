function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}

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

$('#headingOne .fas').append('<i class="fas fa-minus"></i>')

$('#headingTwo .fas').replaceWith('<i class="fas fa-plus"></i>')
$('#headingThree .fas').replaceWith('<i class="fas fa-plus"></i>')
$('.accordion-header').click(function() {
    if ($('#headingOne button').hasClass('collapsed')) {
        $('#headingOne .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#headingOne .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});

$('.accordion-header').click(function() {
    if ($('#headingTwo button').hasClass('collapsed')) {
        $('#headingTwo .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#headingTwo .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});

$('.accordion-header').click(function() {
    if ($('#headingThree button').hasClass('collapsed')) {
        $('#headingThree .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#headingThree .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});



$('#documentOne .fas').append('<i class="fas fa-plus"></i>')
$('#documentTwo .fas').replaceWith('<i class="fas fa-plus"></i>')
$('#documentThree .fas').replaceWith('<i class="fas fa-plus"></i>')
$('#documentFour .fas').replaceWith('<i class="fas fa-plus"></i>')
$('#documentFive .fas').replaceWith('<i class="fas fa-plus"></i>')
$('.accordion-header').click(function() {
    if ($('#documentOne button').hasClass('collapsed')) {
        $('#documentOne .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#documentOne .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});

$('.accordion-header').click(function() {
    if ($('#documentTwo button').hasClass('collapsed')) {
        $('#documentTwo .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#documentTwo .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});

$('.accordion-header').click(function() {
    if ($('#documentThree button').hasClass('collapsed')) {
        $('#documentThree .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#documentThree .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});

$('.accordion-header').click(function() {
    if ($('#documentFour button').hasClass('collapsed')) {
        $('#documentFour .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#documentFour .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});

$('.accordion-header').click(function() {
    if ($('#documentFive button').hasClass('collapsed')) {
        $('#documentFive .fas').replaceWith('<i class="fas fa-plus"></i>')
    } else {
        $('#documentFive .fas').replaceWith('<i class="fas fa-minus"></i>')
    }
});


function heart() {
    var x = document.getElementById("heart");
    if (x.style.fill === "red") {
        x.style.fill = "transparent";
    } else {
        x.style.fill = "red";
    }
}