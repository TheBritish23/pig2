var translate = function(sentence){
  var vowels = ["a","e","i","o","u"]
  var splitstring = sentence.split("")
  var pig = ["way"]
  for(x=0; x < splitstring; x++ ){
    vowels.forEach(function(letter){
      console.log(letter)
    if(splitstring[x]===letter){
  }

    var newWord = splitstring.splice(x, splitstring.length)+(splitstring.slice(0,x)+"way");
  });

    // if((x=="q")&&(x++)){
    //
    // }
  };
 output = splitstring.join("")+"way"
 console.log(splitstring)
 return splitstring
};



// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var words = $('#words').val()

    var splitstring = translate(words)

    $('#output').append(splitstring)

    $('#display').append(x);
})


  });
