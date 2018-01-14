$("#sendMessage").click(function(){
	var message = $("#message").val();
	console.log(message);
	$("#messageBoard").append("<h1>"+ message +"</h1>");
});
