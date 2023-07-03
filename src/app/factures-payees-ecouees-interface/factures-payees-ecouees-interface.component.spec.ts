import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesPayeesEcoueesInterfaceComponent } from './factures-payees-ecouees-interface.component';

describe('FacturesPayeesEcoueesInterfaceComponent', () => {
  let component: FacturesPayeesEcoueesInterfaceComponent;
  let fixture: ComponentFixture<FacturesPayeesEcoueesInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesPayeesEcoueesInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesPayeesEcoueesInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
