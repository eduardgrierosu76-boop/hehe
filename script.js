let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let cat = document.getElementById("cat");
let counter = document.getElementById("heartCounter");

let noCount = 0;

// YES button → redirect
yesBtn.onclick = () => {
    window.location.href = "https://example.com"; 
};

// NO button → shrink NO, grow YES, change cat, count clicks
noBtn.onclick = () => {

    noCount++;

    if (noCount >= 6) {
        window.location.href = "sad.html";
        return;
    }

    // MOBILE‑SAFE YES GROWTH
    let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);

    // cap max size so it doesn't break mobile layout
    if (yesSize < 200) {
        yesBtn.style.fontSize = (yesSize * 1.55) + "px";
    }

    // Shrink NO
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (noSize > 10) {
        noBtn.style.fontSize = (noSize - 4) + "px";
    }

    // Change cat face
    cat.src = "cat-sad.png";
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
