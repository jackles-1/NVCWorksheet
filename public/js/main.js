// Select Button
$("button.selectFeeling").on("click", function(){
   $(this).find("i").toggleClass("radio") ;
   $(this).find("i").toggleClass("check circle outline");
});

// Definition Button
$("button.defineFeeling").on("click", function(){
   alert($(this).data("word"));
   // $this.find("div.header").text(data-word);
   // $(".ui.modal").modal("show");
});

