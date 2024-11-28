//F I B O N A C C I 
//considerando limite hasta mil, usando una función recursiva y devolviendolo en un array en consola
const fibonacci = (a=0, b=1, limite = 1000, secuencia =[a]) => 
    b >limite ? secuencia : fibonacci (b, a + b, limite,[...secuencia, b]);

console.log('Secuencia Fibonacci desde cero hasta mil: ');
console.log(fibonacci());

//secuencia fibonacci de numeros pares entre cero y mil
const numerosPares = (n=0, limite = 1000, pares =[]) =>
    n >limite ? pares : numerosPares (n+1, limite, n%2 === 0 ? [...pares, n] : pares);

console.log('Numeros pares entre cero y mil: ');
console.log(numerosPares());

//secuencia fibonacci de numeros impares entre cero y mil
const numerosImpares = (n=0,limite =1000, impares =[] ) =>
    n > limite ? impares: numerosImpares(n+1, limite, n%2 !== 0 ? [...impares, n] : impares);

console.log('Numeros impares entre cero y mil: ');
console.log(numerosImpares());
