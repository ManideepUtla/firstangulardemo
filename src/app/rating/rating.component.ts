import { Component, Input } from '@angular/core';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  comments = '';

  @Input()
  rating:Rating=new Rating(4,'')

  submitFeedback():void{

  }

}
