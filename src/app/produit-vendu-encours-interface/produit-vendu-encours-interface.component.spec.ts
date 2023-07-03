import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitVenduEncoursInterfaceComponent } from './produit-vendu-encours-interface.component';

describe('ProduitVenduEncoursInterfaceComponent', () => {
  let component: ProduitVenduEncoursInterfaceComponent;
  let fixture: ComponentFixture<ProduitVenduEncoursInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitVenduEncoursInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitVenduEncoursInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
