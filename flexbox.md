# FLEXBOX
---
Flexbox, o Flexible Box Layout, es un modelo de diseño en CSS diseñado para crear diseños flexibles y eficientes en un contenedor, distribuyendo el espacio y alineando los elementos de manera predecible en diferentes tamaños de pantalla y dispositivos. Tiene como objetivo mejorar la eficiencia en el diseño, alineación y distribución del espacio en un contenedor, especialmente cuando el tamaño de los elementos es dinámico. 

Entre los conceptos principales de Flexbox están:
-	Eje principal: es el eje principal a lo largo del cual se disponen los elementos flexibles. 
-	Main Start | Main End: Los elementos flexibles se ordenan dentro del contenedor desde el inicio principal hacia el extremo principal.
-	Tamaño principal: el ancho o la altura de un elemento flexible, lo que esté en la dimensión principal, es el tamaño principal del elemento.
-	Eje transversal: Su dirección depende de la dirección del eje principal.
-	Inicio cruzado | extremo cruzado: las líneas flexibles se llenan con elementos y se ordenan en el contenedor desde el inicio cruzado hasta el extremo cruzado.
-	Tamaño cruzado: El ancho o alto de un elemento flexible en la dirección perpendicular al eje principal. 

Propiedades del Flex Container:
-	Display: Define un contenedor flexible; en línea o bloque dependiendo del valor dado. Sus valores son flex o inline-flex. 
-	Flex-Direction: Define la dirección en que se colocan los artículos flexibles en el contenedor flexible. Sus valores son: 
	- row: los elementos se distribuyen en una fila horizontal de izquierda a derecha. 
	- row-reverse: los elementos se distribuyen en una fila horizontal de derecha a izquierda.
	- column: los elementos se distribuyen en una columna vertical de arriba hacia abajo. 
	- column-reverse:  los elementos se distribuyen en una columna vertical de abajo hacia arriba.
-	Flex-wrap: Permite posicionar a los diversos elementos en una misma línea. Sus valores son:
    - nowrap (default): todos los elementos estarán en una línea.
    - wrap: los elementos se ajustarán a varias líneas, de arriba hacia abajo.
    - wrap-reverse: los elementos se ajustarán a varias líneas de abajo hacia arriba.   
-	Flex-flow: Une las propiedades flex-direction y flex-wrap en una única declaración, permitiendo establecer tanto la dirección principal en la que los elementos se distribuyen como el comportamiento de ajuste de línea en un solo valor.  ‘
-	Justify-content: Define la alineación a lo largo del eje principal, distribuyendo el espacio disponible entre los elementos o ajustar su posición a lo largo del eje principal. Sus valores son:
    - flex-start: los elementos se alinean al comienzo del contenedor. En una dirección de fila, se alinearán a la izquierda; en una dirección de columna, se alinearán en la parte superior.
    - flex-end: los elementos se alinean del contenedor. En una dirección de fila, se alinearán a la derecha; en una dirección de columna, se alinearán en la parte inferior.
    - center:  los elementos se alinean en el centro a lo largo del contenedor.
    - space-between: los elementos se distribuyen a lo largo del contenedor con espacios iguales entre ellos.
    - space-around: los elementos se distribuyen con espacios iguales entre ellos y al comienzo y final. 
    - space-evenly: los elementos se distribuyen de modo que el espacio entre dos elementos cualquiera sea igual. 
    - left: los elementos se empaquetan hacia el borde izquierdo del contenedor. 
    - right: los elementos se empaquetan hacia el borde derecho del contenedor.  
-	align-items: se utiliza para controlar la alineación de los elementos a lo largo del eje perpendicular al eje principal del contenedor flexible. Esta dirección depende de la establecida por la propiedad flex-direction. Sus valores son:
    - flex-start: los elementos se alinean al comienzo del contenedor.
    - flex-end: los elementos se alinean al final del contenedor.
    - center: se alinean al centro a lo largo del contenedor.
    - baseline: los elementos se alinean en la línea de base común, que es la línea donde se colocan las letras en un texto.
    - stretch: los elementos se estiran para llenar todo el espacio disponible a lo largo del contenedor. 
-	align-content: se utiliza para controlar el espaciado y la alineación de las líneas de elementos dentro del contenedor cuando hay espacio adicional. Sus valores son:
    - flex-start: las líneas se posicionan al comienzo del contenedor.
    - flex-end: las líneas se posicionan al final del contenedor.
    - center: las líneas se posicionan en el centro a lo largo del contenedor.
    - space-between: las líneas se distribuyen con espacios iguales entre ellas.
    - space-around: las líneas se distribuyen con espacios iguales alrededor de cada línea. 
    - space-evenly: las líneas se distribuyen con espacios iguales entre ellas y al comienzo y al final.
    - stretch: las líneas se estiran para llenar todo el espacio disponible. 

