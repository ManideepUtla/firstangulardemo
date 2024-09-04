import { Component } from '@angular/core';
import {UserregisterService} from '../userregister.service'
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {


  

  constructor(private UserRegisterService: UserregisterService,){
  }



  userDetails={

    name: '',
    email:'',
    address:'',
    mobile:'',
    age:'',
    gender:''


  };
  register(form:any): void{


    var response= this.UserRegisterService.saveUser(this.userDetails)
    response.subscribe(response=>{
      console.log("From Subscriber of observable"+JSON.stringify(response))

    },error  => {
      console.log(" saved error "+JSON.stringify(error));
    });



    console.log("registration is inprogress"+JSON.stringify(this.userDetails));
  }

}