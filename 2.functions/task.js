function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] > max) {
      max = arr[i];
    } else if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum/arr.length).toFixed(2));
  
  return {min: min, max: max, avg: avg};
}


function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
 let sumEvenElement = 0;
 let sumOddElement = 0;

 for (let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    } else {
    sumOddElement += arr[i];
    }   
  }
  
  return sumEvenElement - sumOddElement;
} 
 
function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;


  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
 
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);

    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}
