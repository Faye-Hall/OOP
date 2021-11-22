class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return ("Beep.");
    }
    toString(make, model, year) {
        return (`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
};

let myCar = new Car("Ford", "Focus", 2014);

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;

    }
    revEngine() {
        return ("VROOM!");
    }
}

let myMotorcycle = new Motorcycle("Harley", "Davidson", 2021);

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return ("Sorry not a vehicle!");
        }
        if (this.vehicles.length >= 2) {
            return ("Sorry at capacity!")

        }
        if (vehicle instanceof Vehicle) {
            this.vehicles.push(vehicle);
            return "Vehicle added!"

        }
    }
}

let myGarage = new Garage