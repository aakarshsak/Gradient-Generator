var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var css=document.getElementById("gradient");
var curr=document.querySelector("h4");


function changeCurrentName(){
	var val = "linear-gradient(to right, "
	+color1.value+", "
	+color2.value+")";
	curr.textContent =val+ ";";
}

function setBackground(){
	css.style.background = "linear-gradient(to right, "
	+color1.value+", "
	+color2.value+")";

}


function doStuff(){
	setBackground();
	changeCurrentName();
}

color1.addEventListener("input",doStuff);

color2.addEventListener("input",doStuff);

