import { Component, OnInit } from '@angular/core';
import {imaEmployeesArray} from './ima-employees';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-ima-emploees',
  templateUrl: './ima-emploees.component.html',
  styleUrls: ['./ima-emploees.component.scss']
})
export class ImaEmploeesComponent implements OnInit {

  imaEmployeesArray;
  filterFormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.imaEmployeesArray = imaEmployeesArray;

    this.filterFormControl.valueChanges.subscribe(
      (newFilterValue: string) => {
        if(newFilterValue) {
          this.imaEmployeesArray = imaEmployeesArray.filter(
            (emp) => {
              return emp.name.toLocaleLowerCase().lastIndexOf(newFilterValue.toLocaleLowerCase()) !== -1;
            }
          );
        } else
        {
          this.imaEmployeesArray = imaEmployeesArray;
        }
      }
    );
  }

}
