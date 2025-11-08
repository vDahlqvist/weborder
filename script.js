window.onload = function() {
    const container = document.getElementById("container");
    const boxes = document.querySelectorAll(".content-box");

    boxes.forEach((box, index) => {
        box.style.left = Math.random() * (window.innerWidth - 620) + "px"; 
        box.style.top = (index * 220 + 200) + "px"; // Added 200px for header height
    });
};
