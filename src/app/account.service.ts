import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  private apiUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  createAccount(account:any): Observable<any>{

    console.log('In service '+ JSON.stringify(account))
    const httpOptions = {
      headers: new HttpHeaders({
        'companyname':'Neoteric',
        'Content-Type':  'application/json',  //indicate the media type of the class, it give data of the body(giving)
        'Accept': 'application/json'//expected 
        
      })
    }
    console.log('service'+JSON.stringify(account));

    return this.http.post(this.apiUrl+"createAccount", account,httpOptions);
  }

}
