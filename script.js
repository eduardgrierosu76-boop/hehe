let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let cat = document.getElementById("cat");

let noCount = 0;   // NEW — counts how many times she presses NO

// When she clicks YES → redirect
yesBtn.onclick = () => {
    window.location.href = "https://example.com"; // change this later
};

// When she clicks NO
noBtn.onclick = () => {

    noCount++;   // NEW — increase counter

    // If she pressed NO 6 times → send her to the sad page
    if (noCount >= 6) {
        window.location.href = "sad.html";   // NEW — this will be your sad page
        return;
    }

    // Normal shrinking/growing behavior
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);

    noBtn.style.fontSize = (noSize - 5) + "px";
    yesBtn.style.fontSize = (yesSize + 5) + "px";

    // Change cat face
    cat.src = "cat-sad.png";
};
