let th1 = document.getElementById("th1");
let th2 = document.getElementById("th2");
let th3 = document.getElementById("th3");

let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");

let screen = document.getElementById("screen");
// Changing theme

//Theme 1
th1.addEventListener("click", ()=>{
    theme1.style.visibility = "visible"
    theme2.style.visibility = "hidden"
    theme3.style.visibility = "hidden"
    document.getElementById("screen").style.backgroundColor = "hsl(224, 36%, 15%)";
    screen.style.color = "hsl(0, 0%, 100%)";
    document.getElementById("keypad").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.getElementById("calcTag").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("toggleView").style.backgroundColor = "hsl(223, 31%, 20%)";

    let i = 0;
    let button = document.getElementsByClassName("btn");
    while(i<button.length){
        button[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        button[i].style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        button[i].style.color = "hsl(60, 10%, 19%)";
        i++;
    }

    let j = 0;
    let reset = document.getElementsByClassName("reset");
    while(j<reset.length){
        reset[j].style.backgroundColor = "hsl(225, 21%, 49%)";
        reset[j].style.boxShadow = "0px 5px hsl(224, 28%, 35%)";
        j++;
    }
    
    document.getElementById("equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.getElementById("equal").style.boxShadow = "0px 5px hsl(6, 70%, 34%)";
    document.getElementById("equal").style.color = "hsl(0, 0%, 100%)";
})

//Theme 2
th2.addEventListener("click", ()=>{
    theme1.style.visibility = "hidden"
    theme2.style.visibility = "visible"
    theme3.style.visibility = "hidden"
    document.getElementById("screen").style.backgroundColor = "hsl(0, 0%, 93%)";
    screen.style.color = "hsl(60, 10%, 19%)";
    document.getElementById("keypad").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementById("calcTag").style.color = "hsl(60, 10%, 19%)";
    document.getElementById("toggleView").style.backgroundColor = "hsl(0, 5%, 81%)";

    let i = 0;
    let button = document.getElementsByClassName("btn");
    while(i<button.length){
        button[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        button[i].style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        button[i].style.color = "hsl(60, 10%, 19%)";
        i++;
    }

    let j = 0;
    let reset = document.getElementsByClassName("reset");
    while(j<reset.length){
        reset[j].style.backgroundColor = "hsl(185, 42%, 37%)";
        reset[j].style.boxShadow = "0px 5px hsl(185, 58%, 25%)";
        j++;
    }
    
    document.getElementById("equal").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementById("equal").style.boxShadow = "0px 5px hsl(25, 99%, 27%)";
    document.getElementById("equal").style.color = "hsl(0, 0%, 100%)";
})

//Theme 3
th3.addEventListener("click", ()=>{
    theme1.style.visibility = "hidden"
    theme2.style.visibility = "hidden"
    theme3.style.visibility = "visible"
    document.getElementById("screen").style.backgroundColor = "hsl(268, 71%, 12%)";
    screen.style.color = "hsl(52, 100%, 62%)";
    document.getElementById("keypad").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.getElementById("calcTag").style.color = "hsl(52, 100%, 62%)";
    document.getElementById("toggleView").style.backgroundColor = "hsl(268, 71%, 12%)";

    let i = 0;
    let button = document.getElementsByClassName("btn");
    while(i<button.length){
        button[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        button[i].style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        button[i].style.color = "hsl(52, 100%, 62%)";
        i++;
    }

    let j = 0;
    let reset = document.getElementsByClassName("reset");
    while(j<reset.length){
        reset[j].style.backgroundColor = "hsl(281, 89%, 26%)";
        reset[j].style.boxShadow = "0px 5px hsl(285, 91%, 52%)";
        j++;
    }
    
    document.getElementById("equal").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementById("equal").style.boxShadow = "0px 5px hsl(177, 92%, 70%)";
    document.getElementById("equal").style.color = "hsl(198, 20%, 13%)";
})

// Taking button values
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (const item of buttons) {
    item.addEventListener("click", (e)=>{
        buttonText = e.target.innerText;

        if(buttonText == "x"){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
            screen.value = screenValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")   //comma after 3 digits
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
            screenValue = screen.value;
            screen.value = screenValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        else if(buttonText == "RESET"){
            screenValue = "";
            screen.value = "";
        }
        else if(buttonText == "DEL"){
            screenValue = screenValue.toString().slice(0, -1);
            screen.value = screenValue;
            screen.value = screenValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        else{
            screenValue += buttonText
            screen.value = screenValue;
            screen.value = screenValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }

    })
}


