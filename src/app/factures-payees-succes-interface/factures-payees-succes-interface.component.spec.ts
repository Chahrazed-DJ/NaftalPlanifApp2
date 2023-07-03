import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesPayeesSuccesInterfaceComponent } from './factures-payees-succes-interface.component';

describe('FacturesPayeesSuccesInterfaceComponent', () => {
  let component: FacturesPayeesSuccesInterfaceComponent;
  let fixture: ComponentFixture<FacturesPayeesSuccesInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesPayeesSuccesInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesPayeesSuccesInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
