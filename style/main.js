var maximizeSizeBtn = document.querySelector(".bigSize");
var minimizeSizeBtn = document.querySelector(".minimizeSize");
console.log(maximizeSizeBtn);
console.log(minimizeSizeBtn);
function maximize(){
    document.querySelector("body").classList.add("size");
}

function minimize(){
    document.querySelector("body").classList.add("original");
}


minimizeSizeBtn.onclick = minimize;
maximizeSizeBtn.onclick = maximize;