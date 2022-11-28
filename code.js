// Crear clase Persona. Crear variables las privadas edad, nombre y telefono de la clase Persona. Crear gets y sets de cada propiedad. Crear un objeto persona en el main. Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
class Persona {
  constructor (edad, nombre, telefono){
    this._edad
    this._nombre
    this._telefono
  }
// SETTERS
  set edad (edad){
    this._edad = edad;
  }
  set nombre (nombre){
    this._nombre = nombre;
  }
  set telefono (telefono){
    this._telefono = telefono;
  }
// GETTERS
  get edad (){
    return this._edad
  }
  get nombre (){
    return this._nombre
  }
  get telefono (){
    return this._telefono
  }
};

let persona1 = new Persona();
persona1.nombre = "marco";
persona1.edad = -566;
persona1.telefono = 1234567890;
console.log(`${persona1.nombre}\n${persona1.edad}\n${persona1.telefono}`);
