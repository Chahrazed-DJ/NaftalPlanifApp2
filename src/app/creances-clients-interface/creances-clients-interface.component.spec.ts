import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreancesClientsInterfaceComponent } from './creances-clients-interface.component';

describe('CreancesClientsInterfaceComponent', () => {
  let component: CreancesClientsInterfaceComponent;
  let fixture: ComponentFixture<CreancesClientsInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreancesClientsInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreancesClientsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
