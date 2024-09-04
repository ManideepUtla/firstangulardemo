import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
  
  private apiUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  createAtm(atm:any): Observable<any>{

    console.log('In service '+ JSON.stringify(atm))
    const httpOptions = {
      headers: new HttpHeaders({
        'companyname':'Neoteric',
        'Content-Type':  'application/json',  //indicate the media type of the class, it give data of the body(giving)
        'Accept': 'application/json'//expected 
        
      })
    }
    console.log('service'+JSON.stringify(atm));

    return this.http.post(this.apiUrl+"createAtm", atm,httpOptions);
  }

  validateLogin(atm: any): Observable<any> {
    console.log('In service ' + JSON.stringify(atm));
    const httpOptions = {
      headers: new HttpHeaders({
        'companyname': 'Neoteric',
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post(this.apiUrl + "validateAtm", atm, httpOptions);
  }
}
