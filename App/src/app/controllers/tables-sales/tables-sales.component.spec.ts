import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesSalesComponent } from './tables-sales.component';

describe('TablesSalesComponent', () => {
  let component: TablesSalesComponent;
  let fixture: ComponentFixture<TablesSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
