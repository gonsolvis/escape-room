const firstClue = document.getElementById("firstClue")
const firstClueImg = document.getElementById("imgVintage")
const thirdClueImg = document.getElementById("imgPolice")
const thirdClue = document.getElementById("thirdClue")
const secondClueImg = document.getElementById("imgLocker")
const secondClue = document.getElementById("secondClue")
const rightAnswer = document.getElementById("gHover")
const firstContainer = document.getElementsByClassName("challenge1Container")
firstClue.addEventListener("mouseover", ()=>{
firstClueImg.style.display = "block"
})
firstClue.addEventListener("mouseout", ()=>{
    firstClueImg.style.display = "none"
})
thirdClue.addEventListener("mouseover", ()=>{
    thirdClueImg.style.display = "block"
})
thirdClue.addEventListener("mouseout",()=>{
    thirdClueImg.style.display= "none"
})
secondClue.addEventListener("mouseover", ()=>{
    secondClueImg.style.display = "block"
})
secondClue.addEventListener("mouseout",()=>{
    secondClueImg.style.display= "none"
})

rightAnswer.addEventListener("click",()=>{
    firstContainer[0].style.display = "none"
})