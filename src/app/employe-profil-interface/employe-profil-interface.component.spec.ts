import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeProfilInterfaceComponent } from './employe-profil-interface.component';

describe('EmployeProfilInterfaceComponent', () => {
  let component: EmployeProfilInterfaceComponent;
  let fixture: ComponentFixture<EmployeProfilInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeProfilInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeProfilInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
