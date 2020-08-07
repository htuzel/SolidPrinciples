class Vehicle {

    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    run () {
        console.log("Running");
    }

    fly () {
        console.log("Flying");
    }
}

class Car extends Vehicle {
    constructor() {
        super();
    }

    fly () {
        console.log("Error");
    }
}

class Helicopter extends Vehicle {
    constructor() {
        super();
    }
}

class Fleet {

    constructor(vehicles, buildings) {
        this.vehicles = vehicles;
    }

    runAll () {
        this.vehicles.forEach(vehicle => {
            vehicle.run();
        });
    }

    flyAll () {
        this.vehicles.forEach(vehicle => {
            if (vehicle instanceof Helicopter) { //We need to check its type to prevent error
                vehicle.fly();
            }
        });
    }
}

var car1 = new Car("VW", "2020");
var car2 = new Car("BMW", "2021");
var hel1 = new Helicopter("Skorsky", "2020");
var vehicles = [car1, car2, hel1];

var fleet = new Fleet(vehicles);
fleet.runAll(); //Running Running Running
fleet.flyAll(); //Flying
