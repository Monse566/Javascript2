/*const person = {
  name: "Juan",
  age: 26,
  sons: ["Laura", "Diego", "Pedro", "Rosa", "Tomas"],
};

console.log(person.age);
console.log(person["sons"]);

for (const key in person) {
  console.log(key);
}

for (const key in person) {
  console.log(person[key]);
}

for (const son of person.sons) {
  console.log(son);
}

console.log(
  `Hola ${person.name} tienes ${
    person.age
  } años y tus hijos se llaman ${person.sons.join(",")}`
);*/

/*function saludar() {
  console.log("Hola");
}

const saludar = () => console.log("Hola");
const saludarUsuario = (user) => console.log(`Hola ${user}`);

saludarUsuario(`Ale`);
saludarUsuario(`Alejandra`);
saludarUsuario(`Monse`);*/

/*const suma = (num1, num2) => {
  if (num1 == 2) {
    return num1 + num2;
  }
  console.log("Este codigo no se va a ejecutar");
  return num1;
};

console.log(suma(7, 3));

const suma = (num1, num2) => num1 + num2;

let result = suma(3, 6);

console.log(result);*/

/*class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Me llamo ${nombre} ${this.apellido} y tengo ${this.edad} años`;
  }

  saludar() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad}`;
  }
}

const Juan = new Persona("Juan", "Garcia", 25);
const Marta = new Persona("Marta", "Garcia", 35);

console.log(Juan);

console.log(Juan.saludar());

console.log(Marta.saludar());*/

//Arrays SORT

/*let word = "Hola mundo";

console.log(Array.from(word));
console.log(word.split(" "));*/

/*const letters = ["b", "c", "z", "a"];
const numbers = [1, 8, 100, 300, 10];

console.log(letters.sort());
console.log(numbers.sort());

console.log(numbers.sort((a, b) => a - b));*/

//Array FOR EACH

/*const numbers = [12, 25, 47, 84, 98];

numbers.forEach((number) => console.log(number));
numbers.forEach((number, index) =>
  console.log(`${number} esta en la posicion ${index}`)
);

const words = ["HTML", "CSS", "JavaScript", "PHP"];

console.log(words.some((word) => word, length > 10));
console.log(words.every((word) => word, length > 3));

//MAP

const numbers = [12, 25, 47, 84, 98];

numbers.map((number) => console.log(number * 3));

const numbers2 = numbers.map((number) => number * 2);
console.log(numbers2);*/

//FILTER

/*const numbers = [12, 25, 47, 84, 98];

const numbers2 = numbers.filter((number) => number > 40);

console.log(numbers2);*/

//REDUCE

/*const numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce((a, b) => a + b));*/

const users = [
  {
    name: "user1",
    online: true,
  },
  {
    name: "user2",
    online: true,
  },
  {
    name: "user3",
    online: false,
  },
  {
    name: "user4",
    online: true,
  },
  {
    name: "user5",
    online: false,
  },
  {
    name: "user6",
    online: true,
  },
];

const usersOnline = users.reduce((cont, user) => {
  if (user.online) cont++;
  return cont;
}, 0);

console.log(`Hay ${usersOnline} usuarios conectados`);
