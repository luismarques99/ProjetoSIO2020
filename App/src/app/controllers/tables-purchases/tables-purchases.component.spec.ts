import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesPurchasesComponent } from './tables-purchases.component';

describe('TablesPurchasesComponent', () => {
  let component: TablesPurchasesComponent;
  let fixture: ComponentFixture<TablesPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
