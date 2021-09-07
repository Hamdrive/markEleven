var birthday = document.querySelector(".dob-input")
var luckyNumber = document.querySelector(".luckynumber-input");
var luckyBtn = document.querySelector("#check-btn");
var displayMessage = document.querySelector("#result-message");

function checkLucky(dob, luckydob){
    var sum = 0;
    for(var i=0; i<dob.length; i++){
        sum += Number(dob.charAt(i));
    }
    if(sum%luckydob == 0){
        showMessage("Your birthday is lucky!!");
    } else {
        showMessage("Sorry pal Your birthday is lucky!!");
    }
}

function formatInputs(dob, luckydob){
    dob = dob.replaceAll("-","");
    luckydob = Number(luckydob);
    checkLucky(dob, luckydob);
}

function getNumbers(){
    var dob = birthday.value;
    var luckydob = luckyNumber.value;
    if(dob && luckydob){
        formatInputs(dob, luckydob);
    } else {
        showMessage("Oops! Please enter values in both fields")
    }
}

function showMessage(userMessage){
    displayMessage.innerHTML = userMessage
}
luckyBtn.addEventListener("click", getNumbers);
