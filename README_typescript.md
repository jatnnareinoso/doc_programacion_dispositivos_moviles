## 2020-0710

--- 

### Ejercicio No. 1

Este problema fue pedido por Amazon. 

Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa. 

 Por ejemplo, si N es 4, entonces hay 5 formas únicas: 

1, 1, 1, 1 
2, 1, 1 
1, 2, 1 
1, 1, 2 
2, 2 

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez. 

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.

- Solución:
  
La función countUniqueSteps es la que calcula el número de formas únicas de subir la escalera, tomando como parámetros a N, número de escalones en la escalera, y X, array de números que representan los diferentes pasos que se pueden dar en cada escalón. 
Dentro de la función countUniqueSteps, se define un array memo que almacenará los resultados que aroje dicha función. Se define una función interna llamada helper, que realiza el cálculo real de formas únicas. La función helper toma un parámetro n, que representa el número de escalones que quedan por subir.

En esta función, se evalúan 3 condiciones: Si n es igual a 0, significa que se ha llegado al último escalón, por lo que se devuelve 1. Si n es menor que 0, significa que se ha excedido el número de escalones en la escalera, por lo que se devuelve 0 (no se ha encontrado ninguna forma única de subir la escalera). Luego, con la función memo, se comprueba si ya se ha calculado el resultado para el valor n, y si es así, devuelve ese valor en el arreglo memo. 

Se realiza un bucle a través de los diferentes pasos posibles, que son almacenados en el arreglo x, y llama recursivamente a helper con n - X[i] para calcular el número de formas únicas de subir los escalones restantes después de dar el paso X[i]. Este resultado se suma a la variable total, y se almacena en la variable memo, retornando este mismo valor. 

La función generateUniqueSteps es una función que nos ayuda para saber los pasos que se toman para subir la escalera. Verifica si N es igual a 0, lo que significa que ha llegado al último escalón. Si N no es igual a 0, la función realiza un bucle a través de los diferentes pasos posibles (almacenados en el array X) y llama recursivamente a generateUniqueSteps

- Big O:
  
La función countUniqueSteps utiliza la función auxiliar helper para calcular el número de formas únicas de subir la escalera. La complejidad de helper depende del valor de N y del tamaño del array X. Si representamos el tamaño de X como M, la complejidad de helper es O(N * M) debido al bucle for que recorre los elementos de X.

Dentro de helper, se utiliza un array memo para realizar la memoización y evitar cálculos repetidos. La longitud de este array es igual a N, por lo que tanto la inicialización como la lectura/escritura de valores en memo tienen una complejidad de O(N). La función printUniqueSteps llama a countUniqueSteps una vez, por lo que su complejidad es la misma que la de countUniqueSteps, es decir, O(N * M).

La función generateUniqueSteps es llamada por printUniqueSteps y realiza un bucle for que recorre los elementos de X. Si el tamaño de X es M, la complejidad de generateUniqueSteps es O(M), ya que se realiza una llamada recursiva por cada elemento de X. Esto significa que el tiempo de ejecución del programa aumentará proporcionalmente con el número de escalones y el tamaño del conjunto de pasos posibles.

---

### Ejercicio No.2

Uber preguntó recientemente el problema:  

Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena. 

Aquí hay un ejemplo y un código de inicio: 

distancia_más_corta(s, c) 

Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:  

shortest_dist('helloworld', 'l') 

   h  e  l  l  o  w  o  r  l  d 
 [2, 1, 0, 0, 1, 2, 2, 1, 0, 1] 
   0  1  2  3  4  5  6  7  8  9 

- Solución:
  
Se define un arreglo llamada distances para almacenar las distancias más cortas. Se inicia un bucle for que recorre cada carácter de la cadena de entrada s utilizando el índice i.

Dentro del bucle for, se verifica si el carácter actual s[i] es igual al carácter objetivo c. Si es así, se agrega un 0 al arreglo distances, indicando que la distancia a sí mismo es 0. De lo contrario, se inicializa una variable minDistance con el valor Infinity para almacenar la distancia mínima entre el carácter actual y cualquier aparición del carácter objetivo c.

