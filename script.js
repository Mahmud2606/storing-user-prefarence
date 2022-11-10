// definding element
const selectFontSize = document.getElementById("select-font-size");
const selectBgColor = document.getElementById("select-bg-color");
const resetButton = document.getElementById("reset-button");
const mainElement = document.querySelector("main");

setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.background = bgColor;
}

loadLocalStorageValue = () => {
    let fontSize = localStorage.getItem("font-size")
    let bgColor = localStorage.getItem("background")
    if(fontSize && bgColor){
       setValues(fontSize, bgColor);
    }
    if(!fontSize && !bgColor){
       setValues("16px", "aqua");
    }
    if(!fontSize && bgColor){
       setValues("16px", bgColor);
    }
    if(fontSize && !bgColor){
       setValues(fontSize, "aqua");
    }
}

function changeFontSize(event) {
    mainElement.style.fontSize = event.target.value;
    localStorage.setItem("font-size", event.target.value);
}

changeBgColor = (event) => {
  mainElement.style.background = event.target.value;
  localStorage.setItem("background", event.target.value)
}

clearLocalStorage = () => {
    localStorage.removeItem("font-size")
    localStorage.removeItem("background")
    setValues("16px", "aqua");
}

// adding listener
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);
loadLocalStorageValue();