import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import {HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { OtpFormComponent } from './otp-form/otp-form.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { MaskDirective } from './mask.directive';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RatingComponent } from './rating/rating.component';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { LoansearchComponent } from './loansearch/loansearch.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    OtpFormComponent,
    HeaderComponent,
    ForgetpasswordComponent,
    MaskDirective,
    AddressComponent,
    UserComponent,
    RestaurantComponent,
    RatingComponent,
    EmployeeComponent,
    CreateaccountComponent,
    CreateatmComponent,
    LoginComponent,
    WithdrawComponent,
  
    LoansearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
