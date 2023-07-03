import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesInterfaceComponent } from './employes-interface.component';

describe('EmployesInterfaceComponent', () => {
  let component: EmployesInterfaceComponent;
  let fixture: ComponentFixture<EmployesInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployesInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
