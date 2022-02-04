$(document).ready(function() {
  console.log( 'готов!' );
});

$(document).ready(function(){
	$(".box1, .box5, .box6, .box7, .box8, .box9, .box10").click(function(){
		$(this).toggleClass("black", 1000, "easeInBack");
	});
});

$(document).ready(function(){
$(".box3").click(function(){
  $(this).toggleClass("red");
  });
});

$(function() {
	$("#draggable").draggable();
});

$(document).ready(function(){
$(".box2").hover(function(){
  $(this).addClass("black", 600, 'easeInBack');
}, function() {
  $(this).removeClass("black", 600, 'easeInBack');
    });
});

$(document).ready(function(){
	$(".stroke").click(function(){
		$(this).toggleClass("strokeblock", 600, "easeInBack");
	});
});

$(document).ready(function(){
  $( ".biggie" ).click(function() {
    $( this ).removeClass( "big-blue", 1000, "easeInBack" );
  });
});

$(document).ready(function(){
$(".box11").click(function(){
  $(this).hide(1200);
  });
});
