interface Vehicle {
    wheels: number;
    steeringWheelDirection: string;
    getStatus(fuel: number) : string;
}

class Car implements Vehicle {
    wheels: number;
    steeringWheelDirection: string;

    constructor(wheels: number, steeringWheelDirection: string) {
        this.wheels = wheels;
        this.steeringWheelDirection = steeringWheelDirection;
    }

    getStatus (fuel: number) {
        return fuel < 5 ? "OK" : "KO"
    }
}

const car = new Car(4, "left");

console.log(car.getStatus(100)); //OK
