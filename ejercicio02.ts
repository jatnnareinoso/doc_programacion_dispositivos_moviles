// Ejercicio pedido por Uber

function shortestDist(s: string, c: string): number[] {
  const distances: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      distances.push(0);
    } else {
      let minDistance = Infinity;
      for (let j = 0; j < s.length; j++) {
        if (s[j] === c) {
          minDistance = Math.min(minDistance, Math.abs(i - j));
        }
      }
      distances.push(minDistance);
    }
  }

  return distances;
}

const s: string = 'Jatnna';
const c: string = 'a';
console.log(shortestDist(s, c));
