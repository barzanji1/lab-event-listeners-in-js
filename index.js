// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const paragraph = document.getElementById('keyPressDisplay')
  if (paragraph) {
    paragraph.textContent = `Key pressed: ${event.key}`
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const input = document.getElementById('textInput')
  const display = document.getElementById('textInputDisplay')

  if (input && display) {
    display.textContent = `You typed: ${input.value}`
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Change background color on button click
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Reset background color on double-click
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Display key pressed
  document.addEventListener('keydown', displayKeyPress)

  // Display real-time input
  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}