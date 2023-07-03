import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesInterfaceComponent } from './factures-interface.component';

describe('FacturesInterfaceComponent', () => {
  let component: FacturesInterfaceComponent;
  let fixture: ComponentFixture<FacturesInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
