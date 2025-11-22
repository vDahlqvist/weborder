function positionBoxes() {
    const container = document.getElementById("container");
    const boxes = document.querySelectorAll(".content-box");
    const padding = 20; // horizontal padding from container edges
    let currentTop = 0;  // start stacking boxes vertically

    container.style.position = "relative"; // container is reference for absolute boxes
    boxes.forEach((box) => {
        const boxWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight;

        // Random horizontal position within container width
        const maxLeft = container.clientWidth - boxWidth - padding;
        const randomLeft = Math.random() * maxLeft;

        box.style.position = "absolute";
        box.style.left = randomLeft + "px";
        box.style.top = currentTop + "px";

        currentTop += boxHeight + 150; // stack vertically with 150px gap
    });

    // Adjust container height so footer is pushed below boxes
    const lastBox = boxes[boxes.length - 1];
    container.style.height = parseInt(lastBox.style.top) + lastBox.offsetHeight + 20 + "px";
}

// Run on page load
window.onload = positionBoxes;

// Re-run on window resize
window.onresize = positionBoxes;
