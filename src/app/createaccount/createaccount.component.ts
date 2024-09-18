import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';
import { Address } from '../model/Address';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  accountNumber:String="TEST";

  account=new Account('','','',0,'',new Address('','','','',''));

  constructor(private accountServce:AccountService){}
  
 

  createaccount(custaddress:AddressComponent){
    console.log('custaddress'+JSON.stringify(custaddress));

    this.account.address=custaddress.address;

    console.log(JSON.stringify(this.account))
    this.accountServce.createAccount(this.account).subscribe(
      data=>{
        console.log(JSON.stringify(data))
        this.accountNumber=data.accountNumber;
      }
    )

  }

}