Propiedades de Flex Items:
-	order: controla el orden en que los elementos aparecen en el contenedor flexible.
-	flex-grow: define la capacidad de crecimiento de un elemento flexible si es necesario. Determina qué cantidad de espacio disponible dentro del contenedor debe ocupar el artículo.
-	flex-shrink: Define la capacidad de que un elemento flexible se encoja si es necesario. 
-	flex-basis: Define el tamaño predeterminado de un elemento antes de que se distribuya el espacio restante. 
-	align-self: permite anular la alineación predeterminada para elementos flexibles individuales. Contiene los mismos valores que align-items. 

--- 
## Flexbox Froggy
###### Nivel #1:
Se utiliza la propiedad justify-content con el valor de flex-end para alinear la rana hacia el lado derecho del contenedor.

#pond {
  display: flex;
justify-content:flex-end;
} - 

###### Nivel #2
Se utiliza la propiedad justify-content con el valor de center para alinear las ranas hacia el centro del contenedor. 

 
#pond {
  display: flex;
justify-content: center;
}

###### Nivel #3
Se utiliza la propiedad justify-content con el valor de space-around para distribuir las ranas con espacios disponibles del contenedor iguales entre ellas, al comienzo y final.

#pond {
  display: flex;
justify-content: space-around;
}

###### Nivel #4
Se utiliza la propiedad justify-content con el valor de space-between para alinear las ranas a lo largo del contenedor con espacios iguales entre ellas.

#pond {
  display: flex;
justify-content: space-between;
}

###### Nivel #5
Se utiliza la propiedad align-items para poder alinear los elementos de manera vertical dentro del contenedor. Se utiliza la propiedad align-items con el valor de flex-end para alinear las ranas a la parte inferior del contenedor. 

#pond {
  display: flex;
align-items: flex-end;
}

###### Nivel #6
Se utilizan las propiedades justify-content y align-items, ambas con la propiedad center para alinear a la rana justo en el medio del contenedor, tanto de manera vertical como horizontal. 

#pond {
  display: flex;
justify-content: center;
align-items: center;
}

###### Nivel #7
Se utiliza las propiedades justify-content con el valor de space-round para que se distribuya el espacio libre de manera igual para las ranas, acompañado de la propiedad align-items para que se posicionen al final del contenedor de manera vertical.  

#pond {
  display: flex;
justify-content: space-around;
align-items: flex-end;
}

###### Nivel #8
Se utiliza la propiedad flex-direction para definir la dirección en que se colocan los artículos dentro del contenedor, ya sea en filas o columnas. Se utiliza la propiedad flex-direction con el valor de row-reverse, para que se posicionen en una fila horizontal, con el orden invertido al original, es decir, de derecha a izquierda. 

#pond {
  display: flex;
flex-direction: row-reverse;
}

###### Nivel #9
Se utiliza la propiedad flex-direction con el valor de columna, para que se posicionen en forma de columna, es decir de arriba hacia abajo. 

#pond {
  display: flex;
flex-direction: column;
}

###### Nivel #10
Se utiliza la propiedad justify-content con el valor de flex-end para alinear la rana hacia el lado derecho del contenedor, pero al estar acompañado de la propiedad flex-direction, con un valor de row-reverse, es decir, una fila invertida de derecha a izquierda, la posición también se invierte, por lo que queda alineado a la izquierda.  

#pond {
  display: flex;

justify-content: flex-end;
flex-direction: row-reverse
}

###### Nivel #11
Se utiliza la propiedad justify-content con el valor de end para alinear la rana hacia la parte inferior del contenedor, y con la flex-direction con valor de column, posiciona a las ranas en forma de columna, de arriba hacia abajo.

#pond {
  display: flex;
justify-content: end;
flex-direction: column;
}

###### Nivel #12
Se utiliza la propiedad justify-content con el valor de space-between para alinear las ranas a lo largo del contenedor con espacios iguales entre ellas, y con la propiedad flex-direction, con el valor column-reverse, para que se posicionen en una columna con el orden invertido al original, es decir, de arriba hacia abajo.

#pond {
  display: flex;
justify-content: space-between;
flex-direction: column-reverse;
}

###### Nivel #13
Se utiliza la propiedad justify-content con valor de center, para poder alinear las ranas en el centro del contenedor, con la propiedad align-items cuyo valor es flex-end, hacemos que se posicionen en el lado inferior, es decir al final del contenedor, y con la propiedad flex-direction, le damos el valor de row-reverse para que las ranas estén de manera horizontal de derecha a izquierda. 

