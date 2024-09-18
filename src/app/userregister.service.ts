import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  userNameBehaviorSubject=new BehaviorSubject<string>('Neoteric');

  emitName(name:any):void{
    this.userNameBehaviorSubject.next(name);
  }
  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { } //constructor injection Angular will creates the HttpCLient so we need to call httpclient soo we create constructor 

  learnObservable(userDetails: { name: string; email: string; address: string; mobile: string; age: null; gender: string; }):Observable<string>{
    return new Observable<string>( observer=>{
     console.log('Observer executed');
    setTimeout(()=> observer.next('Neoteric'),6000);
     });

  }
  
  saveUser(user: any) : Observable<Object>{
    const httpHeaders = {
      headers: new HttpHeaders({
        'companyname':'Neoteric',
        'Content-Type':  'application/json',  //indicate the media type of the class, it give data of the body(giving)
        'Accept': 'application/json'//expected 
        
      })
    }
    console.log('service'+JSON.stringify(user));

    return this.http.post(this.apiUrl+"saveUser", user,httpHeaders);
  }
}

