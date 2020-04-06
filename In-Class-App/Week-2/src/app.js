var object = {
    name: 'Frank',
    age: 51
};

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isLegal() {
        if (this.age >= 21) {
            console.log(this.name + " is of legal age");
        } else {
            console.log(this.name + " is not of legal age");
        }
    }
}

var frank = new Person('Frank', 51);
frank.isLegal();

var emma = new Person('Emma', 1);
emma.isLegal();