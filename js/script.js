var translate = function(sentence){
  var vowels = ["a","e","i","o","u"];
  var splitstring = sentence.split("");
  var newWord;
  for(x=0; x < splitstring.length; x++){
    vowels.forEach(function(letter){
      if (splitstring[0]===letter){
        newWord = splitstring.join("") + "way";
      }
      if((splitstring[x]==="q")&&(splitstring[x+1]==="u")){
        newWord = splitstring.splice(x+2, splitstring.length).join("") + splitstring.splice(0,x+2).join("") + "ay"
      }
      else if(splitstring[x]===letter){
        newWord = splitstring.splice(x, splitstring.length).join("") + splitstring.splice(0,x).join("") + "ay"
      }
    });
   };
   return newWord;
}
// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var splitstring = translate(words)
    $('#output').append(splitstring)
  })
});
