window.onload = makeDivs();

function makeDivs() {
	var myCont = document.querySelector(".container"), myArr = [];
	for (var m = 0; m < 16; m++) {
		myArr.push('<div class="rows">');
		for (var i = 0; i < 16; i++) {
			myArr.push('<div class="square"></div>');
		}
		myArr.push("</div>");
	}
	myCont.innerHTML = myArr.join('');
}
var myClass = document.getElementsByClassName("square");
function makeColors() {
	if (this.className.indexOf("lit") == -1)
		this.className += ' lit';
}
for (var i = 0; i < myClass.length; i++) {
	myClass[i].addEventListener('mouseover', makeColors);
}