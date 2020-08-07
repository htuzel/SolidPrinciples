interface Transporter {
    type: string;
    calculatePrice(): number;
}

class Ship implements Transporter {

    public type: string;

    constructor() {
        this.type = "Ship";
    }

    calculatePrice() {
        return 300;
    }
}

class Truck implements Transporter {

    public type: string;

    constructor() {
        this.type = "Truck";
    }

    calculatePrice() {
        return 500;
    }
}

class Plane implements Transporter {

    public type: string;

    constructor() {
        this.type = "Plane";
    }

    calculatePrice() {
        return 1000;
    }
}

class Transportation {

    public transporter: Transporter;
    public volume: number;

    constructor(transporter: Transporter, volume: number) {
        this.transporter = transporter;
        this.volume = volume;
    }

    calculatePrice () {
        return this.transporter.calculatePrice() * this.volume;
    }
}

var shipTransporter = new Ship();
var truckTransporter = new Truck();
var planeTransporter = new Plane();
var transportation1 = new Transportation(shipTransporter, 10);
var transportation2 = new Transportation(truckTransporter, 10);
var transportation3 = new Transportation(planeTransporter, 10);

console.log(transportation1.calculatePrice()); //3000
console.log(transportation2.calculatePrice()); //5000
console.log(transportation3.calculatePrice()); //10000

