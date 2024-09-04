export class Account{
    name: string;
    mobileNumber:string;
    pan:string;
    balance:number;
    accountNumber:string;

    constructor(name:string,mobileNumber:string,pan:string,balance:number,accountNumber:string){
        this.name=name;
        this.mobileNumber=mobileNumber;
        this.pan=pan;
        this.balance=balance;
        this.accountNumber=accountNumber;
    }
}