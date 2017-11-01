$(document).ready(function() {
console.log("Its Working!!!")

$("i").on("click", function() {
  		$("#popUp").css("display", "none");

  	});

$(".available").on("click", function(){
  $("#popUp").css("display", "flex");
  
});

  $("#reserve").on("click", function(){
    $(this).toggleClass("reserved");
    console.log("reserved");
  });

  /*  $(".table").on("click", function() {
  var tablenum = $(this).attr("data-tablenum");
  tablenum = parseInt(tablenum);
  lastTableClicked = this;
});*/


});
