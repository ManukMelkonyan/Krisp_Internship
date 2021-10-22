// Create an Employee class. Employee should have: id, firstName, lastName, position,
// salary, workingHours.
// It should have setters and getters for appropriate fields.
// It should have a method: getFullName().
// It should have a method: getAnnularSalary() which should be the total salary of the
// employee within a year.
// It should have a method: raiseSalary(percent), which increases the salary by the given
// percent and returns new salary.

class Employee{
    constructor(id, firstName, lastName, position, salary, workingHours){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }

    get id(){
        return this._id;
    }
    set id(value){
        this._id = value;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName = value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName = value;
    }
    get position(){
        return this._position;
    }
    set position(value){
        this._position = value;
    }
    get salary(){
        return this._salary;
    }
    set salary(value){
        this._salary = value;
    }
    get workingHours(){
        return this._workingHours;
    }
    set workingHours(value){
        this._workingHours = value;
    }

    getFullName(){
        return `${this._firstName} ${this._lastName}`;
    }
    getAnnularSalary(){
        return 12 * this.salary;
    }
    raiseSalary(percent){
        const toAdd = this._salary * percent / 100;
        this._salary += toAdd;
        return toAdd;
    }   
}