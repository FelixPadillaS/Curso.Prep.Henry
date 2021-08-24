// Do not change any of the function names

function mayuscula(nombre) { // 1
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer 
  //letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  /*console.log (nombre);
  let arrayfromstring = Array.from(nombre);
  let salida = "";
  console.log(arrayfromstring[0]);
  arrayfromstring[0].toUpperCase();
  console.log(arrayfromstring[0]);
  for (var i=0; i<arrayfromstring.length; i++) {
    salida = salida + arrayfromstring[i];
  }
  console.log (salida);
  return salida;*/
  return nombre.charAt(0).toUpperCase() + nombre.slice(0);
}

function invocarCallback(cb) { // 2
  // Invoca al callback `cb`
  //Tu código:
  return cb(cb);
}

function operacionMatematica(n1, n2, cb) { // 3
  //Vamos a recibir una función que realiza una operación matemática como callback junto 
  //con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) { // 4
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0;
  for (var i=0; i<numeros.length; i++){
    suma = suma + numeros[i];
  }
  //console.log ("La sumatoria es " + suma);
  cb (suma);
}

function forEach(array, cb) { // 5
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (var i=0; i<array.length; i++){
    cb (array[i]);
  }
}

function map(array, cb) { // 6
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por 
  //`cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var newarray = array.map(function(la) {
    return cb(la);
  });
  
  
  return newarray;
}

function filter(array) { // 7
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoarray = [];
  var contsec = 0;

  for (var i=0; i<array.length; i++) {
    
      if (array[i].charAt(0) === "a") {
//      if (array[i][0] === "a") {  
          nuevoarray[contsec] = array[i];
          console.log ("Nuevo elemento " + nuevoarray[contsec]);
          contsec++;
        }

      else console.log ("No contiene a en el primer caracter el elemento " + array[i]);
  }

  for (i=0; i<nuevoarray.length; i++){
    console.log ("El elemento " + i + " del nuevo array es " + nuevoarray[i]);
    
  }
  return nuevoarray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
