import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesPayeesEncoursInterfaceComponent } from './factures-payees-encours-interface.component';

describe('FacturesPayeesEncoursInterfaceComponent', () => {
  let component: FacturesPayeesEncoursInterfaceComponent;
  let fixture: ComponentFixture<FacturesPayeesEncoursInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesPayeesEncoursInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesPayeesEncoursInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
