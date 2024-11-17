const patternElement = document.getElementById("pattern");

const countY = Math.ceil(patternElement.clientHeight / 40) + 1;
const countX = Math.ceil(patternElement.clientWidth / 48) + 1;
const gap = 2;

for (let i = 0; i < countY; i++) {
  for (let j = 0; j < countX; j++) {
    const hexagon = document.createElement("div");
    hexagon.style = `
    //   background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat;
      width: 44px;
      height: 50px;
      background-size: contain;
      position: absolute;
      top: ${i * 40}px;
      left: ${j * 48 + ((i * 24) % 48)}px;
    `;

    patternElement.appendChild(hexagon);
  }
}

let mousePosition = {
  x: 0,
  y: 0
};

document.addEventListener("mousemove", (mouse) => {
  mousePosition = {
    x: mouse.clientX,
    y: mouse.clientY
  };
});

const loop = () => {
  const gradientElement = document.getElementById("gradient");

  gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;

  // Request the next animation frame
  window.requestAnimationFrame(loop);
};

// Start the animation loop
window.requestAnimationFrame(loop);
