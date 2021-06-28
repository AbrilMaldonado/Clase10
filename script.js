// 1. Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. 
// Mostrar ambos en pantalla.
/*
let nombre = prompt("Ingrese su nombre");

function saludo (name){
    return ("Hola " + name);
}

alert(saludo(nombre));

alert(saludo(nombre).toLowerCase());
alert(saludo(nombre).toUpperCase());  


// 2. Pedir al usuario dos números y mostrar la suma y resta de ellos. 
// Para la resta, restar siempre al más grande el más chico.

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));

function suma (n1,n2){
    return (n1+n2);
} alert("La suma de " + num1 + " y " + num2 + " es " + suma(num1,num2));

function resta (numero1,numero2){
    if(numero1<numero2){
        return (numero2-numero1);
    } else{
        return (numero1-numero2);
    }
} alert("La resta de los números que ingresaste es " + resta(num1,num2));  


// 3. Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). 
// Pasar el texto a MAYUSCULA y mostrar donde corresponda.

let text = prompt("Ingrese un texto");
let pregunta = parseInt(prompt("¿Quiere ver el resultado en: \n 1.Pantalla \n 2.Consola"));

if(pregunta === 1){
    alert(text.toUpperCase());
} else if(pregunta === 2){
    console.log(text.toUpperCase());
} else{
    alert("La opción ingresada no es válida");
}  


// 4.  Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). 
// Realizar la operación y mostrar el resultado en pantalla.

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let operacion = parseInt(prompt("¿Que operación desea realizar? \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.División \n 5.Potencia"));
let multiplicador = 1;

function calculadora (n1,n2){
    if(operacion === 1){
        return (n1+n2);
    } else if(operacion === 2){
        return (n1-n2);
    } else if(operacion === 3){
        return (n1*n2);
    } else if(operacion === 4){
        return (n1/n2);
    } else if(operacion === 5){
        for(let i=0;i<num2;i++) {
            multiplicador = multiplicador * num1
        }  return (multiplicador);
    } else{
        alert("La opción ingresada no es válida");
    }
}

alert(calculadora(num1,num2));  


// 5. Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, 
// vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, 
//volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
// Extra: investigar/googlear la función de Javascript "confirm"

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let operacion = parseInt(prompt("¿Que operación desea realizar? \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.División \n 5.Potencia"));
let multiplicador = 1;

function calculadora (n1,n2){
    if(operacion === 1){
        return (n1+n2);
    } else if(operacion === 2){
        return (n1-n2);
    } else if(operacion === 3){
        return (n1*n2);
    } else if(operacion === 4){
        return (n1/n2);
    } else if(operacion === 5){
        for(let i=0;i<num2;i++) {
            multiplicador = multiplicador * num1
        }  return (multiplicador);
    } else{
        alert("La opción ingresada no es válida");
    }
}

alert(calculadora(num1,num2));

let continuar = parseInt(prompt("¿Desea seguir operando? \n 1.Si \n 2.No"));

while(continuar === 1){
    num1 = parseInt(prompt("Ingrese un número"));
    num2 = parseInt(prompt("Ingrese otro número"));
    operacion = parseInt(prompt("¿Que operación desea realizar? \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.División \n 5.Potencia"));

    alert(calculadora(num1,num2));

    continuar = parseInt(prompt("¿Desea seguir operando? \n 1.Si \n 2.No"));
}  


//????? 6. Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para 
// el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres 
// en pantalla. 

function curso (){
    do{
        let nombres = prompt("Ingrese nombres de alumnos/as para el nuevo curso. Para finalizar ingrese SALIR");
        let alumnos = [];
        alumnos.push(nombres);
    } while(nombres!=="SALIR" || nombres!== "salir" || nombres!== "Salir") 
    return alumnos;
}

alert(curso());   


// 7. Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) 
// y Nombre con la primera letra en mayúscula.

const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];

function nombre(){
    for(let i=0;i<ej7Nombres.length;i++){
        alert("El valor de la posición " + [i] + " es " + ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1));
    }
}

alert(nombre());  


// ????? 8. Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  
// siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"

const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];

function veterinaria (){
    
    
}


// 9. Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 


let menor = parseInt(prompt("El menú para menores cuesta $450, ingrese la cantidad de menores en número, en caso de que no haya ingrese 0"));
let mayor = parseInt(prompt("El menú de adultos cuesta $700, en caso de que sean más de 4 se realizará un 10% de descuento, ingrese la cantidad de adultos para la reserva, en caso de que no haya ingrese 0"));
let totalMe = menor*450;
let totalMa = mayor*700;
let dto = (totalMe+totalMa)*10/100;

function comensales(){
    if(mayor>4){
        return ("El costo para " + (mayor+menor) + " comensales con el 10% de descuento es de $" + (totalMe+totalMa)-dto);
    } else{
        return ("El costo para " + (mayor+menor) + " comensales es de $" + (totalMe+totalMa));
    }
}

alert(comensales());  */















 








