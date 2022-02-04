$(document).ready(function() {
  console.log( 'готов!' );
});

$(document).ready(function(){
	$("div").click(function(){
		$(this).toggleClass("black", 1000, "easeInBack");
	});
});

$(document).ready(function(){
$(".box3").click(function(){
  $(this).toggleClass("red");
  });
});

$(".box2").hover(function(){
  $(this).addClass("black");
}, $(this).removeClass("black");
    });
});

$(document).ready(function(){
$(".red").click(function(){
  $(this).toggleClass("blue");
  });
});

$(document).ready(function(){
	$(".stroke").click(function(){
		$(this).toggleClass("strokeblock", 1000, "easeInBack");
	});
});

$(document).ready(function(){
  $( ".biggie" ).click(function() {
    $( this ).removeClass( "big-blue", 1000, "easeInBack" );
  });
});
