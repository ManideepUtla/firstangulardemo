import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {

  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { } //constructor injection Angular will creates the HttpCLient so we need to call httpclient soo we create constructor 

  forOtp(user: any) : Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'companyname':'Neoteric',
        'Content-Type':  'application/json',  //indicate the media type of the class, it give data of the body(giving)
        'Accept': 'application/json'//expected 
        
      })
    }
    console.log('service'+JSON.stringify(user));

    return this.http.post(this.apiUrl+"otpValidation", user,httpOptions);
  }

}
