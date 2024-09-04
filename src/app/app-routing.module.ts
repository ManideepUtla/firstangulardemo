import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [{
  path:'register',
  component:TemplateDrivenComponentComponent
},{
  path:'forgetpassword',
  component:ForgetpasswordComponent

},
{
  path:'addrestaurant',
  component:RestaurantComponent
},
{
  path:'employee',
  component:EmployeeComponent
},
{
  path:'createaccount',
  component:CreateaccountComponent
},
{
  path:'createatm',
  component:CreateatmComponent
},
{
  path:'withdraw',
  component:WithdrawComponent
},
{ path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //RouterModule only actuall doing module   
  exports: [RouterModule]//transitive dependency
})
export class AppRoutingModule { } // AppRoutingModule depends on RouterModule, it just inform what we will do.
