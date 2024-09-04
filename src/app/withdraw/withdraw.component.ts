import { Component } from '@angular/core';
import { WithdrawService } from '../withdraw.service';
import { Withdraw } from '../model/Withdraw';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
  withdraw: Withdraw = new Withdraw('', 0); 
  withdrawStatus: string = '';

  constructor(private withdrawService: WithdrawService, private router: Router) { }

  withdrawAmount() {
    console.log(JSON.stringify(this.withdraw));

    this.withdrawService.withdrawAmount(this.withdraw).subscribe(
      (response: any) => {
        
        if (response && response.success) {
          this.withdrawStatus = 'Withdrawal successful!';
          
        } else {
          this.withdrawStatus = 'Withdrawal failed. Please try again.';
        }
      },
      error => {
        console.error('Error during withdrawal', error);
        this.withdrawStatus = 'An error occurred during withdrawal.';
      }
    );
  }
}