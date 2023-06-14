
/* THE BASIC */ 

/* Comprobación estática de tipos */ 


const message = "hello!";
 
message();

/* El tipo de dato String no puede ser llamado como una función:
Para que funcione, debemos llamar la variable message con la función console.log(message); */ 


const message = "hello!";
 
console.log(message);

------------------------------------------------------------------
/* Fallos no excepcionales */

const user = {
  name: "Daniel",
  age: 26,
};
 
user.location;
 
/* Da error porque location no está propiedad no está definida dentro del objeto user. Debemos invocar a una propiedad que si se encuentra definida, como name o age.  */ 

const user = {
  name: "Daniel",
  age: 26,
};
 
user.age;

------------------------------------------------------------------------
/* Errores tipográficos */

const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();


/* Está mal escrita la función toLocaleLowerCase(); en la segunda vez y tercera vez que intentamos llamarla. */ 
 
const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowerCase();
announcement.toLocaleLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();

---------------------------------------------------------------------------

/* Funciones no llamadas */

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;

/* No está llamando a la función Math.random ya que le falta “()”. */ 

function flipCoin() {
  // Meant to be Math.random()
  return Math.random() < 0.5; }


------------------------------------------------------------------------

/* Compilador tsc */

// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");

/* La función ha sido definida con 2 parámetros, y se está llamando únicamente con un parámetro. Además, al definir la función, no se está definiendo el tipo de “person” ni “date”, por lo que debemos especificar que “person” se trata de un string, y date de un objeto Date(). Por otro lado, debemos al momento de llamar la función, debemos construir un Date con newDate(), porque de lo contrario, intentaría devolver un archivo string. */

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Brendan", new Date());


------------------------------------------------------------------------
 /* Tipos Borrados */

"use strict";
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());

/* Da error porque no se está definiendo el tipo para person ni date, por lo que debemos especificar que person se trata de un string y date de un tipo Date().*/

"use strict";
function greet(person: string, date: Date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());

------------------------------------------------------------------

EVERDAY TYPES


/* Any */

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

let obj: any = { x: 0 };
obj.bar = 100;
obj = "hello";
const n: number = parseInt(obj);
console.log(n);


/* Anotaciones en variables */

let myName: string = "Alice";

/* Aquí estamos realizando anotaciones sobre de tipo para especificar explícitamente el tipo de dato de la variable. En TypeScript no es necesario hacer anotaciones. */

let myName = "Alice";
console.log(myName);

/* Anotaciones de tipo de parámetro */

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet(42);

/* Da error porque la función fue declarada con un parámetro tipo string, y le estamos llamando con un tipo número. */

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Jatnna");

-----------------------------------------------

/* Anotaciones de tipo de retorno */

function getFavoriteNumber(): number {
  return 26;
}

/* De igual manera, podemos agregar anotaciones de tipo retorno, después de declarar los parámetros. */

function getFavoriteNumber(): number {
  return 26;
}

-----------------------------------------

console.log(getFavoriteNumber());

/* Funciones anónimas */

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

------------------------------------------------------------------
  
/* Tipos de objetos */

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

------------------------------------------------------------------

/* Propiedades opcionales */

function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

------------------------------------------------------------------
/* Tipos de unión */

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(["Jatnna", "Mark"])

------------------------------------------------------------------

/* Tipos de alias */

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

------------------------------------------------------------------
  
/* Aserciones */

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

------------------------------------------------------------------
  
/* Tipos literales */

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

/* Esto da error porque la función prinTexts está esperando como parámetro center, no centre. */

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
console.log(printText("Hello, world", "left"));
console.log(printText("left, right", "center"));

------------------------------------------------------------------
  
/* null y undefined */

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

------------------------------------------------------------------
  
/* Operador de aserción no nulo (postfifo !) */


function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

------------------------------------------------------------------

/* Primitivas menos comunes */


const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {

  // Can't ever happen
}

/* Los tipos “typeof firstName” y “typeof secondName” no se superponen, por eso da error. */

------------------------------------------------------------------
  
/* NARROWING */

function padLeft(padding: number | string, input: string) {
  return " ".repeat(padding) + input;
}

/* Esto nos da error porque estamos pasando un valor con tipo number | string a la función repeat y solo acepta un number. */


function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
                        

  }
  return padding + input;
           
}

console.log(padLeft(2, "HOLA"));

------------------------------------------------------------------

/* Typeof */

 
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}


/* Debemos agregar en la condicional la verificación de si strs es null.   */


function printAll(strs: string | string[] | null) {
  if (typeof strs === "object" && strs !== null) {
    for (const s of strs ) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}


------------------------------------------------------------------
 
/* Estrechamiento de veracidad */

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}


------------------------------------------------------------------
 
/* Reducción de la igualdad */
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
          

    y.toLowerCase();
          
  } else {
    console.log(x);
              
    console.log(y);
          
  }
}

example("Type", "Script");


------------------------------------------------------------------
 
/* Estrechamiento del operador in */

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;

  } else {
    animal;
  }
}


------------------------------------------------------------------

/* Estrechameinto instanceof  */

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
(parameter) x: Date
  } else {
    console.log(x.toUpperCase());
               
(parameter) x: string
  }
}

------------------------------------------------------------------
 
/* Tareas  */

let x = Math.random() < 0.5 ? 10 : "hello world!";
   
x = 1;
 
console.log(x);
           
x = true;
.
 
console.log(x);


/* Esto da error porque se ha declarado la variable x tipo string/number, y no boolean. */

let x = Math.random() < 0.5 ? 10 : "hello world!";
  
x = 1;
 
console.log(x);
           
x = "goodbye!";
 
console.log(x);


------------------------------------------------------------------
 
/* Análisis de flujo de control */

function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
 
  console.log(x);
             
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);

  } else {
    x = 100;
    console.log(x);
               
  }
 
  return x;
        
}


------------------------------------------------------------------

/* Uso de predicados de tipo */

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

 
------------------------------------------------------------------

/* Comprobación de exhaustividad */

type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

/* Esto da error porque no se han manejado todos los casos posibles, como es el caso de exhaustiveChek, donde el tipo “any” no se le puede asginar a un tipo “never”. */
