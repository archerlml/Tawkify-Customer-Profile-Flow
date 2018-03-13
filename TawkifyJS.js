function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
$(function(){
    $("#heightYes").click( function(){
        $(this).removeClass("not-chosen");
        $(this).addClass("chosen");
        $("#heightNo").removeClass("chosen");
        $("#heightNo").addClass("not-chosen");
    });
});
$(function(){
    $("#heightNo").click( function(){
        $(this).removeClass("not-chosen");
        $(this).addClass("chosen");
        $("#heightYes").removeClass("chosen");
        $("#heightYes").addClass("not-chosen");
  });
});
$(function(){
    $("#incomeYes").click( function(){
        $(this).removeClass("not-chosen");
        $(this).addClass("chosen");
        $("#incomeNo").removeClass("chosen");
        $("#incomeNo").addClass("not-chosen");
    });
});
$(function(){
    $("#incomeNo").click( function(){
        $(this).removeClass("not-chosen");
        $(this).addClass("chosen");
        $("#incomeYes").removeClass("chosen");
        $("#incomeYes").addClass("not-chosen");
  });
});
//hide every form section except first
$("article:nth-child(1n+2)").hide();
//add class of visible to first screen
$("article:first").addClass("visible");  


$("#li1").on("click", function(e){
    e.preventDefault();
    $("#article2").removeClass("visible").hide();
    $("#article3").removeClass("visible").hide();
    $("#article1").addClass("visible").fadeIn();
    //remove active state of pagination
    $("#li1").addClass("active");
    $("#li2").removeClass("active");
    $("#li3").removeClass("active");
});

$("#li2").on("click", function(e){
    e.preventDefault();
    $("#article1").removeClass("visible").hide();
    $("#article3").removeClass("visible").hide();
    $("#article2").addClass("visible").fadeIn();
    //remove active state of pagination
    $("#li2").addClass("active");
    $("#li1").removeClass("active");
    $("#li3").removeClass("active");
});

$("#li3").on("click", function(e){
    e.preventDefault();
    $("#article1").removeClass("visible").hide();
    $("#article2").removeClass("visible").hide();
    $("#article3").addClass("visible").fadeIn();
    //remove active state of pagination
    $("#li3").addClass("active");
    $("#li1").removeClass("active");
    $("#li2").removeClass("active");
});

//every time the next button is clicked, remove the current panels class of visible and apply it to the next and fade it in.
$("#next1").on("click", function(e){
    e.preventDefault();
    $("#article1").removeClass("visible").hide();
    $("#article2").addClass("visible").fadeIn();
    $("#li2").addClass("active");
    $("#li1").removeClass("active");
    $("#li3").removeClass("active");
});
$("#next2").on("click", function(e){
    e.preventDefault();
    $("#article2").removeClass("visible").hide();
    $("#article3").addClass("visible").fadeIn();
    $("#li3").addClass("active");
    $("#li1").removeClass("active");
    $("#li2").removeClass("active");
});