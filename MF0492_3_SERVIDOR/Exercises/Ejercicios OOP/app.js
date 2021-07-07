/*class Parent {
constructor(first, last, age, gender) {
this.first = first;
this.last = last;
this.cage = age;
this.age = gender;
 }
 hello() {
     alert(`My name is  ${this.first}`);
 }
}

Parent1 = new Parent("John", "Kennedy", 30, "Male")

class Child extends Parent {
}

let child1 = new Child("Jeremy");
child1.hello();


class Child2 extends Parent {
}

let child2 = new Child("Gloria");
child2.hello()
*/


/*class forceUser {
    constructor(name, rank, fightingStyle, allegiance) {
        this.name = name;
        this.rank = rank;
        this.fightingStyle = fightingStyle;
        this.allegiance = allegiance;
    }
    greetings() {
        alert(`I'm ${this.name}`)
    }
*/




/**
 *
 *
 * @class Insecto
 */
 class Insecto {
    constructor(pNumPatas) {
      this.numPatas = pNumPatas;
    }
  
    sonido() {
      console.log("xxxx");
    }
  }
  
  class Abeja extends Insecto {
    #numAlas;
    #numAntenas;
  
    /**
     *
     * @param {number} pNumPatas Número de Patas del Insecto
     * @param {number} pNumAlas Número de Alas
     * @param {string} pNumAntenas Numero de Antenas
     */
    constructor(pNumPatas, pNumAlas, pNumAntenas) {
      super(pNumPatas);
      this.#numAlas = pNumAlas;
      this.#numAntenas = pNumAntenas;
    }
    sonido() {
      console.log("bzzzzz");
    }
  
    get numAlas() {
      return this.#numAlas;
    }
  
    getNumAntenas() {
      return this.#numAntenas;
    }
  
    set numAlas(pNumAlas) {
      this.#numAlas = pNumAlas;
    }
  }
  
  let abeja = new Abeja(6, 4, 2);
  let cucaracha = new Insecto(6);
  
  console.log(abeja.numAlas);
  console.log(`El numero de Patas es ${abeja.numPatas}`);
  console.log(`El Numero Antenas es ${abeja.numAntenas}`);
  console.log(abeja.getNumAntenas());
  console.log(cucaracha.sonido());
  console.log(abeja.sonido());
  abeja.numAlas = 2;
  console.log(abeja.numAlas);