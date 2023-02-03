const presentationContainer = document.getElementById("presentationContainer")
const getStartedButton = document.getElementById("getStartedButton")
const explanationContainer = document.getElementById("explanationContainer")
const secondSentence = document.getElementById("secondSentence")
const thirdSentence = document.getElementById("thirdSentence")
const fourthSentence = document.getElementById("fourthSentence")
const libraryGlowing = document.getElementById("yellowPhoneContainer")
const navBar = document.getElementById("navBar")
const contador = document.getElementById("contador")
const loosingCondition = document.getElementById("loosingCondition")
const firstChallenge = document.getElementById("challenge3Container")
const glowingPhoneContainer = document.getElementById("glowingPhoneContainer")
const secondChallenge = document.getElementById("challenge2Container")
const lastChallengeContainer = document.getElementById("lastChallengeContainer")
const finalDoorCondition = document.getElementById("openingDoor")
const doorFront = document.getElementById("doorFront")
const g = document.getElementById("gHover")
const test3 = document.getElementById("test3")
const videoWinningCondition = document.getElementById("videoWinningCondition")
const doorOpeningContainer = document.getElementById("openingDoor")
const firstWinMessage = document.getElementById("firstWinMessage")
const secondWinMessage = document.getElementById("secondWinMessage")
let isGameGoing = true;
const startingMinutes = 2;
let time = startingMinutes * 60;
function updateContador() {
    time--
    let minutes = Math.floor(time / 60)
        let seconds = time % 60
            if (minutes < 10) {
                    minutes =`0${minutes}`
            } else {
                minutes = minutes;
            }
            if (seconds < 10) {
                seconds =`0${seconds}`
            } else {
                seconds = seconds;
            }
            contador.innerHTML=`Time left : ${minutes}:${seconds}`
            if(!isGameGoing){
                clearInterval(intervalTimer)
            }
            if(time == 0) {
                clearInterval(intervalTimer)
                if(isGameGoing){
                    presentationContainer.style.display = "none"
                    explanationContainer.style.display = "none"
                    libraryGlowing.style.display = "none"
                    firstChallenge.style.display = "none"
                    glowingPhoneContainer.style.display = "none"
                    lastChallengeContainer.style.display = "none"
                    secondChallenge.style.display = "none"
                    loosingCondition.style.display = "flex"
                }
            }
}

getStartedButton.addEventListener("click", ()=>{
    presentationContainer.classList.add("hidden");
    explanationContainer.style.display = "flex"
    setTimeout(function() {
        secondSentence.style.display = "block"
}, 4000);

setTimeout(function() {
        thirdSentence.style.display = "block"
}, 8000);  

setTimeout(function() {
        fourthSentence.style.display = "block"
}, 12000); 

setTimeout(function() {
    fourthSentence.style.display = "block"
}, 12000);

setTimeout(function() {
    explanationContainer.style.display = "none"
    libraryGlowing.style.display = "block"
    navBar.style.display = "flex"
    intervalTimer=setInterval(updateContador, 1000)
}, 16000);
})

g.addEventListener("click", ()=>{
    test3.classList.add("turnGreen");
    isGameGoing=false;
    lastChallengeContainer.style.display="none"
    finalDoorCondition.style.display="block"
    setTimeout(function() {
    doorFront.style.transform = "rotateY(-95deg)"
    }, 2000); 
    setTimeout(function() {
    doorOpeningContainer.style.display = "none"
    videoWinningCondition.style.display = "flex"
}, 5000); 
setTimeout(function() {
    firstWinMessage.style.display = "block"
}, 6000); 
setTimeout(function() {
    firstWinMessage.style.display = "none"
    secondWinMessage.style.display = "block"
}, 10000); 
})