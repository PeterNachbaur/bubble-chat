var count=60;
var sub
var width

var counter=setInterval(timer, 1000); //ms


function timer()
{
  count=count-1;
  width=width-sub;

  document.getElementById("timer").innerHTML=count + ""; 
  console.log(width)
  $(".bar").width(width);
  console.log(count)
  if (count <= 0)
  {
    document.getElementById("timer").innerHTML= "0";
    $(".bar").width(width);
    clearInterval(counter);
    return;
  }

}

function calcWidth(classname) 
{ 
  console.log("in calcwidth")
  width = $('#'+classname+'').width();
  console.log(width)
  return width
}

$(document).ready(function(){
  width = calcWidth("bar");
  sub = width/count
  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
});
