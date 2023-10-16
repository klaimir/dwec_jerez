// Atributos públicos
class Alumno {

    constructor(id, firstName, lastName, bornDate, eyeColor) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bornDate = bornDate; // "dd-mm-YYYY"
        this.eyeColor = eyeColor;
    }

    // Resta el año de nacimiento al año actual
    getEdad() {
        let currentDate = new Date();
        let splittedBornDate = this.bornDate.split("-");
        return currentDate.getFullYear() - splittedBornDate[2];
    }

    // getter de atributo calculado
    get fullName() {
        return `${this.lastName}, ${this.firstName}`;
    }

    toString() {
        return this.fullName;
    }
}