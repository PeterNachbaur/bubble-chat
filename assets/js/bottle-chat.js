var question_length=5;
var count = question_length;
var sub
var starting_width
var width 
var quote = 0
var quotes = ['WWJD?', 'Dude, where\'s my car', 'Are you Sarah Connor?', 'Why is the rum gone?', 'What can we do for America?']

function timer()
{
  
  count=count-1;
  $(".timer").html(count);
  width=width-sub;
  $(".bar").width(width);
  if (count <= 0)
  {
    $(".timer").html(0);
    $(".bar").width(width);
    clearInterval(counter);
    width = starting_width;
    $(".timer").html(0);
    count = question_length;
    $("#current-question-text").html(quotes[quote]);
    quote++;
    counter = setInterval(timer, 1000); //ms
  }

}

function calcWidth(classname) 
{ 
  console.log("in calcwidth")
  width = $('#'+classname+'').width();
  console.log(width)
  return width
}


var counter=setInterval(timer, 1000); //ms


$(document).ready(function(){
  starting_width = calcWidth("bar");
  sub = width/count
});
