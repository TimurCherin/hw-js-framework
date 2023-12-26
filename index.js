import {notice, info, success, error} from './node_modules/@pnotify/core/dist/PNotify.js';
// const { alert, notice, info, success, error, defaultModules } = require('@pnotify/core/dist/PNotify.js')
import * as PNotifyMobile from './node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
const myNotice = notice({
text: "I'm a notice.",
});
const myInfo = info({
text: "I'm an info message.",
});
const mySuccess = success({
text: "I'm a success message.",
});
const myError = error({
text: "I'm an error message.",
});
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
        if (currentKeyIndex > keys.length - 1
        ) {
            const mySuccess = success({
            text: "You are winner",
        });
            text.textContent =  `1111`;
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
