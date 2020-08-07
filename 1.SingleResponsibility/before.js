class Car {

    constructor(model, km) {
        this.model = model;
        this.km = km;
    }

    run () {
        console.log("running");
    }

    changeOil () {
        console.log("changinOil");
    }
}

var car1 = new Car('BMW', 19000);

car1.run();
car1.changeOil(); // it is not this class' responsibility