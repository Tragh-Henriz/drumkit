// // let a = document.getElementById("a");
// //     function playAudio(){
// //         let audio = new Audio('tom1.mp3')
// //         audio.play();

// //     }
// // play.addEventListener("click", playAudio);


// function sounds(){
//     if(document.activeElement.id=="w"){
//         var audio=new Audio("sounds/tom-1.mp3")
//         audio.play();
        
//     }
//     else if(document.activeElement.id=="a"){
//      var audio=new Audio('sounds/tom-2.mp3')
//      audio.play();
//  }
//  else if(document.activeElement.id=="s"){
//      var audio=new Audio("tom-3.mp3");
//      audio.play();
//  }
//  else if(document.activeElement.id=="d"){
//      var audio=new Audio("tom-4.mp3");
//      audio.play();
//  }
//  else if(document.activeElement.id=="j"){
//      var audio=new Audio("snare.mp3");
//      audio.play();
//  }
//  else if(document.activeElement.id=="k"){
//      var audio=new Audio("crash.mp3");
//      audio.play();
//  }
//  else if(document.activeElement.id=="l"){
//      var audio=new Audio("kick-bass.mp3");
//      audio.play();
//  }

// }

// //keyboard effect
//  document.addEventListener("keypress",function(event){
//     if(event.key=="w"){
//         var audio=new Audio("tom-1.mp3");
//         audio.play();
//         document.getElementById("w").classList.add("add");
//         setTimeout(() =>{
//              document.getElementById("w").classList.remove("add")
//         },200);
        
     
//     }
//     else if(event.key=="a"){
//      var audio=new Audio("/sounds/tom-2.mp3");
//      audio.play();
//      document.getElementById("a").classList.add("add");
//         setTimeout(() =>{
//              document.getElementById("a").classList.remove("add")
//         },200);
//  }
//  else if(event.key=="s"){
//      var audio=new Audio("tom-3.mp3");
//      audio.play();
//      document.getElementById("s").classList.add("add");
//         setTimeout(() =>{
//              document.getElementById("s").classList.remove("add")
//         },200);
//  }
//  else if(event.key=="d"){
//      var audio=new Audio("tom-4.mp3");
//      audio.play();
//      document.getElementById("d").classList.add("add");
//         setTimeout(() =>{
//              document.getElementById("d").classList.remove("add")
//         },200);
//  }
//  else if(event.key=="j"){
//      var audio=new Audio("snare.mp3");
//      audio.play();
//      document.getElementById("j").classList.add("add");
//         setTimeout(() =>{
//              document.getElementById("j").classList.remove("add")
//         },200);
//  }
//  else if(event.key=="k"){
//      var audio=new Audio("crash.mp3");
//      audio.play();
//      document.getElementById("k").classList.add("add");
//         setTimeout(() =>{
//              document.getElementById("k").classList.remove("add")
//         },200);
//  }
//  else if(event.key=="l"){
//      var audio=new Audio("kick-bass.mp3");
//      audio.play();
//      document.getElementById("l").classList.add("add");
//         setTimeout(() =>{
//              document.getElementById("l").classList.remove("add")
//         },200);
//  }

//  })


// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        var buttonInnerHtml = this.innerHTML; //this keyword return the current line of code
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch(key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(buttonPressed) {
    var activeButton = document.querySelector("." + buttonPressed);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


