function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");

const input = controls.children[0];
const createButton = controls.children[1];
const deleteButton = controls.children[2];

const boxes = document.querySelector("#boxes");

let size = 30;

function createBoxes(amount) {
    boxes.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        boxes.append(box);
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        size += 10;
    }
}


createButton.addEventListener("click", () => {
    const amount = input.value.trim();
    if (amount < 1 || amount > 100) {
        alert('Please give proper value');
    } else {
        createBoxes(amount);
        input.value = '';
    }
});

deleteButton.addEventListener("click", () => {
    boxes.innerHTML = '';
});



