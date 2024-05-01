Example each concept of OOPS programming technique with an example?
ans:
Encapsulation:
Encapsulation involves bundling the data (attributes or properties) and methods (functions) that operate on the data into a single unit, known as a class. The class serves as a blueprint for creating objects with consistent behavior and state. We encapsulate the internal details of the car object, such as its make, model, and speed, within the class definition.
  ex:
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 10;
    }

    getSpeed() {
        return this.speed;
    }
}

let myCar = new Car("Toyota", "Camry");
myCar.accelerate();
console.log(myCar.getSpeed()); // Output: 10


Abstraction:
Abstraction involves simplifying complex systems by modeling only the relevant aspects and ignoring unnecessary details. We abstract away the internal implementation details of the car object and provide a high-level interface for interacting with it.
ex:
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 10;
    }

    getSpeed() {
        return this.speed;
    }

    displayInfo() {
        return `${this.make} ${this.model} | Speed: ${this.speed} km/h`;
    }
}

let myCar = new Car("Toyota", "Camry");
myCar.accelerate();
console.log(myCar.displayInfo()); // Output: Toyota Camry | Speed: 10 km/h

Inheritance:
Inheritance allows a class (subclass or derived class) to inherit properties and behavior from another class (superclass or base class). We can create a more specialized type of car object, such as a ElectricCar, that inherits properties and methods from the base Car class.
ex:
class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo() {
        return `${super.displayInfo()} | Battery: ${this.batteryCapacity} kWh`;
    }
}

let myElectricCar = new ElectricCar("Tesla", "Model S", 75);
myElectricCar.accelerate();
console.log(myElectricCar.displayInfo()); // Output: Tesla Model S | Speed: 10 km/h | Battery: 75 kWh


Polymorphism:
Polymorphism refers to the ability of objects to take on multiple forms or behaviors based on their context or the type of data they hold. We can demonstrate polymorphism by defining a displayInfo method in both the Car and ElectricCar classes, where the ElectricCar class overrides the method from the base class.
ex:
let myCar = new Car("Toyota", "Camry");
let myElectricCar = new ElectricCar("Tesla", "Model S", 75);

function displayCarInfo(car) {
    console.log(car.displayInfo());
}

displayCarInfo(myCar); // Output: Toyota Camry | Speed: 0 km/h
displayCarInfo(myElectricCar); // Output: Tesla Model S | Speed: 0 km/h | Battery: 75 kWh
