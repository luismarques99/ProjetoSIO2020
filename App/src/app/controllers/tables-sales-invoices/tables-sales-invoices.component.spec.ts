import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesSalesInvoicesComponent } from './tables-sales-invoices.component';

describe('TablesSalesInvoicesComponent', () => {
  let component: TablesSalesInvoicesComponent;
  let fixture: ComponentFixture<TablesSalesInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesSalesInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesSalesInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
