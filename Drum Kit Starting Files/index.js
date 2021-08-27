var buttons = document.querySelectorAll(".drum");
var i = 0, len = buttons.length;

for (i ; i<len ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keydown", function handleKeyPress(event){
    var keyName = event.key;
    // console.log(keyName);
    makeSound(keyName);  
    addAnimation(keyName)  
});

function makeSound(key) {
    switch (key) {
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
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        default:
            console.log("Invalid selection.");        
            break;
    }
}

function addAnimation(key) {
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);
}