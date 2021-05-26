var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function imageClick(clickedId){
	document.getElementById("image_container").innerHTML = document.getElementById(clickedId).innerHTML;
	var i;
	for(i = 0; i < document.getElementsByTagName("LI").length;i++){
		document.getElementsByTagName("LI")[i].style.transform = null;
		document.getElementsByTagName("LI")[i].style.filter = null;
	}
	document.getElementById(clickedId).style.transform = "scale(1.1)";
	document.getElementById(clickedId).style.filter = "brightness(30%)";
}

function getSelectedValue( selectList ){
	return selectList[ selectList.selectedIndex ].value;
}

function backgroundChanger(formRef){
	var selectedValue = getSelectedValue(background_colour)
	document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgba(0,0,0,0.1)";
	document.getElementById("select_container").style.color = "white";
	switch(selectedValue){
		case("black"):
			document.body.style.backgroundColor = "black";
			break;
		case("blue"):
			document.body.style.backgroundColor = "rgba(0, 0, 30,1)";
			break;
		case("red"):
			document.body.style.backgroundColor = "rgba(30, 0, 0,1)";
			break;
		case("white"):
			document.body.style.backgroundColor = "rgba(255,255,255,1)";
			document.getElementById("select_container").style.color = "black";
			document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgba(0,0,0,0.5)";
			break;
		case("green"):
			document.body.style.backgroundColor = "rgba(3,30,0,1)";
			break;
	}
}

function textChanger(formRef){
	var selectedValue = getSelectedValue(text_colour)
	document.getElementById("image_container").style.color = "white";
	switch(selectedValue){
		case("black"):
			document.getElementById("image_container").style.color = "black";
			break;
		case("blue"):
			document.getElementById("image_container").style.color = "rgba(0, 0, 100,1)";
			break;
		case("red"):
			document.getElementById("image_container").style.color = "rgba(100, 0, 0,1)";
			break;
		case("white"):
			document.getElementById("image_container").style.color = "rgba(255,255,255,1)";
			break;
		case("green"):
			document.getElementById("image_container").style.color = "rgba(20,100,0,1)";
			break;
	}
}





