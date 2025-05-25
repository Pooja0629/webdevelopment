const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

document.getElementById("equals").addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (e) {
    display.value = "Error";
    currentInput = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});
