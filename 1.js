$("#SendComment").click(function(){
	var text1 = $("#Comment").val();
	console.log(text1);
	$("#comment_1").append("<h1>"+ text1 +"</h1>");
});
function test(){
	console.log('1');
}
