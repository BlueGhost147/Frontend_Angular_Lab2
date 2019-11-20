import { Component, OnInit } from '@angular/core';
import {imaEmployeesArray} from './ima-employees';

@Component({
  selector: 'app-ima-emploees',
  templateUrl: './ima-emploees.component.html',
  styleUrls: ['./ima-emploees.component.scss']
})
export class ImaEmploeesComponent implements OnInit {

  imaEmployeesArray;

  constructor() { }

  ngOnInit() {
    this.imaEmployeesArray = imaEmployeesArray;
    /*
    const firstEmp = this.imaEmployeesArray[0];
    alert(firstEmp.name);*/
  }

}
