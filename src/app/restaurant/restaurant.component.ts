import { Component } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { Rating } from '../model/Rating';
import { Address } from '../model/Address';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  
  restaurant= new Restaurant('',new Address('','','','','',),new Rating(0,''));


  addrestaurant():void{
    console.log("From Restaurant"+JSON.stringify(this.restaurant))
  }
  }




