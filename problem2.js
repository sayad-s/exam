function customInstanceOf(obj, constructor) {
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        if (proto == constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks!`);
    }
}

let doggo = new Dog();
console.log(customInstanceOf(doggo, Cat));