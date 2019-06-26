var translate = function(sentence){
  var vowels = ["a","e","i","o","u"]
  var splitstring = sentence.split("")
  var pig = ["way"]
  var newWord
  for(x=0; x < splitstring.length; x++ ){
    vowels.forEach(function(letter){
      console.log(letter)
    if(splitstring[x]===letter){
     newWord = splitstring.splice(x, splitstring.length) + splitstring.splice(0,x).join("") + "way"
  }

  });

    // if((x=="q")&&(x++)){
    //
    // }
  };
 output = splitstring.join("")+"way"
 console.log(splitstring)
 return newWord
};



// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var pig = parseInt($("input#year").val())

    var words = $('#words').val()

    var splitstring = translate(words)

    $('#output').append(splitstring)

})


  });
