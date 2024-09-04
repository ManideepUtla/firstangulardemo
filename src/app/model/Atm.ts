export class Atm{
    cardnumber: string;
    pin:string;
    cvv:string;
    expire:Date;
    accountnumber:string;

    constructor(cardnumber:string,pin:string,expire:Date,cvv:string,accountnumber:string){
        this.cardnumber=cardnumber;
        this.pin=pin;
        this.cvv=cvv;
        this.expire=expire;
        this.accountnumber=accountnumber;
    }
}