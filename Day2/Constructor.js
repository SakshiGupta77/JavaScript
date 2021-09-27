function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
let person = new Person("Sakshi", "Gupta");
console.log(person.getFullName());