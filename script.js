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

    // MASSIVE YES GROWTH
    let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (yesSize * 1.7) + "px";

    // Shrink NO
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = (noSize - 5) + "px";

    // Change cat face
    cat.src = "cat-sad.png";
};

/* ❤️ Heart loading animation: 0 → 1 → 2 → 3 → 0 → repeat */
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
    shape.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(shape);

    setTimeout(() => shape.remove(), 5000);
}

setInterval(createFallingShape, 700);

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

setInterval(createSparkle, 900);

/* 🦋 Butterflies */
function createButterfly() {
    const butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.textContent = "🦋";

    butterfly.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(butterfly);

    setTimeout(() => butterfly.remove(), 6000);
}

setInterval(createButterfly, 4000);
