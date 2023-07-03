import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsInterfaceComponent } from './clients-interface.component';

describe('ClientsInterfaceComponent', () => {
  let component: ClientsInterfaceComponent;
  let fixture: ComponentFixture<ClientsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
