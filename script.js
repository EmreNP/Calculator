const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button')
const specialChars = ['+','-','√','*','/','%']

let output="";

const calculate = (buttonValue) => {
    console.log(buttonValue);
    if(buttonValue ==="="){
       screen.value=eval(output.replace("%","/100"))
    }
    else if(buttonValue==="CE"){
        output="";
        screen.value="";
    }
    else if(buttonValue==="C"){
        output=output.toString().slice(0,-1);
        screen.value=output;
    }
    else if(specialChars.includes(buttonValue)){
        specialChars.includes(output.substring(-1)) 
        ? output=output.substring(0, output.length - 1) + buttonValue
        : output+=buttonValue;
        screen.value="";
    }
    else{
        output+=buttonValue;
        screen.value+=buttonValue;
    }
    console.log(output);
}


buttons.forEach((button)=> {
    button.addEventListener("click",(e)=> calculate(e.target.value));
})