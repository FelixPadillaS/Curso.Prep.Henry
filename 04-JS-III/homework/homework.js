// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) { // 1
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) { // 2
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) { // 3
  // Devuelve el largo de un array
  // Tu código:
  return array.length;

}


function incrementarPorUno(array) { // 4
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for ( let i=0; i<array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) { // 5
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) { // 6
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) { // 7
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  return palabras.join(' ');
}


function arrayContiene(array, elemento) { // 8
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 for (var i=0; i<array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }   
  }
  return false; 
}





function agregarNumeros(numeros) { // 9
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado = 0;
  for (var i=0; i<numeros.length; i++) {
    resultado = resultado + numeros[i];    
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) { // 10
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var divisor = 0;
  var promedio = 0;
  for (let i=0; i<resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
    
  }
  divisor=resultadosTest.length;
  promedio = suma / divisor;

  /*console.log ("La matriz contiene " + resultadosTest.length + " Elementos");
  console.log ("Elemento 1 = " + resultadosTest[0]);
  console.log ("Elemento 2 = " + resultadosTest[1]);
  console.log ("Elemento 3 = " + resultadosTest[2]);
  console.log ("Elemento 4 = " + resultadosTest[3]);
  console.log ("Elemento 5 = " + resultadosTest[4]);
  console.log ("Elemento 6 = " + resultadosTest[5]);

  console.log("La suma es = " + suma);
  console.log("Dividido entre " + divisor);
  console.log("Nos da como promedio " + promedio); */

  return promedio;
  
}


function numeroMasGrande(numeros) { // 11
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = 0;
  for (var i=0; i<numeros.length; i++) {
    //console.log("Elemento " + i + " igual a " + numeros[i]);
    if (mayor < numeros[i]) mayor = numeros[i];     
  }
  //console.log ("El array contiene " + numeros.length + " elementos");
  //console.log ("Y el mayor es " + mayor);
  return mayor;
}


function multiplicarArgumentos() { // 12
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver
  // el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente 
  // devuélvelo
  // Escribe tu código aquí:

  var producto = 1;  

  if (arguments.length<1) {
    producto = 0;
    // console.log (arguments[i]);
    return producto;    
  }

  for (var i=0; i<arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}


function cuentoElementos(arreglo){ // 13
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for (var i=0; i<arreglo.length; i++) {
    if (arreglo[i] > 18 ) contador ++;
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) { // 14
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7)
    return "Es fin de semana";

  else return "Es dia Laboral";
} 


function empiezaConNueve(n) { // 15
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar 
  //true si el entero  inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero;
  var matriz = [];
  numero = n.toString();
  matriz = Array.from(numero);
  console.log (matriz[0]);
  if (matriz[0] === "9") 
      return true;
  else 
      return false;

}


function todosIguales(arreglo) { // 16
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var igualdad = true;
  var comparador = arreglo [0];
  for (var i=1; i<arreglo.length; i++) {
    if (arreglo[i] != comparador)
    igualdad = false;
  }
  return igualdad;
} 


function mesesDelAño(array) { // 17
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var nuevoarray = [];
  var conteo = 0;

  for (var i=0; i<array.length; i++) {
    // console.log ("El elemento " + [i] + " Es " + array[i]);
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"  ) {
      nuevoarray[conteo] = array[i];
      // console.log ("Agregado " + array[i]);
      conteo ++;
    }
  }

  /*for (var b=0; b<nuevoarray.length; b++){
    console.log (nuevoarray[b]);
  }*/
  
  if (nuevoarray.length === 3)
  return nuevoarray;
  else return "No se encontraron los meses pedidos";

  
}


function mayorACien(array) { // 18
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar 
  // en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  nuevoarray = [];
  contador = 0;

  for (i=0; i<array.length; i++) {
    if (array[i]>100) {
      nuevoarray[contador] = array [i];
      contador ++;
    }
  }
  return nuevoarray;
}


function breakStatement(numero) { // 19
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, 
  //debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  // console.log ("El numero es " + numero);

  var matriz = [];
  var sumatoria = numero;

  for (i=0; i<10; i++) {
    if (sumatoria === i) {
      // console.log ("Se interrumpe");
      return 'Se interrumpió la ejecución';
    }

    else {
      sumatoria = sumatoria + 2;
      matriz.push(sumatoria);
      // console.log("Va el " + i + " Sumatoria = " + sumatoria);
    }
  }
  return matriz;
}


function continueStatement(numero) { // 20
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se
  // continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  // console.log ("El numero es " + numero);

  var matriz = [];
  var sumatoria = numero;

  for (var i=0; i<10; i++) {
    
    if (i === 5) continue;    

    else {
      sumatoria = sumatoria + 2;
    // matriz [i] = sumatoria;
    matriz.push(sumatoria);
    // console.log ( "Iteracion " + i + " igual a " + matriz[i]);
    }
  }
  return matriz;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
