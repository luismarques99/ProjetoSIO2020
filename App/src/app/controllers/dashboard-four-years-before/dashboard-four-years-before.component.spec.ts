import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFourYearsBeforeComponent } from './dashboard-four-years-before.component';

describe('DashboardFourYearsBeforeComponent', () => {
  let component: DashboardFourYearsBeforeComponent;
  let fixture: ComponentFixture<DashboardFourYearsBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFourYearsBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFourYearsBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
