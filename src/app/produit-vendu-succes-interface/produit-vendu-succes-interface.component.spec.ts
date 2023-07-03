import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitVenduInterfaceComponent } from './produit-vendu-succes-interface.component';

describe('ProduitVenduInterfaceComponent', () => {
  let component: ProduitVenduInterfaceComponent;
  let fixture: ComponentFixture<ProduitVenduInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitVenduInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitVenduInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
