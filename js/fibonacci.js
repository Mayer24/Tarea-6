//F I B O N A C C I 
//Se comienza con los dos primeros números de la secuenia,
// luego un array para los números Fibonacci
// Se suman los dos últimos números de la secuencia y detener la secuencia al exceder 1000
// se agregan los números de la secuencia fibonacci, los pares e impares a la secuencia y se manda a consola

const fibonacci = () => {
    let fib = [0, 1];
    for (let i = 2; i <= 1000; i++) {
      let nextFib = fib[i - 1] + fib[i - 2];
      if (nextFib > 1000) break;
      fib.push(nextFib);
    }
    return fib;
  };

    console.log('Secuencia Fibonacci: ', fibonacci());



  
  const fibonacciPares = () => {
    let fib = [0, 1]
    let pares = []
    for (let i = 2; i <= 1000; i++) {
      let nextFib = fib[i - 1] + fib[i - 2] 
      if (nextFib > 1000) break
      fib.push(nextFib)
      
      // Verificar si el número es par
      if (nextFib % 2 === 0) {
        pares.push(nextFib); // Agregar los números pares al array
      }
    }
    return pares;
  };
  
  console.log('Fibonacci sólo números pares: ', fibonacciPares());
  

  

  const fibonacciImpares = () => {
  let fib = [0, 1]
  let impares = []
  for (let i = 2; i <= 1000; i++) {
    let nextFib = fib[i - 1] + fib[i - 2]
    if (nextFib > 1000) break
    fib.push(nextFib)
    
    // Verificar si el número es impar
    if (nextFib % 2 !== 0) {
      impares.push(nextFib); // Agregar los números impares al array
    }
  }
  return impares;
};

console.log('Fibonacci sólo números impares: ', fibonacciImpares());
