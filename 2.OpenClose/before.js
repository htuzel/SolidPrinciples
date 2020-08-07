class Transportation {

    constructor(transporter, volume) {
        this.transporter = transporter;
        this.volume = volume;
    }

    calculatePrice () {
        if (this.transporter == 'Truck') {
            return 500 * this.volume;
        } else if (this.transporter == 'Ship') {
            return 300 * this.volume;
        }
    }
}

var transporter1 = new Transportation('Truck', 10);
var transporter2 = new Transportation('Ship', 10);

console.log(transporter1.calculatePrice()); //5000
console.log(transporter2.calculatePrice()); //3000
