import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentesInterfaceComponent } from './ventes-interface.component';

describe('VentesInterfaceComponent', () => {
  let component: VentesInterfaceComponent;
  let fixture: ComponentFixture<VentesInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentesInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentesInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
