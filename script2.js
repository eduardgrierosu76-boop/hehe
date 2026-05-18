let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let cat = document.getElementById("cat");
let counter = document.getElementById("heartCounter");

let noCount = 0;

// GIFs AFTER the first one
// initial image = cat-kiss.gif (in index.html)
const gifs = [
    "happy-cat.gif",     // NO #1
    "cat-confused.gif",  // NO #2
    "ohno.gif",          // NO #3
    "sad-cat.gif"        // NO #4
];

// YES button → go to YES PAGE
yesBtn.onclick = () => {
    window.location.href = "yes.html";
};

// NO button → shrink NO, grow YES, change cat, count clicks
noBtn.onclick = () => {
    noCount++;

    // NO #5 → go to sad page
    if (noCount >= 5) {
        window.location.href = "sad.html";
        return;
    }

    // Change GIF based on NO count (1–4)
    cat.src = gifs[noCount - 1];

    // Grow YES (mobile-safe)
    let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    if (yesSize < 200) {
        yesBtn.style.fontSize = (yesSize * 1.55) + "px";
    }

    // Shrink NO
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (noSize > 10) {
        noBtn.style.fontSize = (noSize - 4) + "px";
    }
};

/* ❤️ Heart loading animation */
let cycle = 0;

setInterval(() => {
    if (cycle === 0) counter.textContent = "";
    if (cycle === 1) counter.textContent = "❤️";
    if (cycle === 2) counter.textContent = "❤️❤️";
    if (cycle === 3) counter.textContent = "❤️❤️❤️";

    cycle++;
    if (cycle > 3) cycle = 0;
}, 700);

/* 💜 Falling shapes */
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

/* ✨ Sparkles */
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

/* 🦋 Butterflies */
function createButterfly() {
    const butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.textContent = "🦋";
    butterfly.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(butterfly);
    setTimeout(() => butterfly.remove(), 7000);
}
setInterval(createButterfly, 5000);
