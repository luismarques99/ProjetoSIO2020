import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCustomersComponent } from './tables-customers.component';

describe('TablesCustomersComponent', () => {
  let component: TablesCustomersComponent;
  let fixture: ComponentFixture<TablesCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
