let colorPara = document.getElementById("color");
colorPara.textContent = "#F4F4F4";

document.getElementById("btn").onclick = function() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    colorPara.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
}