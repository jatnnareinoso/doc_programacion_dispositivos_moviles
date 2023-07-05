// Ejercicio pedido por Facebook


function smallestSubarraySum(arr: number[], S: number): number {
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (number < 0){
    console.log("El valor ingresado no es válido");
    return 0;
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

const array: number[] = [5, 3, 6, 1, 1, 2];
const number: number = 4;
console.log(smallestSubarraySum(array, number));
