// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {  // 1
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  }
  if (x < y) {
    return y;    
  }
  else return x;
}

function mayoriaDeEdad(edad) {  // 2
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if ( edad >= 18) {
    return "Allowed";
  }
  else return "Not allowed";
}
  
function conection(status) {  // 3
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1) {
    return "Online";
  }
  if (status === 2) {
    return "Away";
  }
  else return "Offline";
}

function saludo(idioma) { // 4
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === "aleman")    { return "Guten Tag!"; }
  if (idioma === "mandarin")  { return "Ni Hao!"; }
  if (idioma === "ingles")    { return "Hello!"; }
  else return "Hola!";
}

function colors(color) { // 5
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch(color) {
    case "blue": return "This is blue";
      // code block
      break;
    case "red": return "This is red";
      // code block
      break;
    case "green": return "This is green";
      // code block
      break;
      case "orange": return "This is orange";
      // code block
      break;
      
    default:
      // code block
      return "Color not found";
  } 

}

function esDiezOCinco(numero) { // 6
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero == 10 || numero == 5) { 
    return true; 
  }
  else return false;
}

function estaEnRango(numero) { // 7
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  }
  else return false;
}

function esEntero(numero) { // 8
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Number.isInteger(numero)) { return true; } //true
  else return false;

}

function fizzBuzz(numero) { // 9
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  
  if (numero %3 == 0 && numero %5 == 0 ) { return "fizzbuzz";  }
  if (numero %3 == 0) { return "fizz";  }
  if (numero %5 == 0) { return "buzz";  }
  
  else return numero;
}

function operadoresLogicos(num1, num2, num3) { // 10
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  
  if (num1 < 0 || num2 < 0 || num3 < 0 ) { 
    return "Hay negativos"; 
  }
  
  else if (num1 == 0 || num2 == 0 || num3 == 0 ) { 
    return "Error"; 
  }

  else if (num1 > num2 && num1 > num3 && num1 > 0 ) { 
    return "Número 1 es mayor y positivo"; 
  }
  
  else if (num3 > num1 && num3 > num2 ) { 
    num3 = num3 +1;
    return num3; 
  }
  
  else return false;
}

function esPrimo(numero) { // 11
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if(numero < 2) return false;
  if(numero === 2) return true;

  for(var i = 3; i < (numero) ; i++) {
    if(numero % i === 0) { return false; }
  }     
  return true;
}

function esVerdadero(valor){ // 12
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) { return "Soy verdadero"; }
  else return "Soy falso";
}

function tablaDelSeis(){ // 13
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla = [];
  for( i = 0; i < 11 ; i++) {
    tabla[i] = i * 6;
  }     
  return tabla;
}

function tieneTresDigitos(numero){ // 14
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 99 && numero < 1000 ) { return true; }
  else return false;
}

function doWhile(numero) { // 15
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var contador = 0;
  do {
    numero = numero + 5;
    contador +=1;

  } while (contador < 8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
