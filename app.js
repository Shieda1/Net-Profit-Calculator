// https://calculator.swiftutors.com/net-profit-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netProfitRadio = document.getElementById('netProfitRadio');
const totalRevenueRadio = document.getElementById('totalRevenueRadio');
const totalExpenseRadio = document.getElementById('totalExpenseRadio');

let netProfit;
let totalRevenue = v1;
let totalExpense = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

netProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Revenue';
  variable2.textContent = 'Total Expense';
  totalRevenue = v1;
  totalExpense = v2;
});

totalRevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Profit';
  variable2.textContent = 'Total Expense';
  netProfit = v1;
  totalExpense = v2;
});

totalExpenseRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Profit';
  variable2.textContent = 'Total Revenue';
  netProfit = v1;
  totalRevenue = v2;
});

btn.addEventListener('click', function() {
  
  if(netProfitRadio.checked)
    result.textContent = `Net Profit = ${computeNetProfit().toFixed(2)}`;

  else if(totalRevenueRadio.checked)
    result.textContent = `Total Revenue = ${computeTotalRevenue().toFixed(2)}`;

  else if(totalExpenseRadio.checked)
    result.textContent = `Total Expense = ${computeTotalExpense().toFixed(2)}`;
})

// calculation

function computeNetProfit() {
  return Number(totalRevenue.value) - Number(totalExpense.value);
}

function computeTotalRevenue() {
  return Number(netProfit.value) + Number(totalExpense.value);
}

function computeTotalExpense() {
  return Number(totalRevenue.value) - Number(netProfit.value);
}