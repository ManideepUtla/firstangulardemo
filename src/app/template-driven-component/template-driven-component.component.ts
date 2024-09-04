import { Component, Output, output } from '@angular/core';
import {UserregisterService} from '../userregister.service'
import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitter } from 'stream';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-driven-component.component.html',
  styleUrl: './template-driven-component.component.css'
})
export class TemplateDrivenComponentComponent {

}
