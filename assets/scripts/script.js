//Variables
const inputField = document.querySelector("#inputField");
const outputField = document.querySelector("#outputField");
const form = document.querySelector("form");
let n;
let lowerValue = 0;
let upperValue = 1;
let computeValue;


form.onsubmit = function(){
    n = inputField.value;
    if(n == 1){
        outputField.innerHTML = 0;
    } else if(n == 2){
        outputField.innerHTML = 1;
    } else {
        calc();
    }
    return false; //stops page reloading on submit
};

function calc(){
    for(i = 2; i < n; i++){
        computeValue = lowerValue + upperValue;
        lowerValue = upperValue;
        upperValue = computeValue;
    }
    outputField.innerHTML = computeValue;
    lowerValue = 0;
    upperValue = 1;
};