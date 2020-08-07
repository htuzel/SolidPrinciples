class Vehicle {

    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    run () {
        console.log("Running");
    }
}

class Car extends Vehicle {
    constructor() {
        super();
    }
}

class Helicopter extends Vehicle {
    constructor() {
        super();
    }

    fly () {
        console.log("Flying");
    }
}

class Fleet {

    constructor (vehicles) {
        this.cars = [];
        this.helicopters = [];
        this.setVehicles(vehicles)
    }

    setVehicles (vehicles) {
        vehicles.forEach(vehicle => {
            if (vehicle instanceof Helicopter) {
                this.helicopters.push(vehicle);
            } else {
                this.cars.push(vehicle);
            }
        })
    }

    runAll () {
        var vehicles = this.cars.concat(this.helicopters);
        vehicles.forEach(vehicle => {
            vehicle.run();
        });
    }

    flyAll () {
        this.helicopters.forEach(vehicle => { //Don't need a check
            vehicle.fly();
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
