export class customer {
   

    constructor (private firstName: string , private lastName:string){

    }

    get _firstName():string{
        return this.firstName;
    }

    set _firstName(value:string){
        this.firstName =value;
    }

    get _lasttName():string{
        return this.lastName;
    }

    set _lastName(value:string){
        this.lastName =value;
    }
}

