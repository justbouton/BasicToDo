// li toggle class for line-through
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Span on click fadeOut parent cb remove()
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(100, function(){
        $(this).remove();
    });
    // Stop from bubbling up to other elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13){
        // capture text from input store in var
        var newToDo = $(this).val();
        $(this).val("");        
        // create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newToDo + "</li>");
    }
})

$("h1 i").on("click", function() {
    // fade out input field
    $("input").fadeToggle()
})