$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		$("this").val();
		var newtodo = $(this).val();
		$(this).val=("");
		 $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newtodo + " </li>");
	}
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
			$(this).remove();
	});
	event.stopPropagation();
});

$("#plus1").on("click", function(){
	$("input[type='text']").fadeToggle();
});
