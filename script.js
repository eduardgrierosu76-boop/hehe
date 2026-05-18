let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let cat = document.getElementById("cat");

// When she clicks YES → redirect
yesBtn.onclick = () => {
    window.location.href = "https://example.com"; // change this later
};

// When she clicks NO → shrink NO, grow YES, change cat face
noBtn.onclick = () => {
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);

    noBtn.style.fontSize = (noSize - 5) + "px";
    yesBtn.style.fontSize = (yesSize + 5) + "px";

    cat.src = "cat-sad.png"; // second cat face
};
