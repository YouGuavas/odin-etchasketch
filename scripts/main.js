window.onload = makeDivs(16);

function makeDivs(myVal) {
	var myCont = document.querySelector(".container"), myArr = [];
	var myWidth = getComputedStyle(myCont).width.replace('px', ''), myHeight = getComputedStyle(myCont).height.replace('px', '');
	var pixHeight = myHeight/myVal, pixWidth = myWidth/myVal;
	myWidth = myWidth +'px', myHeight = myHeight + 'px', pixHeight = pixHeight + 'px', pixWidth = pixWidth + 'px';
	for (var m = 0; m < myVal; m++) {
		myArr.push('<div class="rows" style="height:'+pixHeight+';width:'+myWidth+';">');
		for (var i = 0; i < myVal; i++) {
			myArr.push('<div class="square" style="height:'+pixHeight+';width:'+pixWidth+';"></div>');
		}
		myArr.push("</div>");
	}
	myCont.innerHTML = myArr.join('');
	var myClass = document.getElementsByClassName("square");

	for (var i = 0; i < myClass.length; i++) {
		myClass[i].addEventListener('mouseover', makeColors);
	}
}
function makeColors() {
	if (this.className.indexOf("lit") == -1)
		this.className += ' lit';
}

document.getElementById("reset").addEventListener("click", function() {
	makeDivs(prompt("How many pixels?"));
})