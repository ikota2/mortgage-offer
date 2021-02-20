export function calcMonthPayment(amount, term, rate) {
  const p = rate / 100 / 12;
  const x = (1 + p) ** term;

  const monthPayment = Math.floor((amount * p * x) / (x - 1));
  const total = monthPayment * term;
  const overpayment = total - amount;

  return {
    monthPayment,
    total,
    overpayment,
  };
}
