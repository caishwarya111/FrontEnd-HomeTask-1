const a = process.argv.slice(2);

if (a.length < 3) {
  console.log("Invalid input: Insufficient number of arguments");
} else {
  const operation = a[0].toLowerCase();
  const values = a.slice(1).map(Number);

  switch (operation) {
    case "addition":
      const sum = values.reduce((total, value) => total + value);
      console.log(`${values.join("+")} = ${sum}`);
      break;

    case "subtraction":
      if (values.length !== 2) {
        console.log("Invalid input: Subtraction takes 2 values");
      } else {
        const difference = values[0] - values[1];
        console.log(`${values[0]}-${values[1]} = ${difference}`);
      }
      break;

    case "multiply":
      const product = values.reduce((total, value) => total * value);
      console.log(`${values.join("*")} = ${product}`);
      break;

    case "division":
      if (values.length !== 2) {
        console.log("Invalid input: Division takes 2 values");
      } else if (values[1] === 0) {
        console.log("Invalid input: Division by zero");
      } else {
        const quotient = values[0] / values[1];
        console.log(`${values[0]}/${values[1]} = ${quotient}`);
      }
      break;

    default:
      console.log("Unsupported operation");
  }
}
