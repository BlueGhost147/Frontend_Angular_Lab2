import { Component, OnInit } from '@angular/core';
import {imaEmployeesArray} from './ima-employees';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ima-employees',
  templateUrl: './ima-employees.component.html',
  styleUrls: ['./ima-employees.component.scss']
})
export class ImaEmployeesComponent implements OnInit {

  imaEmployeesArray;
  filterFormControl = new FormControl('');

  constructor(private  route: ActivatedRoute) { }

  ngOnInit() {
    const filterParam = this.route.snapshot.paramMap.get('filter');
    this.filterFormControl = new FormControl(filterParam);
    this.filterEmp(filterParam);

    this.filterFormControl.valueChanges.subscribe(
      (newFilterValue: string) => this.filterEmp(newFilterValue)
    );

    this.route.params.subscribe(
      (params: {filter: string}) => this.filterEmp(params.filter)
    );
  }

  private filterEmp(newFilterValue: string) {
      if (newFilterValue) {
        this.imaEmployeesArray = imaEmployeesArray.filter(
          (emp) => {
            return emp.name.toLocaleLowerCase().lastIndexOf(newFilterValue.toLocaleLowerCase()) !== -1 ||
              emp.position.toLocaleLowerCase().lastIndexOf(newFilterValue.toLocaleLowerCase()) !== -1;
          }
        );
      } else {
        this.imaEmployeesArray = imaEmployeesArray;
      }

  }
}
