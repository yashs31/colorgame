var color=[];

var numSquares=6;
var color=generateColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor= randomColorPicker();
var colorDisplay=document.getElementById("colorDisplay")
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

// 3 colors in color[] array for easy
easybtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    resetButton.textContent="NEW COLORS!"
    hardbtn.classList.remove("selectedDifficulty");
    easybtn.classList.add("selectedDifficulty");
    numSquares=3;
    color=generateColors(numSquares);
    pickedColor=randomColorPicker();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {   //if color present at this index
        if(color[i]){
            squares[i].style.backgroundColor=color[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})

hardbtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    resetButton.textContent="NEW COLORS!"
    hardbtn.classList.add("selectedDifficulty");
    easybtn.classList.remove("selectedDifficulty");
    numSquares=6;
    color=generateColors(numSquares);
    pickedColor=randomColorPicker();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {   //if color present at this index
        squares[i].style.backgroundColor=color[i];
        squares[i].style.display="block";
    }
})

resetButton.addEventListener("click",function(){
    color=generateColors(numSquares);
    messageDisplay.textContent="";

    pickedColor=randomColorPicker();

    colorDisplay.textContent=pickedColor;

    this.textContent="NEW COLORS!"

    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color[i];
    }

    h1.style.backgroundColor="steelblue";
})

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
    // assign initial color to squares
    squares[i].style.backgroundColor=color[i];

    // add click listner to squares
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.backgroundColor;
        console.log(clickedcolor,pickedColor);
        if(clickedcolor===pickedColor)
        {   
            messageDisplay.textContent="U GUESSED IT !!";
            resetButton.textContent="PLAY AGAIN ?";
            changeColors(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="NAH!!!"
        }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}
function randomColorPicker()
{   //selects a color to ask user from the array of colors created
    //ie a random array index from 0-colorarr.length is picked to ask user
    var random=Math.floor(Math.random()*color.length)
    return color[random]    //returns a color from an array to ask user
}
function generateColors(num){
    var arr=[]
//generates 3 or 6 colors (num) in the array color
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());    //puts random colors in array (rgb(r,g,b))
    }
    return arr;
}

function randomColor(){
    // pick random red value
    var r=Math.floor(Math.random()*256);

    // pick random green value
    var g=Math.floor(Math.random()*256);

    // pick random blue value
    var b=Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}