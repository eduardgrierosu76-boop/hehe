let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let cat = document.getElementById("cat");
let counter = document.getElementById("heartCounter");

let noCount = 0;

// GIFs AFTER the first one
const gifs = [
    "happy-cat.gif",     // NO #1
    "cat-confused.gif",  // NO #2
    "ohno.gif",          // NO #3
    "sad-cat.gif"        // NO #4
];

// YES → go to yes.html
yesBtn.onclick = () => {
    window.location.href = "yes.html";
};

// NO → change GIF + grow YES + shrink NO
noBtn.onclick = () => {
    noCount++;

    if (noCount >= 5) {
        window.location.href = "sad.html";
        return;
    }

    cat.src = gifs[noCount - 1];

    let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (yesSize * 1.55) + "px";

    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = (noSize - 4) + "px";
};

// ❤️ Heart animation
let cycle = 0;
setInterval(() => {
    counter.textContent = ["", "❤️", "❤️❤️", "❤️❤️❤️"][cycle];
    cycle = (cycle + 1) % 4;
}, 700);

// 💜 Falling shapes
const shapes = ["💜", "💖", "💙", "💗", "⭐"];

function createFallingShape() {
    const shape = document.createElement("div");
    shape.classList.add("falling");
    shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    shape.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(shape);
    setTimeout(() => shape.remove(), 5000);
}
setInterval(createFallingShape, 900);

// ✨ Sparkles
function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.textContent = "✨";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
}
setInterval(createSparkle, 1200);

// 🦋 Butterflies
function createButterfly() {
    const butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.textContent = "🦋";
    butterfly.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(butterfly);
    setTimeout(() => butterfly.remove(), 7000);
}
setInterval(createButterfly, 5000);
