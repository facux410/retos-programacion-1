const numero1 = prompt("igrese un numero", "");
const numero2 = prompt("igrese otro numero para sumarlo", "");

const numero1convertido = parseFloat(numero1);
const numero2convertido = parseFloat(numero2);

const suma = numero1convertido + numero2convertido;

alert(` el resultado es ${suma.toFixed(2)}`);
