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

    // Exponential growth
    yesBtn.style.fontSize = (yesSize * 1.6) + "px";

    // Shrink NO normally
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = (noSize - 5) + "px";

    // Change cat face
    cat.src = "cat-sad.png";
};

/* ❤️ Cycling hearts: 1 → 2 → 3 → 0 → repeat */
let cycle = 1;

setInterval(() => {
    if (cycle === 1) counter.textContent = "❤️";
    if (cycle === 2) counter.textContent = "❤️❤️";
    if (cycle === 3) counter.textContent = "❤️❤️❤️";
    if (cycle === 0) counter.textContent = "";

    cycle++;
    if (cycle > 3) cycle = 0;

}, 800);

/* 💜 Falling shapes */
const shapes = ["💜", "💖", "💙", "💗", "⭐"];

function createFallingShape() {
    const shape = document.createElement("div");
    shape.classList.add("fall");
    shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];

    shape.style.left = Math.random() * window.innerWidth + "px";
    shape.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(shape);

    setTimeout(() => shape.remove(), 5000);
}

setInterval(createFallingShape, 250);
