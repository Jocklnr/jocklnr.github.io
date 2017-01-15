$(document).ready(function() {
$(".toggleButtons").hover(function() {

	$(this).addClass("hover");

}, function() {

	$(this).removeClass("hover");

});

$(".toggleButtons").click(function() {

	$(this).toggleClass("active");
	$(this).removeClass("hover");
	
	var panelId = "#" + $(this).attr("id") + "Panel";
	
	$(panelId).toggleClass("hidden");

});

$("textarea").on("change keyup paste", function() {
	
	updateOutput();

});

function updateOutput() {

	$("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
	document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}

$(function() {

	$(".panel").height($(document).height() - $("#titleBar").height() - 1);
	$("textarea").attr("spellcheck", false);
	updateOutput();

});
});