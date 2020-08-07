class Car {

    constructor(model, km) {
        this.model = model;
        this.km = km;
    }

    run () {
        console.log("running");
    }
}

class Mechanic {

    changeOil() {
        console.log("changing oil");
    }
}

var car1 = new Car('BMW', 19000);
var mechanic = new Mechanic();

car1.run();
mechanic.changeOil(); 