$(function() {
    $("#slider-3").slider({
        range: true,
        min: 0,
        max: 500,
        values: [35, 200],
        slide: function(event, ui) {
            $("#price").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#price").val("$" + $("#slider-3").slider("values", 0) +
        " - $" + $("#slider-3").slider("values", 1));
});