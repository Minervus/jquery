$("h1").css("color","red");

$("h1").click(function() {
    $("h1").addClass("big-title")
})

$("button").on("click", function() {
    $("h1").animate({opacity: 0.3});
});

$("input").keypress(function(event) {
    $("h1").text(event.key);
    console.log(event.key);
});

