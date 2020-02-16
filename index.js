for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    //
    // this.style.color = "white";

    var buttonLetter = this.innerHTML;

    switch (buttonLetter) {
      case "w":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "a":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "s":
        var kickbass = new Audio('sounds/kick-bass.mp3');
        kickbass.play();
        break;

      case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "k":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "l":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      default:
        console.log(buttonLetter);
    }

  });
}

document.addEventListener("keydown", function(e) {

  keyboardLetter = e.key;
  switch (keyboardLetter) {
    case "w":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "a":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "s":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default:
      console.log(keyboardLetter);
  }
});
