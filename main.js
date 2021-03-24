let toggleNavStatus = false;

let toggleNav = function() {
	let getVerticalBar = document.querySelector("#vertical-bar");
	let getButton = document.querySelector("#button");
	
	
	if (toggleNavStatus === false) {
		getVerticalBar.style.visibility = "visible";
		
		toggleNavStatus = true;
	}
	else if (toggleNavStatus === true) {
		getVerticalBar.style.visibility = "hidden";
		
		toggleNavStatus = false;
	}

}