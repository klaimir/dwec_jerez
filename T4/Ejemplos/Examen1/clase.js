class Clase {

    // Private
    #alumnos = [];

    constructor(alumnos) {
        // Puedo igualarlos pq va a llamar al setter. Si no tuviera setter, sería una shallow copy
        this.alumnos = alumnos;
    }

    get alumnos() {
        return this.#alumnos;
    }

    // Deep Copy. Sólo válido para alumnos con literal object
    set alumnos(alumnos) {
        let alumnosString = JSON.stringify(alumnos);
        try {
            this.#alumnos = JSON.parse(alumnosString);
        } catch (error) {
            throw new Error("Error al establecer los alumnos");
        }
    }

    // Insertar un alumno comprobando que no existe tu id. En caso contrario, lanza una excepción
    insertAlumno(alumno) {
        let alumnoEncontrado = this.alumnos.find((item) => item.id === alumno.id);
        if (!alumnoEncontrado) {
            this.alumnos.push(alumno);
        } else {
            throw new Error("Existe un alumno con el mismo id");
        }
    }

    // Editar un alumno comprobando que existe su id. En caso contrario, lanza una excepción
    updateAlumno(alumno) {
        let alumnoEncontrado = this.alumnos.find((item) => item.id === alumno.id);
        if (alumnoEncontrado) {
            // Forma manual
            /*
            alumnoEncontrado.firstName = alumno.firstName;
            alumnoEncontrado.lastName = alumno.lastName;
            alumnoEncontrado.age = alumno.ange;
            alumnoEncontrado.eyeColor = alumno.eyeColor;
            */
            for (const key in alumno) {
                if (Object.hasOwnProperty.call(alumno, key)) {
                    alumnoEncontrado[key] = alumno[key];
                }
            }
        } else {
            throw new Error("No existe un alumno con el id indicado");
        }
    }

    // Devuelve el alumno con el id. En caso contrario, undefined
    getAlumno(id) {
        return this.alumnos.find((item) => item.id === id);
    }

    // Elimina elemento con el id indicado. En caso contrario, lanza excepción
    deleteAlumno(id) {
        let alumnoEncontradoIndex = this.alumnos.findIndex((item) => item.id === id);
        if (alumnoEncontradoIndex !== -1) {
            this.alumnos.splice(alumnoEncontradoIndex, 1);
        } else {
            throw new Error("No existe un alumno con el id indicado");
        }
    }

    // Delete con filter
    deleteAlumno2(id) {
        let alumnoEncontrado = this.alumnos.find((item) => item.id === id);
        if (alumnoEncontrado) {
            this.alumnos = this.alumnos.filter((item) => item.id !== id);
        } else {
            throw new Error("No existe un alumno con el id indicado");
        }
    }

    // Promedio con reduce
    getMediaEdad() {
        return this.alumnos.reduce((sumEdad, item) => sumEdad + item.age, 0) / this.alumnos.length;
    }

    //  Ordenar de menor a mayor
    sortByEdad() {
        this.alumnos.sort((a, b) => a.age - b.age);
    }
}