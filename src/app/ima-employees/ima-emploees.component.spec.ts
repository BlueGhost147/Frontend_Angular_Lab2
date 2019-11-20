import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaEmploeesComponent } from './ima-emploees.component';

describe('ImaEmploeesComponent', () => {
  let component: ImaEmploeesComponent;
  let fixture: ComponentFixture<ImaEmploeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImaEmploeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaEmploeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
