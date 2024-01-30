console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      const result = divide(a, b);
      console.log("${a} times ${b} equals to ${result}");
    } catch (error) {
      console.log(
        "Please pass a number rather than zero as the divisor, thanks!"
      );
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});

/* if (b === 0) {
  throw new Error("Cannot divide by zero!");
} */
