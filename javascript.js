function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const container = document.getElementById("container");
        const gridItems = document.createElement("div");
        gridItems.classList.add("gridItems")
        itemSize = 800 / size;
        gridItems.style.height = `${itemSize}px`;
        gridItems.style.width = `${itemSize}px`;
        gridItems.addEventListener("mouseover", () => {
            gridItems.style.backgroundColor = "black";
        })
        container.appendChild(gridItems);
    }
}

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", () => {
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    const size = parseInt(prompt("Enter desired grid size:", 32))
    if (size > 0 && size <= 100 && Math.floor(size) === size) {
        createGrid(size);
    } else {
        alert("Grid size must be between 1 and 100!!!");
        createGrid(16);
    }
});


createGrid(16)