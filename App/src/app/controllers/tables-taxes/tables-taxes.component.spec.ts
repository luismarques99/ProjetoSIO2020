import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesTaxesComponent } from './tables-taxes.component';

describe('TablesTaxesComponent', () => {
  let component: TablesTaxesComponent;
  let fixture: ComponentFixture<TablesTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
