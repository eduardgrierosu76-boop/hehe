let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let cat = document.getElementById("cat");

let noCount = 0;   // counts how many times she presses NO

// YES button → redirect
yesBtn.onclick = () => {
    window.location.href = "https://example.com"; // change this to your real link
};

// NO button → shrink NO, grow YES, change cat, count clicks
noBtn.onclick = () => {

    noCount++;

    // After 6 NO presses → go to sad page
    if (noCount >= 6) {
        window.location.href = "sad.html";
        return;
    }

    // Shrink NO, grow YES
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);

    noBtn.style.fontSize = (noSize - 5) + "px";
    yesBtn.style.fontSize = (yesSize + 5) + "px";

    // Change cat face
    cat.src = "cat-sad.png";
};

/* ❤️ Falling hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 300);
