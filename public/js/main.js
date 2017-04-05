// Select Button
$("button.selectFeeling").on("click", function(){
   $(this).find("i").toggleClass("radio") ;
   $(this).find("i").toggleClass("check circle outline");
});

// Definition Button
$("button.defineFeeling").on("click", function(){
   var word = $(this).data("word");
   var definition = $(this).data("definition");
   var partOfSpeech = $(this).data("partofspeech");
   $("div.ui.modal div.header").text(word);
   $("#definition").html(definition);
   $("#partOfSpeech").text(partOfSpeech);
   $(".ui.modal").modal("show");   
});

