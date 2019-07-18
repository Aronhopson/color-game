var numSquare = 6;
 var colors = genrandomcol(numSquare);
 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var cdisplay= document.getElementById("colorDisplay");
  var mdisplay= document.querySelector("#message");
  var h1 =document.querySelector("h1");
  var reset = document.querySelector("#Reset");
var iseasy = document.querySelector("#easy");
var ishard = document.querySelector("#hard");  

iseasy.addEventListener("click" , function(){
  ishard.classList.remove("selected");
  iseasy.classList.add("selected");
  numSquare = 2;
  colors = genrandomcol(numSquare);
  pickedColor = pickColor();
  cdisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
if (colors[i]){
  squares[i].style.background = colors[i];
  } else {

  squares[i].style.display = "none";
  }
}
});

ishard.addEventListener("click" , function(){
  ishard.classList.add("selected");
  iseasy.classList.remove("selected");
  numSquare = 6;
   colors = genrandomcol(numSquare);
  pickedColor = pickColor();
  cdisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].style.display = "block";
  }
 
});

  reset.addEventListener("click", function(){
  	//generate all new colors
  	colors = genrandomcol(numSquare);
  	//pick a new random color from array
  	 pickedColor = pickColor();
  	//change color of square
  	cdisplay.textContent = pickedColor;
    this.textContent="New Colors"

    mdisplay.textContent = "";
    //change color of square
  	 for(var i = 0; i <squares.length; i++) {
  	 	squares[i].style.background = colors[i];
  	 }
  	 h.style.background = "steelblue";
  });

 cdisplay.textContent = pickedColor;

 for(var i = 0; i <squares.length; i++) {
//add initail colors to squares   
 	squares[i].style.background = colors[i];
//add click listener to squares
 	squares[i].addEventListener("click", function(){
// grab color of click square
    var clickedColor = this.style.background;
    //compare color to pickedcolor
    console.log(clickedColor, pickedColor);

    if(clickedColor === pickedColor){
    	 mdisplay.textContent = "Correct";
    	 reset.textContent = "Play Again";
    	 cColor(clickedColor); 
    	 h1.style.background = clickedColor;
    	
     
     } else {
        this.style.background = " #232323";
        mdisplay.textContent = "Try Again";
    }

 	});
 }

function cColor(color){
	//loop through all square
	for(var i = 0; i<squares.length; i++){
		//cahnge each color to match
	
	squares[i].style.background = color;
}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function genrandomcol(num){
	//make arr
	var arr = []
	//add numramdom color
	for (var i = 0; i <= num; i++){
		arr.push(randomColor())

		//return that arr
	}
	return arr;
}

function randomColor(){
	//pick red
	var r = Math.floor(Math.random() *256);
	//pick green
	var g = Math.floor(Math.random() *256);
	//pick blue
	var b = Math.floor(Math.random() *256);

	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b +")";
}
