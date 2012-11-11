var question_length=5;
var count = question_length;
var sub
var starting_width
var width 
var quote = 0
var quotes = ['"WWJD?"',
  '"How do you get inspiration for your songs?"'
 '"Dude, where\'s my car?"', 
 '"Are you Sarah Connor?"', 
 '"Why is the rum gone?"', 
 '"What can we do for America?"']

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
    if (quote>quotes.length) quote =0;
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

function increment() 
{
  var str = $('#yeah-btn').text();
  var int = parseInt(str.substr(6));
  int++;
  $('#yeah-btn').text("Yeah: "+int)
}

function incrementYeah() 
{
  var str = $('#yeah-btn').text();
  var int = parseInt(str.substr(6));
  int++;
  $('#yeah-btn').text("Yeah: "+int)
}

function incrementBoo() 
{
  var str = $('#boo-btn').text();
  var int = parseInt(str.substr(5));
  int++;
  $('#boo-btn').text("Boo: "+int)
}


var counter=setInterval(timer, 1000); //ms


$(document).ready(function(){
  $("#current-question-text").html('"Whyyyyy do you build me up, build me up?"');
  starting_width = calcWidth("bar");
  sub = width/count
  $('#yeah-btn').click(function() {
    incrementYeah()
  });
  $('#boo-btn').click(function() {
    incrementBoo()
  });
});


function incQ1() {
  var str = $('#Q1votes').text();
  var votes = parseInt(str);
  $('#Q1votes').text(votes+1)
}
function decQ1() {
  var str = $('#Q1votes').text();
  var votes = parseInt(str);
    $('#Q1votes').text(votes-1)
}

function incQ2() {
  var str = $('#Q2votes').text();
  var votes = parseInt(str);
  $('#Q2votes').text(votes+1)
}
function decQ2() {
  var str = $('#Q2votes').text();
  var votes = parseInt(str);
  $('#Q2votes').text(votes-1)
}

function incQ3() {
  var str = $('#Q3votes').text();
  var votes = parseInt(str);
  $('#Q3votes').text(votes+1)
}
function decQ3() {
  var str = $('#Q3votes').text();
  var votes = parseInt(str);
  $('#Q3votes').text(votes-1)
}
