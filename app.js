// document.write("<h1>Hola mundo</h1>")

// TIPOS DE DATOS
/*
"Hola mundo" // String ""
'Hola mundo 2' //String ''
3.1415 //number
1000 //number
true //boolean
false //boolean
['Daniel','Carolina','Andrea'] //array de strings
[1, 2.5, 3.1415] //array de numbers
[true, false, false, true] //array de booleans
// Object
{
    "username":'Jorge',
    "edad":50,
    "horas_jugadas":14,
    "online":true,
    "amigos":['Andres','Edwin','Fernando']
}
{
    "username":'Santiago',
    "edad":25,
    "horas_jugadas":140,
    "online":false,
    "amigos":['Daniel','Carlos','Zuca']
}
*/

// VARIABLES: Espacios de memoria para almacenar datos
var userName = "Daniel"; //Variable
let userAge = 25; //Variable
// CONSTANTE: Espacio de memoria para almacenar datos estáticos (No modificables)
const PI = 3.1415;
console.log(userName, userAge, PI)

// OPERACIONES CON DATOS
/*var num_1 = 2;
var num_2 = 3;
var res = num_1+num_2;
console.log("El resultado de la suma es: "+res);*/

/*var name = "Jorge";
var lastname = "Lemus";
var completeName = name +" "+ lastname;
console.log("El nombre completo del usuario es: "+completeName);*/

let passwordDB = "123456";
let passwordInput = "1234567";
var result = passwordDB == passwordInput;
if(result == true){
    console.log("La constraseña es correcta")
}else{
    console.log("La constraseña es incorrecta")
}

var count = 0;
while(count<=10){
    console.log(count);
    count=count+2;
}

// FUNCIONES: Comportamientos llamados a traves de tareas
function greetings(name) {
    console.log("Hola "+name);
}

greetings("Andres");