const game = document.querySelector(".game")
const btn = document.querySelector(".startBtn")
const text = document.createElement("p")
const keys = ["h", "d", "s", "q", "r", "t", "n", "g", "v", "x"]
currentKeyIndex = 0;
let key = keys[currentKeyIndex];
text.setAttribute("id", key)
text.textContent = `Натисніть кнопку "${key}" щоб продовжити грати`;
game.appendChild(text)
window.addEventListener("keydown", checkBtn);
function checkBtn(e) {
    if (key === e.key) {
    currentKeyIndex += 1
        key = keys[currentKeyIndex]
        text.setAttribute("id", key)
        text.textContent = `Натисніть кнопку "${key}" щоб продовжити грати`;
        if (currentKeyIndex === 10) {
            text.textContent = `Ви перемогли`;
            text.setAttribute("id", "Ви перемогли")
        }
    } else {
        alert("Ви натиснули не вірну кномпку")
 }
}
btn.addEventListener("click", start)
function start() {
    currentKeyIndex = 0;
    key = keys[currentKeyIndex]
    text.setAttribute("id", key)
    text.textContent = `Натисніть кнопку "${key}" щоб продовжити грати`;
}
