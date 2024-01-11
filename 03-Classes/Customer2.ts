class Customer2 {
   private _firstName : string;
    _lastName:string;

   get firstName():string{
    return this._firstName;
    }
    set firstName(value:string){
         this._firstName = value;
    }

}


let myCustomer2 = new Customer2();


myCustomer2.firstName = "mo";
myCustomer2._lastName = "Samir";

console.log(myCustomer2.firstName);
console.log(myCustomer2._lastName);