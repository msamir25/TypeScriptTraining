class Customer3 {
    constructor (private _firstName:string , private _lastName:string){

    }

    get firstName():string{
        return this._firstName;
    }

    set lastName(value:string){
        this._firstName = value;
    }


}

let myCustomer3 = new Customer3(" mohamed " ,"Samir");

console.log(myCustomer3.firstName);