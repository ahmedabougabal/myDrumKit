//document.querySelector('button').addEventListener('click', handleClick);
//document.querySelector('.a').addEventListener('click', function handleClick(){alert('i am clicked tooo');});
//document.querySelector('.s').addEventListener('click', function handleClick(){alert('i am clicked tooo');});
//document.querySelector('.d').addEventListener('click', function handleClick(){alert('i am clicked tooo');});
//document.querySelector('.j').addEventListener('click', function handleClick(){alert('i am clicked tooo');});
//document.querySelector('.k').addEventListener('click', function handleClick(){alert('i am clicked tooo');});
//
//function handleClick(){
//  alert('i got clicked');
//}


// what to do if i want a shortcut instead if writing all of these lines of codes using a for loop.
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    var buttonInnerHTML = this.innerHTML;
    animation(this.innerHTML);
    switch (buttonInnerHTML) {
      case 'w':
        var tom1 = new Audio('tom-1.mp3');
        tom1.play();
        break;
      case 'a':
        var tom2 = new Audio('tom-2.mp3');
        tom2.play();
        break;
      case 's':
        var tom3 = new Audio('tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        var tom4 = new Audio('tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        var snare = new Audio('snare.mp3');
        snare.play();
        break;
      case 'k':
        var crash = new Audio('crash.mp3');
        crash.play();
        break;
      case 'l':
        var kick = new Audio('kick-bass.mp3');
        kick.play();
        break;

      default:
        console.log(buttonInnerHTML);

    }
  });

}

// first parameter is not camel cased, remember that ma nigga!
document.addEventListener('keypress', function(event){
  var makeSound= event.key;
  animation(event.key);
  switch (makeSound) {
  case 'w':
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
  case 'a':
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
  case 's':
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
  case 'd':
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
  case 'j':
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;
  case 'k':
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;
  case 'l':
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break
  default:
    console.log(makeSound);

}});



function animation(currentKey){
var animate= document.querySelector('.' + currentKey);
animate.classList.add('pressed');
setTimeout(function(){
animate.classList.remove('pressed');
}, 100);}



























//var audio= new Audio('sounds/tom-1.mp3');
//audio.play();

//var houseKeeper1={
//name: 'zezoElMayestro',
//age: 24,
//WorkUnderPressure: true,
//availability: 'fullTime',
//languages:['arabic','italian'
//}
