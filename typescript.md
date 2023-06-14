# THE BASICS:
En esta primera sección, vemos como en JavaScript, no podemos conocer el tipo de dato o valor en tiempo de ejecución.  
Para algunos valores primitivos, como string y number, podemos identificar su tipo en tiempo de ejecución, pero algunas cosas como funciones, no podemos identificar correctamente su tipo de dato. 

Esto nos puede traer errores cuando estamos llamando a diversas funciones sin el tipo de dato que le corresponda. 
Es por eso que TypeScript, es fundamental para poder encontrar esos errores antes de su ejecución, facilitándonos un conjunto de herramientas que agrega verificación estática de tipos. 

TypeScript detecta muchos errores legítimos, como errores tipográficos, funciones no llamadas o errores lógicos básicos. 
Con TypeScript, se pueden detectar errores a medida que vamos escribiendo nuestro código, por lo que nos ofrece también sugerencias, correcciones automáticas, por lo que podemos evitar así errores comunes. 
Este verificador de tipos tiene información para verificar si estamos accediendo a las propiedades correctas en variables y otras cosas, por lo que va verificando lo que vamos escribiendo en nuestro código, ayudándonos a completar el mismo. 

Utiliza un compilador, tsc, que se utiliza para compilar los archivos TypeScript en archivos JavaScript. Este realiza la verificación de tipos y emite archivos JavaScript válidos. De igual manera, tsc emite errores cuando se encuentran problemas de tipo en el código. 
De igual manera, TypeScript permite especificar tipos explícitos para variables y parámetros de función, lo que ayuda a realizar una verificación más precisa y detectar errores en tiempo de compilación. 

# EVERYDAYTYPE:
En esta sección, se habla acerca de los tipos de valores más básicos y comunes en JavaScript o TypeScript. 
-	Primitivos: 
Los tipos de datos más comunes en JavaScript son string, que representan una cadena de caracteres; number, que representa cualquier tipo de dato, sea float o int y boolean, que almacena valores true o false. Estos mismos nombres se utilizan en TypeScript para referirse a estos tipos de datos.
-	Arreglos:
Estos almacenan un conjunto de elementos. Su sintaxis es array[] y funciona para cualquier tipo de dato. 
-	Any: 
TypeScript maneja un tipo de dato especial llamado any, que se usa para cuando no se conoce el tipo de dato, o no se desea realizar verificaciones de tipo en un valor en particular. 
-	noImplicitAny: 
Este tipo de dato se utiliza cuando queremos evitar el tipo de dato any de manera implícita, debido a que este no verifica el tipo de dato. 
-	Anotaciones en variables: 
Se utiliza para agregar de manera opcional una anotación, especificando explícitamente el tipo de dato de la variable. Esto se usa con variables const, var o let. 
-	Funciones:
Son un conjunto de instrucciones, que realizan una tarea en especifica. TypeScript permite especificar los tipos de valores de entrada y salida de las funciones. 
-	Tipos de objetos: 
Los objetos en TypeScript se definen enumerando las propiedades y sus tipos. También se pueden especificar propiedades opcionales agregando “?” después del nombre de la propiedad. 
-	Tipos de Unión:
Es un tipo formado por dos o más tipos, que representan valores que pueden ser cualquiera de esos tipos. TypeScript permite operaciones si es válida para todos los miembros de la unión, es decir, que si tenemos una unión con valores string y number, no podemos utilizar un método que solo sea válido para tipo string. 
-	Tipo de alias:
Se puede utilizar un alias de tipo para dar un nombre a cualquier tipo en TypeScript, lo que permite referirse a ese tipo con un solo nombre en múltiples lugares. 
-	Interfaces: 
Son formas de nombrar tipos de objetos. Permiten definir la estructura y las propiedades que debe tener un objeto. 
-	Aserciones de tipo: 
Permiten especificar un tipo más específico para una variable cuando se tiene información que TypeScrip no puede inferir. 
-	Tipos literales:
 Hace referencia a valores específicos de string, numbery boolean en posiciones de tipo. Representan valores concretos en lugar de ser tipos más generales. 
-	Null y undefined:
Son valores primitivos en JavaScript que se utiliza para señalar un valor ausente o no inicializado. En TypeScript, se corresponden con dos tipos del mismo nombre, cuyo comportamiento depende de la opción strictNullChecks. Con esa opción activada, se requiere verificar y probar los valores antes de usarlos. Cuando está apagado, los valores a los que se puede acceder normalmente, se pueden asignar una propiedad de cualquier tipo. 
-	Enumeraciones:
Permite describir un valor que podría ser uno de un conjunto de posibles constantes con nombre. 
-	Primitivas menos comunes:
Entre estas están bigint, que se utiliza para almacenar números enteros muy grandes, y symbol, que se usa para crear una referencia globalmente única.


# NARROWING: 
-	Estrechamiento por “typeof”: 
Se utiliza el operador “typeof” para verificar el tipo de un valor en tiempo de ejecución. Al usar esta verificación en una condición, TypeScript estrecha el tipo del valor en las ramas correspondientes del flujo de control. 
-	Estrechamiento de veracidad: 
En JavaScript, los valores se pueden coaccionar a booleanos en contextos de control de flujo como “if”, “&&”, “||”, entre otros. TypeScript utiliza esta verificación de veracidad para reducir los tipos en función del resultado de la coacción booleana. 
-	Reducción de la igualdad: 
TypeScript realiza una reducción de tipos cuando se realizan comparaciones de igualdad (“===”, “!==”, “==”, “!=”). Si los valores comparados son iguales, TypeScript estrecha el tipo a un tipo más específico. 
-	Estrechamiento por operador in:
Se utiliza para determinar si un objeto o su cadena prototipo tiene una propiedad como un nombre. TypeScript utiliza esta verificación para estrechar el tipo en función de la presencia o ausencia de la propiedad. 
-	Estrechamiento por “instanceof”: 
Este operador se utiliza para verificar si un objeto es una instancia de una clase o funcipon constructora específica. Se realiza una reducción de tipos en función del resultado de esta verificación. 
-	Análisis de flujo de control:
Es un proceso utilizado por TypeScript para limitar los tipos de variables a medida que se encuentran asignaciones y protecciones de tipo en un programa. Este análisis se basa en la accesibilidad del código y permite que TypeScript estreche los tipos de variables a medida que se sigue el flujo de ejecución del programa. 
-	Uso de predicados de tipo:
El uso de predicados de tipo en TypeScript permite un control más directo sobre cómo cambian los tipos en el código. Se define una protección de tipo definida por el usuario mediante una función cuyo tipo de retorno es un predicado de tipo. 
-	Sindicatos discriminados:
Los sindicatos discriminados en TypeScript permiten restringir los tipos en uniones de una manera más precisa. En lugar de tener una única propiedad común en la unión, se utiliza una propiedad discriminante con tipos literales para diferenciar entre los miembros de la unión. 
