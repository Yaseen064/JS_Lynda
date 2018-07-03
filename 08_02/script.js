const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
function match()
{
    let enteredValue = testArea.value;
    let enteredValueLength = testArea.value.length;
    let subPara = originText.substr(0,enteredValueLength);

    console.log("Enetered Value -- "+enteredValue);
    console.log("subPara Value -- "+subPara);
    if(enteredValue == subPara){
        testWrapper.style.borderColor = "green";
    } else {
        testWrapper.style.borderColor = "orange";
    }
}

// Start the timer:
function start()
{
    let textLength = testArea.value.length;
    console.log(textLength);
}

// Reset everything:


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start,false);
testArea.addEventListener("keyup", match,false);