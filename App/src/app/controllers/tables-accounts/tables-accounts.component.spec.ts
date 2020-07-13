import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesAccountsComponent } from './tables-accounts.component';

describe('TablesAccountsComponent', () => {
  let component: TablesAccountsComponent;
  let fixture: ComponentFixture<TablesAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
