import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitVenduEchoueInterfaceComponent } from './produit-vendu-echoue-interface.component';

describe('ProduitVenduEchoueInterfaceComponent', () => {
  let component: ProduitVenduEchoueInterfaceComponent;
  let fixture: ComponentFixture<ProduitVenduEchoueInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitVenduEchoueInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitVenduEchoueInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
