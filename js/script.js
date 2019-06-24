var translate = function(sentence){
  var vowels = ["a","e","i","o","u"]
  var splitstring = sentence.split("")
  var pig = "way"
  for(x=0; x < splitstring; x++ ){
    vowels.forEach(function(letter){
      console.log(letter)
    if(splitstring[x]===letter)
    if((x=="9")&&(x++)){
  };
})
  var newWord = splitstring.splice(x, splitstring.length)+(splitstring.slice(0,x)+"way"){
    splitstring.push("way");
    x = splitstring.length
  };
  console.log(letter)
});



// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var words = $('#words').val()

    var splitstring = translate(words)

  }
