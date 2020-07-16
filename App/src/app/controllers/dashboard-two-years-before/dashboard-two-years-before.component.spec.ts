import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTwoYearsBeforeComponent } from './dashboard-two-years-before.component';

describe('DashboardTwoYearsBeforeComponent', () => {
  let component: DashboardTwoYearsBeforeComponent;
  let fixture: ComponentFixture<DashboardTwoYearsBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTwoYearsBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTwoYearsBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
