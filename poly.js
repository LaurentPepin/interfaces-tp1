
$(document).ready(function(){
	$("#menu-table").hide();
});

$(document).ready(function(){
	$("#menuButton").click(function(){
		$("#menu-table").toggle();
	});
});

$(document).ready(function(){
		$(".activities-table").hide();
        $("#news").addClass("border");
		$("#activities").css("backgroundColor","grey");
});

$(document).ready(function(){
	$("#activities").click(function(){
		$("#news").removeClass("border");
		$("#news").css("backgroundColor","grey");
		$("#activities").css("backgroundColor","white");
		$("#activities").addClass("border");
		$(".nouvelles-table").hide();
		$(".activities-table").show();
	});
});

$(document).ready(function(){
	$("#news").click(function(){
		$("#activities").removeClass("border");
		$("#activities").css("backgroundColor","grey");
		$("#news").css("backgroundColor","white");
		$("#news").addClass("border");
		$(".nouvelles-table").show();
		$(".activities-table").hide();
	});
});
