import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { Withdraw } from './model/Withdraw';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {
  makeWithdraw(withdrawDetails: { accountnumber: string; amount: number; }) {
    throw new Error('Method not implemented.');
  }
  
  private apiUrl = 'http://localhost:8080/api/'; 

  constructor(private http: HttpClient) { }

  withdrawAmount(withdraw: Withdraw): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'companyname': 'Neoteric', 
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      })
    };

    console.log('Service: ' + JSON.stringify(withdraw));

    return this.http.post(this.apiUrl + 'withdraw', withdraw, httpOptions);
  }
}
