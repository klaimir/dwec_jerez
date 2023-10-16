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
        /*
        alumnos.forEach(alumno => {
            this.#alumnos.push(new Alumno(alumno.id, alumno.firstName, alumno.lastName, alumno.bornDate, alumno.eyeColor));
        });
        */
        for (let index = 0; index < alumnos.length; index++) {
            const alumno = alumnos[index];
            this.#alumnos[index] = new Alumno(alumno.id, alumno.firstName, alumno.lastName, alumno.bornDate, alumno.eyeColor);
        }
    }

    // Insertar un alumno que viene en formato literal Object comprobando que no existe tu id. En caso contrario, lanza una excepción
    insertAlumno(alumno) {
        let alumnoEncontrado = this.alumnos.find((item) => item.id === alumno.id);
        if (!alumnoEncontrado) {
            this.alumnos.push(new Alumno(alumno.id, alumno.firstName, alumno.lastName, alumno.bornDate, alumno.eyeColor));
        } else {
            throw new Error("Existe un alumno con el mismo id");
        }
    }

    // Editar un alumno que viene en formato literal Object comprobando que existe su id. En caso contrario, lanza una excepción
    updateAlumno(alumno) {
        let alumnoEncontrado = this.alumnos.find((item) => item.id === alumno.id);
        if (alumnoEncontrado) {
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
        return this.alumnos.reduce((sumEdad, item) => sumEdad + item.getEdad(), 0) / this.alumnos.length;
    }

    //  Ordenar de mayor a menos
    sortByEdad() {
        this.alumnos.sort((a, b) => b.getEdad() - a.getEdad());
    }

    //  Orden alfabetico
    sortByFullName() {
        this.alumnos.sort((a, b) => a.fullName.localeCompare(b.fullName.localeCompare()));
    }
}