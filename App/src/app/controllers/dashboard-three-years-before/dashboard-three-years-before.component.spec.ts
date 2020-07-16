import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardThreeYearsBeforeComponent } from './dashboard-three-years-before.component';

describe('DashboardThreeYearsBeforeComponent', () => {
  let component: DashboardThreeYearsBeforeComponent;
  let fixture: ComponentFixture<DashboardThreeYearsBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardThreeYearsBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardThreeYearsBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
