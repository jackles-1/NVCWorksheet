var finalStatement;
var feelingsArray = [];
var feelingsStatement;
var numFeelings = 0;

// Select Button
$("button.selectFeeling").on("click", function(){
   var word = $(this).data("word");
   
   $(this).find("i").toggleClass("radio") ;
   if($(this).find("i").hasClass("check")){
      $(this).find("i").removeClass("check circle outline")
      console.log("remove");
      updateFeelings(word, false);      
   }
   else{
      $(this).find("i").addClass("check circle outline")
      console.log("add");
      updateFeelings(word, true)
   }
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


function updateFeelings(word, add){
   // Update feelingsArray
   if(add === true){
      feelingsArray.push(word);
   }
   else{
      var indexOfWord = feelingsArray.indexOf(word);
      feelingsArray.splice(indexOfWord, 1);
   }
   
   // Update feelingsStatement
   if(feelingsArray.length === 1){
      feelingsStatement = "I feel " + feelingsArray[0];
   }
   else if(feelingsArray.length === 2){
      feelingsStatement = "I feel " + feelingsArray[0] + ", and " + feelingsArray[1];
   }
   else if(feelingsArray.length > 2){
      feelingsStatement = "I feel ";
      for(i = 0; i < (feelingsArray.length - 2); i++){
         feelingsStatement += feelingsArray[i] + ", ";
      }
      feelingsStatement += feelingsArray[feelingsArray.length - 2] + ", and " + feelingsArray[feelingsArray.length - 1];
   }
   
   updateFinalStatement();
};

function updateFinalStatement(){
   finalStatement = feelingsStatement;
   $("#finalStatement").text(finalStatement);
};


