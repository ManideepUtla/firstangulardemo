import { Component } from '@angular/core';
import { Atm } from '../model/Atm';
import { AtmService } from '../atm.service';

@Component({
  selector: 'app-createatm',
  templateUrl: './createatm.component.html',
  styleUrl: './createatm.component.css'
})
export class CreateatmComponent {

  cardNumber:string="TestATM"

atm= new Atm('','',new Date,'','')

constructor(private atmservice:AtmService){}
  
 

  createatm(){

    console.log(JSON.stringify(this.atm))
    this.atmservice.createAtm(this.atm).subscribe(
      data=>{
        console.log(JSON.stringify(data))
        this.cardNumber=data.accountNumber;
      }
    )

  }
}
