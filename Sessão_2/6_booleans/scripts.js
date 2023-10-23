// Booleans

console.log(true);
console.log(false);
console.log(10 > 2);
console.log(5 > 200);

console.log(typeof true);
console.log(typeof false);
console.log(typeof (10 > 2));
console.log(typeof (5 > 200));

// Comparações

console.log(1 > 2);
console.log(1 < 2);
console.log(3 >= 3);
console.log(5 <= 4);
console.log(2 == 2);
console.log(5 != 6);
console.log(5 != 5);
console.log("maria" != "maria");
console.log(3 === "3");
console.log(4 === 4);

// Operadores lógicos

// &&(and) - para ser true, os dois lados precisam ser true
// ||(or) - para ser true, basta um dos lados true
// !(not) inverte os valores

console.log(true && true); // retorna true
console.log(true && false); // retorna false
console.log(false || true); // retorna true
console.log(false || false); // retorna false
console.log(!true); // retorna false
console.log(!false); // retorna true

console.log(5 > 3 && 3 == 2); // retorna false
console.log(5 < 2 && 3 == 2); // retorna false
console.log(5 > 3 && 3 != 2); // retorna true
console.log(5 > 3 || 3 == 2); // retorna true
console.log(5 < 3 || 3 == 2); // retorna false
console.log(!(true && true)); // retorna false
console.log(!(1 == 1 && 3 == 3)); // retorna false


let numero1 = 3
let numero2 = 5
let numero3 = 4

let resultado = numero1 * numero2
let comparação = numero1 < numero2 && numero3 == numero2

console.log(resultado);
console.log(comparação);





