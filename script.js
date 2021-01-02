//Sound Using Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) 
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() 
  {
    var buttonInnerHTML = this.innerHTML;
    makeDrumSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Sound Using Keyboard Press
document.addEventListener("keypress",function(event){
  makeDrumSound(event.key);
  buttonAnimation(event.key);
});


//Drum Sound Function
function makeDrumSound(key)
{
  switch(key) 
    {
      case "p":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "r":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "a":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "n":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "t":
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;

      case "o":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "b":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      default:
        console.log(key);
        break;
    }
}

//Button Animation Function
function buttonAnimation(activeKey)
{
  activeButton = document.querySelector("." + activeKey);
  activeButton.classList.add("pressed");
  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  },100);
}

