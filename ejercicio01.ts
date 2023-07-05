// Ejercicio pedido por Amazon

function countUniqueSteps(N: number, X: number[]): number {
  const memo: number[] = [];

  function helper(n: number): number {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (memo[n]) return memo[n];

    let total = 0;
    for (let i = 0; i < X.length; i++) {
      total += helper(n - X[i]);
    }

    return memo[n] = total;
  }

  return helper(N);
}

function printUniqueSteps(N: number, X: number[]): void {
  const uniqueSteps = countUniqueSteps(N, X);
  console.log(`El número de formas únicas de subir la escalera es: ${uniqueSteps}`);

  console.log("Formas únicas de subir la escalera:");
  generateUniqueSteps(N, X, "");
}

function generateUniqueSteps(N: number, X: number[], path: string): void {
  if (N === 0) {
    console.log(path);
    return;
  }

  if (N < 0) return;

  for (let i = 0; i < X.length; i++) {
    generateUniqueSteps(N - X[i], X, path + X[i] + " ");
  }
}

const N1 = 5;
const X1 = [1, 2];
printUniqueSteps(N1, X1);