#pond {
  display: flex;
justify-content: center;
flex-direction: row-reverse;
align-items: flex-end;
}

###### Nivel #14
Utilizamos la propiedad order para poder cambiar el orden de posición de un elemento determinado. Sus valores pueden ser tanto números enteros positivos como negativos. En este caso, le damos el valor de 1 para que la rana amarilla cambie de orden con la rana roja. 

#pond {
  display: flex;
}

.yellow {
order: 1
}

###### Nivel #15
Utilizamos la propiedad order para poder cambiar el orden de posición de un elemento determinado. En este caso, le damos el valor de -1 para que la rana roja que se encuentra en la posición 4, pueda llegar a la primera posición. 

#pond {
  display: flex;
}

.red {
order: -1
}

###### Nivel #16
Utilizamos otra propiedad para elementos individuales, que es align-self, que contiene los mismos valores de align-items, que sirve para posicionar los elementos dentro del contenedor de manera vertical. En este caso, le aplicamos esa propiedad a la rana amarilla con el valor flex-end, para que se posicione en la parte inferior del contenedor, es decir al final. 

#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
align-self: flex-end;
}

###### Nivel #17
Se utiliza la propiedad order para cambiar el orden de posicionamiento de las ranas amarillas, de manera que se alinean hacia la izquierda. De igual manera, se utiliza la propiedad align-self con propiedad de flex-end para que se posicione en la parte en la parte inferior del contenedor, es decir en la parte de abajo. 

#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
order: 2;
align-self: flex-end;
}

###### Nivel #18
Utilizamos la propiedad flex-wrap, que permite posicionar a los diversos elementos en una misma línea por default. Con el valor wrap, indicamos que las ranas se ajustarán en varias líneas, de arriba hacia abajo. 

#pond {
  display: flex;
flex-wrap: wrap;
}

###### Nivel #19
Utilizamos la propiedad flex-direction con el valor de column para indicar que las ranas se posicionen en forma de columna, de manera vertical, agregando la propiedad flex-wrap con valor de wrap para que se encuentren divididas en diferentes columnas. 

#pond {
  display: flex;
flex-direction: column;
flex-wrap: wrap;
}

###### Nivel #20
La propiedad flex-flow permite combinar los valores de flex-direction y flex-wrap en uno mismo. En este caso, se utiliza la propiedad flex-flow con los valores de wrap column para lograr que las ranas se puedan ajustar en diferentes columnas. 

#pond {
  display: flex;
flex-flow: wrap column; 
}

###### Nivel #21
Se utiliza la propiedad align-content para controlar el espaciado y la alineación de las líneas de elementos dentro del contenedor cuando hay espacio adicional. Contiene los mismos valores que justify-content, añadiendo el valor de stretch, que permite estirar las líneas para ajustarlas al contenedor. En este caso, contiene la propiedad flex-wrap que permite que las ranas se ajusten en diversas líneas, y con la propiedad align-content, cuyo valor es flex-start, hace que los elementos se alineen en la parte superior del contenedor. 

#pond {
  display: flex;
  flex-wrap: wrap;
align-content: flex-start;
}

###### Nivel #22
Se utiliza la propiedad flex-wrap que permite que las ranas se ajusten en diversas líneas, y con la propiedad align-content, cuyo valor es flex-end, hace que los elementos se alineen en la parte inferior del contenedor. 

#pond {
  display: flex;
  flex-wrap: wrap;
align-content: flex-end;
}

###### Nivel #23
Se utiliza la propiedad flex-wrap que permite que las ranas se ajusten en diversas líneas. La propiedad flex-direction con valor column reverse posiciona los elementos de manera vertical desde abajo hacia arriba. Y con la propiedad align-content, cuyo valor es center, hace que los elementos se alineen en el centro del contenedor.

#pond {
  display: flex;
  flex-wrap: wrap;
flex-direction: column-reverse;
align-content: center;
}

###### Nivel #24
La propiedad justify-content: center alinea los elementos en el centro del contenedor de manera horizontal. Con flex-flow: row wrap-reverse, los elementos se alinean en una fila horizontal, y si estos no caben en una sola fila, deben envolverse en una nueva fila de manera inversa. La propiedad flex-direction: column-reverse establece que las ranas deben alinearse en columnas de abajo hacia arriba. Y con align-content: space-between, se distribuye verticalmente el espacio restante entre las filas de las ranas.

#pond {
  display: flex;
justify-content: center;
flex-flow: row wrap-reverse;
flex-direction: column-reverse;
align-content: space-between;
}





