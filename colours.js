// JavaScript Document
function getColor()
  {
 var input = document.getElementById('colorInput').value;
 var input = input.replace(/[^A-Za-z-_0-9#]/g, "");
 color = input.toLowerCase();
 
 if (color.length <= 0) {
	 document.getElementById('colorOutput').innerHTML = "WAT?";}
	else {
switch (color){
    
    case "red":
        document.getElementById('colorOutput').innerHTML = "Red!";
        break;
    case 'blue':
        document.getElementById('colorOutput').innerHTML = "Blue!";
        break;
    case 'orange':
        document.getElementById('colorOutput').innerHTML = "Orange!";
        break;
    default:
        document.getElementById('colorOutput').innerHTML = color + " " + "is not a creative color >__<";
        break;
}
  }
  }