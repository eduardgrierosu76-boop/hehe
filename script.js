let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let cat = document.getElementById("cat");
let counter = document.getElementById("heartCounter");

let noCount = 0;

// GIFs for each NO click
const gifs = [
    "cat-kiss.gif",                 // NO #1
    "happy-cat.gif",                // NO #2
    "cat-confused.gif",             // NO #3
    "ohno.gif",                     // NO #4
    "sad-cat.gif"                   // NO #5
];

// YES button → redirect
yesBtn.onclick = () => {
    window.location.href = "https://example.com"; 
};

// NO button → shrink NO, grow YES, change cat, count clicks
noBtn.onclick = () => {

    noCount++;

    // If more than 5 NOs → go to sad page
    if (noCount >= 6) {
        window.location.href = "sad.html";
        return;
    }

    // Change GIF based on NO count
    cat.src = gifs[noCount - 1];

    // MASSIVE YES GROWTH (mobile safe)
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
