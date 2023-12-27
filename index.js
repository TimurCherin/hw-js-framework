                                                        // ex 1
const game = document.querySelector(".game")
const btn = document.querySelector(".startBtn")
const text = document.createElement("p")
const keys = ["h", "d", "s", "q", "r", "t", "n", "g", "v", "x"]
let currentKeyIndex = 0;
let key = keys[currentKeyIndex];
text.setAttribute("id", key)
text.textContent = `Натисніть кнопку "${key}" щоб продовжити грати`;
game.appendChild(text)
window.addEventListener("keydown", checkBtn);
function checkBtn(e) {
    if (key === e.key) {
    currentKeyIndex += 1
        if (currentKeyIndex > keys.length - 1) {
        PNotify.success({
        text: "Ви перемогли",
        delay: 2000,
        });
            text.textContent = "Перемога!!!";
            return
        }
        key = keys[currentKeyIndex]
        text.setAttribute("id", key)
        text.textContent = `Натисніть кнопку "${key}" щоб продовжити грати`;
    } else {
        PNotify.error({
        text: "Ви натиснули не вірну клавішу",
        delay: 2000,
        });
 }
}
btn.addEventListener("click", start)
function start() {
    currentKeyIndex = 0;
    key = keys[currentKeyIndex]
    text.setAttribute("id", key)
    text.textContent = `Натисніть кнопку "${key}" щоб продовжити грати`;
}
                                                            // ex 2
// import Chart from './node_modules/chart.js';
console.log(Chart)
const stats = document.querySelector("#sales-chart")
const newStats = document.querySelector("#new-sales-chart")
const chartData = {
labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
datasets: [{
label: 'Продажі за останній місяць',
data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
backgroundColor: '#2196f3',
borderColor: '#2196f3',
borderWidth: 1
}]
};
const config = {
type: 'line',
data: chartData,
options: {}
};
const newConfig = {
type: 'bar',
data: chartData,
options: {}
};
const salesChart = new Chart(
stats,
config
);
const newSalesChart = new Chart(
newStats,
newConfig
);