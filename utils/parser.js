import _ from "lodash";

export function parseNumbers(input) {
  // Convert each string to a number
  const numbers = _.map(input, (str) => Number(str));

  // Remove falsy values like NaN, null, "", etc.
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

