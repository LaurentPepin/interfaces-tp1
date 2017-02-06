
$(document).ready(function(){
	$("#menu-table").hide();
});

$(document).ready(function(){
	$("#menuButton").click(function(){
		$("#menu-table").toggle();
	});
});

function showNews() {
			document.getElementById("news-table").style.display = "initial";
			document.getElementById("news").style.backgroundColor = "gray";
			document.getElementById("activites").style.backgroundColor = "white";
			//document.getElementByTagName("activities-table").style.display = "none";
}
function showActivities() {
		document.getElementById("news-table").style.display = "none";
		document.getElementById("activites").style.backgroundColor = "gray";
		document.getElementById("news").style.backgroundColor = "white";
		//document.getElementByTagName("activities-table").style.display = "inline";
}
