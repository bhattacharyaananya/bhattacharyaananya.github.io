// Get the canvas element
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Initialize canvas size and columns
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let columns = Math.floor(canvasWidth / 20);
// console.log("current number of columns:"+columns);
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Function to update canvas size based on zoom level
window.addEventListener("wheel", (event) => {
  if (event.ctrlKey) {
    // Zooming in or out only if Ctrl key is pressed
    if (event.deltaY < 0) {
      // Zooming in
      canvasWidth *= 1.1;
      canvasHeight *= 1.1;
    } else {
      // Zooming out
      canvasWidth *= 0.9;
      canvasHeight *= 0.9;
    }
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    event.preventDefault(); // Prevent default scroll behavior

    // Update the number of columns based on the canvas width after zooming
    columns = Math.floor(canvasWidth / 20);
    // console.log("current number of columns:" + columns);

    yPositions.length = columns;
  }
});

// Function to update canvas size when window is resized
window.addEventListener("resize", () => {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Update the number of columns based on the canvas width after resizing
  columns = Math.floor(canvasWidth / 20);
  yPositions.length = columns;
});

// Create an array of characters
const characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "&",
  "#",
  "@",
  "!",
  "$",
  "%",
  "X"
];

// Initialize the y positions of the columns
const yPositions = [];
for (let i = 0; i < columns; i++) {
  yPositions[i] = Math.random() * canvasHeight;
}

// Update the matrix animation
function updateMatrix() {
  // Set the background color
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Set the text color and font
  ctx.fillStyle = "rgba(255, 0, 0, 1)";

  ctx.font = "13px timesnewroman";

  // Loop through each column
  for (let i = 0; i < columns; i++) {
    // Select a random character from the array
    const character = characters[Math.floor(Math.random() * characters.length)];

    // Set the y position of the current column
    const y = yPositions[i];

    // Draw the character at the current position
    ctx.fillText(character, i * 20, y);

    // Move the column down by 20 units
    yPositions[i] += 20;

    
    // Reset the position if it reaches the bottom of the canvas
    if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
      yPositions[i] = 0;
    }
  }
}

// Render the matrix animation
function renderMatrix() {
  requestAnimationFrame(renderMatrix);
  updateMatrix();
}

// Start the animation
renderMatrix();
