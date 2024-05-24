class Ninja {
    constructor(nombre) {
        this.nombre = nombre; //agregar un atributo: nombre
        this.salud = 0;  //agregar un atributo: salud
        this.velocidad = 3;    //agrega un atributo: velocidad - da un valor predeterminado de 3
        this.fuerza = 3; //agrega un atributo: fuerza - da un valor predeterminado de 3
    }

    // Esto debería registrar el nombre de Ninja en la consola
    sayName() {
        console.log(`Mi nombre es ${this.nombre}!`);
    }

    // Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    // Esto debería agregar +10 de salud al Ninja
    drinkSake() {
        this.salud += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

