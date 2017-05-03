var finalStatement;
var feelingsArray = [];
var feelingsStatement = "";
var whenStatement = "";
var becauseStatement = "";
var needStatement = "";
var requestStatement = "";
var numFeelings = 0;

// Select Button
$("button.selectFeeling").click(function(){
   var word = $(this).data("word");
   
   $(this).find("i").toggleClass("radio") ;
   if($(this).find("i").hasClass("check")){
      $(this).find("i").removeClass("check circle outline")
      updateFeelings(word, false);      
   }
   else{
      $(this).find("i").addClass("check circle outline")
      updateFeelings(word, true)
   }
});

// Definition Button
$("button.defineFeeling").click(function(){
   var word = $(this).data("word");
   var definition = $(this).data("definition");
   var partOfSpeech = $(this).data("partofspeech");
   
   $("div.ui.modal div.header").text(word);
   $("#definition").html(definition);
   $("#partOfSpeech").text(partOfSpeech);
   $(".ui.modal").modal("show");   
});

// Text Inputs
$("div#when input").blur(function(){
   whenStatement = $(this).val();
   updateFinalStatement();
   $("div#because p").text(finalStatement);
   
   if(needStatement !== "" && needStatement !== "I need "){
      $("div#need p").text(finalStatement);
   }
   if(requestStatement !== ""){
      $("div#request p").text(finalStatement);
   }
});

$("div#because input").blur(function(){
   becauseStatement = $(this).val();
   updateFinalStatement();
   $("div#need p").text(finalStatement);
   
   if(requestStatement !== ""){
      $("div#request p").text(finalStatement);
   }
});

$("div#need input").blur(function(){
   needStatement = $(this).val();
   updateFinalStatement();
   $("div#request p").text(finalStatement);
});

$("div#request input").blur(function(){
   requestStatement = $(this).val();
   updateFinalStatement();
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
   if(feelingsArray.length === 0){
      feelingsStatement = "";
   }
   else if(feelingsArray.length === 1){
      feelingsStatement = "I feel " + feelingsArray[0];
   }
   else if(feelingsArray.length === 2){
      feelingsStatement = "I feel " + feelingsArray[0] + ", and " + feelingsArray[1];
   }
   else if(feelingsArray.length > 2){
      feelingsStatement = "I feel ";
      for(var i = 0; i < (feelingsArray.length - 2); i++){
         feelingsStatement += feelingsArray[i] + ", ";
      }
      feelingsStatement += feelingsArray[feelingsArray.length - 2] + ", and " + feelingsArray[feelingsArray.length - 1];
   }
   
   $("div#when p").text(feelingsStatement);
   
   updateFinalStatement();
}

function updateFinalStatement(){
   // If whenStatement ends in ".", and becauseStatement starts with "because", capitalize "because".
   
   if(whenStatement.substr(-1) === "." && becauseStatement.substring(0, 9) === "because I"){
      becauseStatement = becauseStatement.charAt(0).toUpperCase() + becauseStatement.slice(1);
      becauseInput = becauseStatement;
   }
   if(whenStatement.substr(-1) !== "."){
      becauseStatement = becauseStatement.charAt(0).toLowerCase() + becauseStatement.slice(1);
   }
   
   // Add a "." at the end of the last three statements if ending punctuation not already present.
   var becauseEnd = becauseStatement.substr(-1);
   if(becauseEnd !== "." && becauseEnd !== "?" && becauseEnd !== "!" && becauseStatement !== "because I " && becauseStatement !== ""){
      $("div#because input").val(becauseStatement + ".");
   }
   
   var needEnd = needStatement.substr(-1);
   if(needEnd !== "." && needEnd !== "?" && needEnd !== "!" && needStatement !== "I need " && needStatement !== ""){
      needStatement = needStatement + ".";
   }
   
   var requestEnd = requestStatement.substr(-1)
   if(requestEnd !== "." && requestEnd !== "?" && requestEnd !== "!" && requestStatement !== ""){
      requestStatement = requestStatement + ".";
      console.log ("in here");
   }
   
   finalStatement = feelingsStatement + " " + whenStatement + " " + becauseStatement + " " + needStatement + " " + requestStatement;
   
   $("#finalStatement").text(finalStatement);
}




