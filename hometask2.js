const args = process.argv.slice(2);

if (args.length < 3) {
  console.error("Invalid input: Insufficient number of arguments");
  return;
}

const operation = args[0];
const values = args.slice(1);

if (!isValidOperation(operation)) {
  console.error(`Unsupported operation: ${operation}`);
  return;
}

if (!isValidInput(operation, values)) {
  console.error("Invalid input: Check the input values");
  return;
}

const parsedValues = values.map(parseValue);

let result;
switch (operation) {
  case "addition":
    result = parsedValues.reduce((acc, val) => acc + val, 0);
    break;
  case "subtraction":
    result = parsedValues[0] - parsedValues[1];
    break;
  case "multiplication":
    result = parsedValues.reduce((acc, val) => acc * val, 1);
    break;
  case "division":
    if (parsedValues[1] === 0) {
      console.error("Invalid input: Division by zero");
      return;
    }
    result = parsedValues[0] / parsedValues[1];
    break;
}

console.log(
  `${values.join(
    operation === "subtraction" || operation === "division" ? " " : "+"
  )} = ${result}`
);

function isValidOperation(operation) {
  const validOperations = [
    "addition",
    "subtraction",
    "multiplication",
    "division",
  ];
  return validOperations.includes(operation);
}

function isValidInput(operation, values) {
  if (operation === "addition" || operation === "multiplication") {
    return values.every(isNumber);
  } else if (operation === "subtraction" || operation === "division") {
    return values.length === 2 && values.every(isNumber);
  }
  return false;
}

function isNumber(value) {
  return !isNaN(parseValue(value));
}

function parseValue(value) {
  const parsed = Number(value);
  if (isNaN(parsed)) {
    throw new Error(`Invalid value: ${value}`);
  }
  return parsed;
}