Se inicia otro bucle for que recorre nuevamente cada carácter de la cadena s, utilizando el índice j. Dentro del segundo bucle for, se verifica si el carácter en la posición s[j] es igual al carácter objetivo c. Si es así, se calcula la distancia entre los índices i y j mediante Math.abs(i - j), y se actualiza minDistance tomando el mínimo entre su valor actual y la distancia calculada.

Después de salir del segundo bucle for, se agrega el valor de minDistance al arreglo distances, que representa la distancia más corta del carácter actual al carácter objetivo c. El bucle for principal continúa hasta que se haya recorrido cada carácter de la cadena s, almacenando las distancias más cortas correspondientes en el arreglo distances. Finalmente, se retorna el arreglo distances que contiene las distancias más cortas para cada carácter de la cadena s.

- Big O:
  
El algoritmo presentado tiene una complejidad de tiempo O(n^2), donde "n" es el número de caracteres en la cadena de entrada "s".

El algoritmo utiliza un bucle "for" para recorrer cada carácter en la cadena "s". En cada iteración, se verifica si el carácter actual es igual al carácter objetivo "c". Si es así, se agrega un 0 a la matriz "distances". De lo contrario, se ejecuta un segundo bucle "for" para encontrar la distancia mínima entre el carácter actual y cualquier aparición del carácter objetivo "c" en la cadena.

El segundo bucle "for" también recorre la cadena "s" completa en cada iteración del primer bucle "for". Por lo tanto, la complejidad del segundo bucle "for" es O(n). Dado que el segundo bucle se ejecuta una vez por cada carácter en la cadena "s" (que tiene una longitud de "n"), la complejidad total del algoritmo es O(n * n) = O(n^2).

--- 

### Ejercicio No.3

Facebook preguntó recientemente el problema: (Slider Window) 

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo 

Input: [2, 1, 5, 2, 3, 2], S=7  

Output: 2 

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2]. 

Input: [2, 1, 5, 2, 8], S=7  

Output: 1 

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8]. 

Nota: No puedes usar ciclos anidados para resolver el problema.

- Solución:
Se definen tres variables: windowSum para almacenar la suma actual de elementos en el subarreglo, minLength para guardar la longitud mínima encontrada hasta el momento (inicializada como Infinity) y windowStart para indicar el inicio del subarreglo.

Se inicia un bucle for que recorre el arreglo arr utilizando el índice windowEnd para avanzar por los elementos del arreglo. Dentro del bucle for, se suma el elemento actual arr[windowEnd] a windowSum, para ir acumulando la suma del subarreglo.

Se utiliza un bucle while para reducir la longitud del subarreglo moviendo el índice windowStart hacia adelante mientras la suma del subarreglo (windowSum) sea mayor o igual a S, que es nuestro número objetivo. Dentro del bucle while, se actualiza minLength tomando el mínimo entre su valor actual y la longitud del subarreglo actual, que se calcula como windowEnd - windowStart + 1. Luego, se resta el elemento en la posición windowStart de la suma del subarreglo (windowSum) y se incrementa windowStart en uno, moviendo el subarreglo hacia la derecha.

El bucle while se repite hasta que la suma del subarreglo sea menor que S, lo que indica que el subarreglo actual ya no cumple con el requisito de tener una suma igual o superior a S. Luego se examina el siguiente elemento en el arreglo. 

Después de salir del bucle for, se verifica si minLength sigue siendo igual a Infinity, de ser así, no hay ningún subarreglo cuya suma se mayor o igual a S, y retorna 0. De lo contrario, se retorna el valor de minLenght, que es la longitud del subarreglo más pequeño.

- Big O:

La complejidad de este algoritmo se puede analizar en función del tamaño de la entrada "arr" y se representa con la notación Big O de O(N), donde N es el número de elementos en el arreglo.

El algoritmo utiliza un enfoque de ventana deslizante para encontrar la longitud mínima de un subarreglo cuya suma es mayor o igual a "S". Al principio, se establecen dos punteros: windowStart y windowEnd, que indican el inicio y el final de la ventana, respectivamente.

El bucle principal se ejecuta una vez por cada elemento en el arreglo, lo cual resulta en una complejidad de O(N). Dentro de dicho bucle, se realizan operaciones constantes como sumar y restar elementos del arreglo, actualizar la longitud mínima y mover los punteros de la ventana. Estas operaciones también tienen una complejidad de O(1). El algoritmo tiene una complejidad de O(N).

