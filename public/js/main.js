// Select Button
$("button.selectFeeling").on("click", function(){
   $(this).find("i").toggleClass("radio") ;
   $(this).find("i").toggleClass("check circle outline");
});

// Definition Button
$("i.book").parent("button").on("click", function(){
   $(this).find(".ui.modal").modal("show");
   alert(word);
});

