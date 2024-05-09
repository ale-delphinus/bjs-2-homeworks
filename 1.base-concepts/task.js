"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) ) / (2 * a);
    arr[1] = (-b - Math.sqrt(d) ) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  } 
  return arr;
}

solveEquation(1, 5, 4);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent/100/12;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalAmount = monthPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}

calculateTotalMortgage(10, 0, 50000, 12)
