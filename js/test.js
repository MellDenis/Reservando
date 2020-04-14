// Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.
var expect = chai.expect;

// Paso 2

describe("Crear un Restaurant", function () {

    it("Verificar que se cree un Restaurant correctamente", function () {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00"], "../img/hamburguesa4.jpg", [7, 9]);
        expect(restaurante.nombre).to.equal("Angelo Restorant");
    });
});

describe("Verificación de la función reservarHorario()", function() {
    
    it("Cuando se reserva un horario, debe eliminarse del arreglo", function() {
         var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", [7, 9]);
         var horariosCompletos = restaurante.horarios.length;
         restaurante.reservarHorario("12:00");
         expect(restaurante.horarios.length).to.equal(horariosCompletos -1);
    });

    it("Cuando se reserva un horario que no posee, el arreglo se mantiene igual", function() {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", [7, 9]);
        var horariosCompletos = restaurante.horarios.length;
        restaurante.reservarHorario("17:00");
        expect(restaurante.horarios.length).to.equal(horariosCompletos);
    });

    it("Cuando se reserva sin ningún horario por parámetro, el arreglo se mantiene igual", function() {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", [7, 9]);
        var horariosCompletos = restaurante.horarios.length;
        restaurante.reservarHorario("");
        expect(restaurante.horarios.length).to.equal(horariosCompletos);
    })
// Verificar el punto sigue después del paso 2
}); 

// Paso 3

describe("Verificación de la función obtenerPuntuacion()", function() {

    it("Verificar que la puntuación obtenida sea correcta",function() {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", [7, 9, 10]);
        expect(restaurante.obtenerPuntuacion()).to.equal(8.7);
    });

    it("Verificar que un Restaurant sin calificación obtenga puntuación cero",function() {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", "");
        expect(restaurante.obtenerPuntuacion()).to.equal(0);
    });
});

// Paso 4

describe("Verificar la función calificar()", function() {

   it("Verificar que una nueva calificación se agregue al arreglo de calificaciones", function() {
        var restaurante = new Restaurant(26, "Angelo Restorant", "Hamburguesas", "Roma", ["12:00", "16:00", "21:00"], "../img/hamburguesa4.jpg", [11]);
        restaurante.calificar(11);
        expect(restaurante.calificaciones).to.eql(0);
   }) ;
});

