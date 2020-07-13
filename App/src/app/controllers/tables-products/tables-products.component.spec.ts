import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesProductsComponent } from './tables-products.component';

describe('TablesProductsComponent', () => {
  let component: TablesProductsComponent;
  let fixture: ComponentFixture<TablesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
