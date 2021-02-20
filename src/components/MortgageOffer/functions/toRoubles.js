export function toRoubles(number) {
  number = Math.floor(number);
  const arrFromNumber = number.toString().split("").reverse();
  const result = [];
  for (let i = arrFromNumber.length - 1; i >= 0; i--) {
    result.push(arrFromNumber[i]);
    if (i % 3 === 0) {
      result.push(" ");
    }
  }
  return result.join("") + "₽";
}
