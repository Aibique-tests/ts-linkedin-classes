/*
1. Create a User class ✅
2. Add a firstName, lastName, and email property ✅
3. Add a get return fullName. ✅
4. Add a method to check if your email param matches the user's current email.✅
*/

class User {
    firstName: string;
    lastName: string;
    private _itMatch: boolean;

    set itMatch(value: string){
        if(this.email === value){
            this._itMatch = true;
        }
    }

    get itMatch(){
        return this.email;
    }

     email: string;

    constructor(firstName:string, lastName:string, email: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email || this.itMatch;
        this.itMatch = email;
    }

    get fullName(){
        return this.firstName.concat(' ').concat(this.lastName);
    }
}

const user = new User('Christopher', 'Jumbo Jimenez', 'tonn.raus@gmail.com');

user.fullName;
user.itMatch = 'tonn.raus@gmail.com';