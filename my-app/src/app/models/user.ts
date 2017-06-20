export class User {
    firstName: string;
    lastName: string;
    email: string;
    age: string;
    id: number;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: string,
        id: number
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.id = id;
    }
}