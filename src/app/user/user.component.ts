import { Component, Output, output } from '@angular/core';
import {UserregisterService} from '../userregister.service'
import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   subject=new Subject<string>();
   @Output()
   userNameEmitter : EventEmitter<string> =new EventEmitter();

   constructor(private UserRegisterService: UserregisterService){

  this.subject.subscribe(data=> {
       console.log("from subject subscriber data value "+data);



     })

   }

  userDetails={

    name: '',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''


  };

  successMessage: string='';

   register(form:any): void{
     this.UserRegisterService.emitName(this.userDetails.name);
     this.subject.next("testing subject in angular "+this.userDetails.name);

     this.userNameEmitter.emit(this.userDetails.name);
    var synchResponse = this.UserRegisterService.learnObservable(this.userDetails);


     var response= this.UserRegisterService.saveUser(this.userDetails)
     response.subscribe(response=>{
       console.log("From Subscriber of observable"+JSON.stringify(response))

     },error  => {
       console.log(" saved error "+JSON.stringify(error));
     });



     console.log("registration is inprogress"+JSON.stringify(this.userDetails));
   }



}
