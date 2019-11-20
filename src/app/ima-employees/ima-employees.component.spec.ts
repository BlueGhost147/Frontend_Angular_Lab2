import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaEmployeesComponent } from './ima-employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {AppComponent} from '../app.component';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, convertToParamMap} from '@angular/router';



describe('ImaEmployeesComponent', () => {
  let component: ImaEmployeesComponent;
  let fixture: ComponentFixture<ImaEmployeesComponent>;
  const params = new BehaviorSubject<any>({filter: ''});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ ImaEmployeesComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params,
          snapshot: {
            paramMap: convertToParamMap({filter: ''})
          }
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`there should be 37 entries'`, () => {
    expect(component.imaEmployeesArray.length).toBe(37);
  });

  it(`there should be 2 leiter'`, () => {
    params.next({filter: 'leiter'});
    expect(component.imaEmployeesArray.length).toBe(2);
  });
});
