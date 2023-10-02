
## Índice

* [1. Definición del producto](#1-Definición del producto)
* [2. Diseño de la interfaz de usuaria](#2-Diseño de la interfaz de usuaria)
* [3. Testeos de usabilidad](#3-Testeos de usabilidad)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Criterios de aceptación mínimos del proyecto](#6-criterios-de-aceptación-mínimos-del-proyecto)
* [7. Hacker edition](#7-hacker-edition)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Consideraciones para pedir tu Project Feedback](#10-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Definición del producto

PokeFindX es una aplicación para jugadores de Pokémon Go y fans de la serie, que permite visualizar características de los pokémon de las regiones de Kanto y Johto, con el fin
de tomar buenas decisiones al jugar Pokémon Go y otros juegos de la franquicia. Esta app permite filtrar por tres criterios acumulativos: por tipo, por debilidades y por fortalezas, así mismo, darle orden alfabético a las cartas filtradas y buscar por nombre de Pokémon.

## 2. Diseño de la interfaz de usuaria

Para el diseño de la interfaz de usuaria el equipo se basó en la elaboración de historias de usuaria, a partir de conversaciones con jugador@s de Pokémon Go y de los resultados de la investigación previa. Con estas historias se determinaron las características más importantes para l@s jugador@s y los filtros más útiles. Se llegó al siguiente prototipo de baja fidelidad:

![Prot 1](https://github.com/PenLogos/DEV011-data-lovers/blob/main/Prototipo%20de%20baja%20fidelidad%20pantalla%201%20y%20pantalla%20de%20opciones%20de%20filtro.png)
![Prot 2](https://github.com/PenLogos/DEV011-data-lovers/blob/main/Prototipo%20(bf)%20segunda%20pantalla.png)

Tras elaborar este prototipo, se procedió al diseño del de alta en Figma, pensando en la paleta de colores de Pokémon y en una interfaz sencilla y cómoda para la usuaria. Se aplicó mobile First.

![Prot HF, imagen](https://github.com/PenLogos/DEV011-data-lovers/blob/main/Prot.%20alta.png)
[Prot HF](https://www.figma.com/proto/g2wBlwyuuT77O7nmwL8O1r/Prototipo-de-alta-fidelidad?type=design&node-id=3-2&t=xNE7sVgTScXBJgoy-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2)

## 3. Testeos de usabilidad

Al testear el prototipo de alta fidelidad, se encontraron algunos problemas, como:

-Tarjetas pegadas a los bordes
-Alineación de los elementos dentro de la interfaz

Estas observaciones se tomaron en cuenta para la elaboración de la interfaz en el código.