const library = document.getElementById("libraryDiv")
const libraryGlowingContainer = document.getElementById("yellowPhoneContainer")
const challenge1container = document.getElementById("challenge3Container")
const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const letter3 = document.getElementById("letter3");
const letter4 = document.getElementById("letter4");
const letter5 = document.getElementById("letter5");
const letter6 = document.getElementById("letter6");
const patataButton = document.getElementById("patataButton")
const test1 = document.getElementById("test1")
const glowingPhoneCont = document.getElementById("glowingPhoneContainer")
const challenge2Container = document.getElementById("challenge2Container")
let audio = new Audio("./audio/ring.wav")
const glowingPhone = document.getElementById("glowingPhone")
const voice = new Audio("./audio/findTheX.mp3")
let result = "PATATA"

library.addEventListener("click",()=>{
    libraryGlowingContainer.style.display = "none"
    challenge1container.style.display = "flex"
})

patataButton.addEventListener("click", ()=>{
    let l1 = letter1.value.toUpperCase()
    let l2 = letter2.value.toUpperCase()
    let l3 = letter3.value.toUpperCase()
    let l4 = letter4.value.toUpperCase()
    let l5 = letter5.value.toUpperCase()
    let l6 = letter6.value.toUpperCase()
    let answer = l1+l2+l3+l4+l5+l6
    if(answer===result){
        test1.classList.add("turnGreen");
        challenge1container.style.display = "none"
        glowingPhoneCont.style.display="block"
        audio.play()
    }else{
        patataButton.style.color = "red";
        patataButton.style.fontWeight = "bold"
        patataButton.innerText = "incorrect"
    }
})

glowingPhone.addEventListener("click", ()=>{
    audio.pause()
    voice.play()
    setTimeout(function() {
    glowingPhoneCont.style.display="none"
    challenge2Container.style.display = "block"
    }, 8000)
})