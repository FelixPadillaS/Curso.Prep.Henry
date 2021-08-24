// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){ // 1
  // Escribe una función que convierta un objeto en una matriz, donde 
  // cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arraynuevo = Object.entries(objeto);
  //console.log (arraynuevo);
  return arraynuevo;
}


function numberOfCharacters(string) { // 2
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de 
  //veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  //let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let salida = new Map();
  let resultado = new Map();
  let resultadoa = [];

  salida = { "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0,
                 "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0,
                 "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0,
                 "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0,
                 "y": 0, "z": 0 }; 
  
  //console.log (salida);

  for (var key in salida) {
    for (var i=0; i<string.length; i++) {
      if ( key === string[i]) {
        salida[key]++;        
        //console.log ("Coincidencia en " + key + " Valor actualizdo a " + salida[key]);
      }      
    }
  } 
  //console.log (salida);

  for (var key in salida) {
    if (salida[key] !== 0) {
      //console.log("Agregando " + key + " porque vale " + salida[key]);
      //resultado.set(key, salida[key]);
      resultadoa.push (key, salida[key]);
      //resultado.set (key, salida[key]);
    }
    
  }
  //console.log (resultado);
  console.log (resultadoa);
  return resultadoa; 


}


function capToFront(s) { // 3
  //Realiza una función que reciba como parámetro un string y mueva todas las letras 
  //mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var salida1 = "";
  var salida2 = "";

  function esMayuscula(letra) {
    return letra === letra.toUpperCase();
  }

  function esMinuscula(letra) {
    return letra === letra.toLowerCase();
  }   

  for (var i=0; i<s.length; i++) {
    var letraActual = s.charAt(i);

    if(esMayuscula(letraActual)) {
        //console.log("La letra " + letraActual + " es mayúscula");
        salida1 = salida1 + letraActual;        
    }

    if(esMinuscula(letraActual)) {  
      //console.log("La letra " + letraActual + " es minúscula");
      salida2 = salida2 + letraActual;      
    }               
  }
  //console.log (salida1 + salida2);
  return salida1 + salida2;
}


function asAmirror(str) { // 4
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda 
  //leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //E1j: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function reverse(s){
    return s.split("").reverse().join("");
  }

  //console.log(str);  
  var elarray = str.split(" ");
  var point ="";
  var salida ="";
  //console.log (elarray);

  for (var i=0; i<elarray.length; i++) {
    point = reverse (elarray[i]);
    salida = salida + point + " ";
  }
  //console.log (salida);
  salida = salida.slice(0, salida.length-1);
  return salida;
} 


function capicua(numero){ // 5
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí  
  
  var compara = numero.toString ();
  var salida = [];
  var contsec = 0;
  cadena = "";  

  for (var i=compara.length-1; i>=0; i--) {
    salida [contsec] = compara [i];    
    contsec ++;    
  }
  
  for (var j=0; j<salida.length; j++) {
    cadena = cadena + salida[j];
  }

  //console.log ("cadena = " + cadena + " y compara = " + compara);

  if (cadena == compara) 
    return "Es capicua";
  else 
    return "No es capicua";

}


function deleteAbc(cadena){ // 6
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenamodificada ="";
  //console.log ("cadena original = " + cadena + " y la longitud de la cadena = " + cadena.length);

  for (var i=0; i<cadena.length; i++) {
    if (cadena.charAt(i) == "a") {
      //cadenamodificada = cadena(i+1);
      //console.log (i + " Se detecta una a ");
    }

    else if (cadena.charAt(i) == "b") {
      //cadenamodificada = cadena(i+1);
      //console.log (i + " Se detecta una b");
    }

    else if (cadena.charAt(i) == "c") {
      //cadenmodificada = cadena(i+1);
      //console.log (i + " Se detecta una c");
    }

    else {
      cadenamodificada = cadenamodificada + cadena.charAt(i);
      //console.log ("La cadena va " + cadenamodificada);
    }

  }
  //console.log ("La salida de la cadena es " + cadenamodificada);
  return cadenamodificada;
}


function sortArray(arr) { // 7
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de 
  // longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arraynumerico = [];
  var aux = [];
  var aux1 = [];
  var cambio = 0;

  for (var i=0; i<arr.length; i++) {
    arraynumerico[i] = arr[i].length;
    //console.log (arraynumerico [i]);
  }

  //console.log (arraynumerico);

  do {
      cambio = 0;
      for (i=0; i<arraynumerico.length; i++) {
        if (arraynumerico[i] > arraynumerico[i+1]) {
          aux[i] = arraynumerico[i];
          aux1[i] = arr[i];

          arraynumerico[i] = arraynumerico[i+1];
          arr[i] = arr[i+1];

          arraynumerico[i+1] = aux;
          arr[i+1] = aux1[i]

          cambio = 1;
          //console.log (arr[i]);
        }
      }    
    } while (cambio == 1);  
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que 
  //permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión 
  // [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var mayor = 0;
  var salida = [];
  var contsec = 0;

  //console.log ("Uno " + arreglo1 + " Dos " + arreglo2);

  if (arreglo1 > arreglo2) 
    mayor = arreglo1.length;
      
  else mayor = arreglo2.length;
  //console.log (mayor.length);
  //console.log (mayor);

  for (var j=0; j<mayor; j++) {
    for (var i=0; i<mayor; i++) {
        if (arreglo1[i] == arreglo2[j]) {
          salida[contsec] = arreglo1[i];
          contsec ++;          
          // console.log ("Hay coincidencia " + arreglo1[i]);
        }
    }    
  }
  // console.log (salida);
  return salida;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

