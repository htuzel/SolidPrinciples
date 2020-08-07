interface Vehicle {
    getStatus(fuel: number) : string;
}

interface GroundVehicle {
    wheels: number;
    steeringWheelDirection: string;
}

interface AirVehicle {
    pilotNumber: number;
}

class Car implements Vehicle, GroundVehicle {
    wheels: number;
    steeringWheelDirection: string;

    constructor(wheels: number, steeringWheelDirection: string) {
        this.wheels = wheels;
        this.steeringWheelDirection = steeringWheelDirection;
    }

    getStatus (fuel: number) {
        return fuel > 5 ? "OK" : "KO"
    }
}

class Helicopter implements Vehicle, AirVehicle {
    pilotNumber: number;

    constructor(pilotNumber: number) {
        this.pilotNumber = pilotNumber;
    }

    getStatus (fuel: number) {
        return fuel > 120 ? "OK" : "KO"
    }

}

const car = new Car(4, "left");
const helicopter = new Helicopter(4);


console.log(car.getStatus(100)); //OK
console.log(helicopter.getStatus(100)); //KO

