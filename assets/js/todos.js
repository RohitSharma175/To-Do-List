// check the specific todos by clicking 
$("ul").on("click","li", function(){
    // // if li is grey
    // if($(this).css("color") === "rgb(128, 128, 128)")
    // {
    //     // turn is black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // // else
    // else
    // {
    //     // turn is grey
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("complete");
});
// click on X to delete to todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
// input field to add item to todo
$("input[type='text']").keypress(function(event){
   if(event.which === 13)
   {
    //    grabbing new todo item from input field
       var todotext = $(this).val();
       $(this).val("");
        // ceate a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todotext+"</li>");
   }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});