for (let i = 0; i < 16*16; i++) {
    const container = document.getElementById("container");
    const grid = document.createElement("div");
    grid.classList.add("grid")
    grid.addEventListener("mouseover", () => {
        grid.setAttribute("style", "background-color: black;");
    })
    container.appendChild(grid);
}
