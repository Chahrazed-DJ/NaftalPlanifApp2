import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsInterfaceComponent } from './produits-interface.component';

describe('ProduitsInterfaceComponent', () => {
  let component: ProduitsInterfaceComponent;
  let fixture: ComponentFixture<ProduitsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
