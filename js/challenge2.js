const chest = document.getElementById("lockMarker")
const lockImg = document.getElementById("imgLock")
const inputs = document.getElementById("officeMiddle")
const closingTag = document.getElementById("closingTag")
const clue1 = document.getElementById("painting1")
const clue1Img = document.getElementById("clue1")
const clue2Img = document.getElementById("clue2")
const clue2 = document.getElementById("painting2")
const clue3 = document.getElementById("painting3")
const clue3Img = document.getElementById("clue3")
const xOnMap = document.getElementById("xOnMap")
const closingTagMap = document.getElementById("closingTagMap")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const submitButton = document.getElementById("submitButton")
const secondChallengeContainer = document.getElementById("challenge2Container")
const lastChallengeCont = document.getElementById("lastChallengeContainer")
const test2 = document.getElementById("test2")
let answer = "2886"


chest.addEventListener("mouseover", ()=>{
    lockImg.style.display="block"
    inputs.style.display="flex"
    chest.style.display = "none"
    clue2.style.display = "none"
    clue1.style.display = "none"
    clue3.style.display = "none"
})
        
closingTag.addEventListener("click",()=>{
    inputs.style.display="none"
    lockImg.style.display="none"
    chest.style.display = "block"
    clue2.style.display = "block"
    clue1.style.display = "block"
    clue3.style.display = "block"
})

clue1.addEventListener("mouseover", ()=>{
    clue1Img.style.display="block"
    clue2.style.display = "none"
    chest.style.display="none"
    clue3.style.display="none"
})

clue1.addEventListener("mouseout", ()=>{
    clue1Img.style.display="none"
    clue2.style.display = "block"
    chest.style.display="block"
    clue3.style.display = "block"
})

clue2.addEventListener("mouseover", ()=>{
    clue2Img.style.display="block"
    chest.style.display="none"
    clue1.style.display = "none"
    clue3.style.display = "none"
})

clue2.addEventListener("mouseout", ()=>{
    clue2Img.style.display="none"
    chest.style.display="block"
    clue1.style.display = "block"
    clue3.style.display = "block"
})

clue3.addEventListener("mouseover", ()=>{
    clue3Img.style.display = "block"
    chest.style.display="none"
    clue1.style.display = "none"
    clue2.style.display = "none"
    clue3.style.display="none"
})

xOnMap.addEventListener("click", ()=>{
    xOnMap.innerHTML="2886"
})

closingTagMap.addEventListener("click", ()=>{
    clue3Img.style.display = "none"
    chest.style.display="block"
    clue1.style.display = "block"
    clue2.style.display = "block"
    clue3.style.display="block"
})

submitButton.addEventListener("click", ()=>{
    let i1 = input1.value;
    let i2 = input2.value;
    let i3 = input3.value;
    let i4 = input4.value;
    let str = i1+i2+i3+i4;
    if(str===answer){
        test2.classList.add("turnGreen");
        secondChallengeContainer.style.display="none"
        lastChallengeCont.style.display="block"
    } 
})







