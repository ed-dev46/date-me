let buttonNao = document.querySelector("#btn-nao")
let buttonSim = document.querySelector("#btn-sim")

function getRandomPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const randomX = Math.random() * (width - buttonNao.offsetWidth);
    const randomY = Math.random() * (height - buttonNao.offsetHeight);
    return { x: randomX, y: randomY };
}

function moveButton() {
    const position = getRandomPosition();
    buttonNao.style.left = `${position.x}px`;
    buttonNao.style.top = `${position.y}px`;
}

buttonSim.addEventListener("click", function() {
    alert("hi")
})

setInterval(moveButton, 50);