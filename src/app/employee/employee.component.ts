import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  student: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/getStuList")
      .subscribe((data) => {
        console.log(data); // Log the data to the console
        this.student = data;
      }, error => {
        console.error('There was an error!', error);
      });
  }
  
}
