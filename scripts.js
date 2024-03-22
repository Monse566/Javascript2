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

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos =
      "Me llamo ${nombre} ${this.apellido} y tengp ${this.edad} años";
  }

  saludar() {
    return "Hola, me llamo ${this.nombre} y tengo ${this.edad}";
  }
}

const Juan = new Persona("Juan", "Garcia", 25);
const Marta = new Persona("Marta", "Garcia", 35);
