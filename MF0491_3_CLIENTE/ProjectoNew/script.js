//Ejercicio 1
console.log("Hola Mundo");

const divJS = document.getElementById("javascript");

// Ejercicio 2
const concatenarStrings = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + " " + cadena2;
  console.log(mensaje.toLowerCase());
};

concatenarStrings("Hola", "Mundo");

// Ejercicio 3
const compararNumeros = () => {
  let num1 = parseInt(prompt("Introduce numero1"));
  let num2 = parseInt(prompt("Introduce numero2"));

  if (num1 === num2) {
    alert(`${num1} es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
  } else {
    alert(`${num1} es menor que ${num2}`);
  }
};

// Ejercicio 4

const rellenarUl = () =>{

}
//Declaro el array con los deportes
const deportes = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];
// Creo un fragmento para añadir los LI que hago
const fragment = document.createDocumentFragment();

//Uso un bucle for porque es un numero limitado de elementos
//Uso un bucleo for of porque iterar todo el array
for (const deporte of deportes) {
  //Para cada item creo un LI
  const itemList = document.createElement("LI");
  //Igualo el contenido del LI a al deporte (String) correspondiente
  itemList.textContent = deporte;
  //Añado el LI al Fragmento
  fragment.appendChild(itemList);
}

// Obtengo el UL donde voy inserlar los LI
const ulEjer4 = document.getElementById("ejercicio4");
//Inserto el fragmento
ulEjer4.appendChild(fragment);

// Ejercicio 5
const rellenarPeliFav = () => {

}

const peliculaFav = {
  title: "Baby Driver",
  director: "Mustang",
  year: 1969,
  duration: 145,
  img: "https://www.nacionrex.com/__export/1513982279509/sites/debate/img/2017/12/22/baby_driver_poster.jpg_458947530.jpg",
  genre: "scifi",
};

const parrafoPelicula = document.createElement("P");
parrafoPelicula.innerHTML = `Mi película favorita es <strong>${peliculaFav.title}</strong> cuyo director es <em>${peliculaFav.director}
</em> su duraccion es <span class="pelicula">${peliculaFav.duration}</span><br>
<img src="${peliculaFav.img}" alt="${peliculaFav.title}">
`;

divJS.appendChild(parrafoPelicula);

rellenarPeliFav()

//Ejercicio 6

class figura {
    constructor(altura, anchura, tipo){
        this.altura = altura;
        this.anchura = anchura;
        this.tipo = tipo
    }

    calculaArea(){
        return this.altura * this.anchura;
    }

    imprimir(){
        return `Soy un ${this.tipo} y tengo una anchura ${this.anchura} y mi altura es ${this.altura}.`;
    }
}

const rectangulo = new figura("rectangulo", 12, 48);

const parrafoObjeto = document.createElement("p");

mensajeObjeto += `mi area es igual a ${rectangulo.calculaArea()}`;


//ejercicio 8

const button = document.getElementById("button");

 button.addEventListener('click', (e)=> {
    compararNumeros();
}) 

