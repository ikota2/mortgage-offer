export function decoratePercent(digit) {
  const arrFromDigit = Array.from("" + digit);
  const result = [];
  for (let i of arrFromDigit) {
    if (i === ".") {
      i = ",";
    }
    result.push(i);
  }
  return result.join("") + " %";
}
