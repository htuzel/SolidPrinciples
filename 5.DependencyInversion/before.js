class Car {

    constructor(brand, model, engine) {
        this.brand = brand,
        this.model = model,
        this.engine = engine;
    }

    getInfo() {
        console.log(`${this.brand} ${this.model} ${this.engine.volume} `)
    }

}

class Engine {

    constructor(volume, type) {
        this.volume = volume,
        this.type = type
    }
}

class VWEngine extends Engine {

    constructor() {
        super("1.2", "internal-combustion");
    }
}

class RenaultEngine extends Engine {

    constructor() {
        super("1.6", "diesel");
    }
}

var engine = new RenaultEngine();
var car = new Car('VW', 'Golf', engine);

car.getInfo(); //VW Golf 1.2