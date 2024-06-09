var buttons = document.querySelectorAll(".drum")

for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        //alert("I got a click!");//
        /* this refer this object */
        // this.style.color = 'white';
        var buttonInnerHTML = this.innerHTML; // 获取触发点击事件的按钮的内部 HTML 内容
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

addEventListener("keydown", function(event) {
    // console.log(event)
    /* keydown的properties key*/
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;   
        
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;   
        
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;  
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("."+currentkey)
    activeButton.classList.add("pressed"); // 因为有一个class 叫.pressed
    setTimeout(function() {
        activeButton.classList.remove("pressed")
        }, 100);  // 前面是function，后面是间隔时间
    }

// function handleClick() {
//     alert("I got clicked");
// }

// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();