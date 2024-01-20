const loanAmountEl = document.getElementById("loan-amount");
const interestRateEl = document.getElementById("interest-rate");
const monthToPayEl = document.getElementById("months-to-pay");

function calculateLoan() {
  const loanAmountValue = loanAmountEl.value;
  const interestRateValue = interestRateEl.value;
  const monthToPayValue = monthToPayEl.value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthToPayValue;

  monthlypayment = (loanAmountValue / monthToPayValue + interest).toFixed(2);

  document.getElementById(
    "payment"
  ).innerText = `Monthly Payment: ${monthlypayment}`;
}
