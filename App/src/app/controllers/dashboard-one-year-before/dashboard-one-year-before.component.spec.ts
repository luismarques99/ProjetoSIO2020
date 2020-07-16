import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOneYearBeforeComponent } from './dashboard-one-year-before.component';

describe('DashboardOneYearBeforeComponent', () => {
  let component: DashboardOneYearBeforeComponent;
  let fixture: ComponentFixture<DashboardOneYearBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOneYearBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOneYearBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
