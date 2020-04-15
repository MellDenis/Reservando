// Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.
var expect = chai.expect;
var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00"], "../img/hamburguesa4.jpg", [7, 9, 10]);
var listado = new Listado(listadoDeRestaurantes);

// Paso 2

describe("Crear un Restaurant", function () {

    it("Verificar que se cree un Restaurant correctamente", function () {
        expect(restaurante.nombre).to.equal("Angelo Restorant");
    });
});

describe("Verificar función reservarHorario()", function () {



    it("Cuando se reserva un horario, debe eliminarse del arreglo", function () {
        var horariosCompletos = restaurante.horarios.length;
        restaurante.reservarHorario("12:00");
        expect(restaurante.horarios.length).to.equal(horariosCompletos - 1);
    });

    it("Cuando se reserva un horario que no posee, el arreglo se mantiene igual", function () {
        var horariosCompletos = restaurante.horarios.length;
        restaurante.reservarHorario("17:00");
        expect(restaurante.horarios.length).to.equal(horariosCompletos);
    });

    it("Cuando se reserva sin ningún horario por parámetro, el arreglo se mantiene igual", function () {
        var horariosCompletos = restaurante.horarios.length;
        restaurante.reservarHorario("");
        expect(restaurante.horarios.length).to.equal(horariosCompletos);
    })
    // Verificar el punto sigue después del paso 2
});

// Paso 3

describe("Verificar función obtenerPuntuacion()", function () {

    it("Verificar que la puntuación obtenida sea correcta", function () {
        expect(restaurante.obtenerPuntuacion()).to.equal(8.7);
    });

    it("Verificar que un Restaurant sin calificación obtenga puntuación cero", function () {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", "");
        expect(restaurante.obtenerPuntuacion()).to.equal(0);
    });
});

// Paso 4

describe("Verificar función calificar()", function () {

    it("Verificar que una nueva calificación se agregue al arreglo de calificaciones", function () {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", [8]);
        restaurante.calificar(8);
        expect(restaurante.calificaciones).to.eql([8, 8]);
    });

    it("Verificar que al recibir una calificacion inválida, no se agregue al arreglo de calificaciones", function () {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", [1]);
        restaurante.calificar(11);
        expect(restaurante.calificaciones).to.eql([1]);
    });
});

// Paso 5
// Listado

describe("Verificar función buscarRestaurante()", function () {
    it("Se busca Restaurante por Id = 10", function () {
        var restauranteEncontrado = listado.buscarRestaurante(10);
        expect(restauranteEncontrado.id).to.equal(10);
    });

    it("Se busca Restaurante por Id inexistente", function () {
        var restauranteEncontrado = listado.buscarRestaurante(28);
        expect(restauranteEncontrado.id).to.be.undefined;
    });
});

// Paso 6

describe("Verificar función obtenerRestaurantes()", function () {
    it("Se busca Restaurante con datos válidos", function () {
        let restaurant = listado.obtenerRestaurantes("Hamburguesa", "Berlín", "12:00");
        //Esto me va a devolver un Array con un solo resultado.
        expect(restaurant[0].nombre).to.equal("Burgermeister");
    });

    it("Se busca Restaurante con datos inválidos", function () {
        let restaurant = listado.obtenerRestaurantes("Asado", "Berlín", "12:00");
        //Esto me va a devolver un Array con un solo resultado.
        expect(restaurant).to.be.empty;
    });

});