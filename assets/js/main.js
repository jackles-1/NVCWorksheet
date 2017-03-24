// Initializes drop downs (so that they can be selected from)
$('.ui.dropdown')
  .dropdown();

$(document).on("click", ".ui.dropdown", function(e){
	alert($(this).find("["))
});