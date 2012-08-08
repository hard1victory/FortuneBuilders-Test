// JavaScript Document
window.onload = initAll;

function initAll() {
	
}

/*
function initAll() {
	var ans = prompt("Enter a number","999");
	
	try {
		if (!ans || isNaN(ans) || ans<0) {
			throw new Error("Not a valid number");
		}
		alert("Square Root of " + ans + " = " + Math.sqrt(ans));		
	}
	catch (errMsg) {
		alert(errMsg.message);
	}
}
*/

/*
function initAll() {
	switch(navigator.platform) {
		case "Win32":
			alert("Running Windows");
			break;
		case "MacPPC":
			alert("Running Mac");
			break;
		case "MacIntel":
		case "X11":
			alert("Running Intel Mac");
			break;
		default:
			alert("Running" + navigator.platform);
	}
}
*/

/*
function initAll() {
	document.getElementById("redirect").onclick = clickHandler;
}

function clickHandler() {
	if (this.toString().indexOf("oz") < 0) {
		alert("Leaving the site!");
		return false;
	}
}
*/